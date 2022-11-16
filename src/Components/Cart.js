import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="items" role='list'>
                {props.items.length === 0 ? <h2> Add items to your cart</h2> :
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
                    <span aria-label="total">{props.total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart;