import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <Link to='home'>Home</Link>
            <Link to='shop'>Shop</Link>
            <Link to='cart'>Cart</Link>
        </nav>
    )
}

export default Nav