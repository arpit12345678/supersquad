import characters_json from '../data/characters.json';

import {ADD_CHARACTER} from '../actions';

export function createCharacter(id){
    let characters=characters_json.find(c=>c.id===id);
    return characters;
}

//export default createCharacter;
