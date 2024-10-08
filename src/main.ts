import { Ball } from "./sprite/ball";
import { Brick } from "./sprite/brick";
import { Paddle } from "./sprite/paddle";
import { CanvasView } from "./views/canvas-view";
import PADDLE_IMG from "./images/paddle.png";
import BALL_IMG from "./images/ball.png";
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SIZE,
  BALL_SPEED,
  BALL_STARTX,
  BALL_STARTY,
} from "./setup";
import { createBricks } from "./helper";
import { CollistionCheck } from "./collision";

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo("GAME OVER");
  gameOver = false;
}

function setGameWin(view: CanvasView) {
  view.drawInfo("GAME WIN");
  gameOver = false;
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
  collision: CollistionCheck
) {
  view.clear();
  view.drawBrick(bricks);
  view.drawSprite(paddle);
  view.drawSprite(ball);
  //move ball
  ball.moveBall();
  //move Pad

  collision.checkBallCollision(ball, paddle, view);
  const collidingBrick = collision.isCollidingBricks(ball, bricks);
  if (collidingBrick) {
    score += 1;
    view.drawScore(score);
  }
  // Game Over when ball leaves playField
  if (ball.pos.y > view.canvas.height) gameOver = true;
  // If game won, set gameOver and display win
  if (bricks.length === 0) return setGameWin(view);
  // Return if gameover and don't run the requestAnimationFrame
  if (gameOver) return setGameOver(view);

  if (
    (paddle.isMovingL && paddle.pos.x > 0) ||
    (paddle.isMovingR && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }

  requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}

function startGame(view: CanvasView) {
  score = 0;
  view.drawInfo("");
  view.drawScore(0);
  const collision = new CollistionCheck();
  const bricks = createBricks();
  const ball = new Ball(
    BALL_SPEED,
    BALL_SIZE,
    { x: BALL_STARTX, y: BALL_STARTY },
    BALL_IMG
  );
  const paddle = new Paddle(
    PADDLE_IMG,
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - 5,
    }
  );

  gameLoop(view, bricks, paddle, ball, collision);
}

const view = new CanvasView("#playField");
view.initStartBtn(startGame);
