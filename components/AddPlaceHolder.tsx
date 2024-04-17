"use client";
import Image from "next/image";
import React from "react";
import {Tooltip} from "@nextui-org/react";

type Props = {
  Image: any;
};

export default function AddPlaceHolder({}: Props) {
  return (
    <div className=""> 
    <Tooltip content="Your Ads could be here !">
        <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 rounded-lg">
            <Image
                src="/images/2.jpg"
                alt="placeholder"
                width={200}
                height={200}
            />
            <p className="text-lg font-semibold text-gray-500">Your Ads could be here !</p>
        </div>

  </Tooltip>
  </div>
  );
}
