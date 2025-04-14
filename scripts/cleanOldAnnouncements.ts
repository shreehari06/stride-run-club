const fs = require("fs");
const path = require("path");
const { AnnouncementService } = require("../src/services/AnnouncementService");

// Debug: List the contents of the public/data directory
const announcementsPath =
  process.env.ANNOUNCEMENTS_PATH ||
  path.resolve(__dirname, "../public/data/announcements.json");

(async () => {
  try {
    const days = Number(process.env.CLEANUP_CUTOFF_DAYS);
    const cutoffTimestamp = Date.now() - days * 24 * 60 * 60 * 1000; // cutoff timestamp

    console.log("Cleaning old announcements older than", days, "days");
    console.log("Cutoff timestamp:", new Date(cutoffTimestamp).toISOString());

    await AnnouncementService.cleanOldAnnouncements(
      days,
      fs.readFileSync,
      fs.writeFileSync,
      announcementsPath
    );

    console.log("Announcement cleaned successfully.");
  } catch (error) {
    console.error("Error cleaning up announcements:", (error as Error).message);
    process.exit(1);
  }
})();
