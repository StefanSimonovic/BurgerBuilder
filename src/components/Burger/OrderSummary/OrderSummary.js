import React from "react";

import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>
        <span>{props.ingredients[igKey]}</span>
      </li>
    );
  });
  return (
    <div className={classes.OrderSummary}>
      <h3>Your order</h3>
      <hr />
      <ul>{ingredientSummary}</ul>
      <hr />
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <div className={classes.BtnGroup}>
        <Button btnType="Danger" clicked={props.purchaseCanceled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default orderSummary;
