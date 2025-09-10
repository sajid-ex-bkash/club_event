import { prisma } from '@/lib/prisma'; // adjust path if needed
import { NextRequest, NextResponse } from 'next/server';

async function parseJson(req: NextRequest) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

export async function POST(req: NextRequest) {
  const body = await parseJson(req);
  const { name } = body;

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }

  try {
    const club = await prisma.club.create({
      data: { name },
    });
    return NextResponse.json(club, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to create club' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const clubs = await prisma.club.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return NextResponse.json(clubs);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
