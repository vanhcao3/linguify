'use client';
import React from 'react';
import { logout } from '@/actions/sign-out';

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export const LogoutButton = ({ children, mode = 'redirect', asChild }: LoginButtonProps) => {
  const onClick = () => {
    logout();
  };

  if (mode === 'modal') {
    return <span></span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
