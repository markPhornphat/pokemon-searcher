import Image from "next/image";
import { redirect } from "next/navigation";

const COLOR_MAP: { [key: string]: string } = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-[#9bcc4f]",
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
    <div
      onClick={() => handleClick(props.name)}
      className="block xs:my-3 md:flex p-5 gap-10 w-full
                 bg-white rounded-xl shadow-md hover:bg-gray-50
                 transition-transform hover:scale-105 duration-300 hover:cursor-pointer  "
    >
      {/* LEFT BOX */}
      <div>
        {/* Header */}
        <div className="flex justify-between items-center h-auto">
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
        <div className="my-1">
          <h3 className="font-semibold mb-1">Types:</h3>
          <div className="flex gap-2 flex-wrap pl-2">
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
        <div className="h-1/6">
          <h3 className="font-semibold">Evolutions:</h3>
          <div className="flex flex-col gap-2 pl-2">
            {props.evolutions?.length > 0 ? (
              props.evolutions.map((evo, index) => (
                <button
                  key={evo.id || evo.name}
                  onClick={() => handleClick(evo.name)}
                  className={`text-white font-bold px-3 py-1 rounded-full text-left transition-all hover:opacity-80 active:scale-95 hover:cursor-pointer ${
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
      </div>

      {/* RIGHT BOX */}
      {/* Stats */}
      <div>
        <h3 className="font-semibold">Attacks:</h3>
        {/* FAST */}
        <div className="ml-3">
          <h3 className="font-semibold mb-1">Fast:</h3>
          <div className="text-sm grid grid-cols-2 gap-2 gap-x-4">
            {props.attacks?.fast?.map((atk, index) => (
              <div
                key={atk.name}
                className={`text-white text-base px-3 py-2 rounded-lg flex flex-col ${
                  COLOR_MAP[atk?.type?.toLowerCase()] || ""
                }`}
              >
                <div className="font-semibold text-lg">
                  {index + 1}. {atk.name}
                </div>
                <div className="font-medium space-y-1">
                  <div className="flex gap-2">
                    <span className="font-bold">Type:</span>
                    <span>{atk.type}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold">Damage:</span>
                    <span>{atk.damage} dmg</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SPECIAL */}
        <div className="ml-3">
          <h3 className="font-semibold mb-1">Special:</h3>
          <div className="text-sm grid grid-cols-2 gap-2 gap-x-4">
            {props.attacks?.special?.map((atk, index) => (
              <div
                key={atk.name}
                className={`text-white text-base px-3 py-2 rounded-lg flex flex-col break-words whitespace-normal ${
                  COLOR_MAP[atk.type.toLowerCase()]
                }`}
              >
                <div className="font-semibold text-lg">
                  {index + 1}. {atk.name}
                </div>
                <div className="font-medium space-y-1">
                  <div className="flex gap-2">
                    <span className="font-bold">Type:</span>
                    <span>{atk.type}</span>
                  </div>
                  <div className="flex gap-2 whitespace-nowrap">
                    <span className="font-bold">Damage:</span>
                    <span>{atk.damage} dmg</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
