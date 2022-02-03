import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from '../components/CartList';

export default function Cart({ cartList, clickedProduct, addAmount, minusAmount, setCartList }) {

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
                    <span className='top-text'>Shopping bag(<span className='bagNumber'>{cartList.length}</span>)</span>
                    <span className='top-text'>Your wishlist(<span className='bagNumber'>0</span>)</span>
                </div>
                <button className='checkout-btn' onClick={() => navigate("fin")}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-bottom">
                <div className="cart-info">
                    <CartList setCartList={setCartList} cartList={cartList} addAmount={addAmount} minusAmount={minusAmount} />
                </div>
                <div className="cart-summary">
                    <h1 className='summary-title'>ORDER SUMMARY</h1>
                    <div className="summary-item">
                        <span className="total-item-text">Total</span>
                        <span className="total-item-price">$ {total().toFixed(2)}</span>
                    </div>
                    <button className='summary-btn' onClick={() => navigate("fin")}>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    </div>;
}
