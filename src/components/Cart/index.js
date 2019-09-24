import React from 'react';
import PropTypes from 'prop-types';
import CartHeader from '../CartHeader';
import Product from '../Product';
import CartFooter from '../CartFooter';

const Cart = ({products, onDeleteProduct, onAddProduct}) => {
    const getTotalPrice = () => {
        let total = 0;

        products.forEach((i) => {
            total = total + i.price;
        });

        return total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    };

    return (
    <div>
        <CartHeader 
            title="Carrinho"
            total={getTotalPrice()}
        />
        {products.map((product) => (
        <Product
            key={product.id}
            name={product.name}
            price={product.price}
            onDelete={() => onDeleteProduct(product.id)}
        />
        ))}
        <CartFooter 
            onAddProduct={onAddProduct}
        />
    </div>
    )
};



Cart.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            price: PropTypes.number
        })
    )
};

Cart.defaultProps = {
    products: []
};

export default Cart;