import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { NotFound } from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Context/CartContext';
import { ProductDetail } from './Components/ProductDetail/ProductDetail';
import CartDetail from './Components/Cart/CartDetail';
import Footer from './Components/Footer/Footer';
import FavProvider from './Components/Context/FavContext';
import { Checkout } from './Components/Checkout/Checkout';

function App() {
  return (
    <CartProvider>
      <FavProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/category/:categoryId' element={<Home></Home>}></Route>
            <Route path='/productdetail/:id' element={<ProductDetail></ProductDetail>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/cart/detail' element={<CartDetail></CartDetail>}></Route>
            <Route path='/checkout/:idCompra' element={<Checkout></Checkout>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </FavProvider>
    </CartProvider>
  );
}

export default App;
