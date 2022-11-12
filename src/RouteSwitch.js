import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/cart' element={<Cart />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;