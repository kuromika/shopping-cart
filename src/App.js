import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "./Components/Nav";

const App = (props) => {
  
  return (
    <>
      <header>
        <Link to='home'>Tica·α</Link>
        <Nav cartSize={props.cartSize} />
      </header>

      <main>
        <Outlet/>
      </main>
    </> 
  )
}

export default App;
