import React ,{useEffect} from 'react'
import './App.css';
import NavBar from './component/navBar';
import Home from './component/Home';
import Products from './component/Products';
import { Routes, Route, Link } from "react-router-dom";
import Slider from './component/Home/Slider';
import Product from './component/Product';
import CardProduct from './component/CardProduct';
import CheckOut from './component/CheckOut';
import BeatSelling from './component/TopProduct/BeatSelling'
import Letest from './component/TopProduct/Letest'
import TopReated from './component/TopProduct/TopReated'
import Futtor from './component/futtor';
import Demo from './component/ProductCat'
import ProductCatogery from './component/ProductCatogery';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/card" element={<CardProduct />} />
        <Route path="/productcatogery/:id" element={<ProductCatogery />} />
        <Route path="/checkout" element={<CheckOut />} />
        {/* <Route path="/productcatogery/:id" element={<ProductCatogery />} />
        
        <Route path="/products" element={<Products />} />       
         */}
      </Routes>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6"><Letest /> </div>
          <div className="col-lg-4 col-md-6"><BeatSelling /> </div>
          <div className="col-lg-4 col-md-6"><TopReated /> </div>
        </div>
      </div>
      <Futtor />
    </div>
  );
}

export default App;
