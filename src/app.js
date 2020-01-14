import Team from './team';
import Person from './person';

const player1 = new Person('Лучник', 'Bowman');
const player2 = new Person('Fro', 'Magician');
const player3 = new Person('Ger', 'Daemon');
const team = new Team();
team.addAll(player1, player2, player3);
