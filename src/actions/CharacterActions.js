import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

export const SEARCH_CHARACTERS = "SEARCH_CHARACTERS";
export const REQUEST_CHARACTER_ITEM = "REQUEST_CHARACTER_ITEM";
export const CHARACTERS_ERROR = "CHARACTERS_ERROR";

export const searchCharacter = (search = null) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/character/?name=${search.replace(/\s/g, "+")}`
    );

    dispatch({
      type: "SEARCH_CHARACTERS",
      payload: res.data,
      query: search,
    });
  } catch (e) {
    dispatch({
      type: "CHARACTERS_ERROR",
      message: e.response.data && e.response.data.error,
    });
  }
};

export const allCharacters = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/character`);
    dispatch({
      type: "SEARCH_CHARACTERS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "CHARACTERS_ERROR",
      message: e.message,
    });
  }
};

export const requestCharacterItem = (id = null) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/character/${id}`);
    dispatch({
      type: "REQUEST_CHARACTER_ITEM",
      payload: res.data,
      character: id,
    });
  } catch (e) {
    dispatch({
      type: "CHARACTERS_ERROR",
      message: e.message,
    });
  }
};
