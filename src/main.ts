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
) {}

function startGame(view: CanvasView) {}

const view = new CanvasView("#playField");
view.initStartBtn(startGame);
