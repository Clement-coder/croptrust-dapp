
'use client';

import { useParams } from 'next/navigation';
import CropDetailPage from '@/app/components/ui/CropDetailPage';

const CropPage = () => {
  const { id } = useParams();

  // In a real application, you would fetch the crop data based on the id.
  // For now, we'll use some placeholder data.
  const crop = {
    id: id as string,
    name: 'Fresh Tomatoes',
    price: '$2.99 / lb',
    location: 'California, USA',
    imageUrl: '/tomatoes.jpg', // Replace with a real image path
    farmer: {
      name: 'John Doe',
      avatarUrl: '/farmer-avatar.png', // Replace with a real image path
    },
  };

  return (
    <div className="container mx-auto py-8">
      <CropDetailPage crop={crop} />
    </div>
  );
};

export default CropPage;
