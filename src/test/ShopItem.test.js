import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItem from "../Components/ShopItem";

//setup

jest.mock('../Components/Item', () => ({ children }) => <div> {children} </div>);

const handleAdd = jest.fn();

test('The add button is called exactly once when clicked', () => {

    render(<ShopItem
        add={handleAdd}
    />);

    const addButon = screen.getByRole('button', { name: /add to cart/i });
    userEvent.click(addButon);
    expect(handleAdd).toBeCalledTimes(1);
});

test('The add button calls its assigned function with the right param', () => {

    render(<ShopItem
        add={handleAdd}
        id = {123}
    />);

    const addButon = screen.getByRole('button', { name: /add to cart/i });
    userEvent.click(addButon);
    expect(handleAdd).toHaveBeenCalledWith(123);
})