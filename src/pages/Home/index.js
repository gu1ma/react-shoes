import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

export default function Home() {
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

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
                3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
