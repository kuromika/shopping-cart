import React, { useEffect, useRef } from "react";
import Item from "./Item";

const ShopItem = (props) => {

    const ref = useRef(null);

    useEffect(() => {

        const handleClick = (e) => {
            props.add(props.id);
        }

        const element = ref.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        }

    }, [props]);

    return (
        <Item img={props.img} alt={props.desc}
            name={props.name} price={props.price} role='gridcell'>
            <button type="button" ref={ref}> add to cart </button>
        </Item>
    )
}

export default ShopItem;