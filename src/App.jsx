import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Sidebar from "./components/Sidebar";
import Activities from "./pages/Activities";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import Goals from "./pages/Goals"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidebar />
      <main>
        <Activities />
        <Goals />
        <Statistics />
        <Profile />
        <Settings />
      </main>
    </div>
  );
}

export default App
