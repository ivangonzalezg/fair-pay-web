import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Checkbox, HStack, Input, Pressable, Text, VStack } from "native-base";
import { MdPercent } from "react-icons/md";
import Card from "../../../../components/card";
import constants from "../../../../constants";
import { formatToCurrency } from "../../../../utils";
import Select from "../../../../components/select";

function populateProduct(orders = []) {
  return orders.map((order) => ({
    ...order,
    product: constants.products.find((product) => product.id === order.product),
  }));
}

const Checkout = (props) => {
  const { members, orders, ...rest } = props;
  const [memberId, setMemberId] = useState("");
  const [includeTip, setIncludeTip] = useState(false);
  const [tip, setTip] = useState("10");

  useEffect(() => {
    setIncludeTip(false);
  }, [memberId]);

  const member = useMemo(() => members.find(({ id }) => id === memberId), [members, memberId]);

  const memberOrders = useMemo(() => populateProduct(orders.filter((order) => order.member === member?.id)), [member, orders]);

  const memberTotal = useMemo(
    () => memberOrders.reduce((total, memberOrder) => total + memberOrder.product.price, 0),
    [memberOrders]
  );

  const tipTotal = useMemo(
    () => Number((memberTotal * (includeTip ? Number(tip) / 100 : 0)).toFixed(2)),
    [memberTotal, includeTip, tip]
  );

  return (
    <Card {...rest}>
      <Select
        placeholder="Select a member"
        items={members
          .filter((_member) => Boolean(_member.name.trim()))
          .map((_member) => ({ label: _member.name, value: _member.id }))}
        value={memberId}
        onChange={setMemberId}
      />
      {member && (
        <VStack paddingBottom={3}>
          <Text bold fontSize="md" marginBottom={3}>
            {member.name}'s bill
          </Text>
          {memberOrders.map((memberOrder, index) => (
            <HStack key={memberOrder.id} justifyContent="space-between">
              <Text>
                {index + 1}. {memberOrder.product.name}
              </Text>
              <Text bold>${memberOrder.product.price}</Text>
            </HStack>
          ))}
          <HStack justifyContent="space-between" marginTop={5}>
            <Text>Subotal</Text>
            <Text bold>{formatToCurrency(memberTotal)}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Tip</Text>
            <Text bold>{formatToCurrency(tipTotal)}</Text>
          </HStack>
          <HStack justifyContent="space-between" marginBottom={5}>
            <Text>Total</Text>
            <Text bold>{formatToCurrency(memberTotal + tipTotal)}</Text>
          </HStack>
          <Pressable onPress={() => setIncludeTip(!includeTip)}>
            <HStack space={1} alignItems="center">
              <Checkbox isDisabled isChecked={includeTip} _disabled={{ opacity: 1 }} accessibilityLabel="Include tip" />
              <Text>Include tip?</Text>
            </HStack>
          </Pressable>
          {includeTip && (
            <Input
              size="md"
              value={tip}
              onChangeText={setTip}
              placeholder="Tip"
              keyboardType="number-pad"
              rightElement={<MdPercent size={20} color="black" />}
              marginTop={2}
              maxWidth="80px"
            />
          )}
        </VStack>
      )}
    </Card>
  );
};

Checkout.propTypes = {
  members: PropTypes.array.isRequired,
  orders: PropTypes.array.isRequired,
};

export default React.memo(Checkout);
