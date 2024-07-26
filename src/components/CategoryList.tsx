import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../thunks/requestCategoryThunk';
import { setCategoryId } from '../redux/actions/saveCategoryAction';

function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.requestApiReducer.categories);
  const error = useSelector((state: any) => state.requestApiReducer.error);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId: string) => {
    dispatch(setCategoryId(categoryId));
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
    <div>
      <ul>
        {categories.map((category: any) => (
          <button key={ category.id } onClick={ () => handleCategoryClick(category.id) }>
            {category.name}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
