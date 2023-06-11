'use client';

import { useState } from 'react';
import SearchHub from '@/components/SearchHub';
import MovieDeck from '@/components/MovieDeck';
import MovieProps from '@/types/MovieProps';

export default function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  console.log(movies);
  return (
    <>
      <div className="justify-center">
        <SearchHub handleSearch={setMovies} />
        <MovieDeck movies={movies} />
      </div>
    </>
  );
}
