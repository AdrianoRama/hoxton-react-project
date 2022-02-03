import { Add, Remove } from "@material-ui/icons";


export default function SingleProduct({ clickedProduct, cartList, setCartList }) {

    return <div className="single-product-cont">
        <div className="single-product-wrapper">
            <div className="single-product-imageCont">
                <img className="single-product-img" src={clickedProduct.img} />
            </div>
            <div className="single-product-infoCont">
                <h1 className="single-product-title">{clickedProduct.title}</h1>
                <p className="single-product-desc">{clickedProduct.description}</p>
                <p className="single-product-materials">Materials: {clickedProduct.material}</p>
                <span className="single-product-price">$ {clickedProduct.price}</span>
                <div className="single-product-addCont">
                    <button className="single-product-addToCart" onClick={() => {
                        if (cartList.includes(clickedProduct)) {
                            return
                        }
                        else {
                            setCartList([...cartList, clickedProduct])
                            clickedProduct.amount = 1
                        }
                        console.log(clickedProduct.amount)
                    }}>ADD TO CART</button>
                </div>
            </div>

        </div>
    </div>;
}
