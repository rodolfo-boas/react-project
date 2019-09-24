import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './index.css';
import Cart from '../Cart';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'produto',
        price: 10.0
      }
    ]
  }

  deleteProduct (productId) {
    this.setState({
      products: this.state.products.filter((product) => product.id !== productId)
    });
  }

  addProduct (product) {
    this.setState({
      products: [...this.state.products, {...product, id: Math.floor(Math.random() * 100) + 1}]
    });
  }
  

  render() {
    const { products = []} = this.state;
    return (
      <div className="App">
        <Cart
          products={products}
          onDeleteProduct={this.deleteProduct.bind(this)}
          onAddProduct={this.addProduct.bind(this)} 
        />
      </div>
    );
  }
}

export default App;