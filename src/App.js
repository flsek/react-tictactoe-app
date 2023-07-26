import Board from "./component/Board";

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>game-info</div>
        <ol></ol>
      </div>
    </div>
  );
}

export default App;
