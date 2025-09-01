"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopluarCityCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know the most popular cities
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "France, Paris",
    title: "Explor the city of lights - Eiffel Tower",
    src: "/paris.jpg",
    content: <DummyContent />,
  },
  {
    category: "USA, New York City",
    title: "Dive into the city of dreams - Statue of Liberty",
    src: "/New York.jpg",
    content: <DummyContent />,
  },
  {
    category: "UK, London",
    title: "London — A City of Timeless Energy",
    src: "/London.jpg",
    content: <DummyContent />,
  },

  {
    category: "Japan, Tokyo",
    title: "Tokyo: Future in Motion",
    src: "/Tokyo.jpg",
    content: <DummyContent />,
  },
  {
    category: "Italy, Rome",
    title: "Rome: The Eternal City of Love",
    src: "/Rome.jpg",
    content: <DummyContent />,
  },
  {
    category: "China, Beijing",
    title: "Beijing: The Heart of the World",
    src: "/China.jpg",
    content: <DummyContent />,
  },
];
