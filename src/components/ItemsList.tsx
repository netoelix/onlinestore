/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';
import { fetchItemsByCategory, fetchItemsBySearch } from '../thunks/requestItemsThunk';
import { StyledFilterList, StyledItemList,
  StyledItemsContainer } from '../styles/StyledItemList';
import { setCategoryId } from '../redux/actions/saveCategoryAction';

function ItemList() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const selectedCategoryId = useSelector((state: any) => state
    .categoryReducer.selectedCategoryId);
  const searchItem = useSelector((state: any) => state
    .categoryReducer.searchItem);
  const items = useSelector((state: any) => state.requestApiReducer.items);
  const loading = useSelector((state: any) => state.requestApiReducer.loading);

  useEffect(() => {
    if (selectedCategoryId) {
      dispatch(fetchItemsByCategory(selectedCategoryId));
    }
    if (searchItem) {
      dispatch(fetchItemsBySearch(searchItem));
    }
  }, [selectedCategoryId, searchItem, dispatch]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return `${title.substring(0, maxLength)}...`;
    }
    return title;
  };

  const handleCategoryClick = (categoryId: string) => {
    dispatch(setCategoryId(categoryId));
    navigate(`/${categoryId}`);
  };

  const handleProductClick = (productId: string) => {
    dispatch(setCategoryId(productId));
    navigate(`/produto/${productId}`);
  };

  const handleBrandClick = (brandName: string) => {
    setSelectedBrand((prevBrand) => (prevBrand === brandName ? null : brandName));
  };

  const filteredItems = selectedBrand
    ? items.results.filter((item: any) => item.title.includes(selectedBrand))
    : items.results;

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : !items.results ? (
        <div>Loading...</div>
      ) : (
        <StyledItemsContainer>
          <StyledFilterList>
            {items.available_filters
              .filter((filter: any) => filter.id === 'category')
              .map((filter: any) => (
                <div key={ filter.id }>
                  <h1>{filter.name}</h1>
                  {filter.values
                    .slice(0, filter.id === 'BRAND' ? 20 : filter.values.length)
                    .map((value: any) => (
                      <button
                        key={ value.id }
                        onClick={ () => handleCategoryClick(value.id) }
                      >
                        {value.name}
                      </button>
                    ))}
                </div>
              ))}
            {items.available_filters
              .filter((filter: any) => filter.id === 'BRAND')
              .map((filter: any) => (
                <div key={ filter.id }>
                  <h1>{filter.name}</h1>
                  {filter.values
                    .slice(0, filter.id === 'BRAND' ? 20 : filter.values.length)
                    .map((value: any) => (
                      <button
                        key={ value.id }
                        onClick={ () => handleBrandClick(value.name) }
                      >
                        {value.name}
                      </button>
                    ))}
                </div>
              ))}
          </StyledFilterList>
          <StyledItemList>
            {filteredItems.map((item: any) => (
              <div key={ item.id }>
                <img src={ item.thumbnail } alt={ item.title } />
                <button
                  className="title-product"
                  onClick={ () => handleProductClick(item.id) }
                >
                  <h1>{truncateTitle(item.title, 60)}</h1>
                </button>
                <span>
                  <h4>
                    {formatPrice(item.price)}
                  </h4>
                </span>
                <button className="add-to-cart">
                  Adicionar ao carrinho
                </button>
              </div>
            ))}
          </StyledItemList>
        </StyledItemsContainer>
      )}
    </div>
  );
}

export default ItemList;
