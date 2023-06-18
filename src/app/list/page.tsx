'use client';
import MovieDeck from '@/components/MovieDeck';

export default function Home() {
  const array: any = [];

  JSON.parse(localStorage.getItem('list') || '[]').map((item: any) => {
    const { title, poster_path } = item;
    array.push({ title, poster_path });
  });

  return (
    <>
      <h1>My List</h1>

      <MovieDeck movies={array} />
    </>
  );
}
