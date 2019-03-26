import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingrKey => {
      return [...Array(props.ingredients[ingrKey])].map((_, index) => {
        return <BurgerIngredient key={ingrKey + index} type={ingrKey} />;
      });
    })
    .reduce((prevArr, curEl) => {
      return prevArr.concat(curEl);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired
};

export default burger;
