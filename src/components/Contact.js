import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
     <img className="avatar" src = "https://randomuser.me/api/portraits/women/84.jpg" />
     <div>
       <h4 className="name">Lori Pearson</h4>
       <div className="status">
       <span className="status-online">online</span>
       </div>
      </div>
    </div>
  );
}

export default Contact;
