import React, { useState } from "react"
import ActivityCard from "../components/ActivityCard"
import "./Activity.css"

function Activities() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);

    function handleActivitySelection(activity) {
        setSelectedActivity(activity);
    }

    function handleModal(formData) {
        console.log(formData.get("activityType"))
    }
    return (
        <div>
            <h1>Today's Activities</h1>
            <div>
                {/* <ActivityCard /> */}
            </div> 
            <button onClick={() => setIsModalOpen(true)}>New Activity</button>
        
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="modal-close"
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setSelectedActivity(null);
                                }}
                                aria-label="Close modal"
                        >
                            &times;
                        </button>

                        <h2>Add a New Activity</h2>
                        <div className="activity-buttons">
                            <button 
                                className={selectedActivity === "Studying" ? "active" : ""}
                                onClick={() => handleActivitySelection("Studying")}
                            >
                                Studying
                            </button>
                            <button 
                                className={selectedActivity === "Workout" ? "active" : ""}
                                onClick={() => handleActivitySelection("Workout")}
                            >
                                Workout
                            </button>
                            <button 
                                className={selectedActivity === "Reading" ? "active" : ""}
                                onClick={() => handleActivitySelection("Reading")}
                            >
                                Reading
                            </button>
                        </div>
                        {selectedActivity && (
                            <div>
                                <h3> You selected: {selectedActivity}</h3>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Activities