import SelectedMoviesList from '@/components/SelectedMoviesList';

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1
        className="text-6xl font-bold mb-8 text-gray-800 self-center italic text-blue-700"
        style={{
          textShadow:
            '2px 2px 4px rgba(255, 255, 255, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        My List
      </h1>
      <SelectedMoviesList />
    </div>
  );
}
