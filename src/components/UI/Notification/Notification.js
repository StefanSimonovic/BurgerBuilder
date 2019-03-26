import React from "react";

import classes from "./Notification.module.css";
import PropTypes from "prop-types";

const notification = props =>
  props.show ? (
    <div className={[classes.Notification, classes[props.action]].join(" ")}>
      {props.message}
    </div>
  ) : null;

notification.propTypes = {
  action: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  show: PropTypes.bool
};

export default notification;
