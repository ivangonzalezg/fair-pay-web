import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Select as NBSelect } from "native-base";

const Select = (props) => {
  const { items, onChange, value, placeholder, ...rest } = props;

  const label = useMemo(() => items?.find((item) => item.value === value)?.label, [items, value]);

  useEffect(() => {
    if (!label && value) {
      onChange("");
    }
  }, [label, value, onChange]);

  return (
    <NBSelect
      placeholder={placeholder}
      selectedValue={value}
      onValueChange={onChange}
      backgroundColor="white"
      size="md"
      {...rest}
    >
      {items
        .sort((item1, item2) => item1.label.localeCompare(item2.label))
        .map(({ label, value }) => (
          <NBSelect.Item key={value} label={label} value={value} />
        ))}
    </NBSelect>
  );
};

Select.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default React.memo(Select);
