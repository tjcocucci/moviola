import Image from 'next/image';

const ImageCard = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <div className="w-full p-4 flex">
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center">
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
        </div>
        <div className="p-4 flex flex-col justify-between items-center">
          <h3 className="text-m font-bold mb-2">{title}</h3>
          <div className="flex justify-end">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
