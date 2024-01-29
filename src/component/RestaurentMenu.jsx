import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "./constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurent";

const RestaruntMenu = () => {
  
  const { restId } = useParams();
  
  const restaurent = useRestaurant(restId)[0];
  const menu = useRestaurant(restId)[1];

  // if(!menu){
  //   return (<h1>Not Found</h1>);
  // }
  return(!restaurent)?<Shimmer/> :(
    <>
      <div>
        <div>
          <h1>Restaurent id: {restId}</h1>
          <h1>{restaurent.name}</h1>
          <img src={IMG_URL + restaurent.cloudinaryImageId} />
          <h3>{restaurent.areaName}</h3>
          <h3>{restaurent.city}</h3>
          <h3>{restaurent.avgRating}</h3>
          <h3>{restaurent.costForTwoMessage}</h3>
        </div>
        <div>
          <h1>Menu</h1>
            {!menu ? <h1>Not Found</h1>:
              menu.map((item)=>{
                return(

                  <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                );
              })
            }
        </div>
      </div>
    </>
  );
};

export default RestaruntMenu;
