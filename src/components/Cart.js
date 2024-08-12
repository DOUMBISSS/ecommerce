import React, { useContext ,useState} from 'react';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';
import Footer from "../Pages/Footer";
import { Link } from 'react-router-dom';
import Payment from './Payment';

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const { dispatch: favoritesDispatch } = useContext(FavoritesContext);
    const [name,setName]= useState();
    // const [email,setEmail]=useState();
    const [numero,setNumero]=useState();
    const [adresse,setAdresse]=useState();
    const [option,setOption]=useState();

    const handleName = (event)=>{
        setName(event.target.value)
      }
      const handleAdresse =(event)=>{
          setAdresse(event.target.value)
      }
      const handleNumero =(event)=>{
        setNumero(event.target.value)
    }

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
       <>
        <div className="container">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Cart</li>
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
                                                <img src={item.img} alt="" />
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
                                    <h5>Total</h5>
                                    <p className='article__total__price'>{totalAmount} F CFA </p>
                                </div>
                            </div>
                            <div className='user__part'>
                                <h4>Vos coordonnés</h4>
                         <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-6">
                                    <label for="validationCustom01" class="form-label">Noms complets</label>
                                    <input type="text" class="form-control" id="validationCustom01" required value={name} onChange={handleName}/>
                                </div>

                                <div class="col-md-6">
                                    <label for="validationCustom03" class="form-label">Addresse</label>
                                    <input type="text" class="form-control" id="validationCustom03" required value={adresse} onChange={handleAdresse}/>
                                </div>

                                <div class="col-md-4">
                                    <label for="validationCustom03" class="form-label">Nº Tel</label>
                                    <input type="text" class="form-control" id="validationCustom03" required value={numero} onChange={handleNumero}/>
                                </div>
                        </form>
                            </div>
                            {/* <div className='payment__part'>
                            <h4>Option de paiement</h4>
                            <div className='payment__part__content'>
                            <select class="form-select" aria-label="Default select example" >
                                <option selected>Option de paiement</option>
                                <option value="1">Cash à la livraison</option>
                                <option value="2">Paiement par Money</option>
                                </select>
                            </div>
                            </div> */}
                               <Payment cart={cart} totalAmount={totalAmount} />
                      </div>
                </div>
        </div>     
    </div>
    {/* <Link to='*'><button className='btn__payment'> Procéder au paiement</button> </Link>  */}

        </div>
        <Footer/>
       </>
    );
};

export default Cart;