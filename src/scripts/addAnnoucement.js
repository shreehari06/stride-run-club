/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const { AnnouncementService } = require("../src/services/AnnouncementService");

const announcementsPath =
  process.env.ANNOUNCEMENTS_PATH ||
  path.resolve(__dirname, "../public/data/announcements.json");

(async () => {
  try {
    const title = process.env.ANNOUNCEMENT_TITLE;
    const content = process.env.ANNOUNCEMENT_CONTENT;

    if (!title || !content) {
      throw new Error(
        "Both ANNOUNCEMENT_TITLE and ANNOUNCEMENT_CONTENT must be provided."
      );
    }

    console.log("Adding a new announcement...");

    const newAnnouncement = {
      title,
      content,
    };

    await AnnouncementService.addAnnouncement(
      newAnnouncement,
      fs.readFileSync,
      fs.writeFileSync,
      announcementsPath
    );

    console.log("Announcement added successfully.");
  } catch (error) {
    console.error("Error adding announcement:", error);
    process.exit(1);
  }
})();
