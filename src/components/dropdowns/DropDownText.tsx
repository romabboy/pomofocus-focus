import React from "react";
import { DropDownProps } from "./types";

export const DropDownText: React.FC<DropDownProps> = ({ isOpen, changeValue, options }) => {

    return (
        <ul className="bg-white py-2 absolute top-[105%] right-0 w-full rounded-sm">
            {options.map(option => <li
                className="p-3 cursor-pointer hover:bg-slate-200"
                onClick={() => changeValue(option.value)}
                key={option.id}>{option.value}</li>)}
        </ul>
    )
}