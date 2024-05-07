//Array of routes that are available without the need of login
export const publicRoutes = ['/'];
//Array of routes specifically for authentification
export const authRoutes = ['/auth/sign-in', '/auth/sign-up', '/auth'];
//Api routes prefix that should always be accessible to perform sign in sign out functionalities
export const apiAuthPrefix = '/api/auth';
//Default path after logging in
export const DEFAULT_LOGIN_REDIRECT = '/';
