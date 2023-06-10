'use client';

import useSWR from 'swr';
import ImageCard from '@/components/ImageCard';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
}

export default function Home() {
  const [ movies, setMovies ] = useState<MovieProps[]>([]);

  console.log(movies);
  return (
    <>
      <div className="justify-center">
        <SearchBar handleSearch={setMovies} />
        <div className="flex flex-wrap justify-center">
          {movies &&
            movies.map((movie: any) => (
              <ImageCard
                key={movie.id}
                imageUrl={
                  movie.poster_path
                    ? IMAGE_PATH + movie.poster_path
                    : 'no-image.svg'
                }
                title={movie.title}
              />
            ))}
        </div>
      </div>
    </>
  );
}
