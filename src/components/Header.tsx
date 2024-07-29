import { useNavigate } from 'react-router-dom';
import Search from './Search';

function Header() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <header>
      <div>
        <h1>Online Store</h1>
      </div>
      <div>
        <button
          onClick={ handleButtonClick }
          className="button-home"
        >
          Pagina Inicial
        </button>
      </div>
      <Search />
    </header>
  );
}

export default Header;
