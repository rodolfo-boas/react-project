import React from 'react';
import './index.css';

class CartFooter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            price: 0
        };

        this.nameInput = React.createRef();
        this.priceInput = React.createRef();
    }

    onNameChange (e) {
        this.setState({
            name: e.target.value
        });
    }

    onPriceChange (e) {
        this.setState({
            price: e.target.value ? parseInt(e.target.value) : e.target.value
        });
    }

    onSave (e) {
       e.preventDefault();
       const { onAddProduct } = this.props;
       onAddProduct(this.state);
       this.setState({
           name: '',
           price: 0
       });
       this.nameInput.current.focus();
    }

    render () {
        const {name, price} = this.state;

        return (
        <div className="CartFooter">

            <form className="CartFooterForm" onSubmit={this.onSave.bind(this)}>

                <input
                ref={this.nameInput}
                className="CartFooterInput" 
                placeholder="Nome"
                value={name}
                onChange={this.onNameChange.bind(this)}
                />

                <input
                ref={this.priceInput}
                type="number"
                className="CartFooterInput" 
                placeholder="Preço"
                value={price}
                onChange={this.onPriceChange.bind(this)}
                />

                <button className="CartFooterButton">Salvar</button>

            </form>

        </div>
        )
    }
}




export default CartFooter;