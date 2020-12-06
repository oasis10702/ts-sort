import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';

const numberCollection = new NumberCollection([10000, 3, -5, 0]);
const charactreCollection = new CharacterCollection('Xaayb');
const sorter = new Sorter(charactreCollection);
sorter.sort();
console.log(charactreCollection.data);
