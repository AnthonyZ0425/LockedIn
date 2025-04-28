import React, { useState } from "react"
import ActivityCard from "../components/ActivityCard"
import "./Activity.css"
import ActivityDetails from "../components/ActivityDetails"

function Activities() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);

    function handleActivitySelection(activity) {
        setSelectedActivity(activity);
    }

    function handleModal(formData) {
        console.log(formData.get("activityType"))
    }

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add("no-scroll");
        document.querySelector(".background-container").classList.add("no-interaction");
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedActivity(null);
        document.body.classList.remove("no-scroll");
        document.querySelector(".background-container").classList.remove("no-interaction");
    }
    return (
        <div>
            <h1>Today's Activities</h1>
            <div>
                {/* <ActivityCard /> */}
            </div> 
            <button onClick={openModal}>New Activity</button>
        
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="modal-close"
                                onClick={closeModal}
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
                        <ActivityDetails selectedActivity={selectedActivity}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Activities