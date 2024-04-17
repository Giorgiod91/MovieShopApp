"use client";
import React, { useEffect, useState } from "react";
import { fetchingHere } from "@/api/FetchingData";

type Props = {
  searchParams?: { term: string };
};

function SearchPage({ searchParams }: Props) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchterm] = useState("");

  useEffect(() => {
    fetchingHere()
      .then((fetchedData) => {
        // Store the fetched data in the component's state
        setData(fetchedData.results || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredData = data.filter((movie: any) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="Search"
        value={searchTerm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
      <div>
        {filteredData.map((movie: any) => (
          <div key={movie.id}>
            {/* Add a unique key */}
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
