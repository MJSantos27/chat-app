import React from "react";
import "./Contact.css";
import PropTypes from "prop-types"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    online: false
    };
  }
  //export default function Contact(props) {
  render(){  
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar}    alt="User"/>
      <div>
        <h4 className="name">{this.props.name}</h4>
        <div className={this.props.online ? "status-online" : "status-offline"}
            onClick ={event=>{
            const newonline = !this.state.online;
            this.setState({online: newonline});
          }}
          />
        </div>
      </div>
    
  );
}
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default Contact;