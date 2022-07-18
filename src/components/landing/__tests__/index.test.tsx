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

  afterAll(cleanup);
});
