import List from '@/components/List';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import './index.less';
const prefixCls = 'app';

export default function IndexPage() {
  return (
    <div className={prefixCls}>
      <Header />
      <List />
      <Footer />
    </div>
  );
}
