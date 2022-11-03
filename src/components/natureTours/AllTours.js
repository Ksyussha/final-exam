import React from "react";
import { useState } from "react";
import "./AllTours.css";
import { Component } from "react";
import NatureTour from "./NatureTour";

function Tours() {
  const tours = [
    {
      id: 1,
      title: "Almaty: walking through the old town",
      description: "dwwwwwwwwwww",
      date: "",
      cost: 100,
      image: "https://avatars.dzeninfra.ru/get-zen_doc/1710047/pub_6003e550d0d4386c9f1fbf16_6003e6170cf4a170b919a79d/scale_1200",
    },
    {
      id: 2,
      title: "Almaty: Kok-Tobe",
      description: "dwwwwwwwwwww",
      date: "",
      cost: 100,
      image: "https://www.gov.kz/uploads/2021/9/3/79b5b8a02d5f189ed7aa4834e948eaf7_original.871738.jpg",
    },
    {
      id: 3,
      title: "Almaty: Medeo, Shymbulak",
      description: "dwwwwwwwwwww",
      date: "",
      cost: 100,
      image: "https://pbs.twimg.com/media/DQVkGXCW4AAbAOl.jpg",
    },
    {
      id: 4,
      title: "Astana: Walking through significant places",
      description: "egdvgesd",
      date: "",
      cost: 200,
      image: "https://caspiannews.com/media/caspian_news/all_original_photos/1603780085_761248_1603780014_3669696Astana-1.jpg",
    },
    
    {
      id: 5,
      title: "Astana: Bar tour",
      description: "egrfe",
      date: "",
      cost: 300,
      image: "https://cdn.vox-cdn.com/thumbor/luxBBLt_ox7b_xZ_gjvcuRnJtLw=/0x0:1500x988/1200x900/filters:focal(630x374:870x614):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62593317/maxwell_s.0.0.jpg",
    },
    {
      id: 6,
      title: "Astana: Museum of Political Repression or Soviet women's camp",
      description: "egrfe",
      date: "",
      cost: 300,
      image: "https://armeniatourism.ru/images/news2020/Alzhir_310520_03.jpg",
    },
    {
      id: 7,
      title: "Turkistan: The Palace Caravan Complex",
      description: "egrfe",
      date: "",
      cost: 300,
      image: "https://pbs.twimg.com/media/EbIKt63XYAA7AHE?format=jpg&name=medium",
    },
    {
      id: 8,
      title: "Turkistan: Mausoleum tour",
      description: " we will visit mausoleums: H.A. Yassawi, Ukasha-Ata, Gauhar ana, Domalak ana.",
      date: "",
      cost: 300,
      image: "https://i99.fastpic.org/big/2018/0327/76/6e18387af1cbd61b81692fbb354dd076.jpg",
    },
    {
      id: 9,
      title: "Turkistan: Otrar Oasis",
      description: "egrfe",
      date: "",
      cost: 300,
      image: "https://tur-ray.ru/wp-content/uploads/2022/09/otrarskiy-oazis.jpg",
    },
  ];
  
  const [value, setValue] = useState('')

  const searchedTours = tours.filter(tour => {
    return tour.title.toLowerCase().includes(value.toLowerCase())
  })
  // const filterPost=(tours,filter)=>{
  //   switch(filter)
  //   {
  //     case 'moreThen1000':
  //       return tours.filter(item=>item.salary<=100);
  //     default:
  //       return tours
  //   }
  // }
  // onFilterSelect=(filter)=>
  //     {
  //       this.setState({filter});
  //     }

  const tourList = searchedTours.map((tour) => <NatureTour key={tour.id} tour={tour}></NatureTour>);
  // const visibleData=this.filterPost(this.searchEmp(tours),filter)
  return (
    <div className="contt">
      <h1 className="tour">NATURE TOUR</h1>
      <div className="d5">
        <div className="searchNfilter">
<form>
  <input onChange={(event)=> setValue(event.target.value)} placeholder="Search..."/>
</form>
<div>
  <button></button> {/*  фильтрация */}
  </div>
</div>
</div>
  <div className="flexCard">{tourList}</div>
  </div>
  ) 
}
export default Tours;