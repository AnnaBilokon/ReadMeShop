
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

function App() {
  return (
    <div>
		<BrowserRouter>
		
      <Navbar/>
	  <Routes>
		<Route path='/' element={<Home/>}/>
		<Route path='/romance' element={<ShopCategory banner={banner} category='romance'/>}/>
		<Route path='/fantasy' element={<ShopCategory banner={banner_1} category='fantasy'/>}/>
		<Route path='/litFiction' element={<ShopCategory banner={banner} category='literaly_fiction'/>}/>
		<Route path='/product' element={<Product/>}> 
		<Route path=':productId' element={<Product/>}/>
		</Route>
		<Route path='/cart' element={<Cart/>}/>
		<Route path='/login' element={<LoginSignUp/>}/>
		 
	  </Routes>
	  <Footer/>
	  </BrowserRouter>
    </div>
  );
}

export default App;
