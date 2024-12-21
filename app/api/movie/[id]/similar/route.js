import fetchWithMovieDbAuth from "@/lib/fetchWithMovieDbAuth";

export async function GET(request) {
    const urlParts = request.nextUrl.pathname.split('/');
    const id = urlParts[urlParts.length - 2]; 
    console.log(Math.floor((Math.random() * 10) + 1))
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US`

    
    
    try {
      const res = await fetchWithMovieDbAuth(url, "dynamic")
      const resJson =  await res.json()
      if(resJson.hasOwnProperty('success') && resJson.success === false){
        // in case of no data found 
        return new Response(JSON.stringify({ error: 'No Data found' }), {
          status: 404});
      }else{
        return new Response(JSON.stringify(resJson), {
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) {
      // Handle unexpected errors or other issues
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
  }