import React from "react";
import { InputVariants } from "./types";
import { INPUT_STYLE_VARIANTS } from "./constants";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    variant: InputVariants;
    className?: string
}

export const Input: React.FC<InputProps> = ({label, variant, className, ...props}) => {
    return <div>
        {   label &&
            <label className={INPUT_STYLE_VARIANTS[variant].label || ''}>{label}</label>
        }
        <input className={clsx(className, INPUT_STYLE_VARIANTS[variant].base)} {...props} />
    </div>
}