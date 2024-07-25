// src/components/CategoryList.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../thunks/requestCategoryThunk';
import { fetchItemsByCategory } from '../../thunks/requestItemsThunk';

function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.requestApiReducer.categories);
  const items = useSelector((state: any) => state.requestApiReducer.items);
  const loading = useSelector((state: any) => state.requestApiReducer.loading);
  const error = useSelector((state: any) => state.requestApiReducer.error);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId: string) => {
    dispatch(fetchItemsByCategory(categoryId));
  };

  if (loading) return <p>Loading...</p>;
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
      <ul>
        {items.map((item: any) => (
          <li key={ item.id }>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
