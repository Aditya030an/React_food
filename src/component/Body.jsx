import { useEffect, useState } from "react";
import { restorentList } from "./constant";
import { RestorentCard } from "./constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import filterdata from "../utils/filterData";

const Body = () => {
  // const [restorent, setrestorent] = useState(restorentList);
  //while refreshing of finding the the useEffect first render with defalt data then a fech api i call then their will be a original data
  //for good user experience use shimmer ui
  // const [restorent, setrestorent] = useState(<Shimmer/>);  not use
  const [allRestorent, setAllRestorent] = useState([]);
  const [filteredRestorent, setFilteredRestorent] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //empty dependency array => once after render
  //dep array [searchText] => once initial randring + whenever searchTex change it rander
  useEffect(() => {
    //api call
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestorent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestorent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //Conditional ui
  //if restorant empty => shimmer ui
  //if restorant not empty => actual data ui
  /* shimmer will be in the hole restorent cardr*/

  //early return
  // if (!allRestorent.length === 0 ) {
  //   return <h1>Not found</h1>;
  //   // return null;
  // }

  // if (filteredRestorent?.length === 0) {
  //   return <h1>Not Match found</h1>;
  // }
  return allRestorent?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="main">
        <div className="search ">
          <input
            type="text"
            placeholder="search"
            className="search-input"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              if (e.target.value === "") {
                console.log("change");
                getRestaurents();
              }
              // else{
              //   handleClick();
              // }
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const data = filterdata(searchInput, allRestorent);
              setFilteredRestorent(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="main-container">
          {/*shimmer will only be in the restorent card not in search bar*/}
          {filteredRestorent.length === 0 ? (
            <h1>Not Match found</h1>
          ) : (
            filteredRestorent.map((restorent) => {
              return (
                <Link
                  to={"/restaurants/" + restorent.info.id}
                  key={restorent.info.id}
                >
                  <RestorentCard {...restorent.info} />
                </Link>
              );
            })
          )}
          {/* {restorent.map((restorent) => {
            return (
              <RestorentCard {...restorent.info} key={restorent.info.id} />
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default Body;
