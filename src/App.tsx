import React, { CSSProperties } from "react";
import "./App.css";
import TicTacToeView from "./TicTacToeView";
import grandma from "./Images/grandma.png";
import { Image } from "react-bootstrap";

/*
Normal tic tac toe is boring. Why? Because games end in ties 99.9% of the time! So lets switch things up. How about one player wins by getting the game to be a tie,
while the other player wins by either winning, or making the other person win (so losing). This isn't your grandma's tic tac toe!
*/
function App() {
  return (
    <div>
      <header style={headerStyle}>
        <div style={textStyle}>
          {" "}
          Not your grandma's Tic Tac Toe!{" "}
          <Image style={grandmaStyle} src={grandma} alt="Grandma"></Image>
        </div>
      </header>
      <div style={TTTBody}>
        <TicTacToeView />
      </div>
    </div>
  );
}

const TTTBody = {
  minHeight: "81.5vh",
  backgroundColor: "#49a2e6",
  paddingTop: "1rem",
};

const textStyle = {
  width: "100%",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const headerStyle = {
  fontSize: "2.25rem",
  paddingTop: "1rem",
  paddingBottom: "1.5rem",
  backgroundColor: "#3253d9",
  borderBottom: "1px black solid",
  minHeight: "15vh",
};

const grandmaStyle = {
  float: "right",
  height: "128px",
  width: "96px",
} as CSSProperties;

export default App;
