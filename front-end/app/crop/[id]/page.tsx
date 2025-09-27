
'use client';

import { useParams } from 'next/navigation';
import CropDetailPage from '@/app/components/ui/CropDetailPage';
import { crops } from '@/app/components/CropData';

const CropPage = () => {
  const { id } = useParams();
  const crop = crops.find((crop) => crop.id === id);

  if (!crop) {
    return <div>Crop not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <CropDetailPage crop={crop} />
    </div>
  );
};

export default CropPage;
