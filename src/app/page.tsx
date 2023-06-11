'use client';

import { useState } from 'react';
import SearchHub from '@/components/SearchHub';
import MovieDeck from '@/components/MovieDeck';
import SearchParams from '@/types/SearchParams';
import useMovies from '@/hooks/useMovies';

const defaultSearchParams: SearchParams = {
  query: '',
  startDate: '',
  endDate: '',
  sortBy: '',
};

export default function Home() {
  const [searchParams, setSearchParams] = useState(defaultSearchParams);
  const movies = useMovies(searchParams);

  if (!movies) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="justify-center">
        <SearchHub handleSearch={setSearchParams}>
          <MovieDeck movies={movies} />
        </SearchHub>
      </div>
    </>
  );
}
