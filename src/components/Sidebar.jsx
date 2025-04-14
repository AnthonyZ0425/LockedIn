import React from "react"
import "./Sidebar.css"

function Sidebar({activePage, setActivePage}) {
    
    return (
        <nav className="sidebar">
            <h1 className="logo">LockedIn</h1>
            <ul className="nav-links nav-container">
                <li 
                    className={activePage === 'activities' ? 'active' : null}
                    onClick={() => setActivePage('activities')}
                >
                    Activities
                </li>
                <li 
                    className={activePage === 'goals' ? 'active' : null}
                    onClick={() => setActivePage('goals')}
                >
                    Goals
                </li>
                <li 
                    className={activePage === 'statistics' ? 'active' : null}
                    onClick={() => setActivePage('statistics')}
                >
                    Statistics
                </li>
                <li 
                    className={activePage === 'profile' ? 'active' : null}
                    onClick={() => setActivePage('profile')}
                >
                    Profile
                </li>
                <li 
                    className={activePage === 'settings' ? 'active' : null}
                    onClick={() => setActivePage('settings')}
                >
                    Settings
                </li>
            </ul>
        </nav>
    );

}

export default Sidebar