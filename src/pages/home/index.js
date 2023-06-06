import React, { useCallback, useState } from "react";
import { Text, VStack } from "native-base";
import Heading from "../../components/heading";
import Members from "./components/members";
import Orders from "./components/orders";

const steps = {
  MEMBERS: 0,
  ORDERS: 1,
  CHECKOUT: 2,
};

function HomePage() {
  const [step, setStep] = useState(steps.MEMBERS);
  const [members, setMembers] = useState([]);
  const [orders, setOrders] = useState([]);

  const onAddMember = useCallback(() => {
    const _members = [...members];
    _members.push({
      id: String(new Date().getTime()),
      name: "",
    });
    setMembers(_members);
  }, [members]);

  const onRemoveMember = useCallback(
    (id) => {
      let _members = [...members];
      _members = _members.filter((_member) => _member.id !== id);
      setMembers(_members);
    },
    [members]
  );

  const onUpdateMember = useCallback(
    (id, name) => {
      let _members = [...members];
      _members = _members.map((_member) => {
        if (_member.id === id) {
          _member.name = name;
        }
        return _member;
      });
      setMembers(_members);
    },
    [members]
  );

  const onAddOrder = useCallback(() => {
    const _orders = [...orders];
    _orders.push({
      id: String(new Date().getTime()),
      member: "",
      product: "",
    });
    setOrders(_orders);
  }, [orders]);

  const onRemoveOrder = useCallback(
    (id) => {
      let _orders = [...orders];
      _orders = _orders.filter((_order) => _order.id !== id);
      setOrders(_orders);
    },
    [orders]
  );

  const onUpdateOrder = useCallback(
    (id, data) => {
      let _orders = [...orders];
      _orders = _orders.map((_order) => {
        if (_order.id === id) {
          return {
            ..._order,
            ...data,
          };
        }
        return _order;
      });
      setOrders(_orders);
    },
    [orders]
  );

  return (
    <VStack safeArea paddingX={2} paddingY={2} overflowY="scroll" maxWidth={700} alignSelf="center" width="full">
      <Text bold fontSize="2xl" textAlign="center" marginBottom={3}>
        FairPay
      </Text>
      <Heading label="Members" isOpen={step === steps.MEMBERS} onPress={() => setStep(steps.MEMBERS)} />
      <Members
        visible={step === steps.MEMBERS}
        members={members}
        onAddMember={onAddMember}
        onUpdateMember={onUpdateMember}
        onRemoveMember={onRemoveMember}
        onNext={() => setStep(steps.ORDERS)}
      />
      <Heading label="Orders" isOpen={step === steps.ORDERS} onPress={() => setStep(steps.ORDERS)} />
      <Orders
        visible={step === steps.ORDERS}
        members={members}
        orders={orders}
        onAddOrder={onAddOrder}
        onUpdateOrder={onUpdateOrder}
        onRemoveOrder={onRemoveOrder}
        onNext={() => setStep(steps.CHECKOUT)}
      />
      <Heading label="Checkout" isOpen={step === steps.CHECKOUT} onPress={() => setStep(steps.CHECKOUT)} />
    </VStack>
  );
}

export default HomePage;
