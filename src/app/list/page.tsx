'use client';
import MovieDeck from '@/components/MovieDeck';

export default function Home() {
  const array: any = [];

  JSON.parse(localStorage.getItem('list') || '[]').map((item: any) => {
    const { title, poster_path } = item;
    array.push({ title, poster_path });
  });

  return (
    <div className="flex flex-col">
      <h1
        className="text-6xl font-bold mb-8 text-gray-800 self-center italic text-blue-800"
        style={{
          textShadow:
            '2px 2px 4px rgba(255, 255, 255, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        My List
      </h1>
      <MovieDeck movies={array} />
    </div>
  );
}
