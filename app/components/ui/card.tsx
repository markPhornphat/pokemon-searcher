import Image from "next/image";
import { redirect } from "next/navigation";

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
  const handleClick = (name: string) => {
    redirect(`/?pokemon=${name}`);
  };

  return (
    <div className="h-auto bg-white rounded-xl shadow-md w-full max-w-xs flex flex-col p-5 gap-4 transition-transform hover:scale-105 duration-300">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{props.name}</h2>
        <span
          className={`text-sm text-white font-semibold px-2 py-1 rounded-full ${
            COLOR_MAP[props.types[0].toLowerCase()] || "bg-gray-400"
          }`}
        >
          #{props.number}
        </span>
      </div>

      {/* Image */}
      <div className="relative w-44 h-44 mx-auto">
        <Image
          src={props.image}
          alt={props.name}
          fill
          sizes="176px"
          className="object-cover rounded"
          priority
        />
      </div>

      {/* Types */}
      <div>
        <h3 className="font-semibold mb-1">Types:</h3>
        <div className="flex gap-2 flex-wrap">
          {props.types.map((type) => (
            <span
              key={type}
              className={`text-sm text-white font-semibold px-3 py-1 rounded-2xl ${
                COLOR_MAP[type.toLowerCase()] || "bg-gray-500"
              }`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Evolutions */}
      <div>
        <h3 className="font-semibold mb-1">Evolutions:</h3>
        <div className="flex flex-col gap-2 pl-2">
          {props.evolutions?.length > 0 ? (
            props.evolutions.map((evo, index) => (
              <button
                key={evo.id || evo.name}
                onClick={() => handleClick(evo.name)}
                className={`text-white font-bold px-3 py-1 rounded-full text-left transition-all hover:opacity-80 active:scale-95 ${
                  COLOR_MAP[evo.types?.[0]?.toLowerCase()] || "bg-slate-400"
                }`}
              >
                {`${index + 1}. ${evo.name}`}
              </button>
            ))
          ) : (
            <p className="text-sm text-gray-500">No evolution</p>
          )}
        </div>
      </div>

      {/* Stats */}
      <div>
        <h3 className="font-semibold mb-1">Attacks:</h3>
        <div className="text-sm space-y-1 pl-2">
          {props.attacks?.fast?.map((atk) => (
            <div key={atk.name} className="text-gray-700">
              ⚡ {atk.name}{" "}
              <span className="text-xs text-gray-500">({atk.damage} dmg)</span>
            </div>
          ))}
          {props.attacks?.special?.map((atk) => (
            <div key={atk.name} className="text-gray-700">
              💥 {atk.name}{" "}
              <span className="text-xs text-gray-500">({atk.damage} dmg)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
