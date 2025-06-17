import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <section className="my-20 max-sm:mb-10 max-sm:mt-0">
      <div className="flex justify-center gap-10 max-sm:overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={`/clients/${index + 1}.png`}
            width={200}
            height={200}
            alt={`client-${index + 1}`}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
