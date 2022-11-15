import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import App from './App';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

const RouteSwitch = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        fetch("https://fakestoreapi.com/products", controller.signal)
            .then(res => res.json())
            .then(json => setProducts(json));

        return () => {
            controller.abort();
        }
    
    }, []);

    const addCartItem = (id) => {
        const toAdd = products.find((product) => product.id === id);
        setCart( (prev) => [...prev, toAdd]);
    }
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Home/>} />
                    <Route path='home' element={<Home />} />
                    <Route path='shop' element={<Shop products={products} add={addCartItem} />} />
                    <Route path='cart' element={<Cart items={cart} />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;