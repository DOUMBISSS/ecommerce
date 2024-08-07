import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://back-doc.onrender.com/products`);
                const data = await response.json();
                const filteredProducts = data.filter(product => product.category === category);
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [category]);

    return (
        <div>
            <h1>Products in {category}</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product._id} className="product">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.price} $</p>
                        <button>Add to Cart</button>
                        <button>Add to Favorites</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;