import React, { Children } from "react";

const Item = (props) => {
    return (
        <div className='item'>
            <div className="item-details">
                <img src={props.img} alt={props.alt}></img>
                <div className='item-info'>
                    <span className="item-name">{props.name}</span>
                    <span className="item-price">{props.price}</span>
                </div>
            </div>
            <Children></Children>
        </div>
    )
}

export default Item;