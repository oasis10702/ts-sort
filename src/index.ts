import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10000, 3, -5, 0]);
const charactreCollection = new CharacterCollection('Xaayb');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

numberCollection.sort();
charactreCollection.sort();
linkedList.sort();

console.log(numberCollection.data);
console.log(charactreCollection.data);
linkedList.print();
