import { render, screen } from "@testing-library/react";
import { NativeBaseProvider } from "native-base";
import Members from "../../../../../pages/home/components/members";

test("renders correctly", () => {
  render(
    <NativeBaseProvider>
      <Members
        visible
        members={[]}
        onAddMember={() => {}}
        onUpdateMember={() => {}}
        onRemoveMember={() => {}}
        onNext={() => {}}
        nextDisabled={false}
      />
    </NativeBaseProvider>
  );
  const addMemberButton = screen.getByText(/Add member/i);
  const nextButton = screen.getByText(/Next/i);
  expect(addMemberButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});
