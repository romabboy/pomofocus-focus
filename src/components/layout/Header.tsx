import React, { useState } from 'react';
import { Logo } from '../UI/Logo';
import { Button } from '../button';
import { ButtonVariants } from '../button/types';
import graph from '../../assets/icon/graph.png';
import config from '../../assets/icon/config.png';
import user from '../../assets/icon/user.png';
import threedots from '../../assets/icon/threedots.png';
import { SettingsModal } from '../modals/SettingsModal';

const navItems = [
  { id: 'report', title: 'Report', icon: graph },
  { id: 'setting', title: 'Setting', icon: config },
  { id: 'signin', title: 'Sign In', icon: user },
  { id: 'more', icon: threedots },
];

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveMenu(prev => (prev === id ? null : id));
  };

  const closeModal = () => setActiveMenu(null);

  return (
    <>
      <header className="flex justify-between items-center py-5">
        <Logo title="Romofocus" />

        <nav className="flex gap-2.5">
          {navItems.map(item => (
            <Button
              key={item.id}
              icon={item.icon}
              title={item.title}
              variant={ButtonVariants.NAV_HEADER}
              clickHandler={() => handleClick(item.id)}
            />
          ))}
        </nav>
      </header>

      <SettingsModal
        // isOpen={activeMenu === 'setting'}
        isOpen={true}
        onClose={closeModal}
      />
      <SettingsModal
        isOpen={activeMenu === 'report'}
        onClose={closeModal}
      />
    </>
  );
};
