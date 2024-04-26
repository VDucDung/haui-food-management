import React from 'react';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import item1 from '~/assets/images/dashboard/ic_glass_bag.png';
import item2 from '~/assets/images/dashboard/ic_glass_users.png';
import item3 from '~/assets/images/dashboard/ic_glass_buy.png';
import item4 from '~/assets/images/dashboard/ic_glass_message.png';

import BarChart from '~/components/Charts/BarChart';
import PieChart from '~/components/Charts/PieChart';

const cx = classNames.bind(styles);

const data = [
  { imgUrl: item1, data: '714k', name: 'Weekly Sales' },
  { imgUrl: item2, data: '2m', name: 'New Users' },
  { imgUrl: item3, data: '1.2m', name: 'Item  Orders' },
  { imgUrl: item4, data: '2.3k', name: 'Messages' },
];

const DashBoard = () => {
  return (
    <div className={cx('dashboard')}>
      <h1>Hi welcome back 👋</h1>
      <div className={cx('dashboard--pape')}>
        {data.map((item, index) => {
          return (
            <div className={cx('dashboard--pape--item')}>
              <img src={item.imgUrl} alt="img" style={{ width: '64px', height: '64px' }} />
              <div className={cx('dashboard--pape--description')}>
                <h2>{item.data}</h2>
                <h3>{item.name}</h3>
              </div>
            </div>
          );
        })}

        <div className={cx('dashboard--pape--chart-column')}>
          <h5>Website visits</h5>
          <p>+43% than last year</p>
          <div className={cx('bar-chart')}>
            <BarChart />
          </div>
        </div>
        <div className={cx('dashboard--pape--chart-circle')}>
          <div>
            <h5>Current visit</h5>
          </div>
          <div className={cx('pie-chart')}>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;