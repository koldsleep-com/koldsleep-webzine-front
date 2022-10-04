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
    fetch('http://www.koldsleep.com/webzine/api_webzine_list')
      .then((data) => data.json())
      .then((data) => {
        setData(data[router.query.pageId]);
      });
  }, []);
  return (
    <>
      <Header />
      <Divider />
      <h1>{data?.title}</h1>
      <span>{data?.writer}</span>
      <div dangerouslySetInnerHTML={{ __html: data?.content }} />
      <div>----------------</div>
      <div dangerouslySetInnerHTML={{ __html: data?.writer_info }} />
      <Divider />
      <Link href='/'>목록으로 가기</Link>
    </>
  );
};

export default Detail;
