import { typesColors } from "../../utilities/pokemon-types-colors";
import { pokemons } from "./transform-pokemons";
import { insertPokemons } from "./insert-pokemons";

export const filterByType = () => {
  const typesFilter = document.querySelector(".types-filter");

  for (const type in typesColors) {
    const template = `
      <label for="${type}">
        <input type="checkbox" value="${type}" id="${type}" class="type-checkbox" />
        ${type.toUpperCase()}
      </label>
    `;

    typesFilter.insertAdjacentHTML("beforeend", template);

    console.log(typesFilter.lastElementChild);

    typesFilter.lastElementChild.addEventListener("click", (event) => {
      console.log("HOLA");

      const pokemonsByType = pokemons.filter((pokemon) => {
        return pokemon.types[0] === event.target.value;
      });
      const pokemonsContainer = document.querySelector(".pokemons-container");
      pokemonsContainer.remove();
      insertPokemons(pokemonsByType);
    });
  }
};
