import { label } from "./label";
import { startGame } from "./start-game";
import { submitButton } from "./submit-button";
import { wordInput } from "./word-input";

export const hangMan = () => {
  const template = `
    <main class="hang-man">
      <h1>🪢 Hang Man 🪢</h1>
      <section class="choose-word">
        ${label("wordInput", "Introduce la palabra secreta: ")}
        ${wordInput("wordInput")}
        ${submitButton("submitWord")}
      </section>
    </main>
  `;

  const header = document.querySelector("header");
  header.insertAdjacentHTML("afterend", template);

  const button = document.querySelector("#submitWord");
  button.addEventListener("click", startGame);
};
