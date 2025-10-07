import React from 'react';
import { ButtonVariants } from './types';
import clsx from 'clsx';
import { BUTTON_STYLE_VARIANTS } from './constants';

interface ButtonProps {
    variant: ButtonVariants
    title?: string
    titleColor?: string
    icon?: string
    isActive?: boolean
    className?: string
    clickHandler?: () => void
}

export const Button: React.FC<ButtonProps> = ({ variant, title, titleColor, icon, isActive, className, clickHandler }) => {
    return (
        <button
            onClick={ e => clickHandler && clickHandler()}
            className={clsx(
                className,
                'transition-all duration-200',
                BUTTON_STYLE_VARIANTS[variant].base,
                isActive && BUTTON_STYLE_VARIANTS[variant].active
            )}
        >
            {
                icon
                && <img className='w-4 h-4' src={icon} alt={title} />
            }
            {
                title &&
                <div
                    style={{color: titleColor}}
                >{title}</div>
            }
        </button>
    )
}