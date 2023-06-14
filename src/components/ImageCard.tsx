import Image from 'next/image';

const ImageCard = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <div className="relative basis-1/2 lg:basis-1/4 xl:basis-1/5 border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center justify-between">
      {' '}
      <div className="relative flex-grow-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="responsive"
          width={300}
          height={450}
          objectFit="cover"
          objectPosition="center"
        />
        <div>
          <h3 className="w-full text-m font-bold mb-2 p-4">{title}</h3>
        </div>
      </div>
      <div className="w-full p-4 flex flex-col justify-stretch">
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to List
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
