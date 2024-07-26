import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsByCategory, fetchItemsBySearch } from '../thunks/requestItemsThunk';

function ItemList() {
  const dispatch = useDispatch();
  const selectedCategoryId = useSelector((state: any) => state
    .categoryReducer.selectedCategoryId);
  const searchItem = useSelector((state: any) => state
    .categoryReducer.searchItem);
  const items = useSelector((state: any) => state.requestApiReducer.items);

  useEffect(() => {
    if (selectedCategoryId) {
      dispatch(fetchItemsByCategory(selectedCategoryId));
    }
    if (searchItem) {
      dispatch(fetchItemsBySearch(searchItem));
    }
  }, [selectedCategoryId, searchItem, dispatch]);

  return (
    <div>
      {!items ? (
        <div>Loading...</div>
      ) : (
        <div>
          {items.map((item) => (
            <div key={ item.id }>
              <h3>{item.title}</h3>
              <img src={ item.thumbnail } alt={ item.title } />
              <h4>{item.price}</h4>
              <a
                href={ item.permalink }
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;
