import React from "react";
import { IHiddenTextProps } from "./hidden-text-types";

export const HiddenText: React.FC<IHiddenTextProps> = ({
  isHidden,
  children,
}) => {
  return <div className="text-slate-800">{!isHidden && children}</div>;
};
