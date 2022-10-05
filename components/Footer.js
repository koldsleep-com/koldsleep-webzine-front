import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='section__label'>
          <Image
            alt='pin'
            src='/assets/ico_pin.svg'
            width='28px'
            height='28px'
          />
          소개
        </div>
        <div className='introduce'>
          <p>{`<해피구독>은 koldsleep에서 운영하는 HAPPY+SAVE+PROJECT의 일환으로 단기간 연재되는 웹진입니다. 다양한 작가의 우울감과 행복감에 관련한 꽁트 혹은 에세이가 게재됩니다. 매주 금요일 오후 4시, koldsleep 웹사이트에 방문해 보세요.`}</p>
          <p>{`HAPPY+SAVE+PROJECT 의 메인 프로젝트인 <해피포켓>은 현재 개발 중에 있습니다. 일상 생활 중 느껴지는 행복을 저금통에 모으는 활동을 휴대폰 앱으로 편리하게 시작해 보세요. (2022년 연말 공개)`}</p>
          <p>
            {`강북구 4.19거리에 위치한 koldsleep은 예술 언어로 여성, 소수자의
            서사를 생산하고 서로 연결되고자 합니다. 소규모의 예술 프로젝트, 심야
            공연, 전시, 워크숍 등을 진행 중입니다.`}
          </p>
        </div>
      </section>
      <section>
        <div className='section__label'>
          <Image
            alt='pin'
            src='/assets/ico_pin.svg'
            width='28px'
            height='28px'
          />
          크레딧
        </div>
        <div className='credit'>
          <p>
            기획 김미현
            <br />
            디자인 루드너드리드
            <br />
            개발 홍세영 만수킴
            <br />
            주최/주관 koldsleep
            <br />
            강북구 청년도전 프로젝트 2022
            <br />
          </p>
          <p>
            게재된 텍스트의 저작권은 작가에게 있으며 무단 전재와 복제를
            금합니다.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
