import { render, screen } from "@testing-library/react";
import { NativeBaseProvider } from "native-base";
import Checkout from "../../../../../pages/home/components/checkout";

test("renders correctly", () => {
  render(
    <NativeBaseProvider>
      <Checkout visible members={[{ id: "1", name: "John Doe" }]} orders={[]} />
    </NativeBaseProvider>
  );
  const addMemberButton = screen.getByText(/John Doe/i);
  expect(addMemberButton).toBeInTheDocument();
});
