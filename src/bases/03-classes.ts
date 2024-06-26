import axios from "axios";

export class Pokemon {
  public id: number;
  public name: string;
  private url: string =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  get imageUrl(): string {
    return `${this.url}/${this.id}.png`;
  }

  async getPokemonData() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    return data;
  }
}

export const BULBASAUR = new Pokemon(1, "Bulbasaur");
export const pokeURL = BULBASAUR.imageUrl;

export class Digimon {
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }
}

export const AGUMON = new Digimon(1, "Agumon");
