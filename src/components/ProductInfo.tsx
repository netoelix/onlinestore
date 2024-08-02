/* eslint-disable react/jsx-max-depth */
/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { FacebookShareButton, TwitterShareButton,
  WhatsappShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { FaRegCopy, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { fetchItemById } from '../thunks/requestItemsThunk';
import { StyledProductInfo } from '../styles/StyledProductInfo';
import { addToCart } from '../redux/reducers/cartReducer';

function ProductInfo() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [installments, setInstallments] = useState(1);

  const { id: itemId } = useParams<{ id: string }>();
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const item = useSelector((state: any) => state.itemReducer.item);
  const loading = useSelector((state: any) => state.itemReducer.loading);
  const error = useSelector((state: any) => state.itemReducer.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (itemId) {
      dispatch(fetchItemById(itemId));
    }
  }, [itemId, dispatch]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleCopyLink = () => {
    alert('Link copiado para a área de transferência!');
  };

  const handleInstallmentsChange = (event: any) => {
    setInstallments(Number(event.target.value));
  };

  const handleAddToCart = (id: any) => {
    dispatch(addToCart(id));
  };

  const getInstallmentCondition = (total: number) => {
    return Math.min(12, Math.floor(total / 100));
  };

  if (loading || !item) {
    return <div>Loading...</div>;
  }
  const handleButtonNavigate = () => {
    navigate('/cart');
  };

  const handleBuyNowClick = (id: any) => {
    handleAddToCart(id);
    handleButtonNavigate();
  };

  const maxInstallments = getInstallmentCondition(item.price);

  const installmentValue = item.price / installments;

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
            <div className="product-info">
              <h1>{item.title}</h1>
              <h2>{formatPrice(item.price)}</h2>
              <p>
                Você pode parcelar em até
                {' '}
                {maxInstallments}
                x sem juros
                <br />
                Em
                <input
                  type="number"
                  min="1"
                  max={ maxInstallments }
                  value={ installments }
                  onChange={ handleInstallmentsChange }
                />
                {` de ${formatPrice(installmentValue)} por mês`}
              </p>
              <div className="buttons">
                <button
                  className="buy-now"
                  onClick={ () => handleBuyNowClick(item.id) }
                >
                  COMPRAR AGORA
                </button>
                <button
                  className="add-to-cart"
                  onClick={ () => handleAddToCart(item.id) }
                >
                  ADICIONAR AO CARRINHO
                </button>
              </div>
              <div className="share-options">
                <FacebookShareButton
                  url={ window.location.href }
                  className="facebook"
                >
                  <TiSocialFacebookCircular />
                </FacebookShareButton>
                <TwitterShareButton
                  url={ window.location.href }
                  className="twitter"
                >
                  <FaXTwitter />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={ window.location.href }
                  className="whatsapp"
                >
                  <FaWhatsapp />
                </WhatsappShareButton>
                <CopyToClipboard
                  text={ window.location.href }
                  onCopy={ handleCopyLink }
                >
                  <FaRegCopy />
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div className="product-details">
            <h1>Detalhes técnicos</h1>
            <table>
              <tbody>
                {item.attributes.map((attribute: any, attrIndex: number) => (
                  attribute.values.map((value: any, valueIndex: number) => (
                    <tr key={ `${attrIndex}-${valueIndex}` }>
                      <td className="name">{attribute.name}</td>
                      <td className="value">{value.name}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </StyledProductInfo>
  );
}

export default ProductInfo;
