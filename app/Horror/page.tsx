"use client";
import { fetchGenres } from "@/api/FetchingData";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Cards2 from "@/components/Cards";
import { type } from "os";
import { types } from "util";
import { useEffect, useState } from "react";
import AddPlaceHolder from "@/components/AddPlaceHolder";
import GenreBar from "@/components/GenreBar";
import sortGenre from "../helperFunctions/sortGenre";

type Props = {};
interface Item {
  title: string;
  img: string;
  price: string;
}

export default function page({}: Props) {
  const [shoppingCart, setShoppingCart] = useState<
    { item: Item; quantity: number }[]
  >([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [data, setData] = useState([]);
  // here i use the useState hook to set the data i get from the api

  const addToCart = (item: Item) => {
    // check if item is already in cart wiht find method
    const itemExists = shoppingCart.find(
      (shoppingCartItem) => shoppingCartItem.item.title === item.title
    );
    if (itemExists) {
      // using map method to create a new array with the updated quantity
      setShoppingCart(
        shoppingCart.map((shoppingCartItem) =>
          shoppingCartItem.item.title === item.title
            ? {
                ...shoppingCartItem,
                quantity: shoppingCartItem.quantity + 1,
              }
            : shoppingCartItem
        )
      );
    }
    // if item does not exist in cart, add it to cart
    else {
      setShoppingCart([...shoppingCart, { item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (title: string) => {
    // check if item is already in cart wiht find method
    const itemExists = shoppingCart.find(
      (shoppingCartItem) => shoppingCartItem.item.title === title
    );
    // if item exists in cart, check if quantity is 1
    if (itemExists) {
      // if the quantity is 1, remove the item from cart
      if (itemExists.quantity === 1) {
        setShoppingCart(
          shoppingCart.filter(
            (shoppingCartItem) => shoppingCartItem.item.title !== title
          )
        );
        //else, decrease the quantity by 1
      } else {
        setShoppingCart(
          shoppingCart.map((shoppingCartItem) =>
            shoppingCartItem.item.title === title
              ? {
                  ...shoppingCartItem,
                  quantity: shoppingCartItem.quantity - 1,
                }
              : shoppingCartItem
          )
        );
      }
    }
  };
  // here i use my fetching function to get the data from the api i made in api/FetchingData.tsx
  useEffect(() => {
    fetchGenres(14) // 27 is the id for Horror
      .then((fetchedData) => {
        // Handle the fetched data
        console.log(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1>Easy</h1>
        <br />
        <div></div>
      </div>

      <div className="flex">
        <GenreBar />
      </div>

      <div className="flex gap-4">
        <AddPlaceHolder />

        <Cards2
          shoppingCart={shoppingCart}
          addToCart={addToCart}
          removeItemFromCart={removeItemFromCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
        <AddPlaceHolder />
      </div>

      <div className="flex gap-3"></div>
    </section>
  );
}
