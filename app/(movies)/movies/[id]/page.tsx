import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: {id: string};
}

export async function generateMetadata({params:{id}}: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function movieDetail({
  params: {id},
}: {
  params: {id: string};
}) {
  //http://localhost:3000/movies/123?region=kr&page=2 => { params: { id: '123' }, searchParams: { region: 'kr', page: '2' } }
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id}/>
      </Suspense>
    </div>
  )
}