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
      hrTag: true,
      href: '/blog/create'
    },
    {
      title: 'My Post',
      hrTag: true,
    },
    {
      title: 'Favorite Post',
      hrTag: true,
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