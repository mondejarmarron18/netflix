import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import movieData from "../../data/movies";
import path from "../../utils/path";

interface IMovie {
  id: number;
  title: string;
  url: string;
}

const ISMovie: IMovie = { id: 0, title: "", url: "" };

const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movies, setMovies] = useState<IMovie[]>(movieData);
  const [movie, setMovie] = useState(movieData[0] || ISMovie);

  return (
    <div className={`flex flex-col relative h-full w-full`}>
      <img
        className="absolute top-0 left-0 object-cover h-full w-full"
        src={movie.url}
        alt="movie"
      />
      <div className="flex flex-col gap-1 justify-center relative z-10 h-full w-full  bg-gradient-to-r from-[#000000] to-[#00000000]">
        <div className="flex flex-col gap-1 justify-center p-4 sm:p-10 max-w-[550px] flex-1">
          <div className="flex gap-2 items-center">
            <img
              src={`
            ${path.public}/assets/images/icon.png`}
              alt="Logo"
              className="h-5"
            />
            <span className="text-[.7rem] font-black text-gray-400 tracking-[.2rem]">
              SERIES
            </span>
          </div>
          <div className="flex items-center text-2xl tracking-[.2rem] sm:text-4xl sm:tracking-[.4rem] text-white font-medium">
            {movie.title}
            <MdPlayArrow className="text-primary h-7 w-7 sm:h-10 sm:w-10" />
          </div>
          <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm font-semibold">
            <div className="text-green-500">97% Match</div>
            <div>2018</div>
            <div className="bg-gray-700 px-1 rounded-sm">TV-MA</div>
            <div>2 Seasons</div>
            <div className="border-[1px] border-gray-700 px-1 rounded-sm">
              HD
            </div>
            <div className="border-[1px] border-gray-700 px-1 rounded-sm">
              5.1
            </div>
          </div>
          <div className="font-semibold text-gray-200">
            Season 2 Coming Friday
          </div>
          <div className="text-gray-400 text-sm font-semibold tracking-wide">
            Months after the Spring Fling, Liberty High is hit the new shock
            when Bryce Walker is murdered the night of homecoming ... and
            everyone is a suspect.
          </div>
        </div>
        <div className="pl-4 sm:pl-10 py-4 sm:py-10 w-full flex flex-col gap-1 bg-gradient-to-t from-[#000000] to-[#00000000]">
          <div className="text-gray-200 font-medium tracking-wide">
            Trending Now
          </div>
          <div className="flex gap-2 w-full overflow-x-auto scrollbar-thin hover:scrollbar-thumb-gray-900">
            {movies.map((_) => (
              <img
                key={_.id}
                className="rounded object-cover h-[150px] w-[300px] mb-4"
                src={_.url}
                alt="Weekly Series"
                onClick={() => setMovie(_)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
