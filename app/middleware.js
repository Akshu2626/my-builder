export function middleware(req) {
    const response = new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });

    if (req.method === 'OPTIONS') {
        return response;
    }

    return NextResponse.next();
}
