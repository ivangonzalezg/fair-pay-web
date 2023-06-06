import * as React from "react";

declare class HeadingType extends React.Component<HeadingProps, any> {}

interface HeadingProps {
  label: string;
  isOpen: boolean;
  onPress(): void;
}

declare var Heading: typeof HeadingType;
export = Heading;
