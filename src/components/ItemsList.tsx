import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchItemsByCategory, fetchItemsBySearch } from '../thunks/requestItemsThunk';
import { StyledItems } from '../styles/StyledItems';

function ItemList() {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
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
        <StyledItems>
          {items.map((item: any) => (
            <div key={ item.id }>
              <h3>{item.title}</h3>
              <img src={ item.thumbnail } alt={ item.title } />
              <span>
                <h4>
                  R$
                  {item.price}
                </h4>
              </span>
              <button>
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </StyledItems>
      )}
    </div>
  );
}

export default ItemList;
