import React from "react";
import { Square } from "./Square";
import "./Board.css";

export class Board extends React.Component {
  /**
   * constructor(생성자)를 사용하면 인스턴스화된 객체에서 다른 메서드를 호출하기
   * 전에 수행해야 하는 사용자 지정 초기화를 제공할 수 있습니다.
   */
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  handleClick(i) {
    /**
     * slice() 메서드는 어떤 배열의 begin부터 end까지에 대한
     * shallow copy를 새로운 배열 객체로 반환합니다.
     */
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({ squares: squares });
  }
  renderSqaure(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    const status = "Next player: X";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSqaure(0)}
          {this.renderSqaure(1)}
          {this.renderSqaure(2)}
        </div>
        <div className="board-row">
          {this.renderSqaure(3)}
          {this.renderSqaure(4)}
          {this.renderSqaure(5)}
        </div>
        <div className="board-row">
          {this.renderSqaure(6)}
          {this.renderSqaure(7)}
          {this.renderSqaure(8)}
        </div>
      </div>
    );
  }
}
