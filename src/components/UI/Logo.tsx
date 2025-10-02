import React from 'react';
import logo from '../../assets/icon/logo.png';

interface LogoProps{
    title: string
}

export const Logo: React.FC<LogoProps> = ({title}) => {
    return (
        <div className='flex items-center gap-1'>
            <img className='w-5 h-5' src={logo} alt="" />
            <div className='font-semibold text-xl'>{title}</div>
        </div>
    )
}