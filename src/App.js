import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Shop from "./pages/shop/Shop.jsx";
import { Cart } from "./pages/cart/Cart.jsx";
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;

