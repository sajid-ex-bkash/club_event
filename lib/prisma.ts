import { PrismaClient } from '../app/generated/prisma';

declare global {
  var prisma: PrismaClient | undefined;
}

// biome-ignore lint/suspicious/noRedeclare: <explanation>
export const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === 'development'
      ? ['query', 'info', 'warn', 'error']
      : [],
});

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
