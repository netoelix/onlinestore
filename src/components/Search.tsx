import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchItem } from '../redux/actions/saveCategoryAction';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    const formattedValue = inputValue.replace(/\s/g, '%20');
    dispatch(setSearchItem(formattedValue));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={ inputValue }
        onChange={ handleInputChange }
      />
      <button onClick={ handleSearchClick }>Pesquisar</button>
    </div>
  );
}

export default Search;
