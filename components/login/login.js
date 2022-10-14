export const login = () => {
  const app = document.querySelector("#app");
  app.insertAdjacentHTML(
    "beforeend",
    `
    <div class="login">
      <h1>NEOLAND HUB-GAMES</h1>
      <label for="name">Introduce tu nombre:</label>
      <input type="text" id="name">
      <button id="submitName">👍</button>
    </div>
    `
  );
  const input = document.querySelector("#name");
  const button = document.querySelector("#submitName")
  button.addEventListener("click", () => {
    localStorage.setItem("name", input.value);
  })
};
