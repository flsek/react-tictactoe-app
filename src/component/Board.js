import Square from "./Square";
import "./Board.css";

const Board = ({ squares, onClick }) => {
  const renderSqaure = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className="board-wrapper">
      <div className="board-row">
        {renderSqaure(0)}
        {renderSqaure(1)}
        {renderSqaure(2)}
      </div>
      <div className="board-row">
        {renderSqaure(3)}
        {renderSqaure(4)}
        {renderSqaure(5)}
      </div>
      <div className="board-row">
        {renderSqaure(6)}
        {renderSqaure(7)}
        {renderSqaure(8)}
      </div>
    </div>
  );
};

export default Board;
