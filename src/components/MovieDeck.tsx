import ImageCard from '@/components/ImageCard';
import MovieProps from '@/types/MovieProps';

export default function MovieDeck({ movies }: { movies: MovieProps[] }) {
  return (
    <div className="container my-10 mx-auto  max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies &&
          movies.map((movie: MovieProps) => (
            <div key={movie.id}>
              <ImageCard movieObject={movie} />
            </div>
          ))}
      </div>
    </div>
  );
}
