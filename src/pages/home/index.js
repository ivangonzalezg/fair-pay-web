import React from "react";
import { Text, VStack } from "native-base";

function HomePage() {
  return (
    <VStack safeArea paddingX={2} paddingY={2} overflowY="scroll" maxWidth={700} alignSelf="center" width="full">
      <Text bold fontSize="2xl" textAlign="center" marginBottom={3}>
        FairPay
      </Text>
    </VStack>
  );
}

export default HomePage;
