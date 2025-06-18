import React from "react";
import Card from "@/components/Flowbite/Card";
import Link from "next/link";
import { products } from "@/constants/config";

const Productspage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-sm:mt-[80px] mt-[135px] py-10">
        <h1 className="text-4xl md:text-5xl font-bold exo text-center pb-8 md:pb-16">
          Our Products
        </h1>

        <div className="flex flex-wrap lg:w-10/12 mx-auto md:px-0 px-4 md:w-fit lg:px-0 justify-center">
          {products.map(({ name, price, composition }, index) => (
            <Link
              href={`/products/${
                name.includes(" ")
                  ? name.replace(" ", "-").toLowerCase()
                  : name.toLowerCase()
              }`}
              key={index}
              className="mx-auto w-fit"
            >
              <Card
                name={name}
                price={price}
                composition={composition}
                href={`${
                  name == "CIFIPURE-LB"
                    ? "cifipure-LB"
                    : name == "Gestopride 200SR"
                    ? "gestopride-200SR"
                    : name.includes(" ")
                    ? name.replace(" ", "-").toLowerCase()
                    : name.toLowerCase()
                }`}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Productspage;
