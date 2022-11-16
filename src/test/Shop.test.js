import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shop from '../Components/Shop';


//setup

const products = [
    { price: 1, id: 1 },
    { price: 2, id: 2 },
    { price: 3, id: 3 }
];

test('Displays an empty grid when products is emtpy', () => {

    render(<Shop
        products= {[]}
    />);

    const grid = screen.getByRole('grid');
    expect(grid).toBeEmptyDOMElement();

})

test('Renders all the products as grid cells', () => {

    render(<Shop
        products = {products}
    />)

    const gridCells = screen.getAllByRole('gridcell');

    expect(gridCells.length).toBe(3);
});