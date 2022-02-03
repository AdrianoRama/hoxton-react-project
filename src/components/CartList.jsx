import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import "../App"


function CartProduct({ product, clickedProduct, addAmount, minusAmount }) {
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
                        <Remove className='addAndRemove' onClick={() => minusAmount(clickedProduct)} />
                        <div className='product-amount'>{product.amount}</div>
                        <Add className='addAndRemove' onClick={() => addAmount(clickedProduct)} />
                    </div>
                    <div className='cart-prod-price'>$ {(product.price * product.amount).toFixed(2)}</div>
                </div>
            </div>
        </div>
    </div>
}

export default function CartList({ cartList, clickedProduct, addAmount, minusAmount }) {

    // const filteredItem = cartList.filter(product => {
    //     return product.amount > 0
    // })

    // console.log(filteredItem)

    return cartList.map(product => {

        return <CartProduct key={product.id} product={product} clickedProduct={clickedProduct} addAmount={addAmount} minusAmount={minusAmount} />

    })
}
