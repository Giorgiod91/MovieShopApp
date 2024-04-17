// //"use client";

// import { fetchingHere } from "@/api/FetchingData";
// import FavoriteItems from "@/components/AddToFavorites";
// import FavoriteList from "@/components/favoriteList";
// import React, { useEffect } from "react";

// type Props = {};

// export default function favortie({}: Props) {

//   return (
//     <div>
//       <h1>this is the favorite page</h1>

//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//       <div className="inline-block max-w-lg text-center justify-center">
//         <h1 className={title()}>Easy</h1>
//         <h1 className={title({ color: "violet" })}>Buy&nbsp;</h1>
//         <br />
//         <h1 className={title()}>Get some of the best</h1>
//         <br />
//         <h1 className={title({ color: "violet", class: "p-4" })}>Movies</h1>
//         <h1 className={title()}>out there</h1>
//         <h2 className={subtitle({ class: "mt-4" })}>
//           buy or Rent(with a monthly subscription)
//         </h2>
//       </div>
//       <div></div>
//       <div className="flex">
//         <GenreBar />
//       </div>

//       <div className="flex gap-4">
//         <AddPlaceHolder />
//         <Tabs aria-label="Popular Movies">
//           <Tab key="movies" title="Popular Movies">
//             <Card>
//               <CardBody>
//                 <Cards2
//                   shoppingCart={shoppingCart}
//                   addToCart={addToCart}
//                   removeItemFromCart={removeItemFromCart}
//                   isCartOpen={isCartOpen}
//                   setIsCartOpen={setIsCartOpen}
//                 />
//               </CardBody>
//             </Card>
//           </Tab>
//           <Tab key="music" title="Music">
//             <Card>
//               <CardBody>
//                 <CardsHorror
//                   shoppingCart={shoppingCart}
//                   addToCart={addToCart}
//                   removeItemFromCart={removeItemFromCart}
//                   isCartOpen={isCartOpen}
//                   setIsCartOpen={setIsCartOpen}
//                 />
//               </CardBody>
//             </Card>
//           </Tab>
//         </Tabs>
//         <AddPlaceHolder />
//       </div>

//       <div className="flex gap-3"></div>
//     </section>

//     </div>
//   );
// }
