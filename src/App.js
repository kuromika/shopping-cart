import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "./Components/Nav";

const App = () => {
  
  return (
    <>
      <header>
        <Link to='home'><h1>Tica·α</h1></Link>
        <Nav/>
      </header>

      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App;
