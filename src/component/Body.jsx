import { useState } from "react";
import { restorentList } from "./constant";
import { RestorentCard } from "./constant";

function filterdata(searchInput, restorent) {
  return restorent.filter((rest) => rest.data.name.includes(searchInput));
}

const Body = () => {
  const [restorent, setrestorent] = useState(restorentList);
  const [searchInput, setSearchInput] = useState();
  function handleClick() {
    return setrestorent(filterdata(searchInput, restorentList));
  }
  return (
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
                setrestorent(restorentList);
              }
              else{
                handleClick();
              }
            }}
          />
          <button
            className="search-button"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <div className="main-container">
          {restorent.map((restorent) => {
            return (
              <RestorentCard {...restorent.data} key={restorent.data.id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
