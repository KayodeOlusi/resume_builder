import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import SignUpForm from "../SignUpForm";

const MockSignUpForm: FC = () => (
  <BrowserRouter>
    <SignUpForm />
  </BrowserRouter>
);

describe("SignUp Page Test", () => {
  it("should render the signup page", () => {
    render(<MockSignUpForm />);
    const signupElement = screen.getByTestId("form_id");
    expect(signupElement).toBeInTheDocument();
  });

  it("should change the input values when the user types on the fields", () => {
    render(<MockSignUpForm />);
    const nameInput = screen.getByPlaceholderText(
      /Enter Your Fullname/i
    ) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText(
      /Enter Your Email/i
    ) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      /Enter Your Password/i
    ) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });
    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("johndoe@gmail.com");
    expect(passwordInput.value).toBe("12345678");
  });

  it("should clear the input fields when user clicks a button", () => {
    render(<MockSignUpForm />);
    const nameInput = screen.getByPlaceholderText(
      /Enter Your Fullname/i
    ) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText(
      /Enter Your Email/i
    ) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      /Enter Your Password/i
    ) as HTMLInputElement;
    const submitButton = screen.getByText(/Sign Up/i);
    fireEvent.click(submitButton);
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });

  afterAll(cleanup);
});
