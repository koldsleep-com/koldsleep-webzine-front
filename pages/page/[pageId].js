import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Divider from '../../components/Divider';
import Header from '../../components/Header';

const Detail = () => {
  const router = useRouter();
  const [data, setData] = useState({
    title: '',
    writer: '',
    writer_info: '',
    content: '',
    isblind: '',
  });
  useEffect(() => {
    fetch('https://www.koldsleep.com/webzine/api_webzine_list')
      .then((data) => data.json())
      .then((data) => {
        setData(data[router.query.pageId]);
      });
  }, []);
  return (
    <>
      <Header />
      <Divider />
      <article className='article__page'>
        <h1>{data?.title}</h1>
        <span>{data?.writer}</span>
        <section dangerouslySetInnerHTML={{ __html: data?.content }} />
        <div className='article__divider'></div>
        <span>{data?.writer}</span>
        <section dangerouslySetInnerHTML={{ __html: data?.writer_info }} />
        <div className='article__divider--mb'></div>
      </article>
      <div className='divider--reverse article__divider--pc'>
        <Divider />
      </div>
      <Link href='/'>
        <footer className='footer__back'>⏎ 목록으로 가기</footer>
      </Link>
    </>
  );
};

export default Detail;
