"use client";
import { useAppSelector, useAppDispatch } from "../app/lib/hooks";
import Link from "next/link";
import { selectCourse } from "../app/lib/features/courses/courseSlice";
import { RootState } from "../app/lib/store";
import Image from "next/image";

const CourseList = () => {
  const courses = useAppSelector(
    (state: RootState) => state.courses.filteredCourses
  );
  const dispatch = useAppDispatch();

  const handleSelectCourse = (courseId: number) => {
    const course = courses.find((c) => c.id === courseId) || null;
    dispatch(selectCourse(course));
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <div
          key={course.id}
          className="relative flex flex-col outline outline-2 outline-[#006BFF] hover:shadow-xl rounded-2xl">
          {course.enrollmentStatus ? (
            <div className="absolute top-0 right-0 bg-[#006BFF] py-2 px-6 rounded-tr-2xl rounded-bl-2xl">
              <p className="text-white text-sm font-bold">
                {course.enrollmentStatus}
              </p>
            </div>
          ) : (
            ""
          )}
          <Image
            src={course.thumbnail}
            width={500}
            height={500}
            alt={course.name}
            className="w-full rounded-t-2xl"
            quality={100}

          />
          <div className="p-4">
            <h3 className="text-xl font-bold pb-2 line-clamp-1">{course.name}</h3>
            <p className="text-gray-700 font-light line-clamp-2	">{course.description}</p>
            <p className="text-gray-700 font-light">Duration: {course.duration}</p>
            <p className="text-gray-700 font-light">Instructor: {course.instructor}</p>
            <Link
              href={`/courses/${course.id}`}
              onClick={() => handleSelectCourse(course.id)}
              className="mt-2 flex justify-center py-2 rounded-3xl bg-blue-500 hover:bg-blue-600 transition text-white w-full">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
