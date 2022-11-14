import React from "react";
import Item from "./Item";

const CartItem = (props) => {

    return (
        <Item>
            <div className="cart-item-buttons">
                <button type="button"> - </button>
                <span>{props.quantity}</span>
                <button type="button"> + </button>
            </div>
        </Item>
    )
}

export default CartItem;