
import Image from 'next/image';
import Link from 'next/link';

interface CropCardProps {
  crop: {
    id: string;
    name: string;
    price: string;
    location: string;
    imageUrl: string;
    farmer: {
      name: string;
      avatarUrl: string;
    };
  };
}

const CropCard: React.FC<CropCardProps> = ({ crop }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative h-48">
        <Image
          src={crop.imageUrl}
          alt={crop.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{crop.name}</h3>
        <p className="text-gray-600">{crop.price}</p>
        <p className="text-gray-500 text-sm">{crop.location}</p>
        <div className="flex items-center mt-4">
          <div className="relative h-10 w-10">
            <Image
              src={crop.farmer.avatarUrl}
              alt={crop.farmer.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <p className="ml-2 text-gray-700">{crop.farmer.name}</p>
        </div>
        <Link href={`/crop/${crop.id}`} passHref>
          <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CropCard;
