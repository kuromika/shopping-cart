import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <div className="items">
                {props.items.length === 0 ? <h1> Add items to your cart</h1> :
                    props.items.map( (item) => 
                        <CartItem
                            key={item.id}
                            img={item.image}
                            desc={item.desc}
                            name={item.title}
                            price={item.price}
                            id = {item.id}
                            quantity={item.quantity}
                            add={props.add}
                            remove={props.rm}
                        ></CartItem>)
                }
            </div>

            <div className="checkout">
                <div className="cart-total">
                    <span>Total: </span>
                    <span>{props.total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart;