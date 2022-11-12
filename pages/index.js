import { useEffect, useState } from 'react';
import Image from 'next/image';
import Divider from '../components/Divider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import Link from 'next/link';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://www.koldsleep.com/webzine/api_webzine_list')
      .then((data) => data.json())
      .then((data) => {
        const dataList = [];
        for (const list in data) {
          dataList.push({
            id: Number(list),
            title: data[list].title,
            writer: data[list].writer,
            is_blind: data[list].is_blind,
          });
        }
        setArticles(dataList);
      });
  }, []);
  return (
    <>
      <Header />
      <Divider />
      <article>
        {articles.map((item) => {
          return (
            <Link
              href={item.is_blind !== 'true' ? `/page/${item.id}` : `/`}
              key={item.title}
            >
              <li>
                <div
                  className={
                    item.is_blind === 'true'
                      ? 'article__title blind'
                      : 'article__title'
                  }
                >
                  {item.title}
                </div>
                <div
                  className={
                    item.is_blind === 'true'
                      ? 'article__writer blind'
                      : 'article__writer'
                  }
                >
                  {item.writer}
                </div>
              </li>
            </Link>
          );
        })}
      </article>
      <div className='divider--reverse'>
        <Divider />
      </div>
      <Footer />
      <Divider />
    </>
  );
};

export default HomePage;
