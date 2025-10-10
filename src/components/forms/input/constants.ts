import { InputVariants } from "./types";

type InputStyle = {
    base: string;
    label: string | null
}

type InputStyles = {
    [key in InputVariants]: InputStyle
}

export const INPUT_STYLE_VARIANTS: InputStyles = {
    [InputVariants.NUMBER]: {
        base: "rounded-lg bg-slate-200 text-gray-500 w-full p-2.5 outline-none",
        label: "text-gray-500 mb-1 text-sm"
    }
}