import List from '@/components/List';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ShoppingCart from '@/components/ShoppingCart';
import { useEffect, useState } from 'react';

import type { Food } from '@/assets';

import './index.less';
const prefixCls = 'app';

export default function IndexPage() {
  const [select, setSelect] = useState<Food[]>([]);
  const [tab, setTab] = useState('home');

  // https://www.jianshu.com/p/7c7d54cb1a7e
  useEffect(() => {
    const dom = document.querySelector('#scroll');
    if (dom) {
      // dom.scrollTo(0, 0);
      // dom.addEventListener('scroll', () => {
      //   console.log(dom.scrollTop);
      // });
    }
  }, [tab]);

  return (
    <div className={prefixCls}>
      <Header />

      <div
        id="scroll"
        style={{
          padding: '64px 12px 62px',
          minHeight: '100vh',
          background: tab === 'home' ? '#fff' : 'rgba(10, 27, 57, 0.04)',
          overflowY: 'auto',
        }}
      >
        {tab === 'home' ? (
          <List
            selectIds={select.map((food) => food.key)}
            onSelect={(food) => setSelect([...select, food])}
            onDestroy={(key: number) => {
              const prev = [...select];
              const index = prev.findIndex((food) => food.key === key);
              prev.splice(index, 1);
              setSelect(prev);
            }}
          />
        ) : (
          <ShoppingCart foods={select} />
        )}
      </div>

      <Footer total={select.length} onTabChange={(key) => setTab(key)} />
    </div>
  );
}
