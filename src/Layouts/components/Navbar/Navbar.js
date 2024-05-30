import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Navbar.module.scss';

import routes from '~/config/routes';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { DashBoardIcon, UserGroupIcon, ProductIcon, ShopIcon, CartIcon, ChatIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Navbar({ toggleNav, isDesktop }) {
  const { t } = useTranslation();
  const nav = useNavigate();
  const [user, setUser] = useState(null);

  const [adminNavigation, setAdminNavigation] = useState([
    {
      path: '/home',
      icon: <DashBoardIcon className={cx('icon')} />,
      title: t('dashboards.title02'),
      slug: 'home',
    },
    {
      path: '/users',
      icon: <UserGroupIcon className={cx('icon')} />,
      title: t('dashboards.title03'),
      slug: 'users',
    },
    {
      path: '/shop',
      icon: <ShopIcon className={cx('icon')} />,
      title: 'Shop',
      slug: 'shop',
    },
    {
      path: '/products',
      icon: <ProductIcon className={cx('icon')} />,
      title: t('dashboards.title04'),
      slug: 'products',
    },
    {
      path: routes.categories,
      icon: <CategoryOutlinedIcon fontSize="large" className={cx('icon')} />,
      title: 'Thể loại',
      slug: 'categories',
    },
  ]);

  const [shopNavigation, setShopNavigation] = useState([
    {
      path: '/shop/home',
      icon: <DashBoardIcon className={cx('icon')} />,
      title: t('dashboards.title02'),
      slug: 'home',
    },
    {
      path: '/shop/products',
      icon: <ProductIcon className={cx('icon')} />,
      title: t('dashboards.title04'),
      slug: 'products',
    },
    {
      path: '/shop/orders',
      icon: <CartIcon className={cx('icon')} />,
      title: 'Đơn hàng',
      slug: 'orders',
    },
    {
      path: '/shop/chats',
      icon: <ChatIcon className={cx('icon')} />,
      title: 'Tin nhắn',
      slug: 'chats',
    },
  ]);

  const [currentPage, setCurrentPage] = useState('');
  const [navigation, setNavigation] = useState(null);

  useEffect(() => {
    const currentURL = window.location.href;
    const urlParts = currentURL.split('/');
    const lastElement = urlParts[urlParts.length - 1];
    setCurrentPage(lastElement);
  }, [window.location.pathname]);

  useEffect(() => {
    const currentRole = JSON.parse(localStorage.getItem('user'));
    setNavigation(currentRole?.role === 'admin' ? adminNavigation : shopNavigation);
  }, []);

  return (
    <div className={cx('nav-wrapper')}>
      <div className={cx('core')}>
        <h1>{t('dashboards.title01')}</h1>
        {navigation?.map((item, index) => (
          <div
            className={cx('nav-item', { 'current-page': window.location.href.includes(item.slug) })}
            key={index}
            onClick={() => {
              setCurrentPage(item.slug);
              if (!isDesktop) toggleNav();
              nav(item.path);
            }}
          >
            <div className={cx('nav-icon')}>{item.icon}</div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
