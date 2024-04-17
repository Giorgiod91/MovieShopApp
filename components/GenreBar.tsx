import React from "react";

type Props = {};

const title = ["Horror", "Comedy", "Thriller", "Crime"];

export default function GenreBar({}: Props) {
  return (
    <div className="flex cursor-pointer sm:w-20 w-12">
      {title.map((item, index) => (
        <div key={index} className="flex justify-between">
          <p className="text-xs sm:text-sm">{item}</p>
        </div>
      ))}
    </div>
  );
}
