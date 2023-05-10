import type { FC } from 'react';

import { Badge, TabBar } from 'antd-mobile';
import { AppOutline, UnorderedListOutline } from 'antd-mobile-icons';

import './index.less';
import { useState } from 'react';

const prefixCls = 'app-footer';

interface FooterProps {
  total: number;
  onTabChange: (key: string) => void;
}

const Footer: FC<FooterProps> = ({ total, onTabChange }) => {
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
    },
  ]);
  return (
    <div className={prefixCls}>
      <TabBar onChange={(key) => onTabChange(key)}>
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.key === 'todo' && total > 0 && total}
          />
        ))}
      </TabBar>
    </div>
  );
};

export default Footer;
