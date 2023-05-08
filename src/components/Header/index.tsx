import type { FC } from 'react';

import { Input } from 'antd-mobile';

import './index.less';
import { useState } from 'react';

const prefixCls = 'app-header';

const Header: FC = () => {
  const [value, setValue] = useState<string>();
  return (
    <div className={prefixCls}>
      <h3>贝贝</h3>
      <Input
        placeholder="输入菜名"
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        onEnterPress={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
};

export default Header;
