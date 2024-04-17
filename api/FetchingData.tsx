export function fetchingHere() {
  const account_id = 14664576;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODNkZDg4YjBjYzAyYzBkMzdmZTlhNGIzNWRkZDE0MCIsInN1YiI6IjYzMTllMGJiZDk1NTRiMDA3YWMzNmZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yyq_8oYMl5gq5Qnfb6bG9HE4YAQJV0ft0xwREfkh4xc",
    },
  };

  return fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

export function fetchGenres(id: number) {
  const account_id = 14664576;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODNkZDg4YjBjYzAyYzBkMzdmZTlhNGIzNWRkZDE0MCIsInN1YiI6IjYzMTllMGJiZDk1NTRiMDA3YWMzNmZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yyq_8oYMl5gq5Qnfb6bG9HE4YAQJV0ft0xwREfkh4xc",
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=183dd88b0cc02c0d37fe9a4b35ddd140&with_genres=${id}`,
    options
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

export function getComedyMovies() {
  const account_id = 14664576;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODNkZDg8YWxgYWN5bW9yZCxpb3NlciIsInN1YiI6IjYzMTllMGJiZDk1NTRiMDA3YWMzNmZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yyq_8oYMl5gq5Qnfb6bG9HE4YAQJV0ft0xwREfkh4xc",
    },
  };

  return fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=183dd88b0cc02c0d37fe9a4b35ddd140&language=en-US&sort_by=release_date.desc&page=1&with_genres=35,53,27",
    options
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

export function getHorrorMovies() {
  const account_id = 14664576;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODNkZDg8YWxgYWN5bW9yZCxpb3NlciIsInN1YiI6IjYzMTllMGJiZDk1NTRiMDA3YWMzNmZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yyq_8oYMl5gq5Qnfb6bG9HE4YAQJV0ft0xwREfkh4xc",
    },
  };
  return fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=183dd88b0cc02c0d37fe9a4b35ddd140&language=en-US&sort_by=release_date.desc&page=1&with_genres=35",
    options
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
