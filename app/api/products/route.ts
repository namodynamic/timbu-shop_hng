import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://api.timbu.cloud/products?organization_id=0692f8666ea943f4992dbf47d90dc6b1&reverse_sort=false&page=1&size=10&Appid=5BXV1CPCJHN6DH0&Apikey=e22346286aea438ab85f5a9f32abfd7420240712164638289375'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
