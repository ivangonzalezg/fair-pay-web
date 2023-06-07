import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders correctly", () => {
  render(<App />);
  const titleElement = screen.getByText(/FairPay/i);
  expect(titleElement).toBeInTheDocument();
});
