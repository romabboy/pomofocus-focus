import React from 'react';
import { ButtonVariants } from './types';
import clsx from 'clsx';
import { BUTTON_STYLE_VARIANTS } from './constants';

interface ButtonProps {
    variant: ButtonVariants
    title?: string
    icon?: string
}

export const Button: React.FC<ButtonProps> = ({ variant, title, icon }) => {

    return (
        <button
            className={clsx(
                BUTTON_STYLE_VARIANTS[variant]
            )}
        >
            {
                variant == ButtonVariants.NAV_HEADER && icon
                && <img className='w-4 h-4' src={icon} alt={title} />
            }
            {
                title &&
                <div>{title}</div>
            }
        </button>
    )
}