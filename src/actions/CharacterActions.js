import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const SEARCH_CHARACTERS = "SEARCH_CHARACTERS";
const REQUEST_CHARACTER_ITEM = "REQUEST_CHARACTER_ITEM";
const CHARACTERS_ERROR = "CHARACTERS_ERROR";

const searchCharacter = (search = null) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/character/?name=${search.replace(/\s/g, "+")}`
    );

    dispatch({
      type: SEARCH_CHARACTERS,
      body: res.data,
      query: search,
    });
  } catch (e) {
    dispatch({
      type: CHARACTERS_ERROR,
      message: e.response.data && e.response.data.error,
    });
  }
};

const allCharacters = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/character`);
    dispatch({
      type: SEARCH_CHARACTERS,
      body: res.data,
    });
  } catch (e) {
    dispatch({
      type: CHARACTERS_ERROR,
      message: e.message,
    });
  }
};

const requestCharacterItem = (id = null) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/character/${id}`);
    dispatch({
      type: REQUEST_CHARACTER_ITEM,
      body: res.data,
      character: id,
    });
  } catch (e) {
    dispatch({
      type: CHARACTERS_ERROR,
      message: e.message,
    });
  }
};

export {
  SEARCH_CHARACTERS,
  REQUEST_CHARACTER_ITEM,
  CHARACTERS_ERROR,
  searchCharacter,
  allCharacters,
  requestCharacterItem,
};
