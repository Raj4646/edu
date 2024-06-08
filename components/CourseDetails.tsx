"use client";
import Image from "next/image";
import { useAppSelector } from "../app/lib/hooks";
import { RootState } from "../app/lib/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CourseDetails = () => {
  const selectedCourse = useAppSelector(
    (state: RootState) => state.courses.selectedCourse
  );
  if (!selectedCourse) {
    return <div>No course found.</div>;
  }

  return (
    <div>
      <h1 className="text-5xl my-4 text-center pb-4">{selectedCourse.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-2xl font-light pb-4">
            {selectedCourse.description}
          </p>
          <div className="">
            <p>
              <strong>Instructor:</strong> {selectedCourse.instructor}
            </p>
            <p>
              <strong>Duration:</strong> {selectedCourse.duration}
            </p>
            <p>
              <strong>Schedule:</strong> {selectedCourse.schedule}
            </p>
            <p>
              <strong>Location:</strong> {selectedCourse.location}
            </p>
            <p>
              <strong>Prerequisites:</strong>{" "}
              {selectedCourse.prerequisites.join(", ")}
            </p>
            <p>
              <strong>Enrollment Status:</strong>{" "}
              {selectedCourse.enrollmentStatus}
            </p>
          </div>
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-3xl  my-4">
                Syllabus
              </AccordionTrigger>
              <AccordionContent>
                {selectedCourse.syllabus.map((week) => (
                  <p className="pb-2 text-base" key={week.week}>
                    <strong>Week {week.week}:</strong> <br /> {week.topic} -{" "}
                    {week.content}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* <h2 className="text-3xl font-bold my-4">Syllabus</h2>
          <ul className="text-xl">
            {selectedCourse.syllabus.map((week) => (
              <li className="pb-2" key={week.week}>
                <strong>Week {week.week}:</strong> <br /> {week.topic} -{" "}
                {week.content}
              </li>
            ))}
          </ul> */}
          {/* <h2 className="text-xl font-bold mt-4">Students</h2>
          <ul>
            {selectedCourse.students.map((student) => (
              <li key={student.id}>
                {student.name} ({student.email})
              </li>
            ))}
          </ul> */}
        </div>
        <div className="order-first	md:order-none">
          <Image
            src={selectedCourse.thumbnail}
            width={500}
            height={500}
            alt={selectedCourse.name}
            className="w-full rounded-2xl"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
