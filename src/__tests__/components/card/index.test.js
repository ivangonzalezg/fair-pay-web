import { render } from "@testing-library/react";
import Card from "../../../components/card";

test("renders correctly", () => {
  const { container } = render(<Card visible={false} />);
  expect(container).toBeEmptyDOMElement();
});
