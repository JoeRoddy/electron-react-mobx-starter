import React, { PropTypes } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import nameStore from "../stores/NameStore";

@observer
class NameSaver extends React.Component {
  state = {
    inputVal: ""
  };

  render() {
    return (
      <div>
        <div>current name: {nameStore.currentName}</div>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={e => this.setState({ inputVal: e.target.value })}
        />
        <button
          onClick={e => {
            nameStore.changeNameTo(this.state.inputVal);
            this.setState({ inputVal: "" });
          }}
        >
          save
        </button>
      </div>
    );
  }
}

export default NameSaver;
