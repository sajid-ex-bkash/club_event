import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const eventId = Number(params.id);

  if (isNaN(eventId)) {
    return NextResponse.json({ error: 'Invalid event id' }, { status: 400 });
  }

  try {
    const event = await prisma.event.findUnique({
      where: { id: eventId },
      include: { club: true },
    });

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch event' },
      { status: 500 }
    );
  }
}
