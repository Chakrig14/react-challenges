import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useFetchProducts = () => {
    const [productData, setProductsData] = useState([]);

    async function fetchProducts() {
        const response = await axios.get('https://dummyjson.com/products');
        const data = response.data;
        setProductsData(data.products);
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return productData;
}

export default useFetchProducts;