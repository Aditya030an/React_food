import { useEffect, useState } from "react";

const useRestaurant = (restId) => {
  const [restaurent, setRestaurent] = useState(null);
  const [menu , setMenu]= useState([]);
  useEffect(() => {
    getRestaurent();
  }, []);

  async function getRestaurent() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        restId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json.data?.cards[0]?.card?.card?.info);
    setRestaurent(json.data?.cards[0]?.card?.card?.info);
    setMenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
        ?.card?.itemCards
    );
    // const menudata = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards;
    // menudata.map((name)=>{
    //   console.log(name);
    //   console.log(name?.card?.info.name);
    // })
  }
  const arr = [restaurent , menu];
//   console.log(arr[0]);
//   console.log(arr[1]);
  return arr;

};

export default useRestaurant;
