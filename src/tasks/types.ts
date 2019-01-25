export class Task {
  readonly id: string;
  readonly name: string;
  readonly done: boolean;

  constructor(id: string, name: string, done: boolean) {
    this.id = id;
    this.name = name;
    this.done = done;
  }
}
