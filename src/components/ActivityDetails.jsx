import React from "react";

function ActivityDetails( { selectedActivity }) {
    if (!selectedActivity) {
        return null;
    } 
    return (
        <div>
            {selectedActivity === "Studying" && (
                <div>
                    <h4>Options for Studying:</h4>
                    <button>Pomodoro</button>
                    <button>Focus Timer</button>
                    <button>Break Timer</button>
                    <button>30 mins</button>
                </div>
            )}
            {selectedActivity === "Workout" && (
                <div>
                    <h4>Options for Workout:</h4>
                    <button>Cardio</button>
                    <button>Strength Training</button>
                    <button>Flexibility Training</button>
                    <button>Timer</button>
                </div>
            )}
            {selectedActivity === "Reading" && (
                <div>
                    <h4>Options for Reading:</h4>
                    <button>Book Title</button>
                    <button>Timer</button>
                </div>
            )}
        </div>
    );
}

export default ActivityDetails;