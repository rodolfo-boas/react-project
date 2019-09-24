import React from 'react';
import './index.css';

const Product = ({name, price, onDelete}) => (
    <div className="Product">
        <p className="ProductName">
            {name}
        </p>
        <p className="ProductPrice">
            {price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
        </p>
        <button className="ProductDelete" onClick={onDelete}>
            x
        </button>
    </div>
);

export default Product;