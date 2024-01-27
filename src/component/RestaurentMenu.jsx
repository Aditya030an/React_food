import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "./constant";
import Shimmer from "./Shimmer";

const RestaruntMenu = () => {
  const [restaurent, setRestaurent] = useState(null);
  const [menu, setMenu] = useState([]);
  //   const [restaurent, setRestaurent] = useState(null);
  //how to read a dinamic url params

  const { restId } = useParams();
  // const param = useParams();
  // const {restId} = param;
  // console.log(param);

  useEffect(() => {
    getRestaurentMenu();
  }, []);

  async function getRestaurentMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+restId+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data?.cards[0]?.card?.card?.info);
    setRestaurent(json.data?.cards[0]?.card?.card?.info);
    setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards);
    // const menudata = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards;
    // menudata.map((name)=>{
    //   console.log(name);
    //   console.log(name?.card?.info.name);
    // })
  }
  // if(!restaurent){
  //   return(<Shimmer/>);
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
          {/* <h3>{restaurent.cuisines.join(",")}</h3> */}
        </div>
        <div>
          <h1>Menu</h1>
            {
              menu.map((item)=>{
                console.log(item);
                console.log(item?.card?.info?.name);
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
