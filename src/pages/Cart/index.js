import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Container, ProductTable, Total } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

export function Cart({ cart, total, removeFromCart, updateAmountRequest }) {

  function increment(product){
    updateAmountRequest(product.id, product.amount+1)
  }

  function decrement(product){
    updateAmountRequest(product.id, product.amount-1)
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            cart.map(product => (
            <tr key={product.id}>
            <td>
              <img
                src={product.image}
                alt={product.title}
              />
            </td>
            <td>
              <strong>{product.title}</strong>
              <strong>{product.priceFormatted}</strong>
            </td>
            <td>
              <div>
                <button
                type="button"
                onClick={() => decrement(product)}
                >
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input
                  type="number"
                  readOnly
                  value={product.amount} />
                <button
                  type="button"
                  onClick={() => increment(product)}
                >
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>
                {product.subTotal}
              </strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" onClick={
                  () => removeFromCart(product.id) } />
              </button>
            </td>
          </tr>
            ))
          }
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{ total }</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.amount * product.price)
  })),
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0)),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
