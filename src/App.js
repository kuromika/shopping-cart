import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "./Components/Nav";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://fakestoreapi.com/products", controller.signal)
      .then(res => res.json())
      .then(json => setProducts(json));

    return () => {
      controller.abort();
    }
    
  },[])
  
  return (
    <>
      <header>
        <Link to='home'>Tica·α</Link>
        <Nav/>
      </header>
      
      <main>
        <Outlet/>
      </main>
    </> 
  )
}

export default App;
