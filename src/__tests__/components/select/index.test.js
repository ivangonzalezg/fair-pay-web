import { render, screen } from "@testing-library/react";
import { NativeBaseProvider } from "native-base";
import Select from "../../../components/select";

test("renders correctly", () => {
  render(
    <NativeBaseProvider>
      <Select items={[{ value: "1", label: "John Doe" }]} value="1" placeholder="Select a member" onChange={() => {}} />
    </NativeBaseProvider>
  );
  const optionLabel = screen.getByText(/John Doe/i);
  expect(optionLabel).toBeInTheDocument();
});
