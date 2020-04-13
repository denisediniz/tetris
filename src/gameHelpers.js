export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      // check if the cell is a tetromino
      if (player.tetromino[y][x] !== 0) {
        if (
          // check if the cell is inside the stage
          // inside the height from the area
          !stage[y + player.position.y + moveY] ||
          // inside the width from the area
          !stage[y + player.position.y + moveY][
            x + player.position.x + moveX
          ] ||
          // check if the cell isn't empty
          stage[y + player.position.y + moveY][
            x + player.position.x + moveX
          ][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
};
