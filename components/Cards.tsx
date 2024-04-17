import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import CartIcon from "./CartIcon";
import { Button } from "@nextui-org/react";
import AddPlaceHolder from "./AddPlaceHolder";
import { card } from "@nextui-org/theme";
import "./imagecard.css";
import { fetchingHere } from "@/api/FetchingData";
import "./movietitle.css";
import "./Cards.css";
import { HiMiniShoppingCart } from "react-icons/hi2";
import AddToFavorites from "./AddToFavorites";
import { HiMiniPlusCircle } from "react-icons/hi2";
import FavoriteItems from "./AddToFavorites";
import { CiYoutube } from "react-icons/ci";

interface Item {
  title: string;
  img: string;
  price: number | string;
  overview: string;
  poster_path: string | undefined;
}

const favorites = [""];

export default function Cards2({
  shoppingCart,
  addToCart,
  removeItemFromCart,
  isCartOpen,
  setIsCartOpen,
}: {
  shoppingCart: { item: Item; quantity: number }[];
  onclick: () => void;
  addToCart: (item: Item) => void;
  removeItemFromCart: (title: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [data, setData] = useState<Item[]>([]); // here i use the useState hook to set the data i get from the api
  const [searchQuery, setSearchQuery] = useState("");
  const [randomPrices, setRandomPrices] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const [click, isClicked] = useState(false);
  const [cardOpacities, setCardOpacities] = useState<boolean[]>(
    data.map(() => false)
  );
  // creatin an array of isflippped to check if the card is flipped or not with this approach i can flip the card individually
  const [isFlippedArray, setIsFlippedArray] = useState<boolean[]>(
    data.map(() => false)
  );
  // Function to add items to cart from localStorage
  useEffect(() => {
    const addToCartFromStorage = (savedShoppingCart: any) => {
      savedShoppingCart.forEach((savedCartItem: any) => {
        addToCart(savedCartItem.item, savedCartItem.quantity);
      });
    };

    const savedShoppingCart = localStorage.getItem("shoppingCart");
    if (savedShoppingCart) {
      const parsedShoppingCart = JSON.parse(savedShoppingCart);
      addToCartFromStorage(parsedShoppingCart);
    }
  }, [addToCart]);

  // Save shopping card data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const addToFavorites = (title: string) => {
    if (!favorites.includes(title)) {
      const updatedFavorites = [...favorites, title];
      setFavorites(updatedFavorites);
    }
  };
  console.log(favorites);
  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleCardClick = (index: number, clickedElement: string) => {
    // Create a copy of the isFlippedArray and toggle the clicked card's state
    // Checking if the clicked element is the card itself or the card's child like the youtube icon shoppincard icon....
    if (
      clickedElement === "HiMiniShoppingCart" ||
      clickedElement === "HiMiniPlusCircle" ||
      clickedElement === "CiYoutube"
    ) {
      return;
    }
    const updatedIsFlippedArray = [...isFlippedArray];
    updatedIsFlippedArray[index] = !updatedIsFlippedArray[index];
    setIsFlippedArray(updatedIsFlippedArray);
  };

  const handleShoppingCartClick = (index: number) => {
    const itemToAdd = data[index];

    if (
      !shoppingCart.some((cartItem) => cartItem.item.title === itemToAdd.title)
    ) {
      addToCart(itemToAdd);
    }
  };

  const toggleClickState = (index: number) => {
    isClicked(!click);
    const updatedCardOpacities = [...cardOpacities];
    updatedCardOpacities[index] = !updatedCardOpacities[index];
    setCardOpacities(updatedCardOpacities);
  };
  // My app is about buying movies so i use the random function to generate a random price for the movies from the fetched data

  const generateRandomPrices = () => {
    const prices = data.map(() => {
      const priceInCents = Math.floor(Math.random() * 1401) + 100;
      const formattedPrice = `$${(priceInCents / 100).toFixed(2)}`;
      return formattedPrice;
    });
    setRandomPrices(prices);
  };

  // here i use my fetching function to get the data from the api i made in api/FetchingData.tsx
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

  useEffect(() => {
    generateRandomPrices();
  }, [data]);
  const calcTotalPrice = () => {
    //The reduce method is used to iterate over an array and accumulate a single value based on the elements of the array.
    return (
      shoppingCart
        // check if the price is a string
        .filter((cartItem) => typeof cartItem.item.price === "string")
        .reduce(
          (acc, curr) =>
            acc + parseFloat(curr.item.price.replace("$", "")) * curr.quantity,
          0
        )
        .toFixed(2)
    );
  };

  const itemImages: { [key: string]: string } = {
    ItemName1: "/images/fruit-1.png",
    ItemName2: "/images/fruit-2.png",
    ItemName3: "/images/fruit-3.png",
  };
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const uniqueCartItemTitles = [
    ...new Set(shoppingCart.map((cartItem) => cartItem.item.title)),
  ];
  const cartModal = (
    <div className={`cart-modal ${isCartOpen ? "open" : ""}`}>
      <div className="cart-content" style={{ width: "400px", height: "500px" }}>
        <h2 className="text-4xl">Shopping Cart</h2>
        <br />
        <ul className="flex flex-col">
          {uniqueCartItemTitles.map((cartItemTitle, index) => {
            const cartItem = shoppingCart.find(
              (item) => item.item.title === cartItemTitle
            );
            const itemData = data.find((item) => item.title === cartItemTitle);

            return (
              <div key={index}>
                <li key={index}>
                  <div className=" text-2xl">{cartItemTitle}</div>
                  <br />
                  {itemData && (
                    <img
                      src={baseUrl + (itemData.poster_path || "")}
                      alt={cartItemTitle}
                      className="cart-item-image"
                    />
                  )}
                  <br /> - Quantity: {cartItem?.quantity || 0}
                  <button
                    onClick={() => removeItemFromCart(cartItemTitle)}
                    className="text-red-500 ml-2"
                  >
                    Remove
                  </button>
                </li>
                <br />
              </div>
            );
          })}
        </ul>
        <p className=" sticky bottom-0">Total: ${calcTotalPrice()}</p>
      </div>
      <button className="close-button" onClick={() => setIsCartOpen(false)}>
        Close
      </button>
    </div>
  );
  //TODO: add a fovirite icon a star and those should be passed as prop to the favorite site and displayed there

  return (
    <div className="gap-2  grid grid-cols-2 sm:grid-cols-4  ">
      <input
        className=""
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      {data
        .filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((item, index) => (
          <Card
            className={`card ${
              isFlippedArray[index] ? "flipped" : ""
            }, border  border-gray-400 opacity-90`}
            shadow="sm"
            key={index}
            isPressable
            onClick={() => handleCardClick(index, "card")}
          >
            <CardBody
              className={`card-body ${isFlippedArray[index] ? "flipped" : ""}`}
            >
              {isFlippedArray[index] ? (
                <div className="back">
                  <p className="text-default-500">{item.overview}</p>
                </div>
              ) : (
                <div className="front">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[350px]"
                    src={baseUrl + item.poster_path}
                  />
                </div>
              )}
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="movie-title">{item.title}</b>

              <p className=" text-default-500">{randomPrices[index]}</p>
            </CardFooter>
            <div className="flex items-center justify-between">
              <HiMiniShoppingCart
                className={`m-5 hover:scale-150 ${
                  cardOpacities[index] ? "opacity-0" : ""
                }`}
                onClick={() => {
                  handleShoppingCartClick(index, 0);
                  toggleClickState(index);
                }}
              />

              <HiMiniPlusCircle
                onClick={() => addToFavorites(item.title)}
                className="m-5 hover:scale-150"
              />

              <div className="m-5 hover:scale-150 text-center ">
                <CiYoutube
                  className="m-5 hover:text-red-500"
                  onClick={() => {
                    window.open(
                      `https://www.youtube.com/results?search_query=${item.title}`,
                      "_blank"
                    );
                  }}
                />
              </div>
            </div>
          </Card>
        ))}

      <CartIcon
        shoppingCart={shoppingCart}
        onClick={() => setIsCartOpen(!isCartOpen)}
      />
      <FavoriteItems favorites={favorites} />
      {cartModal}
    </div>
  );
}
