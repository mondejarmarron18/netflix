import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import movieData from "../../data/movies";
import path from "../../utils/path";

interface IMovie {
  id: number;
  title: string;
  type: string;
  released: string;
  genres: string[];
  description: string;
  image: string;
}

const ISMovie: IMovie = {
  id: 0,
  title: "",
  type: "",
  released: "",
  genres: [],
  description: "",
  image: "",
};

const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movies, setMovies] = useState<IMovie[]>(movieData);
  const [movie, setMovie] = useState(movieData[0] || ISMovie);

  return (
    <div className="w-full h-fit sm:h-full">
      <div className="relative sm:fixed flex justify-center items-center top-0 left-0 w-full h-[200px] sm:h-full">
        <div className="absolute top-0 left-0 h-full w-full sm:bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 h-[50%] w-full bg-gradient-to-t from-black to-transparent"></div>
        <img
          className="object-cover h-full w-full object-top"
          src={movie.image}
          alt="movie"
        />
      </div>
      <div className="relative gap-10 z-10 p-5 sm:p-10 h-full flex flex-col w-full">
        <div className=" flex-1 flex flex-col justify-center max-w-[500px] gap-1">
          <div className="flex gap-2 items-center">
            <img
              src={`
            ${path.public}/assets/images/icon.png`}
              alt="Logo"
              className="h-5"
            />
            <span className="text-[.7rem] font-black text-gray-400 tracking-[.2rem] uppercase">
              {movie.type}
            </span>
          </div>
          <div className="flex items-center text-2xl tracking-[.2rem] sm:text-4xl sm:tracking-[.2rem] text-white font-medium">
            {movie.title}
            <MdPlayArrow className="text-primary h-7 w-7 sm:h-10 sm:w-10" />
          </div>
          <div className="flex flex-wrap items-centertext-gray-400 text-sm font-semibold text-gray-400">
            <div className="text-green-500 mr-3">
              {Math.ceil(Math.random() * 50) + 50}% Match
            </div>
            <div className="mr-3">{movie.released}</div>
            <div className="bg-gray-700 px-1 rounded-sm mr-3">TV-MA</div>
            {movie.genres.map((genre, key) => {
              return (
                <div key={key} className="mr-3">
                  {genre}
                </div>
              );
            })}
            <div className="border-[1px] border-gray-700 px-1 rounded-sm mr-3">
              HD
            </div>
            <div className="border-[1px] border-gray-700 px-1 rounded-sm">
              {Math.ceil(Math.random() * 100) / 10 + 1}
            </div>
          </div>
          <div className="font-semibold text-gray-200">
            Season {Math.ceil(Math.random() * 5)} Coming Friday
          </div>
          <div className="text-gray-400 text-sm font-semibold tracking-wider">
            {movie.description}
          </div>
        </div>
        <div className="pb-4 w-full flex flex-col gap-2">
          <div className="text-gray-200 font-medium tracking-wide">
            Trending Now
          </div>
          <div className="flex gap-2 pr-2 w-full pb-4 overflow-x-auto scrollbar-thin hover:scrollbar-thumb-gray-900">
            {movies.map((_) => (
              <img
                key={_.id}
                className="cursor-pointer rounded object-cover h-[150px] w-[300px]"
                src={_.image}
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
