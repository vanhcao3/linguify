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
      title: 'Blogs',
      hrTag: false,
      href: '/blog'
    },
    {
      title: 'Write',
      hrTag: false,
      href: '/blog/create'
    },
    {
      title: 'Favorite',
      hrTag: true,
      href: '/blog/favorite'
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