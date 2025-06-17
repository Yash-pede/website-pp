import React from "react";
import Card from "@/components/Flowbite/Card";
import Link from "next/link";
import { products } from "@/constants/config";

const Products = () => {
  return (
    <section className="max-sm:mt-[80px] mt-[135px] py-10">
      <h1 className="text-4xl md:text-5xl font-bold exo text-center pb-8 md:pb-16">Our Products</h1>

      <div className="flex flex-wrap lg:w-10/12 mx-auto md:px-0 md:w-fit lg:px-0 justify-center">
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
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
