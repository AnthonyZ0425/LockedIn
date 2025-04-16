import React, { useState } from "react"
import ActivityCard from "../components/ActivityCard"
import "./Activity.css"

function Activities() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        <h2>Add a New Activity</h2>
                        <form action={handleModal}>
                            <label htmlFor="activityType">
                                Activity Name:
                            </label>
                            <select id="activityType" name="activityType" defaultValue="" required>
                                <option value="" disabled>-- Choose an Activity --</option>
                                <option value="Studying">Studying</option>
                                <option value="Workout">Workout</option>
                                <option value="Reading">Reading</option>
                            </select>

                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Activities