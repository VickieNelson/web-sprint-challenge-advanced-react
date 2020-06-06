import React from "react";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  //Arrange
  const { getByText } = render(<CheckoutForm />);

  //Act
  const header = getByText(/checkout form/i);

  //Assert
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  //Arrange -> query for inputs and have change event run
  //const (getByText, getByTestId, rerender, getByLabelText) = render(<CheckoutForm />)

  render(<CheckoutForm />);
  //variable values
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipcodeInput = screen.getByLabelText(/zip/i);

  fireEvent.change(firstNameInput, { target: { value: "Vickie" } });
  fireEvent.change(lastNameInput, { target: { value: "Nelson" } });
  fireEvent.change(addressInput, { target: { value: "123 Main St" } });
  fireEvent.change(cityInput, { target: { value: "Nashville" } });
  fireEvent.change(stateInput, { target: { value: "TN" } });
  fireEvent.change(zipcodeInput, { target: { value: "33333" } });

  //expected to pass
  expect(firstNameInput.value).toBe("Vickie");
  expect(lastNameInput.value).toBe("Nelson");
  expect(addressInput.value).toBe("123 Main St");
  expect(cityInput.value).toBe("Nashville");
  expect(stateInput.value).toBe("TN");
  expect(zipcodeInput.value).toBe("33333");

  //purposefully fail test
  //   const getName = getByText(/vickie/i);

  //checkout button click
  const checkoutBtn = screen.getByText("Checkout");
  fireEvent.click(checkoutBtn);

  //name visible on screen
  const seeName = screen.getByText(/vickie/i);
  expect(seeName).toBeInTheDocument();

  //success message

  const successMsg = screen.getByTestId(/successMessage/i);
  expect(successMsg).toBeInTheDocument();

  //re-render

  //   renderIntoDocument(<CheckoutForm />);
});
