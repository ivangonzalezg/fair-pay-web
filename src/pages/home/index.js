import React, { useState } from "react";
import { Text, VStack } from "native-base";
import Heading from "../../components/heading";

const steps = {
  MEMBERS: 0,
  ORDERS: 1,
  CHECKOUT: 2,
};

function HomePage() {
  const [step, setStep] = useState(steps.MEMBERS);

  return (
    <VStack safeArea paddingX={2} paddingY={2} overflowY="scroll" maxWidth={700} alignSelf="center" width="full">
      <Text bold fontSize="2xl" textAlign="center" marginBottom={3}>
        FairPay
      </Text>
      <Heading label="Members" isOpen={step === steps.MEMBERS} onPress={() => setStep(steps.MEMBERS)} />
      <Heading
        label="Orders"
        isOpen={step === steps.ORDERS}
        onPress={() => setStep(steps.ORDERS)}
        // disabled={disabledOrders}
      />
      <Heading
        label="Checkout"
        isOpen={step === steps.CHECKOUT}
        onPress={() => setStep(steps.CHECKOUT)}
        // disabled={disabledCheckout}
      />
    </VStack>
  );
}

export default HomePage;
