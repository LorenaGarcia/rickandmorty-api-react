import { combineReducers } from "redux";
import CharactersList from "./CharactersList";
import CharacterItem from "./CharacterItem";

const rootReducer = combineReducers({
  charactersList: CharactersList,
  characterItem: CharacterItem,
});

export default rootReducer;
