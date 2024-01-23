export const restorentList = [
  {
    type: "restorent",
    data: {
        name:"Burger King",
        image:"../img/foodimage1.jpg",
        cusinees:["Burger" , "American"],
        rating:"4.9",
        id:"restorent1",
        area:{
            city:"Bhopal",
            distance:"1 km",
        },
        offer:"50% off",
    },
  },
  {
    type: "restorent",
    data: {
        name:"King",
        image:"../img/foodimage2.jpg",
        cusinees:["King" , "American"],
        rating:"4.9",
        id:"restorent2",
        area:{
            city:"Indore",
            distance:"3 km",
        },
        offer:"No Delivery charge",
    },
  },
  {
    type: "restorent",
    data: {
        name:"KFC",
        image:"../img/foodimage1.jpg",
        cusinees:["KFC" , "American"],
        rating:"4.9",
        id:"restorent3",
        area:{
            city:"Pune",
            distance:"5 km",
        },
        offer:"50% off",
    },
  },
  {
    type: "restorent",
    data: {
        name:"MD",
        image:"../img/foodimage2.jpg",
        cusinees:["MD" , "American"],
        rating:"4.9",
        id:"restorent4",
        area:{
            city:"Jabalpur",
            distance:"5 km",
        },
        offer:"50% off",
    },
  },
  {
    type: "restorent",
    data: {
        name:"Khana Kegana",
        image:"../img/foodimage1.jpg",
        cusinees:["Khana Kegana" , "American"],
        rating:"4.9",
        id:"restorent5",
        area:{
            city:"Mumbai",
            distance:"7 km",
        },
        offer:"50% off",
    },
  },
];

export const RestorentCard = ({ name, image, cusinees, area, offer, rating }) => {
    return (
      <>
        <div className="card">
          <div className="image">
            <img src={image} />
          </div>
          <div className="card-detail">
            <h1>{name}</h1>
            <h2>{cusinees.join(",")}</h2>
            <h2>{area.city}</h2>
            <h2>{area.distance}</h2>
            <h2>{offer}</h2>
            <h3>{rating} reating</h3>
          </div>
        </div>
      </>
    );
  };
