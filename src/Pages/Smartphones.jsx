import { Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Favorites from '../components/Favorites';
import React, { useEffect, useState, useContext } from 'react';
import { fetchProducts } from '../services/productService';
import Product from '../components/Product';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';
import Notification from "../components/Notification";



export default function Smartphones (){
    const [dis,setDis]=useState(true);
    const [filter,setFilter] = useState(false);
    const [items,setCat]=useState([]);
    const [products, setProducts] = useState([]);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const { dispatch: favoritesDispatch } = useContext(FavoritesContext);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const getProducts = async () => {
            const productsFromAPI = await fetchProducts();
            setProducts(productsFromAPI);
        };

        getProducts();
    }, []);

    const addToCart = (product) => {
        cartDispatch({ type: 'ADD_TO_CART', payload: product });
        setNotification('Product added to cart!');
    };

    const addToFavorites = (product) => {
        favoritesDispatch({ type: 'ADD_TO_FAVORITES', payload: product });
        setNotification('Product added to favorit!');
    };

    // useEffect(() => {
    //     fetch('https://back-doc.onrender.com/products')
	// 		.then(response => response.json())
	// 		.then(items =>  setCat(items))
	// 		.catch(error => console.error('Error:', error));

    //     })
	console.log(items)
    const closeFilter = ()=> {
          setFilter (false)
      }
      const showFilter =()=>{
          setFilter (true)
      }



    const filterResult = (catItem)=>{
        const filterData = Smartphones.filter((Smartphone) =>  Smartphone.marque === catItem )
            setCat(filterData);
            setDis(false);
    }

	


    return (
        <div>
        <div className='container'>
        <div className="bread">
                        <p>Accueil <i class="fa-solid fa-angle-right"></i> Smartphones & Tablettes</p>
                </div>
            <h2 className="header__accessories">Smartphones & Tablettes </h2>
            <div className="part__products__header">
                <div className="part__products__header__images">
                <img src="https://tpc.googlesyndication.com/simgad/15905478928241312474" alt="" />
                </div>
                {/* <p className="container--header">Tv & Audios</p> */}
                <p>Découvrez les nouveautés de notre collection pour homme. Vous trouverez des must-haves de tous les jours tels que hauts et t-shirts, ensembles décontractés et sous-vêtements.
                         Et pour ce qui est des pantalons pour homme, il y a des joggings et des pantalons cargo de toutes les couleurs. 
                        </p>
                        <div className="col-12 col-md-12">
                            <p className="container--header">Nos partenaires </p>
                            <div className="section__partenaires">
                                <div className="section__partenaires__content">
                                    <img src="https://img.freepik.com/icones-gratuites/mac-os_318-10374.jpg" alt="" />
                                    <img src="https://www.1min30.com/wp-content/uploads/2018/10/Embl%C3%A8me-Huawei.jpg" alt="" />
                                    <img src="https://logos-marques.com/wp-content/uploads/2021/01/logo-Xiaomi.jpg" alt="" />
                                    <img src="https://static.vecteezy.com/ti/vecteur-libre/p3/20927489-infinix-marque-logo-telephone-symbole-nom-noir-conception-chine-mobile-vecteur-illustration-gratuit-vectoriel.jpg" alt="" />
                                    <img src="https://logos-marques.com/wp-content/uploads/2022/04/Oppo-logo.png" alt="" />
                                    <img src="https://images.samsung.com/is/image/samsung/assets/africa_fr/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$" alt="" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Wiko_logo.svg/1200px-Wiko_logo.svg.png" alt="" />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="container-contents">
          <div className="sidebar">
          <div className="filter--container">
                <h4>CATÉGORIE</h4>
            {/* <h6>{items.length} résultat(s)</h6> */}
            <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        Smartphones
                </button>
                </h2>
                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                                        <p className="btn__filter" onClick={()=>{filterResult('Apple')}}>Iphones</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Samsung')}}>Samsung</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Huawei')}}>Huawei</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Xiaomi')}}>Xiaomi</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Oppo')}}>Oppo</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Google')}}>Google</p>
                                        {/* <p className="btn__filter" onClick={()=>{filterResult('Xiaomi')}}>Redmi</p> */}
                                        <p className="btn__filter" onClick={()=>{filterResult('Infinix')}}>Infinix</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Tablettes
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                                        <p className="btn__filter" onClick={()=>{filterResult('Apple')}}>Ipad</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Samsung')}}>Samsung</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Huawei')}}>Huawei</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        Accessoires
                </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                                    <p className="btn__filter" onClick={()=>{filterResult('Adaptateur')}}>Adaptateurs</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Batterie')}}>Batteries</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Chargeur')}}>Cables & Chargeurs</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Coques')}}>Coques</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Ecran')}}>Ecrans</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Ecouteur')}}>Ecouteurs</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Montres')}}>Montres</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Support')}}>Support</p>
                </div>
                </div>
                </div>

                {/* <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
                    </div> */}

                </div>
                </div>
                </div>

             <div className="part__products">
                         <div className="part__accessories">
          {products.map((product) => <div key={product._id}className='featured__product__cards'>
                        <div className='product__cards__header'>
                        <p className='sales'>{product.title}</p>
                           <div className='featured__product__cards__header__images'>
                           <img src={product.image} alt={product.title} />
                           {/* <Link to={`/detail/${product._id}`}><img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="" /></Link> */}
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                {/* <h5 className='product__title'>{article.title}</h5> */}
                                <p className='product__desc'>{product.description}</p>
                                <p className='brand'>{product.marque}</p>
                               <h5 className='product__categorie'>Smartphone</h5>
                               <p className="reference">Réf:ECMHDEDIPACCHCB3</p>
                                <p className="info">2 en stock</p>
                               <p className='product__price'>{product.price} FCFA</p>
                               <div className='button--block'>
                               <Link className='link__btn' to='/detail'><button className='btn__buy'>Acheter</button></Link>
                               <button className='btn__add' onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}>+</button>
                               
                               
                                </div>  
                        </div>
                    </div> 

                    
                        )}
                    
          </div>
                    
          </div>
       </div>
       </div>
       {notification && <Notification message={notification} />}

        <Footer/>
     </div>
    );
}