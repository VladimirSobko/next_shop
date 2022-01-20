import { useDispatch, useSelector } from 'react-redux';
import { Button, notification } from 'antd';
import Link from 'next/link';

import Layout from '../../components/Layout/index';
import CommonNotification from '../../components/Notification';

import { sm } from '../../constants/socialMedia';
import { AppState } from '../../store';
import { addInCart } from '../../store/slices/main';

import styles from '../goods/case.module.scss';
import classes from '../../styles/Home.module.css';

export default function Goods() {
  const dispatch = useDispatch();
  const goods = useSelector((state: AppState) => state.main);

  const handleAdd = (payload) => {
    dispatch(addInCart(payload));
    CommonNotification('success', 'Товар добавлен в корзину');
  };

  return (
    <Layout title="Чехлы">
      <ul className={styles.list}>
        {goods.data ? (
          goods.data.map((i) => {
            return (
              <div className={styles.card} key={i.id}>
                <Link href={`goods/[id]`} as={`goods/${i.id}`}>
                  <img className={styles.img} src={i.url} alt="чехол" />
                </Link>
                <div className={styles.description}>
                  <p>{i.title}</p>
                  <p className={styles.price}>{`${i.price} руб.`}</p>
                </div>
                <Button onClick={() => handleAdd({ id: i.id })}>
                  + В корзину
                </Button>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
      <footer className={classes.footer}>
        <div className={classes.socialWrap}>
          <img width={'50px'} src={sm.instagram} alt="instagram" />
          <img width={'50px'} src={sm.vk} alt="vk" />
        </div>
      </footer>
    </Layout>
  );
}
