import { render, screen } from "@testing-library/react";
import { NativeBaseProvider } from "native-base";
import Orders from "../../../../../pages/home/components/orders";

test("renders correctly", () => {
  render(
    <NativeBaseProvider>
      <Orders
        visible
        members={[]}
        orders={[]}
        onAddOrder={() => {}}
        onUpdateOrder={() => {}}
        onRemoveOrder={() => {}}
        onNext={() => {}}
        nextDisabled={false}
      />
    </NativeBaseProvider>
  );
  const addMemberButton = screen.getByText(/Add order/i);
  const nextButton = screen.getByText(/Next/i);
  expect(addMemberButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});
