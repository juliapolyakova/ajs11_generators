export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой объект уже существует в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    for (const player of characters) {
      this.members.add(player);
    }
  }

  * [Symbol.iterator]() {
    const players = this.toArray();
    const last = players.length;

    for (let i = 0; i < last; i += 1) {
      yield players[i];
    }

    // второй вариант
    // for (const player of this.toArray()) {
    //   yield player;
    // }
  }

  toArray() {
    return Array.from(this.members);
  }
}
