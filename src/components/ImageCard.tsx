import Image from 'next/image';
import MovieProps from '@/types/MovieProps';

const ImageCard = ({ movieObject }: { movieObject: MovieProps }) => {
  const { title, poster_path } = movieObject;
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

  const addToList = () => {
    const list = localStorage.getItem('list');
    if (list) {
      const newList = JSON.parse(list);
      newList.push(movieObject);
      localStorage.setItem('list', JSON.stringify(newList));
    } else {
      const newList = [{ poster_path, title }];
      localStorage.setItem('list', JSON.stringify(newList));
    }
  };
  return (
    <div className="relative drop-shadow shadow-white basis-1/2 lg:basis-1/4 xl:basis-1/5 border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center justify-between h-full">
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
          onClick={addToList}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to List
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
