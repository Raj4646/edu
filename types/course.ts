export interface Syllabus {
  week: number;
  topic: string;
  content: string;
}

export interface Student {
  id: number;
  name: string;
  email: string;
}

export interface Course {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: "Open" | "Closed" | "In Progress";
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: Syllabus[];
  students: Student[];
  completed?: boolean; // Add the completed field
}
