import { useState, useEffect } from 'react';
import Image from 'next/image';
import MovieProps from '@/types/MovieProps';

const ImageCard = ({ movieObject }: { movieObject: MovieProps }) => {
  const { title, poster_path } = movieObject;
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';
  const [isInList, setIsInList] = useState(false);

  const list = localStorage.getItem('list');

  useEffect(() => {
    if (list) {
      const parsedList = JSON.parse(list);
      const movieInList = parsedList.some(
        (movie: MovieProps) => movie.title === title
      );
      setIsInList(movieInList);
    }
  }, [list, title]);

  const toggleList = () => {
    if (list) {
      const newList = JSON.parse(list);
      if (isInList) {
        const filteredList = newList.filter(
          (movie: MovieProps) => movie.title !== title
        );
        localStorage.setItem('list', JSON.stringify(filteredList));
      } else {
        newList.push(movieObject);
        localStorage.setItem('list', JSON.stringify(newList));
      }
      setIsInList(!isInList);
    } else {
      const newList = [{ poster_path, title }];
      localStorage.setItem('list', JSON.stringify(newList));
      setIsInList(true);
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
