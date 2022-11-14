import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";

const App = () => {
  
  return (
    <>
      <header>
        <Nav/>
      </header>
      
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App;
