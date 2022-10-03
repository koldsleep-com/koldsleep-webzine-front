import { useEffect, useState } from 'react';
import Image from 'next/image';
import Divider from '../components/Divider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get('http://www.koldsleep.com/webzine/api_webzine_list')
      .then((data) => {
        const dataList = [];
        for (const list in data.data) {
          dataList.push({
            title: data.data[list].title,
            writer: data.data[list].writer,
            is_blind: data.data[list].is_blind,
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
