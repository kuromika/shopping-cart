import React, { useEffect, useRef } from "react";
import Item from "./Item";

const CartItem = (props) => {

    const addButton = useRef(null);
    const removeButton = useRef(null);

    useEffect(() => {

        const handleAdd = (e) => {
            props.add(props.id);
        }

        const handleRemove = (e) => {
            props.remove(props.id);
        }

        const addElement = addButton.current;
        const removeElement = removeButton.current;

        addElement.addEventListener('click', handleAdd);
        removeElement.addEventListener('click', handleRemove);

        return () => {
            addElement.removeEventListener('click', handleAdd);
            removeElement.removeEventListener('click', handleRemove);
        }

    }, [props]);

    return (
        <Item img={props.img} alt={props.alt} name={props.name} price={props.price * props.quantity}>
            <div className="cart-item-buttons">
                <button type="button" ref={removeButton}> - </button>
                <span>{props.quantity}</span>
                <button type="button" ref={addButton}> + </button>
            </div>
        </Item>
    )
}

export default CartItem;