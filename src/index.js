/**
 * One possible solution for this "kata" could be the next one:
 *
 * rock => 0
 * paper => 1
 * scissors => 2
 * lizard => 3
 * spock => 4
 * To check the rules see the image below:
 * https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/recursos/piedra-papel-tijeras-lagarto-spock/124867008-1-esl-ES/piedra-papel-tijeras-lagarto-spock.jpg?resize=480:*
 */

const NAMES = {
  0: 'Rock',
  1: 'Paper',
  2: 'Scissors',
  3: 'Lizard',
  4: 'Spock',
};

const RESULTS = [
  [0, 1, 2, 2, 1],
  [2, 0, 1, 1, 2],
  [1, 2, 0, 2, 1],
  [1, 2, 1, 0, 2],
  [2, 1, 2, 1, 0],
];

const writeElement = (text) => {
  const element = document.createElement('h3');
  const node = document.createTextNode(text);

  element.appendChild(node);
  document.body.appendChild(element);
};

const getWinnerChoice = (playerOne, playerTwo) => RESULTS[playerOne][playerTwo];

(() => {
  const PLAYER_1 = '1';
  const PLAYER_2 = '2';
  const WINNER_CHOICE = getWinnerChoice(PLAYER_1, PLAYER_2);
  const WINNER = (CHOICE => {
    switch (CHOICE) {
      case 0:
        return 'Tied!';
      case 1:
        return 'Player Two';
      case 2:
        return 'Player One';
    }
  })(WINNER_CHOICE);

  writeElement(`Player One: ${NAMES[PLAYER_1]}`);
  writeElement(`Player Two: ${NAMES[PLAYER_2]}`);
  writeElement(`The winner is: ${WINNER}`);
})();
