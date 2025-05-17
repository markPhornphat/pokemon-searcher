import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { Button } from "./button";

const COLOR_MAP: { [key: string]: string } = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-cyan-300",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-indigo-300",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-800",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-600",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};

const Card = ({ props }: { props: pokemonType }) => {
  function handleClick(name: string) {
    redirect(`/?pokemon=${name}`);
  }

  return (
    <div className="bg-white w-60 h-full rounded-md flex flex-col gap-5 items-center px-5 py-5 shadow-md hover:animate-bounce hover:cursor-pointer">
      {/* Top */}
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-extrabold">{props.name}</h1>
        <div
          className={`rounded-full text-white text-sm ${
            COLOR_MAP[props.types[0].toLowerCase()]
          } p-1`}
        >
          {props.number}
        </div>
      </div>
      {/* Middle */}
      <div className="h-44 w-44 relative">
        <Image
          src={props.image}
          alt={`pokemon_${props.name}`}
          fill
          // width={500}
          // height={500}
          className="object-cover rounded"
          sizes="176px"
          priority
        />
      </div>
      {/* Body */}
      <div className="flex-1 flex flex-col gap-2 rounded-sm p-2 w-full">
        {/* TYPES */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Types:&nbsp;</h2>
          <div className="flex gap-1">
            {props.types.map((type) => (
              <div
                key={`${props.name}_${type}`}
                className={`flex justify-center items-center text-sm px-3 py-1 text-white font-semibold rounded-2xl w-auto ${
                  COLOR_MAP[type.toLowerCase()]
                }`}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
        {/* EVOLVE */}
        <div className="w-auto">
          <h2 className="font-semibold mb-2">Evolutions:</h2>
          <div className=" flex flex-col gap-2">
            {props.evolutions ? (
              props.evolutions.map((evo, index) => (
                <div
                  className={`text-white font-bold px-3 py-1 rounded-full self-start hover:cursor-pointer hover:opacity-70 active:bg-slate-500 ${
                    COLOR_MAP[evo.types?.[0]?.toLowerCase()] || "bg-slate-100"
                  }`}
                  key={evo.id}
                  onClick={() => handleClick(evo.name)}
                >
                  {`${index + 1}. ${evo.name}`}
                </div>
              ))
            ) : (
              <div>No evolution</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
