import Image from 'next/image';

const ImageCard = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <div className="flex items-center justify-center rounded-md p-4 bg-gray-700">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={300}
        />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default ImageCard;
