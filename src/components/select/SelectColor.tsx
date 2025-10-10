import React from "react"
import { SelectType } from "./types"

interface SelectColorProps{
    className?: string
    options: {id: string | number, value: string}[]
    open: () => void
    close: () => void
    changeValue: (value: string) => void
    value: string
    isOpen: boolean
}

export const SelectColor: React.FC<SelectColorProps> = ({ className }) => {
    return <div></div>
}