import React, { useContext } from 'react'
import RestartBtn from "../assets/images/replay.png";
import ClockBtn from "../assets/images/clock.png";
import { GameContext } from '../context/GameContextProvider';

const SideBar = () => {

    const { timeLeft, restartGame,score } = useContext(GameContext);

  return (
    <div className=" absolute right-36 md:-right-52 -bottom-[7.5rem] md:bottom-32 flex flex-col items-start gap-1">

      <div className="flex items-center justify-center gap-1 bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100    bg-center bg-contain bg-no-repeat w-64 h-20 md:h-24 ">
        <img src={ClockBtn} alt="" className=" w-5 md:w-8" />
        <p className=" text-amber-900 md:text-lg font-bold  ">
          Time Left :{" "}
          <span className=" md:text-xl text-green-600">
            {" "}
            {timeLeft} secs
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 bg-center bg-contain bg-no-repeat w-64 h-20 md:h-32">
        <button onClick={restartGame} className="flex items-center gap-3 px-6 py-3 text-white font-semibold text-lg bg-gradient-to-r from-red-200 via-yellow-200 to-pink-200 hover:from-red-300 hover:via-yellow-300 hover:to-pink-300  transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-slate-500 rounded-xl">
          <img src={RestartBtn} alt="" className=" w-8 h-8 md:w-10 md:h-10" />
          <p className=" text-gray-600 md:text-lg font-bold">Replay</p>
        </button>
      </div>
      
    </div>
  );
}

export default SideBar