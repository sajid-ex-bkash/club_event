import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

async function parseJson(req: NextRequest) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

// ------------------- GET EVENTS -------------------
// export async function GET(req: NextRequest) {
//   const url = new URL(req.url);
//   const type = url.searchParams.get('type');
//   const now = new Date();

//   try {
//     let events;
//     if (type === 'upcoming') {
//       events = await prisma.event.findMany({
//         where: { startTime: { gte: now } },
//         include: { club: true },
//         orderBy: { startTime: 'asc' },
//       });
//     } else if (type === 'past') {
//       events = await prisma.event.findMany({
//         where: { endTime: { lt: now } },
//         include: { club: true },
//         orderBy: { startTime: 'desc' },
//       });
//     } else {
//       events = await prisma.event.findMany({
//         include: { club: true },
//         orderBy: { startTime: 'asc' },
//       });
//     }

//     return NextResponse.json(events);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: 'Failed to fetch events' },
//       { status: 500 }
//     );
//   }
// }

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const type = url.searchParams.get('type');
  const clubsParam = url.searchParams.get('clubs'); // "1,2,3"
  const now = new Date();

  // convert clubs query param into array of numbers
  const clubIds = clubsParam
    ? clubsParam
        .split(',')
        .map((id) => Number(id))
        .filter((id) => !isNaN(id))
    : [];

  try {
    let whereClause: any = {};
    if (type === 'upcoming') {
      whereClause.startTime = { gte: now };
    } else if (type === 'past') {
      whereClause.endTime = { lt: now };
    }

    if (clubIds.length > 0) {
      whereClause.clubId = { in: clubIds };
    }

    const events = await prisma.event.findMany({
      where: whereClause,
      include: { club: true },
      orderBy: {
        startTime: type === 'past' ? 'desc' : 'asc',
      },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

// ------------------- CREATE EVENT -------------------
export async function POST(req: NextRequest, res: NextResponse) {
  const body = await parseJson(req);
  const { name, description, location, image, startTime, endTime, clubId } =
    body;

  if (!name || !startTime || !clubId) {
    return NextResponse.json(
      { error: 'name, startTime and clubId are required' },
      { status: 400 }
    );
  }

  try {
    const event = await prisma.event.create({
      data: {
        name,
        description,
        location,
        image,
        startTime: new Date(startTime),
        endTime: endTime ? new Date(endTime) : null,
        club: { connect: { id: parseInt(clubId) } },
      },
    });
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}

// ------------------- UPDATE EVENT -------------------
export async function PUT(req: NextRequest) {
  const body = await parseJson(req);
  const { id, ...updateData } = body;

  if (!id) {
    return NextResponse.json(
      { error: 'Event id is required' },
      { status: 400 }
    );
  }

  try {
    const updatedEvent = await prisma.event.update({
      where: { id: Number(id) },
      data: {
        ...updateData,
        startTime: updateData.startTime
          ? new Date(updateData.startTime)
          : undefined,
        endTime: updateData.endTime ? new Date(updateData.endTime) : undefined,
      },
    });
    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 500 }
    );
  }
}

// ------------------- DELETE EVENT -------------------
export async function DELETE(req: NextRequest) {
  const body = await parseJson(req);
  const { id } = body;

  if (!id) {
    return NextResponse.json(
      { error: 'Event id is required' },
      { status: 400 }
    );
  }

  try {
    const deletedEvent = await prisma.event.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json(deletedEvent);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to delete event' },
      { status: 500 }
    );
  }
}
