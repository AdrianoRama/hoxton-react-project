import Product from "./Product";


export default function Products({ products, setClickedProduct }) {
    const productList = products.map(product => {
        return <Product key={product.id} product={product} setClickedProduct={setClickedProduct} />
    })
    return <div className="products-cont">
        {products.length === 0 ? <div className="not-found-wrapper"><h1>Nothing found...</h1></div>
            : productList}
    </div>;
}
