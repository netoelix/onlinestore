import { useNavigate } from 'react-router-dom';
import Search from './Search';
import { StyledHeader } from '../styles/StyledHeader';

function Header() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <StyledHeader>
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
    </StyledHeader>
  );
}

export default Header;
