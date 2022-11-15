import React from "react";
import ShopItem from "./ShopItem";

const Shop = (props) => {
    return (
        <div className="shop">
            <h2>Our Products</h2>
            <div className="grid">
                {props.products.map((product) =>
                    <ShopItem
                        img={product.image}
                        key={product.id}
                        name={product.title}
                        price={product.price}
                        desc={product.description}
                    ></ShopItem>)}
            </div>
        </div>
    )
}

export default Shop;