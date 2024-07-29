import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Search from './Search';
import { StyledHeader } from '../styles/StyledHeader';
import FixCategory from './FixCategory';
import hamburguer from '../assets/svg/hamburguer.svg';

function Header() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const handleButtonClick = () => {
    navigate('/');
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledHeader>
      <div className="header">
        <div className="title">
          <button
            onClick={ handleButtonClick }
            className="button-home"
          >
            <h1>Online Store</h1>
          </button>
        </div>
        <Search />
        <div className="zip-code">
          <p>Cep:</p>
        </div>
      </div>
      <div className="line-header">
        <button onClick={ toggleVisibility }>
          <img src={ hamburguer } alt="" />
          {isVisible ? 'Esconder Categorias' : 'Mostrar Categorias'}
        </button>
      </div>
      {isVisible && (
        <div className="under-header">
          <FixCategory />
        </div>
      )}
    </StyledHeader>
  );
}

export default Header;
