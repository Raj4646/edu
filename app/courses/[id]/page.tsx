"use client"; // Mark this as a client component

import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import {
  selectCourse,
  setCourses,
} from "../../lib/features/courses/courseSlice";
import CourseDetails from "../../../components/CourseDetails";
import { RootState } from "../../lib/store";
import { useRouter } from "next/navigation"; // Usage: App router
import { defaultCourses } from "../../../constants/defaultCourses";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const courses = useAppSelector((state: RootState) => state.courses.courses);

  useEffect(() => {
    dispatch(setCourses(defaultCourses));
    if (params.id) {
      const courseId = parseInt(params.id, 10);
      const selectedCourse =
        courses.find((course) => course.id === courseId) || null;
      dispatch(selectCourse(selectedCourse));
    }
  }, [params.id, courses, dispatch]);

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-40 p-4">
      <div
        onClick={() => router.back()}
        className="cursor-pointer h-[43px] w-[43px] rounded-full border border-solid hover:bg-[#EEF5FF] flex items-center justify-center mb-4">
        <div className="text-[#0069FF]">
          <IoArrowBack size={24} />
        </div>
      </div>
      <CourseDetails />
    </div>
  );
}
