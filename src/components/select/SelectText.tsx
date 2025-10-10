import React, { useState } from "react";
import DownArrow from '../../assets/icon/down-arrow.png'
import clsx from "clsx";
import { DropDown } from "../dropdowns/DropDown";
import { DropDownType } from "../dropdowns/types";

interface SelectTextProps {
    className?: string,
    options: {id: string | number, value: string}[]
    open: () => void
    close: () => void
    changeValue: (value: string) => void
    value: string
    isOpen: boolean
}

export const SelectText: React.FC<SelectTextProps> = ({ 
    className, 
    options,
    open,
    close,
    changeValue,
    value,
    isOpen,
}) => {
    

    return (
        <div className={clsx(
            className,
            "relative rounded-lg bg-slate-200 text-gray-500 w-full p-2.5 flex justify-between items-center"
        )}>

            <div className="text-gray-500">{value}</div>
            <div>
                <img
                    className={clsx("w-3 h-3 opacity-50", { 'rotate-180': isOpen })}
                    src={DownArrow}
                />
            </div>
            <DropDown changeValue={changeValue} options={options} type={DropDownType.TEXT} isOpen={isOpen}/>
        </div>
    )
}