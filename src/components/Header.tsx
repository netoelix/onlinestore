import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Search from './Search';
import { setCategoryId } from '../redux/actions/saveCategoryAction';
import { fetchCategories } from '../thunks/requestCategoryThunk';
import Category from './CategoryList';
import { StyledHeader } from '../styles/StyledHeader';

function Header() {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const categories = useSelector((state: any) => state.requestApiReducer.categories);
  const error = useSelector((state: any) => state.requestApiReducer.error);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId: string) => {
    dispatch(setCategoryId(categoryId));
    navigate(`/${categoryId}`);
  };

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }
  return (
    <StyledHeader>
      <div>
        <h1>Online Store</h1>
      </div>
      <div>
        <button onClick={ handleButtonClick }>Pagina Inicial</button>
      </div>
      <div>
        <Category categories={ categories } onCategoryClick={ handleCategoryClick } />
      </div>
      <div>
        <Search />
      </div>
    </StyledHeader>
  );
}

export default Header;
