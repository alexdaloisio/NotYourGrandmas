import React, { Component } from "react";
import ticTacToeBoard, { Player } from "../Model/model";

interface props {
  model: ticTacToeBoard;
  player: Player;
  playerNumber: number;
}

const lossColor = "red";
const winColor = "green";
const defaultColor = "black";

export default class PlayerInfo extends Component<props> {
  render() {
    return (
      <div
        style={{
          border: "3px " + this.calculateColor() + " solid",
          borderRadius: "30px",
          position: "relative",
          width: "20rem",
          height: "5rem",
          textAlign: "center",
        }}
      >
        <div>
          Player{this.props.playerNumber} ({this.props.player.getMarkAsString()}
          )
        </div>
        <div>You win by: {this.props.player.getWinConditionkAsString()}</div>
      </div>
    );
  }

  calculateColor = () => {
    if (this.props.model.gameInProgress) {
      return defaultColor;
    } else if (
      this.props.model.getWinner()?.getMarkAsString() ===
      this.props.player.getMarkAsString()
    ) {
      return winColor;
    } else {
      return lossColor;
    }
  };
}
