import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from '../components/CartList';

export default function Cart({ cartList, clickedProduct, addAmount, minusAmount }) {

    const navigate = useNavigate()



    function total() {
        let total = 0
        cartList.map(product => {
            total += product.price * product.amount
        })

        return total
    }

    return <div className='cart-cont'>
        <div className="cart-wrapper">
            <h1 className='cart-title'>YOUR BAG</h1>
            <div className="cart-top">
                <button className='top-btn' onClick={() => {
                    navigate("/home")
                }}>CONTINUE SHOPPING</button>
                <div className="top-texts">
                    <span className='top-text'>Shopping bag({cartList.length})</span>
                    <span className='top-text'>Your wishlist(0)</span>
                </div>
                <button className='checkout-btn'>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-bottom">
                <div className="cart-info">
                    <CartList cartList={cartList} clickedProduct={clickedProduct} addAmount={addAmount} minusAmount={minusAmount} />
                </div>
                <div className="cart-summary">
                    <h1 className='summary-title'>ORDER SUMMARY</h1>
                    <div className="summary-item">
                        <span className="total-item-text">Total</span>
                        <span className="total-item-price">$ {total().toFixed(2)}</span>
                    </div>
                    <button className='summary-btn'>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    </div>;
}
