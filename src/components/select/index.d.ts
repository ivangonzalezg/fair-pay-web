import * as React from "react";
import { ISelectProps } from "native-base";

declare class SelectType extends React.Component<SelectProps, any> {}

interface SelectProps extends ISelectProps {
  onChange(value: any): void;
}

declare var Select: typeof SelectType;
export = Select;
