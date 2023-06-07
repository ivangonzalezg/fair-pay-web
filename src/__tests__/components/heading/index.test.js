import { render, screen } from "@testing-library/react";
import { NativeBaseProvider } from "native-base";
import Heading from "../../../components/heading";

test("renders correctly", () => {
  render(
    <NativeBaseProvider>
      <Heading label="Orders" isOpen={false} onPress={() => {}} />
    </NativeBaseProvider>
  );
  const label = screen.getByText(/Orders/i);
  expect(label).toBeInTheDocument();
});
