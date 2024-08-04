// src/components/ProductDetail.js
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
    const { cart, dispatch} = useContext(CartContext);
    const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    useEffect(() => {
        const getProduct = async () => {
            const product = await fetchProductById(id);
            setProduct(product);
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
                        <p>Accueil <i class="fa-solid fa-angle-right"></i> Smartphones & Tablettes <i class="fa-solid fa-angle-right"></i> {product.title} </p>
                </div>
        <div className="container--header">
            {/* <h4 className="name--article">Iphone 14 Pro Max</h4> */}
          </div>
              <div className="container--article">
                <div className="container--article--left--part">
                  <div className="container--article--left--part--content">
                    <div className="container--article--left--part--content--image">  
                      <img src={product.image} alt="" />
                    </div> 
                  </div> 
                
                </div>

                <div key={id} className="container--article--right--part" >
                        <p className='label'>{product.title}</p>
                        <h4 className="name--article">{product.description}</h4>
                        <p className='label'>Marque : {product.brand}</p>
                        <p className='reference--article'>Référence: {product.reference}</p>
                        <p className='rating'>3 ratings</p>
                        <p className='availability'>En stock</p>
                        <p className='warranty'> Garantie: 1 mois </p>
                        <p className="price"> {product.price}</p>
                        {/* <div className='btn__quantity__block'>
                        <button className='btn__quantity__minus' onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product._id })}>-</button>
                        <p className='btn__quantity'>{product.quantity}</p>
                            <button className='btn__quantity__plus' onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}>+</button>
                        </div>               */}
                        <button className='btn__add__product' onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}> <i className="fa-solid fa-cart-shopping"></i> Ajouter au panier</button>
                        {/* <button onClick={() => favoritesDispatch({ type: 'ADD_TO_FAVORITES', payload: product })}>Add to Favorites</button> */}
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