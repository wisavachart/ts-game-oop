import { Ball } from "../sprite/ball";
import { Brick } from "../sprite/brick";
import { Paddle } from "../sprite/paddle";

export class CanvasView {
  canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private scoreDisplay: HTMLObjectElement | null;
  private start: HTMLObjectElement | null;
  private info: HTMLObjectElement | null;

  constructor(canvasNme: string) {
    this.canvas = document.querySelector(canvasNme) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.scoreDisplay = document.querySelector("#score");
    this.start = document.querySelector("#start");
    this.info = document.querySelector("#info");
  }

  //METHOD
  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  initStartBtn(startfunction: (view: CanvasView) => void): void {
    this.start?.addEventListener("click", () => startfunction(this));
  }

  drawScore(score: number): void {
    if (this.scoreDisplay) {
      this.scoreDisplay.innerHTML = score.toString();
    }
  }
  drawInfo(text: string): void {
    if (this.info) this.info.innerHTML = text;
  }

  drawSprite(sprite: Brick | Paddle | Ball): void {
    if (!sprite) return;
    this.context?.drawImage(
      sprite.image,
      sprite.pos.x,
      sprite.pos.y,
      sprite.width,
      sprite.height
    );
  }

  drawBrick(bricks: Brick[]): void {
    bricks.forEach((brick) => this.drawSprite(brick));
  }
}
