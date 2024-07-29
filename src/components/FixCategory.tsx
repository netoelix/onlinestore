import { useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCategoryId } from '../redux/actions/saveCategoryAction';
import Category from './CategoryList';
import { fetchCategories } from '../thunks/requestCategoryThunk';
import { FixCategoryContainer } from '../styles/StyledFixCategory';

function FixCategory() {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const categories = useSelector((state: any) => state.requestApiReducer.categories);
  const error = useSelector((state: any) => state.requestApiReducer.error);
  const navigate = useNavigate();
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
    <FixCategoryContainer>
      <Category
        categories={ categories }
        onCategoryClick={ handleCategoryClick }
      />
    </FixCategoryContainer>
  );
}

export default FixCategory;
