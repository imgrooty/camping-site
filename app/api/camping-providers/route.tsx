// app/api/camping-providers.js

export async function GET() {
      const campingProviders: any[] = await fetch('http://localhost:3000/api/campsites/search').then(res => res.json())

       
       
  
    return new Response(JSON.stringify(campingProviders), {
      status: 200,
    });
  }
  