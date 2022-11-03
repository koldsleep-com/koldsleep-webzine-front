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
          <p>{`<해피구독>은 6주간 연재되는 HAPPY+SAVE+PROJECT 웹진입니다. 우울감과 행복감에 관련한 짧은 글이 공개됩니다. 그들의 정체를 추측해 보세요. 금요일 오후 4시에 찾아와 주세요.`}</p>
          <p>{`올해 12월 초 <해피저금> 앱이 출시됩니다. HAPPY+SAVE+PROJECT와 함께 작은 행복의 순간들을 모으고 기억하세요.`}</p>
          <p>
            {`koldsleep은 예술 언어로 여성, 소수자의 서사를 생산하고 서로 연결되고자 합니다. HAPPY+SAVE+PROJECT, 전시, 워크숍, 수상한 심야 공연 등을 만듭니다.`}
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
