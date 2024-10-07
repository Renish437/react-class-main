import React from "react";
import PropTypes from "prop-types";
const MovieCard = (props) => {
  const movieCard = {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "890,617",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
    Images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    ],
  };
  return (
    <div>
      <div
        className={` absolute top-32  w-[400px] mx-6 my-16 border-gray-200 border-4  rounded-lg shadow-2xl`}
        style={{ left: `${props.left}px` }}
      >
        <div>
          <div className=" text-center font-extrabold">
            <img src={movieCard.Images[props.images]} alt="" />

            <h1 className="text-3xl font-extrabold ">Movie Title</h1>

            <div className="flex items-center justify-center space-x-12 m-3 ">
              <p className="-mx-4">Movie Name:</p>
              <p className="">{movieCard.Title}</p>
            </div>

            <div className="flex items-center justify-center space-x-3 m-4">
              <p className="mx-4">Release Date:</p>
              <p className="">{movieCard.Released}</p>
            </div>

            <div className="flex items-center justify-center space-x-3 m-3 ">
              <p className="mx-12">Director:</p>
              <p className="">{movieCard.Director}</p>
            </div>
          </div>

          <div className="font-semibold text-white flex justify-center items-center">
            <button className="bg-blue-700 w-[500px]  rounded-lg m-6 p-4 sm:hover:bg-blue-900 ">
              Watch Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  left: PropTypes.number.isRequired,
};

export default MovieCard;
