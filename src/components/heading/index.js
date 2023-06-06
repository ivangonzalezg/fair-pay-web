import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Pressable, Text } from "native-base";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import Card from "../card";

const Heading = (props) => {
  const { label, isOpen, onPress, disabled } = props;

  const Icon = useMemo(() => (isOpen ? MdOutlineExpandLess : MdOutlineExpandMore), [isOpen]);

  return (
    <Pressable onPress={onPress} isDisabled={disabled} _disabled={{ opacity: 0.4 }}>
      <Card flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text bold fontSize={16}>
          {label}
        </Text>
        <Icon size={30} color="black" />
      </Card>
    </Pressable>
  );
};

Heading.propTypes = {
  label: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Heading.defaultProps = {
  disabled: false,
};

export default React.memo(Heading);
