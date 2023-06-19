'use client';

import { useState } from 'react';
import SearchHub from '@/components/SearchHub';
import MovieDeck from '@/components/MovieDeck';
import SearchParams from '@/types/SearchParams';
import useMovies from '@/hooks/useMovies';
import MovieProps from '@/types/MovieProps';

const defaultSearchParams: SearchParams = {
  query: '',
  startDate: null,
  endDate: null,
  sortBy: '',
};

export default function Home() {
  const [searchParams, setSearchParams] = useState(defaultSearchParams);
  const movies: MovieProps[] = useMovies(searchParams) ?? [];

  return (
    <>
      <SearchHub handleSearch={setSearchParams}>
        <div className="w-full h-px bg-white"></div>
        {movies.length === 0 && (
          <div className="text-3xl my-5 font-bold mb-8 text-gray-700 self-center italic text-blue-700">
            Loading...
          </div>
        )}
        <MovieDeck movies={movies} />
      </SearchHub>
    </>
  );
}
