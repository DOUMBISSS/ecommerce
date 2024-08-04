import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import CartPage from './Pages//CartPage';
import FavoritesPage from './Pages/FavoritesPage';
import ProductPage from './Pages/ProductPage';
import NotFoundPage from './Pages/NotFoundPage';
import CartContextProvider from './context/CartContext';
import FavoritesContextProvider from './context/FavoritesContext';
import ProductDetail from './components/ProductDetail';
import Formulaire from './Pages/Formulaire';
import Accessoires from './Pages/Accessoires';
import Climatisation from './Pages/Climatisation';
import Electromenager from './Pages/Electromenager';
import Smartphones from './Pages/Smartphones';
import All from './Pages/All';
import Store from './Pages/Store';
import Identification from './Pages/Identification';
import Informatiques from './Pages/Informatiques';
import Beauty from './Pages/Beauty';
import House from './Pages/House';
import Fashion from './Pages/Fashion';
import Game from './Pages/Game';
import Electronique from './Pages/Electronique';
import Contact from './Pages/Contact';

const App = () => {
    return (
        <CartContextProvider>
            <FavoritesContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/smartphones" element={<Smartphones />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                        <Route path='/informatiques' element={<Informatiques />}/>
                        <Route path='/Beauty' element={<Beauty/>}/>
                        <Route path='/houses' element={<House/>}/>
                        <Route path='/fashion' element={<Fashion/>}/>
                        <Route path='/electronique' element={<Electronique/>}/>
                        <Route path='/game' element={<Game/>}/>
                        <Route path='/accessoires' element={<Accessoires/>}/>
                        <Route path='/climatisation' element={<Climatisation/>}/>
                        <Route path='/electromenager' element={<Electromenager/>}/>
                        <Route path='/recherche__piece' element={<Identification/>}/>
                        <Route path='/all' element={<All/>}/>
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/store-all' element={<Store/>}/>
                        <Route path='/formulaire' element={<Formulaire/>} />
                        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Router>
            </FavoritesContextProvider>
        </CartContextProvider>
    );
};

export default App;