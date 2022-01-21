import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';

import Layout from '../components/Layout/index';

import { sm } from '../constants/socialMedia';

import { wrapper } from '../store';
import { fetchGoodsAction } from '../store/thunk';

import styles from '../styles/Home.module.css';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Layout title="BeautyCase.ru">
        <main className={styles.main}>
          <p className={styles.mainImgWrap}>
            <Link href="/goods">
              <img
                className={styles.mainImg}
                src={sm.main}
                alt="баннер с чехлами"
              />
            </Link>
          </p>
          <Link href="/goods">
            <Button className={styles.linkToList} type="link">
              К списку товаров
            </Button>
          </Link>
        </main>
      </Layout>
      <footer className={styles.footer}>
        <div className={styles.socialWrap}>
          <img width={'50px'} src={sm.instagram} alt="instagram" />
          <img width={'50px'} src={sm.vk} alt="vk" />
        </div>
      </footer>
    </div>
  );
}


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchGoodsAction());
    return {
      props: {}
    }
  },
);
