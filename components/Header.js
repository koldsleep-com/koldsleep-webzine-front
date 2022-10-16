import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className='header__side'>! GO KOLDSLEEP</div>
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
      <div className='header__side'></div>
    </header>
  );
};

export default Header;
