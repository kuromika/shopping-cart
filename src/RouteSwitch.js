import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Home/>} />
                    <Route path='home' element={<Home />} />
                    <Route path='shop' element={<Shop />} />
                    <Route path='cart' element={<Cart />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;