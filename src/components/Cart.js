import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';
import Footer from "../Pages/Footer";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const { dispatch: favoritesDispatch } = useContext(FavoritesContext);

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
       <>
        <div className="container">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Smartphone</li>
            </ol>
            </nav>
            <h2>Votre panier</h2>
            <div className="main--orders">
            <div className="main--orders--container">
                <div className="main--orders--container--left">
                {cart.map((item)=> <div key={item.id} className="cart--articles">
                            {/* const totalPrice = carts.price * quantity */}
                                    <div className="button-block">
                                        <div className="handle--quantity">
                                        <div className="minus" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item._id })}><h5>-</h5></div>
                                        <div className="qty"><h5>{item.quantity}</h5></div>
                                        <div className="plus" onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: item })}><h5>+</h5></div>
                                        </div>
                                    </div>
                        
                                    <div className="cart--articles--descriptions">
                                        <div className="block--articles">
                                            <div className="articles">
                                                <img src={item.image} alt="" />
                                            </div>
                        
                                            <div className="articles--details">
                                                <p className="names--articles">{item.title}</p>
                                                <p className="names--articles">{item.categorie}</p>
                                                <p className="quantity">{item.quantity} unité (s)</p>
                                                <p className="price--articles"> {item.price} F CFA x {item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                        
                                    <div className="btn--remove--article" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item._id })}>
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                             )}

            {cart.length > 0 && (<button className='btn__clear' onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button> )}

                </div>

                <div className="main--orders--container--right">
                      <h6 className='main--orders--container--right--header'>Résumé du panier</h6> 
                      <div className='main--orders--container--right--body'>
                            <div className='article__details__order'>
                                <div className='article__details__order__content'>
                                    <h5>Total:</h5>
                                    <p className='article__total__price'>{totalAmount.toFixed(2)} F CFA </p>
                                </div>
                                {/* <div className='article__details__order__content'>
                                    <h5>Frais de livraison</h5>
                                    <p>5 000 FCFA</p>
                                </div> */}
                                {/* <div className='article__details__order__content'>
                                    <h5>Coupon</h5>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Email address</label>
                                        </div>
                                </div> */}
                                {/* <div className='article__details__order__content'>
                                    <h5>Coupon</h5>
                                    <p>5 000 FCFA</p>
                                </div> */}
                            </div>
                            <div className='user__part'>
                                <h4>Vos coordonnés</h4>
                         <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-6">
                                    <label for="validationCustom01" class="form-label">Noms complets</label>
                                    <input type="text" class="form-control" id="validationCustom01" required />
                                </div>

                                <div class="col-md-6">
                                    <label for="validationCustom03" class="form-label">Addresse</label>
                                    <input type="text" class="form-control" id="validationCustom03" required />
                                </div>

                                <div class="col-md-4">
                                    <label for="validationCustom03" class="form-label">Nº Tel</label>
                                    <input type="text" class="form-control" id="validationCustom03" required />
                                </div>
                        </form>
                            </div>
                            <div className='payment__part'>
                            <h4>Option de paiement</h4>
                            <div className='payment__part__content'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Cash à la livraison
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Paiement par Money
                                </label>
                                </div>
                            </div>
                            </div>
                      </div>
                </div>
        </div>     
    </div>
    <button className='btn__payment'>Procéder au paiement</button>  

        </div>
        <Footer/>
       </>
    );
};

export default Cart;