import useFetchProducts from "../hooks/fetchProducts";

const ProductList = () => {
    const products = useFetchProducts();

    return (
        <>
            <h1>Products</h1>
            <div>
                {products?.map((product) => <div key={product?.id}>
                    <img src={product?.thumbnail} />
                    {product?.title}</div>)}
            </div>
        </>
    )
}

export default ProductList;