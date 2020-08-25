import React from "react";

import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = (props) => {
  //   Object.keys(props.ingredients) will give us an array of the keys of props. ingredients, ie: [salad, veganbacon, cheese, meat]
  //   Then Array(props.ingredients) gives us arrays containing empty/undefined elements. [ [], [], [,], [,], 1 1 2 2 elements.
  //   The last part is just returning a component with
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  // Let us split the above thing for detail.
  //   let IngredientsKeyArr = Object.keys(props.ingredients);
  //   const transformedIngredients = IngredientsKeyArr.map((igKey) => {
  //     let [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurgerIngredient key={igKey + i} type={igKey} />;
  //     });
  //   });
  console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
