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

let gameOver = false;
let socre = 0;

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
  ball: Ball
) {
  view.clear();
  view.drawBrick(bricks);
  view.drawSprite(paddle);
  view.drawSprite(ball);
  //move ball
  ball.moveBall();
  //move Pad
  if (
    (paddle.isMovingL && paddle.pos.x > 0) ||
    (paddle.isMovingR && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }

  requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball));
}

function startGame(view: CanvasView) {
  socre = 0;
  view.drawInfo("");
  view.drawScore(0);
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

  gameLoop(view, bricks, paddle, ball);
}

const view = new CanvasView("#playField");
view.initStartBtn(startGame);
