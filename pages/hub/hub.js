import { matchingPairs } from "../matching-pairs/matching-pairs";
import { pokeApiInit } from "../poke-api/poke-api-init";
import { ticTacToe } from "../tic-tac-toe/tic-tac-toe";
import { whakaTopo } from "../whaka-topo/whaka-topo";
import { quizRide } from "../quiz-ride/quiz-ride";
import { hangMan } from "../hang-man/hang-man";
import { login } from "../login/login";

export const hub = () => {
  if (!localStorage.name) {
    login();
  } else {
    const template = `
    <main>
      <h1>¡Bienvenido/a 👋 ${localStorage.name}!</h1>
      <div class="games-container">
        <div class="game">
          <p>⭕ TIC-TAC-TOE ❌</p>
        </div>
        <div class="game">
          <p>POKE API</p>
        </div>
        <div class="game">
          <p>🔨 Whaka-mole 🔨</p>
        </div>
        <div class="game">
          <p>🚗 Quiz Ride 🐎</p>
        </div>
        <div class="game">
          <p>🪢 Hang Man 🪢</p>
        </div>
        <div class="game">
          <p>🍉 Memory: Matching Pairs 👨‍🤝‍👩</p>
        </div>
      </div>
    </main>
    `;

    const target = document.querySelector("header");
    target.insertAdjacentHTML("afterend", template);

    const gamesPages = [
      ticTacToe,
      pokeApiInit,
      whakaTopo,
      quizRide,
      hangMan,
      matchingPairs,
    ];

    const games = document.querySelectorAll(".game");
    games.forEach((game, i) => {
      game.addEventListener("click", () => {
        document.querySelector("main").remove();
        gamesPages[i]();
      });
    });
  }
};
