import React from "react";
import "./OccasionSection.css";

const data = [
{
title: "Birthday Cakes",
img: "https://foodal.com/wp-content/uploads/2021/02/The-Best-Recipe-for-Birthday-Cake.jpg",
},
{
title: "Anniversary Cakes",
img: "https://imgcdn.floweraura.com/happy-anniversary-truffle-cake-9814570ca-A_0.jpg",
},
{
title: "Wedding Cakes",
img: "https://cremecastle.in/cdn/shop/files/C3715PPH_f0feb380-2267-4276-9f2b-028310ecefb7.jpg?v=1749106169",
},
];

const OccasionSection = () => {

return (

<div className="occasion_container">

<h2>Shop by Occasions</h2>

<div className="occasion_grid">
{data.map((item, index) => (
<div className="occasion_card" key={index}>
<img src={item.img} alt={item.title} />

<div className="occasion_overlay"></div>

<div className="occasion_content">
<h3>{item.title}</h3>
<button>View More Cakes</button>
</div>
</div>
))}
</div>
</div>

);
};

export default OccasionSection;