"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "../app/lib/hooks";
import { RootState, AppDispatch } from "../app/lib/store";
import { markCourseAsCompleted } from "../app/lib/features/courses/courseSlice";

const UserDashboard = () => {
  const dispatch = useAppDispatch<AppDispatch>();
  const enrolledCourses = useAppSelector(
    (state: RootState) => state.courses.enrolledCourses
  );

  const handleMarkAsCompleted = (courseId: number) => {
    dispatch(markCourseAsCompleted(courseId));
  };

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-40 p-4">
      <h1 className="text-xl font-bold mb-4 text-center">My Courses</h1>
      <div className="grid grid-cols-1 gap-4">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="p-4 border border-gray-300 rounded">
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-bold mt-2">{course.name}</h3>
            <p className="text-gray-700">Instructor: {course.instructor}</p>
            <p className="text-gray-700">Due Date: {course.duration}</p>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    70%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: "70%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            {!course.completed && (
              <button
                onClick={() => handleMarkAsCompleted(course.id)}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Mark as Completed
              </button>
            )}
            {course.completed && (
              <button disabled className="mt-2 px-4 py-2 bg-gray-500 text-white rounded">
                Completed
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
