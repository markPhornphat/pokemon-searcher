//This is for defining the type
type pokemonType = {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  evolutions: [
    {
      id: string;
      number: string;
      name: string;
      classification: string;
      types: [string];
      resistant: [string];
      weaknesses: [string];
      fleeRate: number;
      maxCP: number;
      maxHP: number;
      image: string;
    }
  ];
  attacks: {
    fast: [
      {
        name: string;
        type: string;
        damage: number;
      }
    ];
    special: [
      {
        name: string;
        type: string;
        damage: number;
      }
    ];
  };
  classification: string;
  types: [string];
  resistant: [string];
  weaknesses: [string];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
};
