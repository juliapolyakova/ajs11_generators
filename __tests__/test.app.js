import Team from '../src/team';
import Person from '../src/person';

const player1 = new Person('Лучник', 'Bowman');
const player2 = new Person('Fro', 'Magician');
const player3 = new Person('Ger', 'Daemon');
const team = new Team();
team.addAll(player1, player2, player3);
const iterator = team[Symbol.iterator]();

test('Первый игрок', () => {
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = iterator.next().value;

  expect(received).toEqual(expected);
});

test('Второй игрок', () => {
  const expected = {
    name: 'Fro',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = iterator.next().value;

  expect(received).toEqual(expected);
});

test('Третий игрок', () => {
  const expected = {
    name: 'Ger',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = iterator.next().value;

  expect(received).toEqual(expected);
});
