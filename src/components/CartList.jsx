import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import "../App"


function CartProduct({ product, addAmount, minusAmount }) {
    return <div className='cartProduct'>
        <div className="show-item-correct">
            <div className="product-details">
                <img src={product.img} />
                <div className="detail">
                    <span className='cart-product-title'><b>Product:</b>{product.title}</span>
                </div>
            </div>
            <div className="price-details">
                <div className='price-detail'>
                    <div className="amount-cont">
                        <Remove className='addAndRemove' onClick={() => minusAmount(product)} />
                        <div className='product-amount'>{product.amount}</div>
                        <Add className='addAndRemove' onClick={() => addAmount(product)} />
                    </div>
                    <div className='cart-prod-price'>$ {(product.price * product.amount).toFixed(2)}</div>
                </div>
            </div>
        </div>
    </div>
}

export default function CartList({ cartList, addAmount, minusAmount }) {



    return cartList.map(product => {
        if (product.amount === 0) {
            // const index = cartList.indexOf(product)
            // cartList.splice(index, 1)
            // console.log(cartList)
        }

        else return <CartProduct key={product.id} product={product} addAmount={addAmount} minusAmount={minusAmount} />

    })
}
