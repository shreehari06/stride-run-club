import { v4 as uuidv4 } from "uuid";
import announcementsData from "../data/announcements.json";

const MAX_ANNOUNCEMENTS = 100;

export interface Announcement {
  id: string;
  title: string;
  content: string;
  timestamp: number; // Store timestamp in milliseconds
}

export class AnnouncementService {
  static getAllAnnouncements(
    readFileSync?: (path: string, encoding: string) => string,
    announcementsPath?: string
  ): Announcement[] {
    if (readFileSync && announcementsPath) {
      // Node.js environment: Read from the file system
      const data = readFileSync(announcementsPath, "utf8");
      return JSON.parse(data);
    } else {
      // Browser environment: Use the imported JSON data
      return announcementsData;
    }
  }

  static addAnnouncement(
    newAnnouncement: Omit<Announcement, "id" | "timestamp">,
    readFileSync: (path: string, encoding: string) => string,
    writeFileSync: (path: string, data: string) => void,
    announcementsPath: string
  ): void {
    if (typeof window !== "undefined") {
      throw new Error(
        "addAnnouncement can only be used in a Node.js environment"
      );
    }

    const announcements = this.getAllAnnouncements(
      readFileSync,
      announcementsPath
    );

    const newId = uuidv4();
    const timestamp = Date.now();
    const announcement = { id: newId, timestamp, ...newAnnouncement };

    announcements.push(announcement);

    // Enforce MAX_ANNOUNCEMENTS limit
    if (announcements.length > MAX_ANNOUNCEMENTS) {
      announcements.splice(0, announcements.length - MAX_ANNOUNCEMENTS);
    }

    writeFileSync(announcementsPath, JSON.stringify(announcements, null, 2));
  }

  static cleanOldAnnouncements(
    days: number,
    readFileSync: (path: string, encoding: string) => string,
    writeFileSync: (path: string, data: string) => void,
    announcementsPath: string
  ): void {
    if (typeof window !== "undefined") {
      throw new Error(
        "cleanOldAnnouncements can only be used in a Node.js environment"
      );
    }

    const announcements = this.getAllAnnouncements(
      readFileSync,
      announcementsPath
    );
    const cutoffTimestamp = Date.now() - days * 24 * 60 * 60 * 1000; // cutoff timestamp

    // Filter announcements to keep only those within the cutoff timestamp
    const filtered = announcements.filter(
      (a) => a.timestamp >= cutoffTimestamp
    );

    writeFileSync(announcementsPath, JSON.stringify(filtered, null, 2));
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
