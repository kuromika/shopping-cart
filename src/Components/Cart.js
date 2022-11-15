import React from "react";

const Cart = (props) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <div className="items">
                {/* add cart items */}
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