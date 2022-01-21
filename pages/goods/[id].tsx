import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

import Layout from '../../components/Layout/index';
import CommonNotification from '../../components/Notification';

import { AppState } from '../../store';

import { addInCart } from '../../store/slices/main';

import styles from './case.module.scss';

const Case = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();

  const goods = useSelector((state: AppState) => state.main.data);

  const choisedCase =
    query && goods && goods.find((item) => {
      if (item.id === +query.id) {
        return item;
      }
    });

  const handleAdd = (payload) => {
    dispatch(addInCart(payload));
    CommonNotification('success', 'Товар добавлен в корзину');
  };

  return (
    <>
      <Layout title={(choisedCase && choisedCase.title) || ''}>
        {choisedCase ? (
          <div className={styles.cardWrap}>
            <div className={styles.imgWrap}>
              <img
                width={400}
                height={400}
                src={choisedCase.url}
                alt="чехол для айфона"
              />
              <Button
                onClick={() => handleAdd({ id: choisedCase.id })}
                className={styles.cardBtn}
                type="primary"
              >
                + В корзину
              </Button>
              <hr className={styles.line} />
              <p className={styles.description}>{choisedCase.description}</p>
            </div>
            <div className={styles.goBack}>
              <Link href="/goods">
                <a>Вернуться к списку</a>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <p>Страница с данным товаром отсутствует</p>
            <Link href="/goods">
              <a>Вернуться к списку</a>
            </Link>
          </>
        )}
      </Layout>
    </>
  );
};

export default Case;
