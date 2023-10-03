import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="">
        <h1 className="cards ">Memopus</h1>
            <Outlet/>
      </header>
    </div>
  );
}

export default App;
