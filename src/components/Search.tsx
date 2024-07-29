import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchItem } from '../redux/actions/saveCategoryAction';

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

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={ inputValue }
        onChange={ handleInputChange }
      />
      <button onClick={ handleSearchClick }>Pesquisar</button>
    </div>
  );
}

export default Search;
