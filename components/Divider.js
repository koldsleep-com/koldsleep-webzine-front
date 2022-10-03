import { useEffect, useState } from 'react';
import Image from 'next/image';

const Divider = () => {
  return (
    <div className='divider--wrapper'>
      <div className='divider--side'></div>
      <Image
        alt='pin'
        src='/assets/ico_star_+.svg'
        width='24px'
        height='12px'
      />
      <div className='divider--center'></div>
      <Image
        alt='pin'
        src='/assets/ico_star_+.svg'
        width='24px'
        height='12px'
      />
      <div className='divider--side'></div>
    </div>
  );
};

export default Divider;
