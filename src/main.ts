import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { BULBASAUR } from "./bases/03-classes.ts";

const getPokemonData = async () => {
  const poke = await BULBASAUR.getPokemonData();
  return poke;
};
const pokemonData = await getPokemonData();
console.log(pokemonData);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>

      <img src="${pokemonData.sprites.front_default}" class="logo vanilla" alt=${pokemonData.name} />
    <h1>${pokemonData.name}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      ${pokemonData.base_experience}
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
