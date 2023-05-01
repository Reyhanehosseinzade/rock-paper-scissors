const game = () => {
  let pScore = 0;
  let cScore = 0;

  //   start game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeout");
      setTimeout(() => {
        match.classList.remove("fadeout");
        match.classList.add("fadein");
      }, 400);
    });
  };

  //   play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const plyrHand = document.querySelector(".plyrhand");
    const computerHand = document.querySelector(".computerhand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    // computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      // computer choice
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random(computerOptions) * 3);
        const computerChoice = computerOptions[computerNumber];

        // compare hands

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          // update images
          plyrHand.src = `./image/${this.textContent}.png`;
          computerHand.src = `./image/${computerChoice}.png`;
        }, 1000);

        plyrHand.style.animation = "shakePlayer 1s linear";
        computerHand.style.animation = "shakeComputer 1s linear";
      });
    });
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".plyrscore span");
    const computerScore = document.querySelector(".computerscore span");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner h2");
    // tie
    if (playerChoice === computerChoice) {
      winner.textContent = "it is a tie";
      return;
    }

    // plyr paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "player is winner";
        pScore++;
        updateScore();
        return;
      }
      if (computerChoice === "scissors") {
        winner.textContent = "computer is winner";
        cScore++;
        updateScore();
        return;
      }
    }

    //player rock
    if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        winner.textContent = "computer is winner";
        cScore++;
        updateScore();
        return;
      }
      if (computerChoice === "scissors") {
        winner.textContent = "player is winner";
        pScore++;
        updateScore();
        return;
      }
    }

    // player scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "player is winner";
        pScore++;
        updateScore();
        return;
      }
      if (computerChoice === "rock") {
        winner.textContent = "computer is winner";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  // call all the inner functions
  startGame();
  playMatch();
};
game();
