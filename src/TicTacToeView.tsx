import React, { Component, CSSProperties } from "react";
import "./App.css";
import GameBoard from "./Components/GameBoard";
import ticTacToeBoard from "./Model/model";
import WinMessage from "./Components/WinMessage";
import PlayerInfo from "./Components/PlayerInfo";
import {
  Container,
  Row,
  Col,
  Popover,
  OverlayTrigger,
  Button,
} from "react-bootstrap";

export default class TicTacToeView extends Component {
  state = {
    model: new ticTacToeBoard(),
  };

  render() {
    return (
      <div>
        <div style={popUpStyle}>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
            <Button>How to play?</Button>
          </OverlayTrigger>
        </div>
        <Container>
          <Row>
            <Col>
              <PlayerInfo
                model={this.state.model}
                player={this.state.model.player1}
                playerNumber={1}
              />
            </Col>
            <Col>
              <GameBoard model={this.state.model} reDraw={this.reDrawParent} />
            </Col>
            <Col>
              <PlayerInfo
                model={this.state.model}
                player={this.state.model.player2}
                playerNumber={2}
              />
            </Col>
          </Row>

          <div style={statusSpaceStyle}>
            <WinMessage model={this.state.model} reset={this.resetGame} />
          </div>
        </Container>
      </div>
    );
  }

  resetGame = () => {
    this.state.model.resetGame();
    this.setState({ model: this.state.model });
  };

  reDrawParent = () => {
    this.setState({ model: this.state.model });
  };
}

const statusSpaceStyle = {
  textAlign: "center",
  paddingTop: "0.2rem",
  paddingBottom: "1rem",
} as CSSProperties;

const popUpStyle = {
  textAlign: "center",
  marginBottom: "0.5rem",
} as CSSProperties;
const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">How to Play:</Popover.Title>
    <Popover.Content>
      One player wins by getting the game to be a tie, while the other player
      wins by either winning, or making the other person win (so losing).
    </Popover.Content>
  </Popover>
);
