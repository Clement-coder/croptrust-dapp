
import Image from 'next/image';

interface CropDetailPageProps {
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

const CropDetailPage: React.FC<CropDetailPageProps> = ({ crop }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-96">
        <Image
          src={crop.imageUrl}
          alt={crop.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">{crop.name}</h1>
        <p className="text-xl text-gray-600 mt-2">{crop.price}</p>
        <p className="text-gray-500 text-lg mt-2">{crop.location}</p>
        <div className="flex items-center mt-6">
          <div className="relative h-12 w-12">
            <Image
              src={crop.farmer.avatarUrl}
              alt={crop.farmer.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <p className="ml-4 text-lg text-gray-700">{crop.farmer.name}</p>
        </div>
        <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors duration-300 text-lg font-semibold">
          Buy Now
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Ratings & Reviews</h2>
          <div className="mt-4">
            {/* Placeholder for ratings and reviews */}
            <p className="text-gray-600">No reviews yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetailPage;
