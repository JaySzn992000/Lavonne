import React from "react";
import "./PromoBanner.css";
import Banner from '../Slider/Banner1.jpeg'
import BannerHim from '../Slider/Banner2.jpeg'

const PromoBanner = () => {

return (

<div className="promo_container">

<div className="promo_card">
<img src={Banner} alt="Cake for Her"></img>
<div className="promo_overlay"></div>
<div className="promo_content">
<span>Cakes for Her</span>
<h2>Elegance, in every slice.</h2>
<button>Shop Now</button>
</div>
</div>

<div className="promo_card dark">
<img src={BannerHim} alt="Cake for Him"></img>
<div className="promo_overlay"></div>
<div className="promo_content">
<span>Cakes for Him</span>
<h2>Celebration, with character.</h2>
<button>Shop Now</button>
</div>
</div>

</div>

);
};

export default PromoBanner;