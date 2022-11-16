import React from "react";
import ShopItem from "./ShopItem";

const Shop = (props) => {
    return (
        <div className="shop">
            <div className="grid" role='grid'>
                {props.products.map((product) =>
                    <ShopItem
                        img={product.image}
                        key={product.id}
                        id = {product.id}
                        name={product.title}
                        price={product.price}
                        desc={product.description}
                        add = {props.add}
                    ></ShopItem>)}
            </div>
        </div>
    )
}

export default Shop;