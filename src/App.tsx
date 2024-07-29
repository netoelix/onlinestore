import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ItemList from './components/ItemsList';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/InitialPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/:category" element={ <ItemList /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
