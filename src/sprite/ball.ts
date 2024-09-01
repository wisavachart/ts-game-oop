import { Vector } from "../type";

export class Ball {
  private speed: Vector;
  private ballImage: HTMLImageElement;

  constructor(
    speed: number,
    private ballSize: number,
    private position: Vector,
    image: string
  ) {
    this.ballImage = new Image();
    this.ballImage.src = image;
    this.ballSize = ballSize;
    this.position = position;
    this.speed = {
      x: speed,
      y: -speed,
    };
  }

  // Getters
  get width(): number {
    return this.ballSize;
  }

  get height(): number {
    return this.ballSize;
  }

  get pos(): Vector {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.ballImage;
  }

  // Methods
  changeYDirection(): void {
    this.speed.y = -this.speed.y;
  }

  changeXDirection(): void {
    this.speed.x = -this.speed.x;
  }

  moveBall(): void {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  }
}
