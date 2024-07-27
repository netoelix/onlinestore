import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Initialpage from './FixCategory';
import { StyledInitialPage } from '../styles/StyledInitialPage';

function Layout() {
  return (
    <>
      <Header />
      <StyledInitialPage>
        <Initialpage />
        <Outlet />
      </StyledInitialPage>
      <Footer />
    </>
  );
}

export default Layout;
