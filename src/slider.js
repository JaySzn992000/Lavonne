import Slider from "react-slick";
import img1 from "./Slider/1.img.jpg";
import img2 from "./Slider/2.img.jpg";
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

return (

<div className="slider_container">

<Slider {...settings}>

<div className="slide">
<div className="slide_overlay"></div>

<img src={img1} alt="Summer Collection Sofa" />

<div className="slide_text">
<h2>Cozy Living Room Sofas</h2>
<p>
Bring warmth and luxury to your living room with our high-end sofa designs.
Premium quality materials with elegant craftsmanship.
</p>
<div className="button_group">
<button className="btn_primary">Explore Collection →</button>
<button className="btn_secondary">Shop Now</button>
</div>
</div>
</div>

<div className="slide">
<div className="slide_overlay"></div>

<img src={img2} alt="Elegant Dining Room" />

<div className="slide_text">
<h2>Elegant Dining Room</h2>
<p>
Enhance your dining experience with intelligently designed furniture.
Modern aesthetics meet ultimate comfort and functionality.
</p>
<div className="button_group">
<button className="btn_primary">Explore Collection →</button>
<button className="btn_secondary">View Details</button>
</div>
</div>
</div>
</Slider>
</div>

);
};

export default SliderComponent;