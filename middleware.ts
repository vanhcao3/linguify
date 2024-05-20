import authConfig from './auth.config';
import NextAuth from 'next-auth';
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
} from './routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const path = nextUrl.pathname;

  const isAPIAuthRoute = path.startsWith(apiAuthPrefix);
  const isPulicRoute = publicRoutes.includes(path);
  const isAuthRoute = authRoutes.includes(path);

  if (isAPIAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn && path !== DEFAULT_LOGIN_REDIRECT) {
      return Response.redirect(
        new URL(DEFAULT_LOGIN_REDIRECT, nextUrl),
      );
    }
    return;
  }

  if (!isLoggedIn && !isPulicRoute && path !== '/auth') {
    return Response.redirect(new URL('/auth', nextUrl));
  }
  return;
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
