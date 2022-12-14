import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import Layout from './Layout';
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
        const index = cart.findIndex((item) => item.id === id);
        if (index !== -1) {
            const newArr = [...cart];
            newArr[index].quantity += 1;
            setCart(newArr);
            return;
        }
        const toAdd = {
            quantity: 1,
            ...products.find((product) => product.id === id)
        }
        setCart( (prev) => [...prev, toAdd]);
    }

    const removeCartItem = (id) => {
        const index = cart.findIndex((item) => item.id === id);
        const newCart = [...cart];
        if (newCart[index].quantity === 1) {
            newCart.splice(index, 1);
        } else {
            newCart[index].quantity -= 1;
        }
        setCart(newCart);
    }
    
    return (
        <BrowserRouter basename='shopping-cart'>
            <Routes>
                <Route path='/' element={<Layout
                    cartSize={cart.reduce((a, b) => a + b.quantity, 0)} />}>
                    
                    <Route index element={<Home />} />
                    
                    <Route path='home' element={<Home />} />

                    <Route path='shop' element={
                        <Shop products={products} add={addCartItem} />} />
                    
                    <Route path='cart' element={
                        <Cart items={cart} add={addCartItem} rm={removeCartItem}
                            total={ cart.reduce((a,b) => a + b.price * b.quantity, 0)} />} /> 
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;