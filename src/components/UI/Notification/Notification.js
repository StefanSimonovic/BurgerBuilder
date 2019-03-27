import React from "react";

import classes from "./Notification.module.css";
import PropTypes from "prop-types";

const notification = props => {
  let attachedClasses = [
    classes.Notification,
    classes[props.action],
    classes.Close
  ];
  if (props.show) {
    attachedClasses = [
      classes.Notification,
      classes[props.action],
      classes.Open
    ];
  }

  return <div className={attachedClasses.join(" ")}>{props.message}</div>;
};

notification.propTypes = {
  action: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  show: PropTypes.bool
};

export default notification;
