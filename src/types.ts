export interface Pastor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  quote?: string;
  responsibilities?: string[];
}

export interface ServiceSchedule {
  id: string;
  day: string;
  program: string;
  time: string;
  description: string;
  iconName: string;
}

export interface AltarNight {
  id: string;
  groupName: string;
  days: string;
  time: string;
  audience: string;
  description: string;
  scriptureRef?: string;
}

export interface AnnualEvent {
  id: string;
  title: string;
  dates: string;
  theme?: string;
  durationDetails?: string;
  description: string;
  bgGradient: string;
  countdownDate: string; // ISO date or simple string
}

export interface Ministry {
  id: string;
  name: string;
  leader: string;
  description: string;
  focus: string[];
  schedule: string;
  email: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imagePath: string;
  description: string;
  date?: string;
}

export interface PrayerRequest {
  id: string;
  name: string;
  request: string;
  date: string;
  intercessionsCount: number;
  hasIntercededByUser?: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

export interface Donation {
  id: string;
  name: string;
  amount: number;
  category: "Tithe" | "Thanksgiving" | "Revival Mission" | "Community Aid" | "General";
  date: string;
  note?: string;
}
