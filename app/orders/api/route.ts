import { prisma } from '@/src/lib/Prisma';

export async function GET() {
  const orders = await prisma.order.findMany({
    take: 5,
    where: {
      orderReadyAt: {
        not: null,
      },
    },
    orderBy: {
      orderReadyAt: 'desc',
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return Response.json(orders);
}
