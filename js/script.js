let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function handleClick(index) {
  if (gameBoard[index] === "" && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;

    if (checkWinner()) {
      document.getElementById(
        "message"
      ).innerText = `Player ${currentPlayer} venceu!`;
      gameActive = false;
    } else if (gameBoard.every((cell) => cell !== "")) {
      document.getElementById("message").innerText = "Empate!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winPatterns.some((pattern) => {
    const [a, b, c] = pattern;
    return (
      gameBoard[a] !== "" &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[b] === gameBoard[c]
    );
  });
}

function reiniciarJogo() {
    // Limpar o tabuleiro e a mensagem
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("message").innerText = "";

    // Reiniciar as células no tabuleiro
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
    }

    // Reiniciar variáveis de controle
    gameActive = true;
    currentPlayer = "X";
  }