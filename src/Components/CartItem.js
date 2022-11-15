import React, { useEffect, useRef } from "react";
import Item from "./Item";

const CartItem = (props) => {

    const addButton = useRef(null);
    const removeButton = useRef(null);

    useEffect(() => {

        const handleAdd = (e) => {
            props.add(props.id);
        }

        const addElement = addButton.current;

        addElement.addEventListener('click', handleAdd);

        return () => {
            addElement.removeEventListener('click', handleAdd);
        }

    }, [props]);

    return (
        <Item img={props.img} alt={props.alt} name={props.name} price={props.price}>
            <div className="cart-item-buttons">
                <button type="button"> - </button>
                <span>{props.quantity}</span>
                <button type="button" ref={addButton}> + </button>
            </div>
        </Item>
    )
}

export default CartItem;