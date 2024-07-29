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
        <button
          onClick={ handleButtonClick }
          className="button-home"
        >
          <h1>Online Store</h1>
        </button>
      </div>
      <Search />
      <div>
        <p>Cep:</p>
      </div>
    </StyledHeader>
  );
}

export default Header;
