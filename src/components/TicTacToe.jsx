import { useEffect, useMemo, useState } from "react";
import "./TicTacToe.css";

const EMPTY = null;

const LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
];

function getWinner(board) {
  for (const [a,b,c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a,b,c] };
    }
  }
  if (board.every(Boolean)) return { winner: "draw", line: [] };
  return { winner: null, line: [] };
}

function availableMoves(board) {
  return board.map((v,i)=>v ? null : i).filter(v=>v!==null);
}

function minimax(board, isMax) {
  const res = getWinner(board);
  if (res.winner === "O") return { score: 10 };
  if (res.winner === "X") return { score: -10 };
  if (res.winner === "draw") return { score: 0 };

  let best = { score: isMax ? -Infinity : Infinity };
  for (const m of availableMoves(board)) {
    board[m] = isMax ? "O" : "X";
    const r = minimax(board, !isMax);
    board[m] = EMPTY;

    if (isMax && r.score > best.score) best = { score: r.score, move: m };
    if (!isMax && r.score < best.score) best = { score: r.score, move: m };
  }
  return best;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(EMPTY));
  const [turn, setTurn] = useState("X");
  const [locked, setLocked] = useState(false);
  const [difficulty, setDifficulty] = useState("medium");
  const [showConfetti, setShowConfetti] = useState(false);
  const [stats, setStats] = useState({ you: 0, ai: 0, draw: 0 });

  const result = useMemo(() => getWinner(board), [board]);
  const winner = result.winner;
  const winLine = result.line;

  /* Handle game end */
  useEffect(() => {
    if (!winner) return;

    setLocked(true);

    setStats(s => {
      const next = { ...s };
      if (winner === "X") next.you += 1;
      else if (winner === "O") next.ai += 1;
      else next.draw += 1;
      return next;
    });

    if (winner === "X") setShowConfetti(true);

    const t = setTimeout(resetGame, 1600);
    return () => clearTimeout(t);
  }, [winner]);

  /* AI Move */
  useEffect(() => {
    if (winner || turn !== "O") return;

    const t = setTimeout(() => {
      const copy = [...board];
      const moves = availableMoves(copy);
      if (!moves.length) return;

      let move;
      if (difficulty === "easy") {
        move = moves[Math.floor(Math.random() * moves.length)];
      } else if (difficulty === "medium") {
        move = Math.random() < 0.7 ? minimax(copy, true).move : moves[0];
      } else {
        move = minimax(copy, true).move;
      }

      copy[move] = "O";
      setBoard(copy);
      setTurn("X");
    }, 280);

    return () => clearTimeout(t);
  }, [turn, difficulty, board, winner]);

  function handleClick(i) {
    if (locked || board[i] || turn !== "X") return;
    const copy = [...board];
    copy[i] = "X";
    setBoard(copy);
    setTurn("O");
  }

  function resetGame() {
    setBoard(Array(9).fill(EMPTY));
    setTurn("X");
    setLocked(false);
    setShowConfetti(false);
  }

  return (
    <div className="tttCard popIn">
      {showConfetti && <div className="confetti" />}

      <h3 className="tttTitle">Tic-Tac-Toe</h3>

      <div className="difficulty">
        {["Easy","Medium","Hard"].map(d => (
          <button
            key={d}
            className={difficulty === d.toLowerCase() ? "active" : ""}
            onClick={() => setDifficulty(d.toLowerCase())}
            type="button"
          >
            {d}
          </button>
        ))}
      </div>

      <div className="tttBody">
        {/* GRID */}
        <div className="tttGrid">
          {board.map((cell, i) => {
            const isWin = winLine.includes(i);
            return (
              <button
                key={i}
                className={`tttCell ${cell ? "filled" : ""} ${isWin ? "win" : ""}`}
                onClick={() => handleClick(i)}
                disabled={locked || !!cell}
                type="button"
              >
                {cell && (
                  <span className={`mark ${cell === "X" ? "x" : "o"}`}>
                    {cell}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* STATS */}
        <div className="tttStatsCol">
          <div className="statLine"><span>You</span><strong>{stats.you}</strong></div>
          <div className="statLine"><span>AI</span><strong>{stats.ai}</strong></div>
          <div className="statLine"><span>Draw</span><strong>{stats.draw}</strong></div>
        </div>
      </div>
    </div>
  );
}
