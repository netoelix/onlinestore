import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchItem } from '../redux/actions/saveCategoryAction';
import { StyledSearch } from '../styles/StyledSearch';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    const formattedValue = inputValue.replace(/\s/g, '%20');
    dispatch(setSearchItem(formattedValue));
    navigate(`/${formattedValue}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={ inputValue }
        onChange={ handleInputChange }
        onKeyDown={ handleKeyDown }
      />
      <button onClick={ handleSearchClick }>Pesquisar</button>
    </StyledSearch>
  );
}

export default Search;
