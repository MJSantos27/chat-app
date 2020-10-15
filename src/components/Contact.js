import React from 'react';
import './Contact.css';
function Contact() {
  const name = "Lori Pearson";
  const avatar = "https://randomuser.me/api/portraits/women/66.jpg";
  const online = true;
  return (
    <div className="Contact">
     <img className="avatar" src = "https://randomuser.me/api/portraits/women/66.jpg" />
     <div>
       <h4 className = "name">Edith Reid</h4>
       <div className = "status">
       <span className = "status-online"></span>
       <span className = "status-text">online</span>
       </div>
      </div>
    </div>
  );
}

export default Contact;
