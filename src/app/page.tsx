'use client';

import useSWR from 'swr';
import ImageCard from '@/components/ImageCard';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';


export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('api/movies', fetcher);

  if (error) {
    return <div>Error fetching movies</div>;
  }

  if (!data) {
    return <div>Loading movies...</div>;
  }

  return (
    <>
      {data.map((movie: any) => (
        <ImageCard
          key={movie.id}
          imageUrl={movie.poster_path?IMAGE_PATH + movie.poster_path:'no-image.svg'}
          title={movie.title}
        />
      ))}
      ;
    </>
  );
}
