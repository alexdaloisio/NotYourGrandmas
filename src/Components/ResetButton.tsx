import React from "react";
import { Button } from "react-bootstrap";

interface props {
  reset: Function;
}

export default class ResetButton extends React.Component<props> {
  render() {
    return (
      <div>
        <Button onClick={() => this.props.reset()}>Play Again!</Button>
      </div>
    );
  }
}
