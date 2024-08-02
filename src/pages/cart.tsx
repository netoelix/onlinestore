import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';
import { fetchItemById } from '../thunks/requestItemsThunk';
import { StyledCart } from '../styles/StyledCart';
import { removeFromCart } from '../redux/actions/cartActions';

function Cart() {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const itemIds = useSelector((state: any) => state.cartReducer.itemIds);
  const items = useSelector((state: any) => state.cartItemsReducer.items);
  const navigate = useNavigate();

  useEffect(() => {
    itemIds.forEach((id: any) => {
      if (!items[id]) {
        dispatch(fetchItemById(id));
      }
    });
  }, [itemIds, dispatch, items]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const getInstallmentCondition = (total: number) => {
    return Math.min(12, Math.floor(total / 100));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const totalPrice = itemIds.reduce((total: any, id: string | number) => {
    return total + (items[id]?.price || 0);
  }, 0);

  return (
    <StyledCart>
      <h1>Meu carrinho</h1>
      {itemIds.map((id: any) => (
        <div key={ id } className="cart-container">
          {items[id] ? (
            <div className="item-cart">
              <div className="item-information">
                <img src={ items[id].thumbnail } alt="" />
                <div>
                  <h2>{items[id].title}</h2>
                  <p>{formatPrice(items[id].price)}</p>
                </div>
              </div>
              <button onClick={ () => handleRemove(id) }>Remover</button>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ))}
      <div className="total-container">
        {totalPrice === 0 ? (
          <h2>Carrinho vazio</h2>
        ) : (
          <>
            <div>
              <h2>
                Total:
                {formatPrice(totalPrice)}
              </h2>
              <p>
                Você pode parcelar em até
                {' '}
                {getInstallmentCondition(totalPrice)}
                x sem juros
              </p>
            </div>
            <button onClick={ handleCheckout }>Finalizar Compra</button>
          </>
        )}
      </div>
    </StyledCart>
  );
}

export default Cart;
