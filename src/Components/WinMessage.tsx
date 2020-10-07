import React, { Component } from "react";
import ticTacToeBoard from "../Model/model";
import RestButton from "./ResetButton";

interface props {
  model: ticTacToeBoard;
  reset: Function;
}

export default class WinMessage extends Component<props> {
  state = {
    model: this.props.model,
  };

  render() {
    if (this.props.model.gameInProgress) {
      return (
        <div>
          it is player {this.state.model.currentTurn}'s turn!
          <div> &nbsp; </div>
        </div>
      );
    } else {
      return (
        <div>
          {this.props.model.getWinner()?.getName()} has Won!
          <div> Grandma would be impressed! </div>
          <RestButton reset={this.props.reset} />
        </div>
      );
    }
  }
}
