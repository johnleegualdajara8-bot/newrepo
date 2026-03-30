import React from 'react';
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";

const actionMovies = [
  { title: "Avengers", img: b, genre: "Action/Sci-Fi", desc: "Earth's mightiest heroes unite." },
  { title: "John Wick", img: e, genre: "Action/Thriller", desc: "An assassin comes out of retirement." },
  { title: "Mad Max", img: a, genre: "Action/Adventure", desc: "A post-apocalyptic survival tale." },
  { title: "Batman", img: c, genre: "Action/Crime", desc: "The Dark Knight protects Gotham." },
  { title: "Mission Impossible", img: d, genre: "Action/Spy", desc: "Ethan Hunt tackles the impossible." }
];

function Action() {
  return (
    <div className="gallery">
      {actionMovies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <img src={movie.img} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <span className="genre-tag">{movie.genre}</span>
            <p>{movie.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Action;