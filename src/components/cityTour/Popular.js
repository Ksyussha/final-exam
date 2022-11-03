import React from "react";
import "./Popular.css";
import { useState, useEffect } from "react";
import CityTour from "./CityTour";
import FirebaseMethods from "../../utils/firebaseMethods";

function Popular() {
  const [tours, setTours] = useState([]);
  const [value, setValue] = useState("");
  const firebaseMethods = new FirebaseMethods();
  useEffect(() => {
    async function loadData() {
      const newTours = [];
      const toursSnapshot = await firebaseMethods.getDocuments("tours");
      toursSnapshot.forEach((doc) => {
        const data = doc.data();
        newTours.push({
          id: doc.id,
          title: data["title"],
          image: data["image"],
          description: data["description"],
          price: data["price"],
        });
      });
      setTours(newTours);
      console.log(newTours);
    }
    loadData();
  }, []);

  //search

  const searchedTours = tours.filter((tour) => {
    return tour.title?.toLowerCase().includes(value.toLowerCase());
  });
  //

  const tourList = searchedTours.map((tour) => (
    <CityTour key={tour.id} tour={tour}/>
  ));

  return (
    <div className="contt">
      <h1 className="tour">CITY TOURS</h1>
      <div className="d5">
        <div className="searchNfilter">
          <form>
            <input
              onChange={(event) => setValue(event.target.value)}
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
      <div className="flexCard">{tourList}</div>
    </div>
  );
}
export default Popular;
