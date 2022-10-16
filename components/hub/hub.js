import { matchingPairs } from "../matching-pairs/matching-pairs";
import { ticTacToe } from "../tic-tac-toe/tic-tac-toe";

export const hub = () => {
  const template = `
  <main>
    <h1>¡Bienvenido 👋 ${localStorage.name}!</h1>
    <div class="games-container">
      <div class="game">
        <p>⭕ TIC-TAC-TOE ❌</p>
      </div>
      <div class="game">
        <p>🍉 Memory: Matching Pairs 👨‍🤝‍👩</p>
      </div>   
    </div>
  </main>
  `;

  const target = document.querySelector("nav");
  target.insertAdjacentHTML("afterend", template);

  // Array of functions for the scalability of games
  const gamesComponents = [ticTacToe, matchingPairs];

  const games = document.querySelectorAll(".game");
  games.forEach((game, i) => {
    game.addEventListener("click", () => {
      document.querySelector("main").remove();
      gamesComponents[i]();
    });
  });
};
