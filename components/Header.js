import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href='https://www.koldsleep.com'>
        <div className='header__side'>! GO KOLDSLEEP</div>
      </Link>
      <Link href='/'>
        <div className='header__logo'>
          <span className='header__logo--happysubscribe'>해피구독</span>
          <Image
            className='header__logo--x'
            alt='pin'
            src='/assets/ico_star_x.svg'
            width='13px'
            height='13px'
          />{' '}
          <span className='header__logo--happysaveproject'>
            <span>HAPPY</span>
            <img alt='pin' src='/assets/ico_star_+.svg' className='save' />{' '}
            <span>SAVE</span>
            <img
              alt='pin'
              src='/assets/ico_star_+.svg'
              className='project'
            />{' '}
            <span>PROJECT</span>
          </span>
        </div>
      </Link>
      <div className='header__side'></div>
    </header>
  );
};

export default Header;
