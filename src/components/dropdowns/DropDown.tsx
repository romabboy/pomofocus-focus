import React from "react";
import { DropDownProps, DropDownType } from "./types";
import { DropDownColor } from "./DropDownColor";
import { DropDownText } from "./DropDownText";


const DROP_DOWN_TYPE = {
    [DropDownType.TEXT]: DropDownText,
    [DropDownType.COLOR]: DropDownColor,
}

interface DropDownPropsWithType extends DropDownProps {
    type: DropDownType;
  }

export const DropDown: React.FC<DropDownPropsWithType> = ({type, ...props}) => {
    const Component = DROP_DOWN_TYPE[type]

    return <Component {...props} />
}