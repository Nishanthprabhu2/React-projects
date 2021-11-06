import React from "react";
import user from "../images/user.png";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
    <img src={user} alt="" className="ui avatar image" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <i className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
        ></i>
      </div>
    </div>
    
  );
}
