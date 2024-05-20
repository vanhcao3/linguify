import { logout } from "@/actions/sign-out";

export const USER_MENU = [
    {
      title: 'Profile',
      hrTag: true,
      href: '/profile'
    },
    {
      title: 'Livechat',
      href: '/calls',
      hrTag: false,
    },
    {
      title: 'Settings',
      hrTag: false,
      href: '/settings'
    },
    {
      title: 'Log out',
      hrTag: false,
      onClick: () => {
        logout();
      }
    },
  ];