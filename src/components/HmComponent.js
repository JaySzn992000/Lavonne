import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import ContactPickle from "../Slider/Contact_Achar1.svg";
import "./Contact.css";

const HmComponent = () => {

return (

<div>

<Navbar></Navbar>

<main>

<form  className="form_contact">

<div>
<img src={ContactPickle} alt="Contact Us for Homemade Pickles" loading="lazy"/>
</div>

<div className="form_div">

<h1>
Natural Buti ! 
<br/>
Hair Growth Oil
</h1>

<img src="https://naturalbuti.com/wp-content/uploads/2024/07/Hair-Oil-Gredient-2-1.svg"></img>

</div>

</form>

</main>

</div>

);
};

export default HmComponent;
