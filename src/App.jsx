import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Activities from "./pages/Activities";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import Goals from "./pages/Goals";
import Header from "./components/Header";
import useLocalStorage from "use-local-storage";

function App() {

  const [activePage, setActivePage] = useLocalStorage("page", 'activities');

  return (
    <>
      <nav className='app-nav'>
        <Sidebar activePage={activePage} setActivePage={setActivePage}/>
      </nav>
      <div className="app-container">
        <header className='app-header'>
          <Header />
        </header>
        <main className="app-main">
          {activePage === 'activities' && <Activities />}
          {activePage === 'goals' && <Goals />}
          {activePage === 'statistics' && <Statistics />}
          {activePage === 'profile' && <Profile />}
          {activePage === 'settings' && <Settings />}
        </main>
      </div>
    </>
  );
}

export default App
