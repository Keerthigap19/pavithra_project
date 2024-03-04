
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import accessory_banner from'./Components/Assets/banner2.jpg'
import dry_food_banner from './Components/Assets/banner4.jpg'
import wet_food_banner from './Components/Assets/banner1.jpg'
import suppliments_banner from'./Components/Assets/banner3.jpg'
import Login from './Pages/Login';
import Loginopt from './Pages/Loginopt';
import Adminlogin from'./Pages/Adminlogin';
import About from './Pages/About';
import Adminpage from './Pages/Adminpage';
import Add_product from'./Pages/Add_product';
import Payment from'./Pages/Payment';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
    <Routes>
     
    <Route path='/' element={<Shop category="shop"/>}/>
        <Route path='/accessories' element={<ShopCategory banner={accessory_banner}category="accessories"/>}/>
        <Route path='/dryfood' element={<ShopCategory banner={dry_food_banner}category="dryfood"/>}/>
        <Route path='/wetfood' element={<ShopCategory banner={wet_food_banner}category="wetfood"/>}/>
        <Route path='/suppliments' element={<ShopCategory banner={suppliments_banner}category="suppliments"/>}/>
        <Route path='/product' element={<Product category=""/>}>
          <Route path=':productId' element={<Product/>}/>
          
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/first' element={<Loginopt/>}/>
        <Route path='/userlogin' element={<Login/>}/>
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/adminpage' element={<Adminpage/>}/>
        <Route path='/addproduct'element={<Add_product/>}/>
        <Route path='/allproduct' element={<all_product/>}/>
        <Route path='/payment' element={<Payment/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
