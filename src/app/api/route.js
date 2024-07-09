import {NextResponse} from 'next/server';

export async function GET() {
    const res = await fetch('http://39.101.169.247/api/home?page=1', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    return NextResponse.json({data});
}
