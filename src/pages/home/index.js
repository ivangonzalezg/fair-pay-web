import React, { useCallback, useMemo, useState } from "react";
import { Text, VStack } from "native-base";
import Heading from "../../components/heading";
import Members from "./components/members";
import Orders from "./components/orders";
import Checkout from "./components/checkout";

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
      if (orders.some((order) => order.member === id)) {
        let _orders = [...orders];
        _orders = _orders.map((_order) => {
          if (_order.member === id) {
            _order.member = "";
          }
          return _order;
        });
        setOrders(_orders);
      }
    },
    [members, orders]
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

  const disabledOrders = useMemo(() => members.length === 0 || members.some((member) => !member.name), [members]);

  const disabledCheckout = useMemo(
    () => orders.length === 0 || orders.some((order) => !order.product || !order.member),
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
        nextDisabled={disabledOrders}
      />
      <Heading label="Orders" isOpen={step === steps.ORDERS} onPress={() => setStep(steps.ORDERS)} disabled={disabledOrders} />
      <Orders
        visible={step === steps.ORDERS}
        members={members}
        orders={orders}
        onAddOrder={onAddOrder}
        onUpdateOrder={onUpdateOrder}
        onRemoveOrder={onRemoveOrder}
        onNext={() => setStep(steps.CHECKOUT)}
        nextDisabled={disabledCheckout}
      />
      <Heading
        label="Checkout"
        isOpen={step === steps.CHECKOUT}
        onPress={() => setStep(steps.CHECKOUT)}
        disabled={disabledCheckout}
      />
      <Checkout visible={step === steps.CHECKOUT} members={members} orders={orders} />
    </VStack>
  );
}

export default HomePage;
