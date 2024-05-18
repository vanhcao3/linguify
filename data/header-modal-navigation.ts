export const STUDENT_MENU = [
  {
    title: 'Đăng nhập',
    icon: '/icons/fadeLoginIcon.svg',
    hrTag: true,
    href: `/sign-in`,
    visible: true,
  },
  {
    title: 'Trang cá nhân',
    icon: '/icons/user.svg',
    hrTag: false,
    href: ``,
    visible: true,
  },
  {
    title: 'Khoá học của tôi',
    hrTag: true,
    icon: '/icons/bookOpenIcon.svg',
    visible: true,
  },
  {
    title: 'Trang chủ',
    hrTag: false,
    icon: '/icons/fadeHomeIcon.svg',
    href: '/',
    visible: true,
  },
  {
    title: 'Lộ trình',
    hrTag: false,
    icon: '/icons/fadeRoadIcon.svg',
    href: '/learningPath',
    visible: true,
  },
  {
    title: 'Blog',
    hrTag: true,
    icon: '/icons/fadeBlogIcon.svg',
    href: '/blog?page=1',
    visible: true,
  },
  {
    title: 'Bài viết đã lưu',
    hrTag: true,
    icon: '/icons/fadeBookmarkIcon.svg',
    visible: true,
  },
  {
    title: 'Giới thiệu',
    hrTag: false,
    icon: '/icons/fadeInfoCircleIcon.svg',
    visible: true,
  },
  {
    title: 'Cài đặt',
    hrTag: true,
    icon: '/icons/fadeGearIcon.svg',
    visible: true,
  },
  {
    title: 'Đăng xuất',
    hrTag: false,
    icon: '/icons/fadeLogoutIcon.svg',
    href: '/sign-out',
    visible: true,
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
    title: 'Cài đặt',
    hrTag: true,
    icon: '/icons/fadeGearIcon.svg',
    visible: true,
  },
  {
    title: 'Đăng xuất',
    hrTag: false,
    icon: '/icons/fadeLogoutIcon.svg',
    href: '/sign-out',
    visible: true,
  },
];
