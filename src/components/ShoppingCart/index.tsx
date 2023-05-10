import type { FC } from 'react';
import type { Food } from '@/assets';
import { foods as foods1 } from '@/assets';

import { Tag } from 'antd-mobile';

import './index.less';
import { useEffect, useRef } from 'react';

const prefixCls = 'app-shopping-cart';

interface ListProps {
  foods: Food[];
}

const ShoppingCart: FC<ListProps> = ({ foods }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ref.current?.scrollTo(0, 0);
    // const dom = document
  }, []);

  return (
    <div ref={ref} className={prefixCls}>
      {foods.map((food) => {
        return (
          <div key={food.key} className={`${prefixCls}-item`}>
            <img src={food.img} alt={food.name} />
            <div className={`${prefixCls}-item-right`}>
              <h3>{food.name}</h3>

              <div className={`${prefixCls}-item-tags`}>
                {food.tags?.map((tag) => (
                  <Tag
                    key={tag}
                    style={{
                      '--text-color': '#d48600',
                      '--background-color': '#fffbe6',
                      '--border-color': '#fff',
                    }}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCart;
