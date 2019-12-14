import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

export function Home({ addToCartRequest, amount }) {
  const [products, updateProducts] = useState([]);

  async function fetchPosts() {
    const { data } = await api.get('products');

    const newData = data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    updateProducts(newData);
    return data;
  }

  function handleAddProduct(id) {
    addToCartRequest(id);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img
            src={product.image}
            alt={product.title}
          />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
                {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
