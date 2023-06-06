import * as React from "react";
import { IStackProps } from "native-base";

declare class CardType extends React.Component<CardProps, any> {}

interface CardProps extends IStackProps {
  visible: boolean;
}

declare var Card: typeof CardType;
export = Card;
