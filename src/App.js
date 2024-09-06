
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';
import banner from './components/assets/banner.png';
import banner_1 from './components/assets/banner_1.png';
import Footer from './components/Footer/Footer';
import Categories from './pages/Categories';

function App() {
  return (
    <>
		<BrowserRouter>
		
      <Navbar/>
	  <Routes>
		<Route path='/' element={<Home/>}/>
		<Route path='/shop' element={<ShopCategory banner={banner} category='shop'/>}/>
		<Route path='/categories' element={<Categories banner={banner_1} category='categories'/>}/>
		<Route path='/events' element={<ShopCategory banner={banner} category='events'/>}/>
		<Route path='/product' element={<Product/>}> 
		<Route path=':productId' element={<Product/>}/>
		</Route>
		<Route path='/cart' element={<Cart/>}/>
		<Route path='/login' element={<LoginSignUp/>}/>
		 
	  </Routes>
	  <Footer/>
	  </BrowserRouter>
    </>
  );
}

export default App;
