import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ItemList from './components/ItemsList';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/InitialPage';
import ProducInfo from './components/ProductInfo';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/:category" element={ <ItemList /> } />
          <Route path="/produto/:id" element={ <ProducInfo /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
