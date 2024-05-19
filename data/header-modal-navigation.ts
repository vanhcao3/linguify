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
    title: 'Roadmap',
    hrTag: true,
    icon: '/icons/fadeRoadIcon.svg',
    href: '/learningPath',
    visible: true,
  },
  {
    title: 'Blog',
    hrTag: false,
    icon: '/icons/fadeBlogIcon.svg',
    visible: true,
  },
  {
    title: 'Saved Post',
    hrTag: true,
    icon: '/icons/fadeBookmarkIcon.svg',
    visible: true,
  },
  {
    title: 'About us',
    hrTag: false,
    icon: '/icons/fadeInfoCircleIcon.svg',
    visible: true,
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
