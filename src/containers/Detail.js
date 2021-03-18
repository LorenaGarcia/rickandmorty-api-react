import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as Actions from "../actions/CharacterActions";
import { CharacterDetail } from "../components/CharacterDetail";

const Detail = ({ actions, characterItem }) => {
  const { character } = useParams();

  useEffect(() => {
    actions.requestCharacterItem(character);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character]);

  return (
    <div>
      <CharacterDetail character={characterItem} />
    </div>
  );
};

function mapStateToProps({ characterItem }) {
  return {
    characterItem: characterItem.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
