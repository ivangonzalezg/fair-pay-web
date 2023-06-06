import React from "react";
import PropTypes from "prop-types";
import { Stack } from "native-base";

const Card = (props) => {
  const { children, visible, ...rest } = props;

  if (!visible) {
    return null;
  }

  return (
    <Stack shadow={1} space={3} paddingY={2} paddingX={3} backgroundColor="white" {...rest}>
      {children}
    </Stack>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool,
};

Card.defaultProps = {
  visible: true,
};

export default React.memo(Card);
