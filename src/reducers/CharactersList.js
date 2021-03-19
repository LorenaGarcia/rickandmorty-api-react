import {
  SEARCH_CHARACTERS,
  CHARACTERS_ERROR,
} from "../actions/CharacterActions";

const initialState = {
  data: [],
};

export default function charactersList(
  state = initialState,
  { type, body, message }
) {
  switch (type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        data: body.results,
      };
    case CHARACTERS_ERROR:
      return {
        ...state,
        error: message,
      };
    default:
      return state;
  }
}
