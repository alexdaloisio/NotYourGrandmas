import React from "react";
import ticTacToeBoard from "../Model/model";
import x from "../Images/x.png";
import o from "../Images/o.png";
import empty from "../Images/empty.png";
import { spotValue } from "../Model/model";

const borderWidth = "5px";
const spotWidth = "130px";
const spotHeight = "130px";

interface props {
  model: ticTacToeBoard;
  reDraw: Function;
}

class GameBoard extends React.Component<props> {
  state = {
    model: this.props.model,
    reDraw: this.props.reDraw,
  };

  render() {
    return (
      <div>
        <div style={boardStyle}>
          <div onClick={() => this.onClick(0, 0)} style={topLeft}>
            <img src={this.getImage(0, 0)} alt={"help,mistake!"}></img>{" "}
          </div>
          <div onClick={() => this.onClick(0, 1)} style={topMid}>
            <img src={this.getImage(0, 1)} alt={"help,mistake!"}></img>{" "}
          </div>
          <div onClick={() => this.onClick(0, 2)} style={topRight}>
            <img src={this.getImage(0, 2)} alt={"help,mistake!"}></img>{" "}
          </div>

          <div onClick={() => this.onClick(1, 0)} style={midLeft}>
            <img src={this.getImage(1, 0)} alt={"help,mistake!"}></img>{" "}
          </div>
          <div onClick={() => this.onClick(1, 1)} style={midMid}>
            <img src={this.getImage(1, 1)} alt={"help,mistake!"}></img>{" "}
          </div>
          <div onClick={() => this.onClick(1, 2)} style={midRight}>
            <img src={this.getImage(1, 2)} alt={"help,mistake!"}></img>{" "}
          </div>

          <div onClick={() => this.onClick(2, 0)} style={botLeft}>
            <img src={this.getImage(2, 0)} alt={"help,mistake!"}></img>{" "}
          </div>
          <div onClick={() => this.onClick(2, 1)} style={botMid}>
            <img src={this.getImage(2, 1)} alt={"help,mistake!"}></img>{" "}
          </div>
          <div onClick={() => this.onClick(2, 2)} style={noBorder}>
            <img src={this.getImage(2, 2)} alt={"help,mistake!"}></img>{" "}
          </div>
        </div>
      </div>
    );
  }

  getImage = (row: number, col: number) => {
    if (this.state.model.getValueAt(row, col) === spotValue.empty) {
      return empty;
    }

    if (this.state.model.getValueAt(row, col) === spotValue.x) {
      return x;
    } else if (this.state.model.getValueAt(row, col) === spotValue.o) {
      return o;
    }
  };
  onClick = (row: number, col: number) => {
    this.state.model.makeMove(row, col);
    this.state.reDraw();
    this.setState({ model: this.state.model });
  };
}

const boardStyle = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
};

const topLeft = {
  border: "0px solid black",
  borderRightWidth: borderWidth,
  borderBottomWidth: borderWidth,
  width: spotWidth,
  height: spotHeight,
};

const topMid = {
  border: "0px solid black",
  borderRightWidth: borderWidth,
  borderBottomWidth: borderWidth,
  width: spotWidth,
  height: spotHeight,
};

const topRight = {
  border: "0px solid black",
  borderBottomWidth: borderWidth,
  width: spotWidth,
  height: spotHeight,
};

const midLeft = {
  border: "0px solid black",
  borderBottomWidth: borderWidth,
  borderRightWidth: borderWidth,
  width: spotWidth,
  height: spotHeight,
};

const midMid = {
  border: "0px solid black",
  borderRightWidth: borderWidth,
  borderBottomWidth: borderWidth,
  width: spotWidth,
  height: spotHeight,
};

const midRight = {
  border: "0px solid black",
  borderBottomWidth: borderWidth,
  width: spotWidth,
  height: spotHeight,
};

const botLeft = {
  border: "0px solid black",
  borderRightWidth: borderWidth,
  width: spotWidth,
  height: spotHeight,
};

const botMid = {
  border: "0px solid black",
  borderRightWidth: borderWidth,
  width: spotWidth,
  height: spotHeight,
};

const noBorder = {
  border: "0px solid black",
};

export default GameBoard;
