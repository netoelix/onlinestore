import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemById } from '../thunks/requestItemsThunk';

function ProductInfo() {
  const { id: itemId } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const item = useSelector((state: any) => state.itemReducer.item);
  const loading = useSelector((state: any) => state.itemReducer.loading);
  const error = useSelector((state: any) => state.itemReducer.error);

  useEffect(() => {
    dispatch(fetchItemById(itemId));
  }, [itemId, dispatch]);

  useEffect(() => {
    console.log('Redux state:', { item, loading, error }); // Adiciona console.log aqui
  }, [item, loading, error]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {!item ? (
        <div>Item not found</div>
      ) : (
        <div>
          <h1>{item.title}</h1>
          <img src={ item.thumbnail } alt={ item.title } />
          <p>{item.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
