import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact1 from './pages/Contact1';
import About1 from './pages/About1';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Pnf from './pages/Pnf';
import CheckOut from './component/CheckOut';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Addproduct from './component/AddProduct';
import Allproductpage from './Some-Product-Components/Allproductpage';
import Specificproductpage from './Some-Product-Components/Specificproductpage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/contact" element={<Contact1 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} >
          <Route path='mobile' element={<Allproductpage />} />
        </Route>
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addproduct" element={<Addproduct />} />

        <Route exact path="/product/:type/:id" element={<Specificproductpage />} />
        <Route exact path="/cartdata" element={<Cart />} />

      </Routes>
    </Router>
  );
}

export default App;
