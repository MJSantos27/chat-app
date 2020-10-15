import React from 'react';
import './Contact.css';
function Contact() {
  const name = "Edith Reid";
  const avatar = "https://randomuser.me/api/portraits/women/66.jpg";
  const online = false;
 
  return (
    <div className="Contact">
     <img className="avatar" alt="img" src = {avatar} />
     <div>
       <h4 className = "name">{name}</h4>
       <div className = "status">
  <span className = {online ? "status-online" : "status-offline"}></span>
  <span className = "status-text">{online ? "online" : "offline"}</span>
       </div>
      </div>
    </div>
  );
}

export default Contact;
