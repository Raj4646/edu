"use client";
import React, { useEffect } from "react";
import { useAppDispatch } from "../lib/hooks";
import UserDashboard from "../../components/UserDashboard";
import { setEnrolledCourses } from "../lib/features/courses/courseSlice";
import { Course } from "../../types/course";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Fetch enrolled courses from an API or use hardcoded data for now
    const enrolledCourses: Course[] = [
      {
        id: 1,
        name: "Introduction to React Native",
        instructor: "John Doe",
        description:
          "Learn the basics of React Native development and build your first mobile app.",
        enrollmentStatus: "Open",
        thumbnail: "/thumbnail.png",
        duration: "8 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
        syllabus: [
          {
            week: 1,
            topic: "Introduction to React Native",
            content:
              "Overview of React Native, setting up your development environment.",
          },
          {
            week: 2,
            topic: "Building Your First App",
            content:
              "Creating a simple mobile app using React Native components.",
          },
        ],
        students: [
          { id: 101, name: "Alice Johnson", email: "alice@example.com" },
          { id: 102, name: "Bob Smith", email: "bob@example.com" },
        ],
        completed: false, // Add the completed field
      },
      // Add more enrolled courses if needed
    ];

    dispatch(setEnrolledCourses(enrolledCourses));
  }, [dispatch]);

  return (
    <div>
      <UserDashboard />
    </div>
  );
};

export default Dashboard;
