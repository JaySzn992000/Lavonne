import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import AboutPickle from "../Slider/AboutPickle.png";
import { Helmet } from "react-helmet";
import "./about.css";

const Aboutus = () => {

return (

<div>

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
higher with our delectable cakes. 
Lavonne, the premium cake house, offers the widest range of delicious 
cakes for all occasions. Our customers' expectations and satisfaction 
are our top most priority.
</p>

</section>

</main>

<div className="header-ad">
<Header></Header>
</div>

</div>

);

};

export default Aboutus;
