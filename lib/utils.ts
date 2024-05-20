import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stripHtmlTags(value: string) {
  const doc = new DOMParser().parseFromString(value, 'text/html');
  const content = doc.body.textContent?.trim();

  return content || '';
}

export function calculateTimeComment(
  createdAt: Date,
  updatedAt: Date,
) {
  if (createdAt.getTime() !== updatedAt.getTime()) {
    return 'Edited';
  }

  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - createdAt.getTime();
  const minutes = Math.floor(timeDifference / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 1) {
    return 'Just now';
  } else if (hours < 1) {
    return `${minutes}m`;
  } else if (days < 1) {
    return `${hours}h`;
  } else {
    return `${days}d`;
  }
}

export function calculateTime(time: Date) {
  const now = new Date();
  const diffInMs = now.getTime() - time.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30.4375);
  const diffInYears = Math.floor(diffInDays / 365.25);

  let timeCourseText = '';

  if (diffInYears > 0) {
    timeCourseText = `${diffInYears} ${(diffInYears < 2) ? 'day': 'days'} ago`;
  } else if (diffInMonths > 0) {
    timeCourseText = `${diffInMonths} ${diffInMonths < 2 ? 'month' : 'months'} ago`;
  } else {
    timeCourseText = `${diffInDays} ${diffInDays < 2 ? 'day': 'days'} ago`;
  }

  return timeCourseText;
}
