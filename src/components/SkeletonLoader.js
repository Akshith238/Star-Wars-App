import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonLoader = () => {
  return (
    <div className="w-2/5 h-full bg-black rounded-xl shadow-lg">
      <Skeleton variant="rectangular" width="100%" height={300} animation="wave" style={{ borderRadius: 'inherit' }} />
      <div className="p-4 flex flex-col gap-4">
        <Skeleton variant="text" style={{ backgroundColor: '#374151' }} />
        <Skeleton variant="text" style={{ backgroundColor: '#374151' }} />
        <Skeleton variant="text" style={{ backgroundColor: '#374151' }} />
      </div>
    </div>
  );
};

export default SkeletonLoader;