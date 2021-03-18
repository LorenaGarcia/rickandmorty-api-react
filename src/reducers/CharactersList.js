import {
  SEARCH_CHARACTERS,
  CHARACTERS_ERROR,
} from "../actions/CharacterActions";

const initialState = {
  data: [],
};

export default function charactersList(
  state = initialState,
  { type, payload, message }
) {
  switch (type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        data: payload.results,
        error: message,
      };
    case CHARACTERS_ERROR:
      return {
        error: message,
      };
    default:
      return state;
  }
}
