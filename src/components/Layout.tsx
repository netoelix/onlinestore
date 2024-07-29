import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import FixCategory from './FixCategory';

function Layout() {
  return (
    <>
      <Header />
      <FixCategory />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
