import { ButtonVariants } from "./types";

type ButtonStyle = {
    base: string;
    active: string | null;
}

type ButtonStyles = {
    [key in ButtonVariants]: ButtonStyle
}

export const BUTTON_STYLE_VARIANTS: ButtonStyles= {
    [ButtonVariants.NAV_HEADER]: {
        base: "text-xs py-2 px-3 rounded-sm bg-white hover:bg-opacity-35 bg-opacity-25 flex items-center font-medium gap-1",
        active: null,
    },
    [ButtonVariants.POMO_OPTION]:{
        base: "px-3 py-0.5 rounded bg-black bg-opacity-0 ",
        active: 'bg-opacity-15 font-semibold'
    },
    [ButtonVariants.START]:{
        base: "font-bold text-xl tracking-wider bg-white rounded w-[200px] py-3.5"
        +" group relative inline-flex items-center justify-center overflow-hidden [box-shadow:0px_5px_0_#d3d3d3] active:translate-y-[5px] active:shadow-none",
        active: 'translate-y-[5px] shadow-none [box-shadow:none]'
    },
    [ButtonVariants.NEXT]: {
        base: 'opacity-0 pointer-events-none',
        active: 'opacity-100 pointer-events-auto'
    }

}