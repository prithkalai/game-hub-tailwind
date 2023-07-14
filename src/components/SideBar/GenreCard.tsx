import { Shimmer } from "react-shimmer";
import { GenreData } from "../Interface";

interface Props {
  onClick: (genre: string) => void;
  Genre: GenreData[];
  Error: string;
  genreLoading: boolean;
}

const GenreCard = ({ onClick, Error, genreLoading, Genre }: Props) => {
  return (
    <>
      {Error ? (
        <p className="text-red-700 text-2xl mt-10">{Error}</p>
      ) : genreLoading ? (
        <div className="flex flex-col">
          <ShimmerList count={20} />
        </div>
      ) : (
        <div className="flex flex-col">
          {Genre.map((genre) => (
            <div key={genre.id} className="items-center mb-2 ">
              <button
                onClick={() => {
                  onClick(genre.name);
                }}
                className="rounded-lg  hover:bg-white hover:text-black 
                active:bg-slate-200 font-light active:font-bold
                transition-all duration-200"
              >
                <div className="flex justify-start items-center pr-2 ">
                  <GenreLogo url={genre.image_background} />
                  <div className="ml-4 text-lg ">{genre.name}</div>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const ShimmerList = ({ count }: { count: number }) => {
  const shimmerItems = Array.from({ length: count }, (_, index) => (
    <div key={index} className="items-center mb-4">
      <Shimmer width={150} height={40} className="rounded-lg" />
    </div>
  ));

  return <>{shimmerItems}</>;
};

const GenreLogo = ({ url }: { url: string }) => {
  return (
    <div className="text-white bg-transparent w-10 h-10 my-auto">
      <img src={url} className="aspect-square object-cover rounded-lg" />
    </div>
  );
};

export default GenreCard;
