import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Cart from "../Components/Cart";

//setup

const items = [
    { title: 'first item' },
    { title: 'second item' },
    { title: 'third item' }
];

//tests

describe('Cart is rendered properly', () => {
    
    test('Renders "Add items to your cart" when no items are passed', () => {
        const { container } = render(
        <Cart
            items={[]}
            total = {0}
        />);
        const heading = screen.getByRole('heading', {level:2});
        expect(heading.textContent).toMatch(/Add items to your cart/i);
        expect(container).toMatchSnapshot();
    })

    test('Renders the right amount of items', () => {

        render(<Cart
            items={items}
            total = {0}
        />)

        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(3);
    });

    test('Renders the right total with exactly 2 decimals', () => {

        render(<Cart
            items={[]}
            total={123.12345}
        />);

        const totalSpan = screen.getByLabelText('total');
        expect(totalSpan.textContent.length).toBe(6);
    })

})