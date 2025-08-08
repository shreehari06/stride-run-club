export interface User {
  uid: string;
  email: string;
  name: string;
  phone?: string;
  bio?: string;
  profilePicture?: string;
  role: "member" | "admin";
  joinedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  maxParticipants?: number;
  registrations: string[]; // user IDs
  createdBy: string; // admin ID
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  message: string;
  timestamp: Date;
}

export interface Chat {
  eventId: string;
  messages: ChatMessage[];
}

export type PageType = "home" | "events" | "chat" | "leaderboard" | "profile";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}
