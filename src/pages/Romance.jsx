import React from 'react';
import j from "../assets/j.jpg";
import f from "../assets/f.jpg";
import g from "../assets/g.jpg";
import h from "../assets/h.jpg";
import i from "../assets/i.jpg";

const romanceMovies = [
  { title: "Titanic", img: j, genre: "Romance/Drama", desc: "A seventeen-year-old aristocrat falls in love with a kind but poor artist." },
  { title: "The Notebook", img: f, genre: "Romance/Drama", desc: "A young man and woman are separated by fate and social class." },
  { title: "Me Before You", img: i, genre: "Romance/Indie", desc: "A girl in a small town forms an unlikely bond with a recently-paralyzed man." },
  { title: "Pride and Prejudice", img: g, genre: "Romance/Period", desc: "Sparks fly when Elizabeth Bennet meets the wealthy Mr. Darcy." },
  { title: "La La Land", img: h, genre: "Romance/Musical", desc: "A pianist and an actress fall in love while pursuing their dreams in LA." }
];

function Romance() {
  return (
    <div className="gallery">
      {romanceMovies.map((movie, index) => (
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

export default Romance;