'use strict';
const HashMap = require('./hashmap');

function lorHashMap() {
  const lor = new HashMap();
  lor.set('Hobbit1', 'Bilbo');
  lor.set('Hobbit2', 'Frodo');
  lor.set('Wizard', 'Gandalf');
  lor.set('Human', 'Aragorn');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar1', 'The Necromancer');
  lor.set('Maiar2', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');
  console.log(lor);
  console.log(lor.get('Maiar1'));
  console.log(lor.get('Hobbit2'));
}

lorHashMap();