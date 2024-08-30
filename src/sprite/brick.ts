import { Vector } from "../type";

export class Brick {
  private brickImage: HTMLImageElement = new Image();
  private brickWidth: number;
  private brickHight: number;
  private brickPosition: Vector;
  private brickEnegy: number;

  constructor(
    brickWidth: number,
    brickHight: number,
    brickPosition: Vector,
    brickEnegy: number,
    image: string
  ) {
    this.brickEnegy = brickEnegy;
    this.brickHight = brickHight;
    this.brickPosition = brickPosition;
    this.brickWidth = brickWidth;
    this.brickImage.src = image;
  }

  //GETTER
  get width(): number {
    return this.brickWidth;
  }

  get height(): number {
    return this.brickHight;
  }

  get pos(): Vector {
    return this.brickPosition;
  }

  get image(): HTMLImageElement {
    return this.image;
  }

  get energy(): number {
    return this.brickEnegy;
  }

  //Setter
  set energy(nr: number) {
    this.brickEnegy = nr;
  }
}
