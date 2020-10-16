import "./Contact.css";
import React from "react";
import PropTypes from "prop-types";

export default function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="User"/>
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"} />
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
