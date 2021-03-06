import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      -
    </button>
    <p className={classes.Quantity}>{props.ingredient}</p>
    <button className={classes.More} onClick={props.added}>
      +
    </button>
  </div>
);

export default buildControl;
