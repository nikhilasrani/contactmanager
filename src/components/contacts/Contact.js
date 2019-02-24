import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i onClick={this.onShowClick} className="fa fa-sort-down" />{" "}
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
