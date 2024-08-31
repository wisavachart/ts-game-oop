import { Vector } from "../type";

export class Paddle {
  private paddleImage: HTMLImageElement;
  private moveL: boolean;
  private moveR: boolean;
  private speed: number;
  private padW: number;
  private padH: number;
  private padPos: Vector;

  constructor(
    image: string,
    speed: number,
    padW: number,
    padH: number,
    padPos: Vector
  ) {
    this.paddleImage = new Image();
    this.paddleImage.src = image;
    this.speed = speed;
    this.padH = padH;
    this.padW = padW;
    this.padPos = padPos;
    this.moveL = false;
    this.moveR = false;

    //Event
    document.addEventListener("keyup", this.haddleKeyUp);
    document.addEventListener("keydown", this.haddleKeyDown);
  }

  //Getter
  get width(): number {
    return this.padW;
  }
  get height(): number {
    return this.padH;
  }
  get speeder(): number {
    return this.speed;
  }
  get pos(): Vector {
    return this.padPos;
  }
  get image(): HTMLImageElement {
    return this.paddleImage;
  }
  get isMovingL(): boolean {
    return this.moveL;
  }
  get isMovingR(): boolean {
    return this.moveR;
  }
  movePaddle(): void {
    if (this.moveL) {
      this.padPos.x -= this.speed;
    }
    if (this.moveR) {
      this.padPos.x += this.speed;
    }
  }
  haddleKeyUp = (e: KeyboardEvent): void => {
    if (e.code === "ArrowLeft" || e.key === "ArrowLeft") {
      this.moveL = false;
    }
    if (e.code === "ArrowRight" || e.key === "ArrowRight") {
      this.moveR = false;
    }
  };
  haddleKeyDown = (e: KeyboardEvent): void => {
    if (e.code === "ArrowLeft" || e.key === "ArrowLeft") {
      console.log(e.code);
      this.moveL = true;
    }
    if (e.code === "ArrowRight" || e.key === "ArrowRight") {
      this.moveR = true;
    }
  };
}
