import ImageCard from '@/components/ImageCard';
import MovieProps from '@/types/MovieProps';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

export default function MovieDeck({ movies }: { movies: MovieProps[] }) {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
