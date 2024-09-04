import React, { Suspense } from 'react';
import Lazy from './Lazy';

const TestSuspense = () => {
  return (
    <div>
      <h1>My App</h1>
      {/* Wrap the lazy-loaded component with Suspense */}
      <Suspense fallback={<Loading />}>
        <Lazy />
      </Suspense>
    </div>
  );
};

// Fallback component
const Loading = () => {
  return <div>Loading component...</div>;
};

export default TestSuspense;
