'use server';

import { db } from '../lib/db';
import { currentUserId } from '@/lib/auth';

export const getNotifications = async () => {
  try {
    const userId = await currentUserId();
    const notifications = await db.notification.findMany({
      where: { userId },
    });
    return notifications;
  } catch (error) {
    console.log('[actions/notifications]', error);
    return null;
  }
};

export const readAllNotifications = async () => {
  try {
    const userId = await currentUserId();
    await db.notification.updateMany({
      where: { userId },
      data: { isRead: true },
    });
  } catch (error) {
    console.log('[actions/notifications]', error);
  }
};
