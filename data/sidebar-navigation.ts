export const STUDENT_ROUTES = [
  {
    title: 'Dashboard',
    topIcon: '/icons/homeIcon.svg',
    type: 'square',
    href: '/',
  },
  {
    title: 'Browse',
    topIcon: '/icons/compassIcon.svg',
    type: 'square',
    href: '/search',
  },
  {
    title: 'Posts',
    topIcon: '/icons/blogIcon.svg',
    type: 'square',
    href: '/blog?page=1',
  },
];

export const TEACHER_ROUTES = [
  {
    title: 'Courses',
    topIcon: '/icons/bookOpenIcon.svg',
    type: 'square',
    href: '/teacher/courses',
  },
  {
    title: 'Analytics',
    topIcon: '/icons/analyticsIcon.svg',
    type: 'square',
    href: '/teacher/analytics',
  },
];