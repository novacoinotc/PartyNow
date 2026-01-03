export type Gender = "male" | "female" | "non-binary" | "all";
export type PlanType =
  | "club"
  | "bar"
  | "karaoke"
  | "house-party"
  | "concert"
  | "rooftop"
  | "lounge"
  | "festival"
  | "other";

export type Budget = 1 | 2 | 3 | 4;

export interface User {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  avatar: string;
  bio: string;
  interests: string[];
  verified: boolean;
  rating: number;
  eventsHosted: number;
  eventsAttended: number;
  createdAt: Date;
}

export interface Plan {
  id: string;
  title: string;
  description: string;
  type: PlanType;
  location: {
    name: string;
    address: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  dateTime: Date;
  host: User;
  participants: User[];
  maxParticipants: number;
  minParticipants: number;
  budget: Budget;
  ageRange: {
    min: number;
    max: number;
  };
  genderPreference: Gender;
  tags: string[];
  imageUrl?: string;
  status: "open" | "full" | "cancelled" | "completed";
  createdAt: Date;
}

export interface JoinRequest {
  id: string;
  planId: string;
  userId: string;
  user: User;
  message: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
}

export const PLAN_TYPES: Record<PlanType, { label: string; emoji: string }> = {
  club: { label: "Antro", emoji: "🪩" },
  bar: { label: "Bar", emoji: "🍺" },
  karaoke: { label: "Karaoke", emoji: "🎤" },
  "house-party": { label: "Casa", emoji: "🏠" },
  concert: { label: "Concierto", emoji: "🎸" },
  rooftop: { label: "Rooftop", emoji: "🌃" },
  lounge: { label: "Lounge", emoji: "🛋️" },
  festival: { label: "Festival", emoji: "🎪" },
  other: { label: "Otro", emoji: "✨" },
};

export const GENDER_OPTIONS: Record<Gender, string> = {
  male: "Solo hombres",
  female: "Solo mujeres",
  "non-binary": "No binario",
  all: "Mixto (todos)",
};
