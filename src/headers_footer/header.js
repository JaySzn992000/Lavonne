import { useNavigate } from "react-router";
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
naviAbout('/aboutus')
}

const naviContact = useNavigate();
const naviToContactus = () => {
naviContact('/Contactpage')
}

const privacyNavi = useNavigate();
const privacyNavigate = () => {
privacyNavi('/PrivacyPolicy')
}

const returnPolicy = useNavigate();
const returnPolicyNavi = () => {
returnPolicy('/ReturnPolicy')
}

const termsAndCOndition = useNavigate();
const termsAndCOnditionNavi = () => {
termsAndCOndition('/TermsCondition')
}

const MyFaqs = useNavigate()
const Faqs = () => {
MyFaqs('/FAQs')
}

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

<input className="newsletter" placeholder="E-mail"></input> <br></br>

<button><span>SUBSCRIBE</span></button>

</div>

<ul>
<h4>ABOUT KIMIRICA</h4>
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
</header>
</div>

);

};

export default Header;