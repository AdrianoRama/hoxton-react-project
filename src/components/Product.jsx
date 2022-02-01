import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";


export default function Product({ product, setClickedProduct }) {

    const category = product.woman ? "woman" : "man"

    const navigate = useNavigate()

    return <div className="product-cont">
        <img className="product-cont-image" src={product.img} />
        <div className="products-cont-info">
            <div className="icon-cart">
                <ShoppingCartOutlined />
            </div>
            <div className="icon-cart">
                <SearchOutlined onClick={() => {
                    setClickedProduct(product)
                    navigate(`/${category}/${product.id}`)
                }} />
            </div>
            <div className="icon-cart">
                <FavoriteBorderOutlined />
            </div>
        </div>
    </div>
}

