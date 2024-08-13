import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/productService';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';
import Footer from "../Pages/Footer";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const { dispatch: favoritesDispatch } = useContext(FavoritesContext);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const getProduct = async () => {
            try {
                const fetchedProduct = await fetchProductById(id);
                setProduct(fetchedProduct);
                setSelectedImage(fetchedProduct.img);  // Set initial selected image
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        getProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='container'>
                <div className="bread">
                    <p>Accueil <i className="fa-solid fa-angle-right"></i> {product.categorie} <i className="fa-solid fa-angle-right"></i> {product.title} </p>
                </div>
                <div className="container--header"></div>
                <div className="container--article">
                    <div className="container--article--left--part">
                        <div className="container--article--left--part--content">
                            <div className="container--article--left--part--content--image">  
                                <img src={selectedImage} alt={product.title} className="main-image" />
                            </div> 
                            <div className="thumbnail-gallery">
                                {product.images && product.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={`${process.env.PUBLIC_URL}/${img}`}
                                        alt={product.title}
                                        className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(img)}
                                    />
                                ))}
                            </div>
                        </div> 
                    </div>

                    <div key={id} className="container--article--right--part">
                        <p className='label'>{product.title}</p>
                        <h4 className="name--article">{product.description}</h4>
                        <p className='label'>Marque : {product.label}</p>
                        <p className='reference--article'>Référence: {product.reference}</p>
                        <p className='rating'>3 ratings</p>
                        <p className='availability'>En stock</p>
                        <p className='warranty'> Garantie: 1 mois </p>
                        <p className="price"> {product.price} F CFA</p>
                        <button className='btn__add__product' onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}>
                            <i className="fa-solid fa-cart-shopping"></i> Ajouter au panier
                        </button>
                    </div>         
                </div>
                <div className='pub'>
                    <img src="https://tpc.googlesyndication.com/simgad/4694351202817707795" alt="" />
                </div>
                <div className='section__comment__container'>
                    <div className='section__comment__header'>
                        <h5 className='section__comment__title'>Commentaires clients vérifiés</h5>
                    </div>
                    <div className='section__comment__content'>
                        <div className='section__comment__left__part'>
                            <button className='btn__comment'>Laisser un commentaire</button>
                        </div>
                        <div className='section__comment__right__part'>
                            <div className='section__comment__right__content'>
                                <h5>Commentaires (500)</h5>
                                <h5>Note 5/20</h5>
                                <h6>un refrigerateur impecable. Glace et forme</h6>
                                <p>02/20/2024 par : Doumbia Fode</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ProductDetail;