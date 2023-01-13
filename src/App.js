import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import CartContainer from './components/cart/CartContainer';
import { CartContext, CartProvider } from './components/context/CartContext';
import { useContext } from 'react';

function App() {
  const cartAmount = useContext(CartContext)

  return (

    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='item/:id' element={<ItemDetailContainer/>}/>
            <Route path='category/:idCategory/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/carrito' element={<CartContainer/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
