const fs = require("fs");
const path = require("path");
const { AnnouncementService } = require("../src/services/AnnouncementService");

// Debug: List the contents of the current directory
console.log("Current directory:", __dirname);
console.log("Contents of current directory:", fs.readdirSync(__dirname));

// Debug: List the contents of the src/services directory
const servicesPath = path.resolve(__dirname, "../src/services");
console.log("Resolved path for src/services:", servicesPath);
try {
  console.log(
    "Contents of src/services directory:",
    fs.readdirSync(servicesPath)
  );
} catch (err) {
  console.error(
    "Error reading src/services directory:",
    (err as Error).message
  );
}

// Debug: List the contents of the public/data directory
const announcementsPath =
  process.env.ANNOUNCEMENTS_PATH ||
  path.resolve(__dirname, "../public/data/announcements.json");
const dataPath = path.dirname(announcementsPath);
console.log("Resolved path for public/data:", dataPath);
try {
  console.log("Contents of public/data directory:", fs.readdirSync(dataPath));
} catch (err) {
  console.error("Error reading public/data directory:", (err as Error).message);
}

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
