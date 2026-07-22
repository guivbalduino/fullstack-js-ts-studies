import { Person } from './test-modules/person';

const person1 = new Person('Guilherme', 'Balduino');

person1.fetchData().then((_person) => console.log(person1));

async function run() {
  const pessoa = await new Person('João', 'Miranda').fetchData();
  console.log(pessoa.firstName, pessoa.lastName);
}
run();
