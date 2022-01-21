import Link from 'next/link';
import { Button, Card } from 'antd';
import { useSelector } from 'react-redux';

import CardMeta from '../../components/CardMeta';

import { AppState } from '../../store';
import { composeOrder } from '../../helpers';


import styles from './index.module.scss';

const Cart = () => {
  const { Meta } = Card;
  const cart = useSelector((state: AppState) => state.main.cart);
  const goods = useSelector((state: AppState) => state.main.data);

  const order = composeOrder(cart, goods);

  return (
    <div className={styles.wrapper}>
      <p>
        <Link href="/goods">
          <Button className={styles.btn} type="link">
            К списку товаров
          </Button>
        </Link>
      </p>
      <div className={styles.cardsWrapper}>
        {cart &&
          cart.map((i) => {
            const product = goods?.find((item) => {
              if (item.id === i.id) {
                return item;
              }
            });

            const metaData = {
              ...product,
              count: i.count,
            };

            return (
              <>
                {product && product.id && (
                  <Card
                    key={i.id}
                    hoverable={false}
                    className={styles.card}
                    cover={<img alt="example" src={product && product.url} />}
                  >
                    <Meta
                      title={<CardMeta product={metaData} />}
                      description={product && product.title}
                    />
                  </Card>
                )}
              </>
            );
          })}
      </div>
      <h2>{`Общее количество: ${(order && order.sum) || 0}(шт.)`}</h2>
      <div className={styles.orderBtnWrapper}>
        <Button>Оформить заказ</Button>
      </div>
    </div>
  );
};
export default Cart;
