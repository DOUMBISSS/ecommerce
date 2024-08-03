// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        {/* <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
            </ul>
        </nav> */}
        <div className='header__bar'>
          <Link className='liste' to="/"><i className="fa-solid fa-bars"></i> Accueil</Link>
          <Link className='liste' to='/tv__audios'><i className="fa-solid fa-person-dress"></i> TV & Audios</Link>
          <Link className='liste' to='/electromenager'><i className="fa-solid fa-person-dress"></i> Electroménager</Link>
          <Link className='liste' to='/climatisation'><i className="fa-solid fa-baby"></i> Climatisation</Link>
          <Link className='liste' to='/accessoires'> <i className="fa-solid fa-wand-magic-sparkles"></i> Accessoires</Link>
          <Link className='liste' to='/store-all'> <i className="fa-solid fa-laptop"></i> Nos magasins</Link>
          <Link className='liste' to='/informatiques'> <i className="fa-solid fa-laptop"></i> Informatiques</Link>
          <Link className='liste' to='/smartphones'><i className="fa-solid fa-mobile"></i> Smartphones & Tablettes</Link>
          <Link className='liste' to='/contact'><i className="fa-solid fa-phone"></i> Contact</Link>
                <Link className='liste' to="/cart">Cart</Link>
                <Link className='liste' to="/favorites">Favorites</Link>
    </div>
  </div>
    );
};

export default Navbar;