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



export default function House (){
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
            const filterData = products.filter((products) =>  products.marque === catItem )
                setCat(filterData);
                setDis(false);
        }
    

    return (
        <div>
        <div className='container'>
        <div className="bread">
                        <p>Accueil <i class="fa-solid fa-angle-right"></i> Smartphones & Tablettes</p>
                </div>
            <h2 className="header__accessories"> Maison & Déco </h2>
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
    
            <div>
             <div className="filter" onMouseOver={showFilter}>
                        <i className="fa-solid fa-arrow-up-wide-short"></i>
                        <p>Filtre</p>
            </div>
                <div className={filter ? "filterbar show--filterbar" : "filterbar" }>
                        <div className='filterbar--content' onMouseLeave={closeFilter}>
                          <div className='btn--close--sidebar'onClick={closeFilter}> <i className="fa-solid fa-xmark"></i></div>

                          <div className='filter--sidebar'>
                         <div className="filter--container">
                                <h4>CATÉGORIE PAR PRODUIT</h4>
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingSeven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        SMARTPHONES
                                </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                        <p className="btn__filter" onClick={()=>{filterResult('Visage')}}>Iphones</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Rouge à Lèvres')}}>Samsung</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Visage')}}>Huawei</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Rouge à Lèvres')}}>Xiaomi</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Visage')}}>Oppo</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Rouge à Lèvres')}}>Google</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Visage')}}>Redmi</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Rouge à Lèvres')}}>Infinix</p>
                                </div>
                                </div>
                                </div>
                                <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        TAILLE DE L'ECRAN
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>32'</p>
                                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>43'</p>
                                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums femme')}}>55'</p>
                                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>65'</p>
                                        <p className="btn__filter"  onClick={()=>{filterResult('Deo')}}>75'</p>
                                </div>
                                </div>
                                </div>
                                <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        FORMAT DE L'ECRAN
                                </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                        <p className="btn__filter" onClick={()=>{filterResult('Jouets')}}>Plat</p>
                                        <p className="btn__filter" onClick={()=>{filterResult('Préservatifs')}}>Incurvée</p>
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

                <p className="title__cat">AUTRES CATEGORIES</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Télévision</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums femme')}}>Audios et Hifi</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Climatisation</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Deo')}}>Chauffage et traitement d'air</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Réfrigerateur</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums femme')}}>Congélateur</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Cuisine et Maison</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Deo')}}>Lavage et Entretien</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Deo')}}>Accessoires</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Réfroidisseur</p>

                </div>
                                </div>
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
                        Cuisine & Art de la table
                </button>
                </h2>
                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Ustensile')}}>Ustensiles de cuisine</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Stockage')}}>Stockage & Organisation</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Petit Électroménager
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter"  onClick={()=>{filterResult('Bouilloires')}}>Bouilloires électriques</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Café')}}>Café , Thé & Expresso</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Blenders')}}>Blenders & Mixeurs</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Friteuses')}}>Friteuses</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Fer à repasser')}}>Fer à repasser</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Micro-ondes')}}>Micro-ondes & Fours</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        Gros Électroménager
                </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter"  onClick={()=>{filterResult('Réfrigerateurs')}}>Réfrigerateurs</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Congélateurs')}}>Congélateurs</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Laveuses')}}>Laveuses & Sécheuses</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Gazinières')}}>Gazinières</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Maison & Ameublement
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <p className="btn__filter" onClick={()=>{filterResult('Meubles')}}>Meubles</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Lampes')}}>Lampes</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Décoration')}}>Décoration</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Literie')}}>Literie</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Salle de bain')}}>Salle de bain</p>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" id="cata" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Air & Climatisation
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <p className="btn__filter" onClick={()=>{filterResult('Climatiseurs')}}>Climatiseurs</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Ventilateurs')}}>Ventilateurs</p>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        Jardin & Plein air
                </button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Éclairage')}}>Éclairage</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Grillades')}}>Grillades & Barbecue</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Jardinage')}}>Jardinage & Entretien</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingEight">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                        Bricolage & Rénovation
                </button>
                </h2>
                <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Outils à main')}}>Outils à main</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Ampoules')}}>Ampoules</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Electricité')}}>Electricité</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Peintures')}}>Peintures & Enduits</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTen">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                       Papeterie
                </button>
                </h2>
                <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                <p className="btn__filter" onClick={()=>{filterResult('Chemises')}}>Loisirs créatifs</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Portefeuille')}}>Fourniture scolaire</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div className="part__products">

       <div className="part__accessories">
          {items.map((item) => <div key={item.id}className='featured__product__cards'>
                        <div className='product__cards__header'>
                        <p className='sales'>{item.title}</p>
                           <div className='featured__product__cards__header__images'>
                           <Link to={`/detail/${item.id}`}><img src={`${process.env.PUBLIC_URL}/${item.img}`} alt="" /></Link>
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                {/* <h5 className='product__title'>{article.title}</h5> */}
                                <p className='product__desc'>{item.description}</p>
                                <p className='brand'>Apple</p>
                               <h5 className='product__categorie'>Smartphone</h5>
                               <p className="reference">Réf:ECMHDEDIPACCHCB3</p>
                                <p className="info">2 en stock</p>
                               <p className='product__price'>{item.price} FCFA</p>
                               <div className='button--block'>
                               <Link className='link__btn' to='/detail'><button className='btn__buy'>Acheter</button></Link>
                               <button className='btn__add'>+</button>
                               
                               
                                </div>  
                        </div>
                    </div> 

                    
                        )}
                    
          </div>
       </div>

        </div>
        </div>
        <Footer/>
     </div>
    );
}