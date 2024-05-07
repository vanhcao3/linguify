import { Prisma, PrismaClient } from '@prisma/client';

//Production only due to NextJS hot reload
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
