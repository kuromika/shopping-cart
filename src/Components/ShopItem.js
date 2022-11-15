import React from "react";
import Item from "./Item";

const ShopItem = (props) => {

    return (
        <Item img={props.img}
            key={props.id} alt={props.desc}
            name={props.name} price={props.price}>
            <button type="button"> add </button>
        </Item>
    )
}

export default ShopItem;