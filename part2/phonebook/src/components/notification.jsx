import React from "react";

const Notification = (props) => {
  if (props.m.message === null) {
    return null;
  }
  if (props.m.category === "success") {
    return <div className="success">{props.m.message}</div>;
  }
  return <div className="error">{props.m.message}</div>;
};

export default Notification;
