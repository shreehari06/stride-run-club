/* eslint-disable @typescript-eslint/no-require-imports */
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
      fs.writeFileSync,
      announcementsPath
    );

    console.log("Announcement added successfully.");
  } catch (error) {
    console.error("Error adding announcement:", (error as Error).message);
    process.exit(1);
  }
})();
