import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";


export default function Product({ product }) {

    return <div className="product-cont">
        <img className="product-cont-image" src={product.img} />
        <div className="products-cont-info">
            <div className="icon-cart">
                <ShoppingCartOutlined />
            </div>
            <div className="icon-cart">
                <SearchOutlined />
            </div>
            <div className="icon-cart">
                <FavoriteBorderOutlined />
            </div>
        </div>
    </div>
}

