import { NextResponse } from 'next/server';
import { getLandingImages } from '@/utils/getLanding';

export async function GET() {
  const landingImages = await getLandingImages();
  return NextResponse.json(landingImages);
}
