import React from 'react';
import Board from './components/Board';
import SideBar from './components/SideBar';
import GameContextProvider from './context/GameContextProvider';
import FinalScreen from './components/FinalScreen';


const App = () => {
  

  return (
   
      <GameContextProvider>
        
            <main className="relative overflow-hidden bg-blue-300 h-screen w-screen flex flex-col items-center justify-center">
              <h1 className="absolute top-[5%] text-white mb--20 font-extrabold text-4xl lg:text-5xl text-center bg-clip-text text-transparent shadow-lg shadow-black/40 p-4 sm:p-2 lg:p-8 rounded-lg">
                Remember Me
              </h1>
              <div className="relative -mt-64 md:mt-10 md:-ms-72 lg:ms-0 w-[34rem] h-[34rem] md:w-[40rem] md:h-[40rem]">
                <Board />
                <SideBar />
              </div>
              <FinalScreen />
            </main>
          
      </GameContextProvider>
  
  );
};

export default App;
