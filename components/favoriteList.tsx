import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { fetchingHere } from "@/api/FetchingData";

type Props = {};

export default function FavoriteList({}: Props) {
  const [data, setData] = React.useState([]);

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

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {data.map((item: any) => (
        <Card key={item.id} className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              {item.title}
            </p>
            <h4 className="text-white font-medium text-large">
              {item.name}
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={baseUrl + item.poster_path}
          />
        </Card>
      ))}
    </div>
  );
}
