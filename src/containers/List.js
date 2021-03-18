import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../actions/CharacterActions";
import { Search } from "../components/Search";
import { CharactersList } from "../components/CharactersList";

const List = ({ actions, characters, error }) => {
  return (
    <div>
      <Search
        onSearchChange={actions.searchCharacter}
        onSearchEmpty={actions.allCharacters}
        error={error && error}
      />
      <CharactersList characters={characters} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    characters: state.charactersList.data,
    error: state.charactersList.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
