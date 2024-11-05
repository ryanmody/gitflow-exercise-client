import React, { useState } from "react";
import "./TaskListComponent.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import party from '../../assets/icons/party.png'
import checkmark from '../../assets/videos/checkmark.webm'

const TaskListComponent = ({ tasksDay, month, date }) => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const [isVisible, setIsVisible] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [playVideo, setPlayVideo] = useState(false); 

  const navigate = useNavigate();

  function visibilityHandler(id) {
    setIsVisible(isVisible === id ? 0 : id);
  }

  async function doneHandler(id) {
    try {

      setShowOverlay(true);
      setPlayVideo(true);

      setTimeout(async () => {
        await axios.delete(`${baseUrl}/${id}`);
        setPlayVideo(false);
        navigate(0);
      }, 1000);  

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1 className="tasks-title">tasks for {month} {date}:</h1>

      <div className="tasks-list">
        {tasksDay.length === 0 ? (
          <div className="tasks-list__notasks">
            <p className="tasks-list__nomessage">No tasks for today!</p>
            <img className="tasks-list__emoji" src={party} alt="party-emoji" />
          </div>
        ) : (
          tasksDay.map((task) => (
            <div className="tasks-list__parent" key={task.id}>
              <div className="tasks-list__container">
                <Link
                  onClick={() => visibilityHandler(task.id)}
                  className={`tasks-list__category tasks-list__category--${task.color}`}
                >
                  {task.name}
                </Link>
                <div
                  className={`tasks-list__dropdown ${
                    isVisible === task.id ? `tasks-list__dropdown--visible` : ``
                  }`}
                >
                  <div>{task.description}</div>
                  <div className="tasks-list__options">
                    <Link className="tasks-list__options--edit">Edit</Link>
                    <Link
                      className="tasks-list__options--done"
                      onClick={() => doneHandler(task.id)}
                    >
                      Done
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Overlay with the checkmark video thing */}
      {showOverlay && (
        <div className="overlay">
          {playVideo && (
            <video className="overlay__checkmark" autoPlay muted>
              <source src={checkmark} type="video/webm" />
            </video>
          )}
        </div>
      )}
    </>
  );
};

export default TaskListComponent;
