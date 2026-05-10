import { useNavigate } from "react-router";
import { useState } from "react";
import LogoNitiArya from "../Logo/LogoNitiArya.png";
import "./header.css";

const Header = () => {

const naviHome = useNavigate();

const navigateHome = () => {
naviHome("/");
};

const NavitoProductlist = useNavigate();

const naviToCollection = () => {
NavitoProductlist('/collections')
}

const naviAbout = useNavigate()
const naviToAboutus = () => {
naviAbout('/about-us')
}

const naviContact = useNavigate();
const naviToContactus = () => {
naviContact('/contact-us')
}

const privacyNavi = useNavigate();
const privacyNavigate = () => {
privacyNavi('/privacy-policy')
}

const returnPolicy = useNavigate();
const returnPolicyNavi = () => {
returnPolicy('/return-policy')
}

const termsAndCOndition = useNavigate();
const termsAndCOnditionNavi = () => {
termsAndCOndition('/terms-condition')
}

const MyFaqs = useNavigate()
const Faqs = () => {
MyFaqs('/FAQs')
}


const [email, setEmail] = useState("");
const [subscribed, setSubscribed] = useState(false);
const [error, setError] = useState("");

const handleSubscribe = () => {

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(emailPattern.test(email)){
setSubscribed(true);
setError("");
}
else{
setSubscribed(false);
setError("Please enter a valid email");
}

};

return (

<div>

<header className="normal_header">

<p>Only at Lavonne.shop</p>

<div className="div_header">

<div className="header_dv">

<img className="nMheader_dvLogo"
onClick={navigateHome}
loading="lazy"
src={LogoNitiArya} alt="logo"></img>

<h3>NEWSLETTER</h3>

<p>Sign up to our newsletter to receive <br></br>
exclusive offers.</p>

<input
className="newsletter"
placeholder="E-mail"
value={email}
onChange={(e) => setEmail(e.target.value)}
></input>

<br></br>

<button onClick={handleSubscribe}>
<span>SUBSCRIBE</span>
</button>

{subscribed && (
<p style={{color:"#008000", marginTop:"10px"}}>
You have subscribed successfully
</p>
)}

{error && (
<p style={{color:"#008000", marginTop:"10px"}}>
{error}
</p>
)}

</div>

<ul>
<h4>ABOUT</h4>
<li onClick={naviToCollection}><a>Shop our Products</a></li>
<li onClick={naviToAboutus}><a>About us</a></li>
<li onClick={naviToContactus}><a>Contact us</a></li>
<li onClick={privacyNavigate}><a>Privacy Policy</a></li>
</ul>

<ul>
<h4>GET IN TOUCH</h4>
<li><a>Email: Lavonne@gmail.Com</a></li>
<li><a>Phone: +91 91115 74281</a></li>
</ul>

<ul>
<h4>CUSTOMER SERVICES</h4>
<li onClick={returnPolicyNavi}><a>Return Policy</a></li>
<li onClick={termsAndCOnditionNavi}><a>Terms & Conditions</a></li>
</ul>

</div>

<div className="footer_bottom">
<p>© 2026 Designed & Developed by JSON Softech.</p>
</div>

</header>
</div>

);

};

export default Header;