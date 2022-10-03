import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className='header__side'>! GO KOLDSLEEP</div>
      <div className='header__logo'>
        <span>해피구독</span>
        <Image
          alt='pin'
          src='/assets/ico_star_x.svg'
          width='13px'
          height='13px'
        />{' '}
        <span>HAPPY</span>
        <img alt='pin' src='/assets/ico_star_+.svg' className='save' />{' '}
        <span>SAVE</span>
        <img alt='pin' src='/assets/ico_star_+.svg' className='project' />{' '}
        <span>PROJECT</span>
      </div>
      <div className='header__side'></div>
    </header>
  );
};

export default Header;
