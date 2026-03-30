import React from 'react';
import o from "../assets/o.jpg";
import k from "../assets/k.jpg";
import l from "../assets/l.jpg";
import m from "../assets/m.jpg";
import n from "../assets/n.jpg";

const horrorMovies = [
  { title: "The Conjuring", img: k, genre: "Horror/Supernatural", desc: "Paranormal investigators help a terrorized family." },
  { title: "Insidious", img: l, genre: "Horror/Thriller", desc: "A family looks to prevent evil spirits from trapping their child." },
  { title: "Annabelle", img: n, genre: "Horror/Mystery", desc: "A couple begins to experience terrifying supernatural occurrences." },
  { title: "Amazon", img: m, genre: "Horror/Drama", desc: "Seven helpless children are haunted by a shape-shifting clown." },
  { title: "The Nun", img: o, genre: "Horror/Gothic", desc: "A priest and a novice investigate a dark secret in Romania." }
];

function Horror() {
  return (
    <div className="gallery">
      {horrorMovies.map((movie, index) => (
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

export default Horror;