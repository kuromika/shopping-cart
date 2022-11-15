import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <div className="items">
                {props.items.map( (item) => 
                    <CartItem
                        key={item.id}
                        img={item.image}
                        desc={item.desc}
                        name={item.title}
                        price={item.price}
                        quantity={item.quantity}
                    ></CartItem>)}
            </div>
            
            <div className="checkout">
                <div className="cart-total">
                    <span>Total: </span>
                    <span>{props.total}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart;