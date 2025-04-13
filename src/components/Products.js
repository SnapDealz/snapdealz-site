import React from 'react';

export default function Products() {
  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
  <div><img src='/assets/rudraksha-ad.png' alt='Rudraksha' /><p>Rudraksha Mala</p></div>
  <div><img src='/assets/singingbowl-ad.png' alt='Singing Bowl' /><p>Singing Bowl</p></div>
  <div><img src='/assets/diya-ad.png' alt='Diyas' /><p>Decorative Diyas</p></div>
  <div><img src='/assets/jute-bag-ad.png' alt='Jute Bag' /><p>Jute Bag</p></div>
</div>
  );
}