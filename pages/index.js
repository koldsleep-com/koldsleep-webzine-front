import { useEffect, useState } from 'react';
import Image from 'next/image';
import Divider from '../components/Divider';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('http://www.koldsleep.com/webzine/api_webzine_list/')
      .then((response) => response.json())
      .then((data) => {
        const dataList = [];
        for (const list in data) {
          dataList.push({
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
            <li key={item.title}>
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
          );
        })}
      </article>
      <Divider />
      <Footer />
    </>
  );
};

export default HomePage;
