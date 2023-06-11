import Image from 'next/image';

const ImageCard = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col p-4 rounded-lg overflow-hidden w-64 bg-gray-700">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={200}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default ImageCard;
