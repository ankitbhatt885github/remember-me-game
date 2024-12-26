import React, { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
import RestartBtn from "../assets/images/replay.png";
import Confetti from "react-confetti";

const Overlay = () => {
  const { gameOver, gameWon, restartGame, score } = useContext(GameContext);

  if (!gameOver && !gameWon) return null;

  return (
    <div className=" absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-50 ">
      <h1 className=" text-blue-500 text-4xl md:text-8xl font-serif font-bold mb-8">
        {gameOver ? " Game Over 😞 " : gameWon ? " You Win ✨ " : ""}
      </h1>
      <div className=" flex items-center gap-3 mt-10">
      
      {/* show your score on the screen  */}
        <p className=" text-3xl uppercase font-bold text-white ">
          {" "}
          Your Score is :{" "}
          <span className="text-green-500 text-4xl"> {score} </span>{" "}
        </p>
      </div>

    <div className="flex items-center justify-center gap-3 bg-center bg-contain bg-no-repeat w-64 h-20 md:h-32">
            <button onClick={restartGame} className="flex items-center gap-3 px-6 py-3 text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-red-200 via-yellow-200 to-pink-200 hover:from-red-300 hover:via-yellow-300 hover:to-pink-300  transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-slate-500">
              <img src={RestartBtn} alt="" className=" w-8 h-8 md:w-10 md:h-10" />
              <p className=" text-gray-600 md:text-lg font-bold">Replay</p>
            </button>
          </div>
      {gameWon && (
        <>
        {/* show confetti  */}
          <Confetti
            width={2000}
            height={1000}
            tweenDuration={5000}
            numberOfPieces={200}
            gravity={0.01}
            colors={["#f44336", "#00ff00", "#0000ff", "#ffff00", "#9c27b0"]}
          />
        </>
      )}
    </div>
  );
};

export default Overlay;
