import React from "react";
import { FaCartArrowDown } from 'react-icons/fa'; 
import { Badge } from "@nextui-org/react";
//importing ShoppingCardIcon to use it in the CartIcon component as a prop to be able to showcase the number of items in the cart
import ShoppingCardIcon from "./ShoppinCardIcon";



interface Item {
  title: string;
  img: string;
  price: string;
}
interface CartIconProps {
  // what does void mean? it means that the function does not return anything so no value
  onClick: () => void;
  shoppingCart: { item: Item; quantity: number }[]; // Add a prop for the shopping cart data
}

function CartIcon({ onClick, shoppingCart }: CartIconProps) {
  const [isInvisible, setIsInvisible] = React.useState(false);

  // Calculate the total quantity of items in the shopping cart
  const totalQuantity = shoppingCart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  return (
    <div onClick={onClick} className="cart-icon">
      <span className="cursor-pointer">
        <Badge
          color="danger"
          content={totalQuantity} // Use the totalQuantity as the content
          isInvisible={isInvisible}
          shape="circle"
        >
          <ShoppingCardIcon size={30} />
        </Badge>
      </span>
    </div>
  );
}

export default CartIcon;