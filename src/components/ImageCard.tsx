import Image from 'next/image';
import MovieProps from '@/types/MovieProps';
import { ListContext } from '@/context/listContextProvider';
import { useContext } from 'react';

const ImageCard = ({ movieObject }: { movieObject: MovieProps }) => {
  const { title, poster_path } = movieObject;
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

  const { selectedMovies, setStateAndLocalStorage } = useContext(ListContext);
  const isInList = selectedMovies.find((movie) => movie.id === movieObject.id);

  const toggleList = () => {
    if (isInList) {
      setStateAndLocalStorage(
        selectedMovies.filter((movie) => movie.id !== movieObject.id)
      );
    } else {
      setStateAndLocalStorage([...selectedMovies, movieObject]);
    }
  };

  return (
    <div className="relative drop-shadow shadow-white basis-1/2 lg:basis-1/4 xl:basis-1/5 border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center justify-between h-full opacity-90 hover:opacity-100 hover:scale-105 ">
      <div className="relative flex-grow-0">
        <div className="object-cover object-center drop-shadow-2xl shadow-white">
          <Image
            src={IMAGE_PATH + poster_path}
            alt={title}
            width={300}
            height={450}
          />
        </div>
        <div>
          <h3 className="w-full text-m font-bold p-4">{title}</h3>
        </div>
      </div>
      <div className="w-full p-4 flex flex-col justify-stretch">
        <button
          onClick={toggleList}
          className={`w-full text-white font-bold py-2 px-4 rounded hover:scale-105 hover:cursor-pointer ${
            isInList
              ? 'bg-red-500 hover:bg-red-700'
              : 'bg-blue-500 hover:bg-blue-700'
          }`}
        >
          {isInList ? 'Remove from List' : 'Add to List'}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
