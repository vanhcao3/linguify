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
