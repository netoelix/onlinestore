/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { FiShoppingCart } from 'react-icons/fi';
import Search from './Search';
import { StyledHeader } from '../styles/StyledHeader';
import FixCategory from './FixCategory';
import hamburguer from '../assets/svg/hamburguer.svg';

function Header() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [cep, setCep] = useState('');
  const [cepData, setCepData] = useState<null | { cep: string,
    logradouro: string, bairro: string, localidade: string, uf: string }>(null);

  const handleButtonClick = () => {
    navigate('/');
  };

  const handleButtonNavigate = () => {
    navigate('/cart');
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleCepChange = (event: any) => {
    setCep(event.target.value);
  };

  const handleCepSearch = async () => {
    try {
      const response = await axios.get(`https://opencep.com/v1/${cep}`);
      setCepData(response.data);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const handleResetCep = () => {
    setCepData(null);
    setCep('');
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
          {cepData ? (
            <div className="search-results">
              <p>
                Logradouro:
                {cepData.logradouro}
              </p>
              <p>
                Bairro:
                {cepData.bairro}
              </p>
              <p>
                Localidade:
                {cepData.localidade}
              </p>
              <p>
                UF:
                {cepData.uf}
              </p>
              <button onClick={ handleResetCep }>Pesquisar outro cep</button>
            </div>
          ) : (
            <>
              <input
                type="text"
                placeholder="Buscar cep..."
                value={ cep }
                onChange={ handleCepChange }
              />
              <button type="button" onClick={ handleCepSearch } className="button-search">
                Pesquisar
              </button>
            </>
          )}
        </div>
      </div>
      <div className="line-header">
        <button onClick={ toggleVisibility }>
          <img src={ hamburguer } alt="" />
          {isVisible ? 'Esconder Categorias' : 'Mostrar Categorias'}
        </button>
        <button
          className="go-to-cart"
          onClick={ handleButtonNavigate }
        >
          <FiShoppingCart />
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
