import { useEffect, useState } from 'react';
import Image from 'next/image';

const Divider = () => {
  return (
    <div className='divider--wrapper'>
      <div className='divider--side'></div>
      <img className='divider--img' alt='star' src='/assets/ico_star_+.svg' />
      <div className='divider--center'></div>
      <img className='divider--img' alt='star' src='/assets/ico_star_+.svg' />
      <div className='divider--side'></div>
      <div className='divider--side--mb'></div>
      <img
        className='divider--img--mb'
        alt='star'
        src='/assets/ico_star_+.svg'
      />
      <div className='divider--side--mb'></div>
    </div>
  );
};

export default Divider;
