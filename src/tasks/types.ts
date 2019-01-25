export class Task {
  readonly id: number;
  readonly name: string;
  readonly done: boolean;

  constructor(id: number, name: string, done: boolean) {
    this.id = id;
    this.name = name;
    this.done = done;
  }
}
