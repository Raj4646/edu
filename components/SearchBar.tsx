"use client";
import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from "../app/lib/hooks";
import { filterCourses } from '../app/lib/features/courses/courseSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    dispatch(filterCourses(e.target.value));
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search by course name or instructor"
      className="px-4 py-2 text-sm border border-gray-300 rounded-3xl w-full md:w-1/2 lg:w-1/3 mb-6 "
    />
  );
};

export default SearchBar;
