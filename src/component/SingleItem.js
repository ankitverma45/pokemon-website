import React from "react";
import classes from "./SingleItem.module.css";
import { useLocation } from "react-router-dom";

const SingleItem = (props) => {
  const params = useLocation();
  const name = params.state.page.name
  const img = params.state.page.img
  const height = params.state.page.height
  const weight = params.state.page.weight
  const abilities = params.state.page.abilities.length
  const moves = params.state.page.moves.length
  const stats = params.state.page.stats.length
  return (
    <>
      <div className={classes.contain}>
        <img src={img} alt="ankit images"/>
        <h2>{name}</h2>
        <div className={classes.weight}>
          <div>Weight={weight}</div>
          <div>Height={height}</div>
        </div>
        <div className={classes.weight}>
          <div>Abilities={abilities}</div>
          <div>Moves={moves}</div>
          <div>State={stats}</div>
        </div>
      </div>
    </>
  );
};
export default SingleItem;