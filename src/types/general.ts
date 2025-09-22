import { JSX } from "react";

export type ChildrenProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};
