import path from "path";
import { v4 as uuidv4 } from "uuid";
import announcementsData from "../data/announcements.json";

// Global flag to check if the environment is Node.js
const isNodeEnv = typeof window === "undefined";

let fs: typeof import("fs") | null = null;
let ANNOUNCEMENTS_PATH: string;

// Dynamically import `fs` only if running in a Node.js environment
if (isNodeEnv) {
  import("fs").then((module) => {
    fs = module;
  });
  ANNOUNCEMENTS_PATH = path.resolve(__dirname, "../data/announcements.json");
}

const MAX_ANNOUNCEMENTS = 100;

export interface Announcement {
  id: string;
  title: string;
  content: string;
  timestamp: number; // Store timestamp in milliseconds
}

export class AnnouncementService {
  static getAllAnnouncements(): Announcement[] {
    if (isNodeEnv && fs) {
      // Node.js environment: Read from the file system
      const data = fs.readFileSync(ANNOUNCEMENTS_PATH, "utf8");
      return JSON.parse(data);
    } else {
      // Browser environment: Use the imported JSON data
      return announcementsData;
    }
  }

  static addAnnouncement(
    newAnnouncement: Omit<Announcement, "id" | "timestamp">
  ): void {
    if (!isNodeEnv || !fs) {
      throw new Error(
        "addAnnouncement can only be used in a Node.js environment"
      );
    }

    const announcements = this.getAllAnnouncements();

    const newId = uuidv4();
    const timestamp = Date.now();
    const announcement = { id: newId, timestamp, ...newAnnouncement };

    announcements.push(announcement);

    // Enforce MAX_ANNOUNCEMENTS limit
    if (announcements.length > MAX_ANNOUNCEMENTS) {
      announcements.splice(0, announcements.length - MAX_ANNOUNCEMENTS);
    }

    fs.writeFileSync(
      ANNOUNCEMENTS_PATH,
      JSON.stringify(announcements, null, 2)
    );
  }

  static cleanOldAnnouncements(days: number): void {
    if (!isNodeEnv || !fs) {
      throw new Error(
        "cleanOldAnnouncements can only be used in a Node.js environment"
      );
    }

    const announcements = this.getAllAnnouncements();
    const cutoffTimestamp = Date.now() - days * 24 * 60 * 60 * 1000; // cutoff timestamp

    // Filter announcements to keep only those within the cutoff timestamp
    const filtered = announcements.filter(
      (a) => a.timestamp >= cutoffTimestamp
    );

    fs.writeFileSync(ANNOUNCEMENTS_PATH, JSON.stringify(filtered, null, 2));
  }

  static formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  }
}
