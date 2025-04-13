import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Activities from "./pages/Activities";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import Goals from "./pages/Goals";
import Header from "./components/Header";

function App() {

  const [activePage, setActivePage] = React.useState('activities');

  return (
    <div className="app-container">
      <nav className='app-nav'>
        <Sidebar activePage={activePage} setActivePage={setActivePage}/>
      </nav>
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
  );
}

export default App
