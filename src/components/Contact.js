import React, {Component} from "react";
import "./Contact.css";
import PropTypes from "prop-types"

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state= {
    online: props.online,
    }
  }

  render(){  
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="Users"/>
      <div>
        <h4 className="name">{this.props.name}</h4>
        <div className="status"
         onClick={event => {
            this.state.online ? this.setState({online : true}) : this.setState({online: false});
        }}>
      <div className={this.state.online ? "status-online" : "status-offline"}/>
      <p className="status-text">{this.state.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
    );
  };
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

Contact.defaultProps = {
  online: true,
  name: "Popey",
  avatar:"https://randomuser.me/api/portraits/men/30.jpg",
};