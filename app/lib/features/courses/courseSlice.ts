import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../../../types/course";
interface CourseState {
  courses: Course[];
  filteredCourses: Course[];
  selectedCourse: Course | null;
  enrolledCourses: Course[];
}

const initialState: CourseState = {
  courses: [],
  filteredCourses: [],
  selectedCourse: null,
  enrolledCourses: [],
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action: PayloadAction<Course[]>) {
      state.courses = action.payload;
      state.filteredCourses = action.payload;
    },
    selectCourse(state, action: PayloadAction<Course | null>) {
      state.selectedCourse = action.payload;
    },
    filterCourses(state, action: PayloadAction<string>) {
      const query = action.payload.toLowerCase();
      state.filteredCourses = state.courses.filter(
        (course) =>
          course.name.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query)
      );
    },
    markCourseAsCompleted(state, action: PayloadAction<number>) {
      const courseIndex = state.enrolledCourses.findIndex(
        (course) => course.id === action.payload
      );
      if (courseIndex !== -1) {
        state.enrolledCourses[courseIndex].completed = true;
      }
    },
    setEnrolledCourses(state, action: PayloadAction<Course[]>) {
      state.enrolledCourses = action.payload;
    },
  },
});

export const { setCourses, selectCourse, filterCourses, markCourseAsCompleted, setEnrolledCourses } = courseSlice.actions;
export default courseSlice.reducer;