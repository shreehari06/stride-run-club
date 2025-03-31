import { v4 as uuidv4 } from "uuid";

const MAX_ANNOUNCEMENTS = 100;

export interface Announcement {
  id: string;
  title: string;
  content: string;
  timestamp: number; // Store timestamp in milliseconds
}

export class AnnouncementService {
  static async getAllAnnouncements(): Promise<Announcement[]> {
    const basePath =
      process.env.NODE_ENV === "production" ? "/stride-run-club" : "";
    const response = await fetch(`${basePath}/data/announcements.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch announcements");
    }
    return response.json();
  }

  static async addAnnouncement(
    newAnnouncement: Omit<Announcement, "id" | "timestamp">,
    writeFileSync: (path: string, data: string) => void,
    announcementsPath: string
  ) {
    if (typeof window !== "undefined") {
      throw new Error(
        "addAnnouncement can only be used in a Node.js environment"
      );
    }

    const announcements = await this.getAllAnnouncements();

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

  static async cleanOldAnnouncements(
    days: number,
    readFileSync: (path: string, encoding: string) => string,
    writeFileSync: (path: string, data: string) => void,
    announcementsPath: string
  ) {
    if (typeof window !== "undefined") {
      throw new Error(
        "cleanOldAnnouncements can only be used in a Node.js environment"
      );
    }

    const announcements = await this.getAllAnnouncements();
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
