import { useState } from "react";
import notificationData from "./notifications";
import "./App.css";

function Notification(props) {
  return (
    <div className="notification">
      {props.children}
      <button onClick={props.onClear}>Clear</button>
    </div>
  );
}

function App() {
  const [notifications, setNotifications] = useState(notificationData);
  const [darkMode, setDarkMode] = useState(false);

  function clearNotification(id) {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id,
    );

    setNotifications(updatedNotifications);
  }

  function clearAllNotifications() {
    setNotifications([]);
  }

  function modeHandler() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="content">
        <h1>Notifications</h1>

        <button onClick={modeHandler}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <p>Notifications: {notifications.length}</p>

        <button onClick={clearAllNotifications}>Clear All</button>

        {notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              onClear={() => clearNotification(notification.id)}
            >
              <p>ID: {notification.id}</p>
              <h2>{notification.name}</h2>
              <p>{notification.message}</p>
            </Notification>
          );
        })}
      </div>
    </div>
  );
}

export default App;
