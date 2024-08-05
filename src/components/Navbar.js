import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext,useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useUser } from '../context/UserContext';

const Navbar = ({ user, onLogout }) => {
  const [nav , setNav] = useState(false);
  const [cartShop , setCartShop] = useState(false);
  const [display,setDisplay]=useState(false);
  const[menu,setMenu]=useState(false);
  const [search,setSearch]=useState("");
  

    const openLog = ()=>{
        setNav(true)
      }
  
      const showCart =()=>{
        setCartShop (true)
    }
  
    const showProfil =()=>{
      setDisplay(true)
    }
    const closeProfil =()=>{
      setDisplay(false)
    }
    const showMenu = () =>{
      setDisplay(true)
  }
  const affi = ()=> {
    setDisplay (false)
  }

    const { cart, dispatch } = useContext(CartContext);

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // const { user, dispatch } = useContext(UserContext);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <div>
        <div className='navbar'>
           <div className="navbar--left">
          <div className='icon--menu' >
               <i className="fa-solid fa-bars"></i>
               </div>
            <div className="navbar--logo">
            <div className='nav__icon'>
               <i className="fa-solid fa-bars"></i>
               </div>
            <Link to="/" className='header__title'><h5>ELETRO<span>SHOP</span></h5></Link>
              {/* <Link to="/"> <img src={`${process.env.PUBLIC_URL}/easy.png`} alt=""/></Link> */}
              {/* <img src="" alt="" /> */}
            </div>
          </div>
          <div className="navbar--center">
            <div className="navbar--center--content">
              <div className="col-3 col-md-8">
                <form class="d-flex" role="search">
                <input class="form-control me-3" type="search" placeholder="Cherchez un produit , une marque ou une categorie..." aria-label="Search" />
                <button class="btn btn-outline-success" >Search</button>
                {/* <Link className='liste' to="/">Accueil</Link> */}
              </form>
              </div>
            </div>
            <div className='logo--resp'>
              <div className="navbar--logo--resp">
                {/* <Link to="/"> <img src={`${process.env.PUBLIC_URL}/easy.png`} alt=""/></Link> */}
                <Link to="/" className='header__title'><h5>ELECTRO<span>SHOP</span></h5></Link>
              </div>
            </div>
          </div>

        
          <div className="navbar--right">
          <div className="navbar--right--content">
          <Link className='liste' to="/store-all"><i className="fa-solid fa-house"></i>  Nos magasins</Link>
                       <div className='icons'>
                       <div>
                       <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i> </Link>
                       <Link to="/cart"> <div className="icon__counter">({cart.length})</div></Link>
                       </div>
                        {/* <div className="icon--cart">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <div className="counter"></div>
                    </div> */}
                       </div>
                       <Link className='liste' to="/loginPage" ><button className="btn--connexion"><i className="fa-solid fa-user"></i> Connexion </button></Link>
                       {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
                  </div>
          </div>
         </div>
        {/* <div className='header__bar'>
          <Link className='liste' to="/"><i className="fa-solid fa-bars"></i> Accueil</Link>
          <Link className='liste' to='/smartphones'><i className="fa-solid fa-mobile"></i> Smartphones & Tablettes</Link>
          <Link className='liste' to='/tv__audios'><i className="fa-solid fa-person-dress"></i> TV & Audios</Link>
          <Link className='liste' to='/electromenager'><i className="fa-solid fa-person-dress"></i> Electroménager</Link>
          <Link className='liste' to='/climatisation'><i className="fa-solid fa-baby"></i> Climatisation</Link>
          <Link className='liste' to='/accessoires'> <i className="fa-solid fa-wand-magic-sparkles"></i> Accessoires</Link>
          <Link className='liste' to='/store-all'> <i className="fa-solid fa-laptop"></i> Nos magasins</Link>
          <Link className='liste' to='/informatiques'> <i className="fa-solid fa-laptop"></i> Informatiques</Link>
          <Link className='liste' to='/informatiques'> <i className="fa-solid fa-laptop"></i> Informatiques</Link>
          <Link className='liste' to='/informatiques'> <i className="fa-solid fa-laptop"></i> Informatiques</Link>
          <Link className='liste' to='/contact'><i className="fa-solid fa-phone"></i> Contact</Link>
                <Link className='liste' to="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart ({cart.length})</Link>
                <Link className='liste' to="/favorites"><i class="fa-solid fa-heart"></i> Favorites</Link>
    </div> */}
    <div className='header__bar'>
            
                    <Link className='liste' to="/"><i className="fa-solid fa-bars"></i> Accueil</Link>
                    <Link className='liste' to='/Smartphones'><i className="fa-solid fa-mobile"></i> Smartphones & Tablettes  </Link>
                    <Link className='liste' to='/informatiques'><i className="fa-solid fa-laptop"></i> Informatique </Link>
                    <Link className='liste' to='/electromenager'> <i className="fa-solid fa-layer-group"></i> Electroménager  </Link>
                    <Link className='liste' to='/electronique'><i className="fa-solid fa-business-time"></i> Electronique </Link>
                    <Link className='liste' to='/fashion'><i className="fa-solid fa-person-dress"></i> Mode & Accessoires </Link>
                    <Link className='liste' to='/Beauty'><i className="fa-solid fa-wand-magic-sparkles"></i> Beauté & Hygiènes</Link>
                    <Link className='liste' to='/game'><i className="fa-solid fa-gamepad"></i> Jeux Vidéo & Consoles </Link>
                    <Link className='liste' to='/houses'><i className="fa-solid fa-house"></i> Maison & Déco </Link>
                    <Link className='liste' to="/favorites"><i class="fa-solid fa-heart"></i> Favorites</Link>
                    <Link className='liste' to='/recherche__piece'><i className="fa-solid fa-magnifying-glass"></i> Trouver la pièce</Link>
             
        
      </div>
  </div>
    );
};

export default Navbar;