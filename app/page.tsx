"use client"; // Mark this as a client component if using client-specific logic
import Image from "next/image";
import { useEffect } from "react";
import { useAppDispatch } from "./lib/hooks";
import { setCourses } from "./lib/features/courses/courseSlice";
import CourseList from "../components/CourseList";
import SearchBar from "../components/SearchBar";
import { defaultCourses } from "../constants/defaultCourses";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCourses(defaultCourses));
  }, [dispatch]);
  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-40 p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Courses</h1>
      <SearchBar />
      <CourseList />
    </div>
  );
}
