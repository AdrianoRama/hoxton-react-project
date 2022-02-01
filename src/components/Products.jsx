import Product from "./Product";


export default function Products({ products, getWomanClothes, getManClothes }) {
    return <div className="products-cont">
        {products.map(product => {
            return <Product key={product.id} product={product} />
        })}
    </div>;
}
