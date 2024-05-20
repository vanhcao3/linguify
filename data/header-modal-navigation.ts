import { logout } from "@/actions/sign-out";

export const STUDENT_MENU = [
  {
    title: 'Dashboard',
    hrTag: false,
    icon: '/icons/fadeHomeIcon.svg',
    href: '/',
    visible: true,
  },
  {
    title: 'Browse',
    hrTag: true,
    icon: '/icons/bookOpenIcon.svg',
    href: '/search',
    visible: true,
  },
  {
    title: 'My Profile',
    hrTag: true,
    icon: '/icons/user.svg',
    visible: true,
    href: '/profile'
  },
  {
    title: 'Livechat',
    hrTag: false,
    icon: '/icons/chatIcon.svg',
    visible: true,
    href: '/calls',
  },
  {
    title: 'Blogs',
    hrTag: false,
    icon: '/icons/fadeBlogIcon.svg',
    visible: true,
    href: '/blog'
  },
  {
    title: 'Favorite',
    hrTag: false,
    icon: '/icons/solidHeartIcon.svg',
    visible: true,
    href: '/blog/favorite'
  },
  {
    title: 'Write',
    hrTag: true,
    icon: '/icons/newspaperIcon.svg',
    visible: true,
    href: 'blog/create'
  },
  {
    title: 'Settings',
    hrTag: true,
    icon: '/icons/fadeGearIcon.svg',
    visible: true,
    href: '/settings'
  },
  {
    title: 'Log out',
    hrTag: false,
    icon: '/icons/fadeLogoutIcon.svg',
    visible: true,
    onClick: () => {
      logout();
    }
  },
];

export const TEACHER_MENU = [
  {
    title: 'Courses',
    icon: '/icons/menuIcon.svg',
    hrTag: false,
    href: '/teacher/courses',
    visible: true,
  },
  {
    title: 'Analytics',
    icon: '/icons/starIcon.svg',
    hrTag: false,
    href: '/teacher/analytics',
    visible: true,
  },
  {
    title: 'Blogs',
    hrTag: false,
    icon: '/icons/fadeBlogIcon.svg',
    visible: true,
    href: '/blog'
  },
  {
    title: 'Favorite',
    hrTag: false,
    icon: '/icons/solidHeartIcon.svg',
    visible: true,
    href: '/blog/favorite'
  },
  {
    title: 'Write',
    hrTag: true,
    icon: '/icons/newspaperIcon.svg',
    visible: true,
    href: 'blog/create'
  },
  {
    title: 'Settings',
    hrTag: true,
    icon: '/icons/fadeGearIcon.svg',
    visible: true,
    href: '/settings'
  },
  {
    title: 'Log out',
    hrTag: false,
    icon: '/icons/fadeLogoutIcon.svg',
    visible: true,
    onClick: () => {
      logout();
    }
  },
];
