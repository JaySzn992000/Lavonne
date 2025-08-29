import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import BottomFavcomp from "../componentsBoot/bottomFavcomp";
import SlidCakeImg from "../Slider/CakeSlide.jpg";
import Namasyaa from "../Slider/namasyaa.jpg";
import Contactus from "./Contactus";
import Slider from "../slider";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import "./ProductListmodule.css";
import "./Home.css";
import Pickles from "../Products/Pickle";
import Topnav from "../headers_footer/Topnav";
import VideoSliderComponent from "../videoslider";
// import TestimonialSlider from "./Testimonial";
// import CategoryMangoes from "../Products/CategoryMangoes";
// import DeliveryBanner from "../OtherImages/DeliveryBanner.jpg";
// import CategoryChilli from "../Products/CategoryChilli";
// import CategoryMixed from "../Products/CategoryMixed";
// import Message from "./Message";


const Home = () => {

const [showFilters, setShowFilters] = useState(false);

const [formData, setFormData] = useState({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});

const [successMessage, setSuccessMessage] = useState("");

const sendEmail = (e) => {
e.preventDefault();

const emailData = {
to_email: formData.recipientEmail,
name: formData.email,
email: formData.email,
message: formData.message,
to_name: formData.email,
reply_to: formData.email,
};

emailjs
.send(
process.env.REACT_APP_EMAILJS_SERVICE_ID,
process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
emailData,
process.env.REACT_APP_EMAILJS_USER_ID
)
.then(
(response) => {
console.log(
"You have successfully subscribe !",
response.status,
response.text
);
setFormData({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});
setSuccessMessage("Message sent successfully!");
},
(err) => {
console.error("Failed to send email. Error:", err);
setSuccessMessage("Failed to send message. Please try again.");
}
);
};

const naviGateProductsAll = useNavigate()
const seeAllProducts = () => {
naviGateProductsAll('/ProductList')
}


return (

<div>

<Helmet>
<title>Buy Best Homemade Pickles Online | Pickles & More</title>
<meta
name="description"
content="Explore 100+ delicious homemade pickles including mango, garlic, carrot & more. Fast delivery across India."
/>
<meta
name="keywords"
content="Pickles, Homemade Achaar, Mango Pickle, Buy Pickles Online, Indian Pickles"
/>
<link rel="canonical" href="https://yourdomain.com" />
<meta property="og:title" content="Pickles & More - Authentic Homemade Pickles" />
<meta property="og:description" content="Discover tasty and hygienically packed pickles. Subscribe for updates and offers." />
<meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg" />
<meta property="og:url" content="https://yourdomain.com" />
<meta name="robots" content="index, follow" />
</Helmet>

<Topnav></Topnav>
<Navbar />

<div className="Catelog_Items">
<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/custom-cakes.png" 
loading="lazy"
alt="Desi Ghee"></img>
<h4>Cutomized</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/flower-combos.png" 
loading="lazy"
alt="Garlic"></img>
<h4>Combos</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/fresh-arrivals.png" 
loading="lazy"
alt="Ginger"></img>
<h4>Fresh Arrivals</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/heart-shape.png" 
loading="lazy"
alt="Radish"></img>
<h4>Heart Shaps</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/gift-hamper.png" 
loading="lazy"
alt="Jackfruit"></img>
<h4>Gifts</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/cakes-under-500.png" 
loading="lazy"
alt="Banana"></img>
<h4>Under 600</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/premium-flavours.png" 
loading="lazy"
alt="Bitter"></img>
<h4>Premium</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/photo-cake.png" 
loading="lazy"
alt="Sudh Ghee"></img>
<h4>Photo Cakes</h4>
</div>
</div>


<Slider />

<div className="Catelog_Items">
<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/Doctor.png" 
loading="lazy"
alt="Desi Ghee"></img>
<h4>Doctor</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/Engineer.png" 
loading="lazy"
alt="Garlic"></img>
<h4>Engineer</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/Entrepreneur.png" 
loading="lazy"
alt="Ginger"></img>
<h4>Entrepreneur</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/Blogger.png" 
loading="lazy"
alt="Radish"></img>
<h4>Blogger</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/Teacher.png" 
loading="lazy"
alt="Jackfruit"></img>
<h4>Teacher</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/Makeup.png" 
loading="lazy"
alt="Banana"></img>
<h4>Makeup</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/Soldier.png" 
loading="lazy"
alt="Bitter"></img>
<h4>Soldier</h4>
</div>

<div>
<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/Traveller.png" 
loading="lazy"
alt="Sudh Ghee"></img>
<h4>Traveller</h4>
</div>
</div>


<VideoSliderComponent></VideoSliderComponent>


<div className="tshirt_Left">
<Pickles showFilters={showFilters} limit={10}></Pickles>
</div>

{/*  */}


{/*  */}

<button onClick={seeAllProducts} className="seeLLProducts">View All</button>

<div id="bottomFav_comp">
<BottomFavcomp />
</div>

{/*  */}

<div className="tshirt_Left">
<Pickles showFilters={showFilters} limit={5}></Pickles>
</div>

<button onClick={seeAllProducts} 
className="seeLLProducts">View All</button>

{/*  */}

<Contactus></Contactus>

<a
href='https://api.whatsapp.com/send/?phone=%2B919821187225&text&type=phone_number&app_absent=0'
target="_blank"
rel="noopener noreferrer"
>
<img
className="whatsapp_message"
src="https://cdn-icons-png.freepik.com/256/3983/3983877.png?semt=ais_hybrid"
alt=""
loading="lazy"
></img>

</a>

{/*  */}

<div className="Secure_ordering">
<h2>SweetBite - Har Cake Mein Ek Kahaani
</h2>
<p>We bake cakes that are fresh, delightful, and 
crafted to suit every occasion, . each cake is 
designed to bring smiles and make 
your special moments unforgettable.
</p>

<img src={Namasyaa}
loading="lazy"
alt="Variety of Homemade Pickles"
className="DlvyImg"
></img>


</div>

<img src={SlidCakeImg}
loading="lazy"
alt="Variety of Homemade Pickles"
className="DlvyImg"
></img>


{/* SlidCakeImg */}

<div className="subscribe_kk">

<form onSubmit={sendEmail}>

{successMessage && (
<p className="success_message">{successMessage}</p>

)}

</form>

</div>

<VideoSliderComponent></VideoSliderComponent>

<div className="subscribe_k">

<div className="subscribe_flx">

<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/email-icon.svg" 
alt="" loading="lazy" />

<div>
<h2>Let's Stay Connected</h2>
<p>Subscribe here</p>
</div>

</div>


<form onSubmit={sendEmail}>

{successMessage && (
<p className="success_message">{successMessage}</p>

)}

<div className="subscribe_flx">

<input
type="email"
name="email"
placeholder="Enter your email here..."
value={formData.email}
onChange={(e) =>
setFormData({
...formData,
email: e.target.value,
message: e.target.value,
})
} required />
<button type="submit">Subscribe</button>

</div>

</form>

</div>

<Header />

</div>

);

};

export default Home;
