import { REQUEST_CHARACTER_ITEM } from "../actions/CharacterActions";

const initialState = {
  data: {},
};

export default function characterItem(state = initialState, { type, body }) {
  switch (type) {
    case REQUEST_CHARACTER_ITEM:
      return { ...state, data: body };
    default:
      return state;
  }
}
