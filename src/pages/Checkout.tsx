/* eslint-disable no-alert */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';
import { fetchItemById } from '../thunks/requestItemsThunk';
import { StyledCheckout } from '../styles/StyledCheckout';

function Checkout() {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const itemIds = useSelector((state: any) => state.cartReducer.itemIds);
  const items = useSelector((state: any) => state.cartItemsReducer.items);
  const [cep, setCep] = useState('');
  const [cepData, setCepData] = useState<null | { cep: string,
    logradouro: string, bairro: string, localidade: string, uf: string }>(null);

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Obrigado por testar a aplicação! A compra não foi realizada pois é apenas um teste.');
  };
  const getInstallmentCondition = (total: number) => {
    return Math.min(12, Math.floor(total / 100));
  };
  const totalPrice = itemIds.reduce((total: any, id: string | number) => {
    return total + (items[id]?.price || 0);
  }, 0);
  const handleCepSearch = async () => {
    try {
      const response = await axios.get(`https://opencep.com/v1/${cep}`);
      setCepData(response.data);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };
  const handleCepChange = (event: any) => {
    setCep(event.target.value);
  };
  return (
    <StyledCheckout>
      <form onSubmit={ handleSubmit }>
        <h3>Informações pessoais</h3>
        <div className="personal-information">
          <div>
            <label htmlFor="fullName">Nome Completo</label>
            <input
              className="input"
              placeholder="Nome completo"
              type="text"
              id="fullName"
              required
            />
          </div>
          <div>
            <label htmlFor="CPF">CPF</label>
            <input
              className="input"
              placeholder="000.000.000-00"
              type="text"
              id="cpf"
              required
            />
          </div>
          <div>
            <label htmlFor="date">Data de nascimento</label>
            <input
              className="input"
              type="date"
              id="date"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="input"
              placeholder="email@email.com"
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Telefone</label>
            <input
              className="input"
              placeholder="Digite seu número"
              type="phone"
              id="phone"
              required
            />
          </div>
        </div>
        <h3>Dados de endereço</h3>
        {cepData ? (
          <div className="search-results">
            <div>
              <label htmlFor="logradouro">
                Logradouro:
              </label>
              <input
                className="input"
                type="text"
                id="logradouro"
                value={ cepData.logradouro }
                readOnly
              />
            </div>
            <div>
              <label htmlFor="logradouro">
                Bairro:
              </label>
              <input
                className="input"
                type="text"
                value={ cepData.bairro }
                readOnly
              />
            </div>
            <div>
              <label htmlFor="logradouro">
                Localidade:
              </label>
              <input
                className="input"
                type="text"
                value={ cepData.localidade }
                readOnly
              />
            </div>
            <div>
              <label htmlFor="logradouro">
                UF:
              </label>
              <input
                className="input"
                type="text"
                value={ cepData.uf }
                readOnly
              />
            </div>
          </div>
        ) : (
          <div className="cep">
            <input
              type="text"
              placeholder="Buscar cep..."
              value={ cep }
              onChange={ handleCepChange }
              className="cep-input"
            />
            <button type="button" onClick={ handleCepSearch } className="button-search">
              Pesquisar
            </button>
          </div>
        )}
        <h3>Dados de pagamento</h3>
        <div className="paymant">
          <div>
            <label htmlFor="creditCard">Cartão de Crédito</label>
            <input
              className="input"
              placeholder="4444 4444 4444 4444"
              type="text"
              required
            />
          </div>
          <div>
            <label htmlFor="validade">Validade</label>
            <input
              className="input"
              placeholder="01/01"
              type="text"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              className="input"
              placeholder="ABC"
              type="text"
              required
            />
          </div>
        </div>
        <div className="cart-container">
          <div className="quantidade-de-parcelas">
            <p className="parcelamento">
              Você pode parcelar em até
              {' '}
              {getInstallmentCondition(totalPrice)}
              x sem juros
            </p>
            <label htmlFor="installment">Quantidade de Parcelas</label>
            <select required>
              {[...Array(getInstallmentCondition(totalPrice)).keys()].map((i) => {
                const installmentNumber = i + 1;
                const installmentValue = (totalPrice / installmentNumber).toFixed(2);
                return (
                  <option key={ installmentNumber } value={ installmentNumber }>
                    {installmentNumber}
                    x de R$
                    {installmentValue}
                  </option>
                );
              })}
            </select>
            <h2 className="total-price">
              Total:
              {formatPrice(totalPrice)}
            </h2>
          </div>
          <h3>Finalize seu pedido</h3>
          <button className="finish" type="submit">Finalizar Compra</button>
        </div>
      </form>
    </StyledCheckout>
  );
}
export default Checkout;
