import React from 'react';
import { Logo } from '../UI/Logo';
import { Button } from '../button';
import { ButtonVariants } from '../button/types';
import graph from '../../assets/icon/graph.png';
import config from '../../assets/icon/config.png';
import user from '../../assets/icon/user.png';
import threedots from '../../assets/icon/threedots.png';
import { title } from 'process';

interface HeaderProps{

}

export const Header: React.FC<HeaderProps> = () => {
    const navItem = [
        {title: 'Report', icon: graph},
        {title: 'Setting', icon: config},
        {title: 'Sign In', icon: user},
        {title: undefined, icon: threedots},
    ]

    return (
        <header className='flex justify-between items-center py-5'>
            <Logo title='Romofocus' />

            <nav className='flex gap-2.5'>
                {navItem.map(item => 
                <Button 
                    icon={item.icon}
                    key={item.title}
                    title={item.title}
                    variant={ButtonVariants.NAV_HEADER}
                />)}
            </nav>
        </header>
    )
}