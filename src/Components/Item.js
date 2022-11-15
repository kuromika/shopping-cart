import React from "react";

const Item = (props) => {
    return (
        <div className='item'>
            <div className="item-details">
                <img src={props.img} alt={props.alt}></img>
                <div className='item-info'>
                    <span className="item-name">{props.name}</span>
                    <span className="item-price">${props.price.toFixed(2)}</span>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Item;