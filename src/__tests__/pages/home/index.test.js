import { render, screen } from "@testing-library/react";
import { NativeBaseProvider } from "native-base";
import Home from "../../../pages/home/index";

test("renders correctly", () => {
  render(
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
  const titleElement = screen.getByText(/FairPay/i);
  const membersHeading = screen.getByText(/Members/i);
  const ordersHeading = screen.getByText(/Orders/i);
  const checkoutHeading = screen.getByText(/Checkout/i);
  expect(titleElement).toBeInTheDocument();
  expect(membersHeading).toBeInTheDocument();
  expect(ordersHeading).toBeInTheDocument();
  expect(checkoutHeading).toBeInTheDocument();
});
