"use client";
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
import { useState } from "react";
import AddPlaceHolder from "@/components/AddPlaceHolder";
import GenreBar from "@/components/GenreBar";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import CardsHorror from "@/components/CardsHorror";
import CardsComedy from "@/components/CardsComedy";

interface Item {
  title: string;
  img: string;
  price: string;
}
export default function Home() {
  const [shoppingCart, setShoppingCart] = useState<
    { item: Item; quantity: number }[]
  >([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
  return (
    <section className="flex flex-col font-serif items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Movie</h1>
        <h1 className={title({ color: "yellow" })}>Block&nbsp;</h1>
        <br />
        <h1 className={title()}>Get some of the best</h1>
        <br />
        <h1 className={title({ color: "yellow", class: "p-4" })}>Movies</h1>
        <h1 className={title()}>out there</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          buy or Rent (with a monthly subscription)
        </h2>
      </div>

      <Tabs aria-label="Popular Movies">
        <Tab key="movies" title="Popular Movies">
          <Card style={{ background: "transparent" }}>
            <CardBody>
              <Cards2
                shoppingCart={shoppingCart}
                addToCart={addToCart}
                removeItemFromCart={removeItemFromCart}
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
              />
            </CardBody>
          </Card>
        </Tab>

        <Tab key="Horror" title="Horror">
          <Card style={{ background: "transparent" }}>
            <CardBody>
              <CardsHorror
                shoppingCart={shoppingCart}
                addToCart={addToCart}
                removeItemFromCart={removeItemFromCart}
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
              />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Comedy" title="Comedy">
          <Card style={{ background: "transparent" }}>
            <CardBody>
              <CardsComedy
                shoppingCart={shoppingCart}
                addToCart={addToCart}
                removeItemFromCart={removeItemFromCart}
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
              />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </section>
  );
}
