import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className='header__side'>! GO KOLDSLEEP</div>
      <div className='header__logo'>
        해피구독{' '}
        <Image
          alt='pin'
          src='/assets/ico_star_x.svg'
          width='13px'
          height='13px'
        />{' '}
        HAPPY{' '}
        <Image
          alt='pin'
          src='/assets/ico_star_+.svg'
          width='24px'
          height='12px'
          className='save'
        />{' '}
        SAVE{' '}
        <Image
          alt='pin'
          src='/assets/ico_star_+.svg'
          width='24px'
          height='12px'
          className='project'
        />{' '}
        PROJECT
      </div>
      <div className='header__side'></div>
    </header>
  );
};

export default Header;
