import type { FC } from 'react';

import { Avatar, Toast } from 'antd-mobile';
import { AddOutline, MinusOutline } from 'antd-mobile-icons';
import { Food, foods } from '@/assets';

import './index.less';

const prefixCls = 'app-list';

interface ListProps {
  selectIds: number[];
  onSelect: (food: Food) => void;
  onDestroy: (key: number) => void;
}

const List: FC<ListProps> = ({ selectIds, onSelect, onDestroy }) => {
  return (
    <div className={prefixCls}>
      {foods.map((food) => {
        const active = selectIds.includes(food.key);
        return (
          <div className={`${prefixCls}-item`} key={food.key}>
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>

            <div className={`${prefixCls}-item-info`}>
              <div>
                <Avatar
                  style={{ '--size': '24px', borderRadius: '50%' }}
                  src={
                    food.avatar || 'https://fuhao94.github.io/blog/avatar.jpg'
                  }
                />
                <span>{food.chef || '小张'}</span>
              </div>
              <span
                onClick={() => {
                  if (active) {
                    onDestroy(food.key);
                  } else {
                    onSelect(food);
                  }
                  Toast.show({
                    content: `${active ? '删除成功' : '添加成功'}`,
                    position: 'top',
                  });
                }}
                className={`${prefixCls}-item-add ${
                  active ? `${prefixCls}-item-active` : ''
                }`}
              >
                {active ? <MinusOutline /> : <AddOutline />}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
