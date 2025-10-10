import React, { useState } from "react"
import { SelectType } from "./types"
import { SelectColor } from "./SelectColor"
import { SelectText } from "./SelectText"

interface SelectProps{
    type: SelectType,
    options: {id: number | string, value: string}[]
    className?: string
}

const SELECT_TYPE = {
    [SelectType.COLOR]: SelectColor,
    [SelectType.TEXT]: SelectText
}

export const Select: React.FC<SelectProps> = ({ type, options, ...props }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [value, setValue] = useState<string>(options[0].value)

    const close = () => {setIsOpen(false)}
    const open = () => {setIsOpen(true)}
    const changeValue = (value: string) => {setValue(value)}
    
    const Component = SELECT_TYPE[type]
    return <Component 
        close={close}
        open={open}
        changeValue={changeValue}
        value={value}
        options={options}
        isOpen={isOpen}
        {...props} 
    />
}