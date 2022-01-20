import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Link from 'next/link';

import { AppState } from '../../store';
import { getCartCount } from './helpers';

import styles from './index.module.scss';

type TProps = {
  children: React.ReactNode;
  title: string;
};

const Layout: FC<TProps> = ({ children, title }) => {
  const cart = useSelector((state: AppState) => state.main.cart);
  const count = getCartCount(cart);

  return (
    <div>
      <div className={styles.layoutTitle}>
        <h1>{title}</h1>
        <div className={styles.cartWrapper}>
          <Link href="/cart">
            <ShoppingCartOutlined className={styles.cart} />
          </Link>
          <span className={styles.count}>{count}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
