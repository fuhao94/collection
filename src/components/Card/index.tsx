import type { FC } from 'react';

import { Rate, Avatar } from 'antd-mobile';
import { foods } from '@/assets';

import './index.less';

const prefixCls = 'list';

const List: FC = () => {
  return (
    <div className={prefixCls}>
      {foods.map((food) => (
        <div className={`${prefixCls}-item`} key={food.key}>
          <img src={food.img} alt={food.name} />
          <h3>{food.name}</h3>

          <div className={`${prefixCls}-item-info`}>
            <Avatar
              style={{ '--size': '24px', borderRadius: '50%' }}
              src={food.avatar || 'https://fuhao94.github.io/blog/avatar.jpg'}
            />
            <span>{food.chef || '小张'}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
