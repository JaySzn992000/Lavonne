import Slider from "react-slick";
import img1 from "./Slider/1.img.jpg";
import img2 from "./Slider/2.img.jpg";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const SliderComponent = () => {

const settings = {
dots: true,
infinite: true,
speed: 800,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
arrows: true,
fade: true,
pauseOnHover: true,
dotsClass: "custom-dots",
};

const navigate = useNavigate();


return (

<div className="slider_container">

<Slider {...settings}>

<div className="slide">

<div className="slide_overlay"></div>

<img src={img1} alt="Summer Collection Sofa" />

<div className="slide_text">

<h2>Delicious & Fresh Cakes</h2>
<p>
Indulge in our freshly baked cakes made with premium ingredients.
Perfect for every celebration with rich taste and elegant designs.
</p>

<div className="button_group">

<button 
className="btn_secondary" 
onClick={() => navigate("/collections")}>
Shop Now
</button>

</div>
</div>
</div>

<div className="slide">
<div className="slide_overlay"></div>

<img src={img2} alt="Elegant Dining Room" />

<div className="slide_text">

<h2>Elegant Cake Collection</h2>
<p>
Enhance your celebrations with beautifully crafted cakes.
Modern designs meet rich flavors and premium quality ingredients.
</p>

<div className="button_group">
<button 
className="btn_secondary"
onClick={() => navigate("/about-us")}>
View Details
</button>
</div>
</div>
</div>
</Slider>
</div>

);
};

export default SliderComponent;