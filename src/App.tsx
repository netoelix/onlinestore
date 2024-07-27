import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import ItemList from './components/ItemsList';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/:category" element={ <ItemList /> } />
      </Route>
    </Routes>
  );
}

export default App;
