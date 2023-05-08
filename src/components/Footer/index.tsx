import type { FC } from 'react';

import { Badge, TabBar } from 'antd-mobile';
import { AppOutline, UnorderedListOutline } from 'antd-mobile-icons';

import './index.less';
import { useState } from 'react';

const prefixCls = 'app-footer';

const Footer: FC = () => {
  const [tabs, setTabs] = useState(() => [
    {
      key: 'home',
      title: '菜单',
      icon: <AppOutline />,
    },
    {
      key: 'todo',
      title: '已选',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
  ]);
  return (
    <div className={prefixCls}>
      <TabBar>
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
    </div>
  );
};

export default Footer;
