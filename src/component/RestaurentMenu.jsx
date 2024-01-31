import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "./constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurent";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaruntMenu = () => {
  const { restId } = useParams();

  const restaurent = useRestaurant(restId)[0];
  const menu = useRestaurant(restId)[1];
  const dispatch = useDispatch();

  const handleAddItems = (value) => {
    // console.log(value);
    dispatch(addItem(value));
  };
  // if(!menu){
  //   return (<h1>Not Found</h1>);
  // }
  return !restaurent ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center gap-4 m-4 p-2">
        <div className="w-96">
          <h1>Restaurent id: {restId}</h1>
          <h1>{restaurent.name}</h1>
          <img src={IMG_URL + restaurent.cloudinaryImageId} className="" />
          <h3>{restaurent.areaName}</h3>
          <h3>{restaurent.city}</h3>
          <h3>{restaurent.avgRating}</h3>
          <h3>{restaurent.costForTwoMessage}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          {!menu ? (
            <h1>Not Found</h1>
          ) : (
            menu.map((item) => {
              console.log(item?.card?.info);
              return (
                <li key={item?.card?.info?.id} className="flex gap-4">
                  {item?.card?.info?.name}
                  <button onClick={() => handleAddItems(item?.card?.info)}>Add</button>
                </li>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default RestaruntMenu;
