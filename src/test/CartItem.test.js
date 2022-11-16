import React from "react";
import { screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CartItem from "../Components/CartItem";


//tests

describe('Add button works properly', () => {

    

    test('Add button is called exactly once', () => {

        const handlePlus = jest.fn();

        render(
            <CartItem
                add={handlePlus}
            />
        );

        const addButton = screen.getByRole('button', { name: /\+/i });
        userEvent.click(addButton);
        expect(handlePlus).toHaveBeenCalledTimes(1);
    });

    /* 
    this probably should be tested in RouteSwitch(the component that updates the state!!)
    as specified here: https://testing-library.com/docs/react-testing-library/api/#rerender 
    */
    test('Add button increases quantity correctly', () => {

        let q = 0;

        const handlePlus = jest.fn(() => {
            q += 1;
        });

        const { rerender } = render(
            <CartItem
                add={handlePlus}
                quantity= {q}
            />
        );

        const quantitySpan = screen.getByText('0');
        const addButton = screen.getByRole('button', { name: /\+/i });
        userEvent.click(addButton);
        rerender(<CartItem quantity={q}/>)
        expect(quantitySpan).toHaveTextContent('1');
    });
});

describe('Minus button works properly', () => {

    test('Minus button is called exactly once', () => {
        const handleMinus = jest.fn();

        render(<CartItem
            remove={handleMinus}
        />);

        const minusButton = screen.getByRole('button', { name: /-/i });
        userEvent.click(minusButton);
        expect(handleMinus).toBeCalledTimes(1);
    });
})

test('Quantity span displays the correct number', () => {

    render(<CartItem
        quantity= {1}
    />)

    const quantitySpan = screen.getByLabelText('quantity');
    expect(quantitySpan).toHaveTextContent('1');
})