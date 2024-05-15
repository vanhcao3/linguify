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

export function calculateTime(createdAt: Date, updatedAt: Date) {
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

export function formatMoney(amount: number): string {
  const formattedAmount = amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return formattedAmount;
}
