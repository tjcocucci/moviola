import Image from 'next/image';

const ImageCard = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          layout='responsive'
          width={500}
          height={300}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default ImageCard;
