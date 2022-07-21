import { cleanup, render, screen } from "@testing-library/react";

import Hero from "../Hero";
import Offers from "../Offers";
import Explore from "../Explore";
import Register from "../Register";
import Companies from "../Companies";
import Testimonials from "../Testimonials";

describe("Landing Page Component Tests", () => {
  // Test the Hero component
  it("should render the Hero component", () => {
    render(<Hero />);
    const heroElement = screen.getByTestId("hero");
    expect(heroElement).toBeInTheDocument();
  });

  // Test the Offers component
  it("should render the Offers component", () => {
    render(<Offers />);
    const offersElement = screen.getByTestId("offers");
    expect(offersElement).toBeInTheDocument();
  });

  // Test the Explore Component
  it("should render the Explore component", () => {
    render(<Explore />);
    const exploreElement = screen.getByTestId("explore");
    expect(exploreElement).toBeInTheDocument();
  });

  // Test the Register Component
  it("should render the Register component", () => {
    render(<Register />);
    const registerElement = screen.getByTestId("register");
    expect(registerElement).toBeInTheDocument();
  });

  // Test the Companies Component
  it("should render the Companies component", () => {
    render(<Companies />);
    const companiesElement = screen.getByTestId("companies");
    expect(companiesElement).toBeInTheDocument();
  });

  // Test the Testimonials Component
  it("should render the Testimonials component", () => {
    render(<Testimonials />);
    const testimonialsElement = screen.getByTestId("testimonials");
    expect(testimonialsElement).toBeInTheDocument();
  });

  afterAll(cleanup);
});
