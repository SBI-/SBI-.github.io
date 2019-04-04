window.onload = () => {
  function addListeners() {
    document.getElementById("words").addEventListener("input", e => {
      e.preventDefault();
      const words = document
        .getElementById("words")
        .value.trim()
        .split("\n")
        .filter(x => x !== "");

      const side = Math.floor(Math.sqrt(words.length));
      const coefficient = 100.0 / side;

      const container = document.getElementById("square-container");
      container.innerHTML = "";
      container.setAttribute(
        "style",
        `grid-template-columns: repeat(auto-fill, minmax(${coefficient}%, 1fr));`
      );

      words.slice(0, side * side).forEach(w => {
        const square = document.createElement("div");
        square.classList.add("square");

        const content = document.createElement("div");
        content.classList.add("content");
        content.classList.add("column");

        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerHTML = w;

        content.appendChild(cell);
        square.appendChild(content);

        container.appendChild(square);
      });
    });
  }
  addListeners();
};
