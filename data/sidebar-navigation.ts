export const STUDENT_ROUTES = [
  {
    title: 'Trang chủ',
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
    title: 'Lộ trình',
    topIcon: '/icons/roadIcon.svg',
    type: 'square',
    href: '/learningPath',
  },
  {
    title: 'Bài viết',
    topIcon: '/icons/blogIcon.svg',
    type: 'square',
    href: '/blog?page=1',
  },
];

export const TEACHER_ROUTES = [
  {
    title: 'Courses',
    topIcon: '/icons/listIcon.svg',
    type: 'square',
    href: '/teacher/courses',
  },
  {
    title: 'Analytics',
    topIcon: '/icons/analyticsIcon.svg',
    type: 'square',
    href: '/teacher/analytics',
  }
];
