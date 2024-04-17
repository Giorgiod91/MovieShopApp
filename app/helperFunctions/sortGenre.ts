import { fetchingHere, fetchGenres } from "@/api/FetchingData";

//:TODO: find the right types for the parameters
const url = "https://api.themoviedb.org/3/genre/movie/list";
 function sortGenre(id: number, genres: any){
  const genre = genres.find((genre: any) => genre.id === id);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODNkZDg4YjBjYzAyYzBkMzdmZTlhNGIzNWRkZDE0MCIsInN1YiI6IjYzMTllMGJiZDk1NTRiMDA3YWMzNmZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yyq_8oYMl5gq5Qnfb6bG9HE4YAQJV0ft0xwREfkh4xc",
    },
  };

  if (genre) {
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en&with_genres=${genre.name}`,
      options
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
  } else {
    return Promise.reject("Genre not found");
  }
};

export default sortGenre;



// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

const { Pool } = require('pg');
const newDBPool = new Pool({
    user: 'admin',
    host: 'localhost:3000',
    database: 'willywonkadb',
    password: 'goldenticket'
});

