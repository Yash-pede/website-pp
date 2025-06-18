"use client";
import { BsCapsule } from "react-icons/bs";
import { Card } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

export default function Component({
  name,
  price,
  composition,
  href,
}: {
  name: string;
  price: string;
  composition: string;
  href: string;
}) {
  const [mouseOver, setmouseOver] = useState<boolean>(false);

  return (
    <Card
      className="max-w-full md:max-w-xs mb-8 md:mb-16 cursor-pointer p-3 hover:scale-[1.03] transition-all duration-300"
      onMouseEnter={() => setmouseOver(true)}
      onMouseLeave={() => setmouseOver(false)}
      renderImage={() => (
        <Image
          width={500}
          height={500}
          src={`/products/${href}.png`}
          alt="image 1"
        />
      )}
    >
      <div className="relative flex flex-col justify-center items-center">
        <span
          className={`${
            mouseOver
              ? "bg-[#1CBA9F] shadow-[0px_4px_10px_rgb(150,150,150,1)] "
              : "bg-[#223A66]"
          } p-5 text-white rounded-full w-fit mx-auto absolute -top-14 transition-all duration-500`}
        >
          <BsCapsule className="scale-150" />
        </span>
      </div>
      <div className="flex flex-col my-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white exo mb-2">
          {name}
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-[#DC3545] dark:text-white exo">
          {price}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {composition}
        </p>
      </div>
    </Card>
  );
}
