/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchItemById } from '../thunks/requestItemsThunk';
import { StyledProductInfo } from '../styles/StyledProductInfo';

function ProductInfo() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { id: itemId } = useParams<{ id: string }>();
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const item = useSelector((state: any) => state.itemReducer.item);
  const loading = useSelector((state: any) => state.itemReducer.loading);
  const error = useSelector((state: any) => state.itemReducer.error);

  useEffect(() => {
    if (itemId) {
      dispatch(fetchItemById(itemId));
    }
  }, [itemId, dispatch]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleShare = () => {
    if (item?.permalink) {
      navigator.clipboard.writeText(item.permalink)
        .then(() => {
          alert('Link copiado para a área de transferência!');
        })
        .catch((err) => {
          console.error('Erro ao copiar o link: ', err);
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <StyledProductInfo>
      {!item ? (
        <div>
          <h1>
            Item not found
          </h1>
        </div>
      ) : (
        <section>
          <div className="products">
            <div className="pictures">
              {item.pictures.map((picture: any) => (
                <button
                  key={ picture.id }
                  onClick={ () => setSelectedImage(picture.url) }
                  className="picture-button"
                >
                  <img
                    src={ picture.url }
                    alt={ item.title }
                  />
                </button>
              ))}
            </div>
            <img
              src={ selectedImage || item.pictures[0]?.url }
              alt={ item.title }
              className="product-img"
            />
            <div>
              <h1>{item.title}</h1>
              <h2>{formatPrice(item.price)}</h2>
              <div className="buttons">
                <button className="buy-now">
                  COMPRAR AGORA
                </button>
                <button className="add-to-cart">
                  ADICIONAR AO CARRINHO
                </button>
              </div>
              <button className="share-button" onClick={ handleShare }>
                Compartilhar
              </button>
            </div>
          </div>
          <div className="product-details">
            {item.attributes.map((attribute: any) => (
              <div key={ attribute.id }>
                <h2>
                  {attribute.name}
                  :
                </h2>
                {attribute.values.map((value: any) => (
                  <p key={ value.id }>{value.name}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}
    </StyledProductInfo>
  );
}

export default ProductInfo;
