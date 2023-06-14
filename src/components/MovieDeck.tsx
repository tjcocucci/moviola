import ImageCard from '@/components/ImageCard';
import MovieProps from '@/types/MovieProps';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

export default function MovieDeck({ movies }: { movies: MovieProps[] }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
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
  );
}
