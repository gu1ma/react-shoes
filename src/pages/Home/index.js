import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_ieRbHEYUkIK8u701u97xiPPwWPe2iqEj7JoIXvbVLPmjgXlWDR2x-GMS7CuaSKRFrqXU6jNI98xiKuxLNvXze5sJTwAJc_zyoktySaAQto7B-pqm0d_A&usqp=CAc"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_ieRbHEYUkIK8u701u97xiPPwWPe2iqEj7JoIXvbVLPmjgXlWDR2x-GMS7CuaSKRFrqXU6jNI98xiKuxLNvXze5sJTwAJc_zyoktySaAQto7B-pqm0d_A&usqp=CAc"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_ieRbHEYUkIK8u701u97xiPPwWPe2iqEj7JoIXvbVLPmjgXlWDR2x-GMS7CuaSKRFrqXU6jNI98xiKuxLNvXze5sJTwAJc_zyoktySaAQto7B-pqm0d_A&usqp=CAc"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
