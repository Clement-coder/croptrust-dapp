
import Image from 'next/image';

interface CropDetailPageProps {
  crop: {
    id: string;
    name: string;
    price: string;
    location: string;
    imageUrl: string;
    description: string;
    farmer: {
      name: string;
      avatarUrl: string;
    };
  };
}

const reviews = [
  {
    id: 1,
    author: 'Jane Doe',
    rating: 5,
    comment: 'These tomatoes were the best I have ever had! So fresh and flavorful.',
    imageUrl: '/reviewer-1.jpg',
  },
  {
    id: 2,
    author: 'John Smith',
    rating: 4,
    comment: 'Really good quality, but a bit pricey.',
    imageUrl: '/reviewer-2.jpg',
  },
];

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
          <h2 className="text-2xl font-bold text-gray-800">Description</h2>
          <p className="text-gray-600 mt-4">{crop.description}</p>
        </div>
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800">Ratings & Reviews</h2>
          <div className="mt-4 space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-t pt-6">
                <div className="flex items-start mb-2">
                  <div className="relative h-10 w-10 mr-4">
                    <Image
                      src={review.imageUrl}
                      alt={review.author}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetailPage;
