import React from "react";
import "./Message.css";


function Message({ message, timestamp, user, userImage }) {
    // Check if timestamp is defined and convert it to a Date object
    const dateObject = timestamp?.toDate();
  
    // Convert to IST
    const dateIST = dateObject?.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata', // Use 'Asia/Kolkata' for Indian Standard Time
    });
    let messageWithoutWhitespace = message.replace(/\s/g, '');
    if(messageWithoutWhitespace !== ""){
    return (
      <div className="message">
        <img src={userImage} alt="" />
        <div className="message__info">
          <h4 title={dateIST}>
            {user}
          </h4>
          <p className="messagetext" id="mestext">{message}</p>
        </div>
      </div>
    );
    }
  }
  
  export default Message;