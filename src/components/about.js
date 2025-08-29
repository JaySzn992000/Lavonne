import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import AboutPickle from "../Slider/AboutPickle.png";
import { Helmet } from "react-helmet";
import "./about.css";

const Aboutus = () => {

return (

<div>

<Helmet>
<title>About Us | Pickle - Authentic Handcrafted Pickles</title>
<meta
name="description"
content="Discover the story behind Pickle - your go-to destination for handcrafted, traditional Indian pickles made with fresh ingredients and no preservatives."
/>
<meta
name="keywords"
content="Handmade Pickles, Traditional Indian Pickles, Desi Achar, Homemade Pickle, Authentic Pickles, Mango Pickle, Lemon Pickle"
/>
</Helmet>

{/*  */}

<Navbar></Navbar>

<main className="about_flex_">

<img 
loading="lazy"
className="imgAbout" 
alt="Traditional Indian pickle jar with spices"
src={AboutPickle}></img>

<section>

<h1>About !</h1>
<h2>Lavonne- Celebrating The Girl In you!</h2>
<p>
{" "}
At Lavonne, we believe that celebration must be a way of life, and 
we put in our best efforts to take all your celebrations a notch 
higher with our delectable cakes. Our vision is to provide the 
highest quality cakes at best prices, to all our customers within 
the shortest span of time. So, after you order a cake, it can be 
delivered within a few hours, fresh from the oven.
Lavonne, the premium cake house, offers the widest range of delicious 
cakes for all occasions. While all time favorites like chocolate 
truffle and Fruit cocktail and end number of cup cakes are part 
of our menu, we also offer highly customized cakes, for those special 
days and special people. Our customers’ expectations and satisfaction 
are our top most priority.
</p>
</section>

</main>


{/*  */}

<div className="header-ad">
<Header></Header>
</div>

</div>

);

};

export default Aboutus;
