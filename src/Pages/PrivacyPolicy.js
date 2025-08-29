import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {

return (

<div>

<Navbar></Navbar>

<div className="privacy_flex_">
<div>
<h1>Privacy Policy</h1>

<p>
{" "}
Namasyaa Clothing Private Limited is a company incorporated 
under the provisions of the Indian Companies Act, 2013, bearing corporate 
identification number [CIN to be inserted], with its registered office 
at [Insert full Namasyaa address], India (hereinafter referred to as the 
"Company", "We", or "Namasyaa").
This Privacy Policy outlines the types of personal data 
we collect from users ("You", "User(s)") who access or use 
the website www.namasyaa.com ("Website"), the purpose of collecting such 
information, how it is used, stored, processed, disclosed, and protected.
Your privacy is important to us, and we are committed to safeguarding the 
personal information you share with us.
Please read this Privacy Policy carefully. It should be read 
along with the Terms & Conditions of the Website. By accessing or 
using the Website, you agree to the terms laid out in this Policy.
We may update this Privacy Policy periodically. Continued use of the 
Website implies acceptance of the revised Policy.{" "}
</p>
</div>
</div>

<div className="privacy_flex_tw">

<div>
<h4 className="links_sits">SCOPE AND POLICY APPLICABILITY</h4>
<p>
This Privacy Policy is effective from [●], and is applicable to 
any person or entity that uses the Website or shares any 
information pertaining to identified or identifiable natural person 
(personal data) with Namasya. You are providing your consent by 
providing your details to the Company vide any electronic medium 
or through written consent form (“Consent”) with respect to the 
purpose of usage of such Personal Data or Information. For instance,
We collect your information when You share your data on the Website 
by filling up the forms on the Website. The data collected by us may 
include your basic information such as your name, contact number, 
email address or any other details You may share.
The User agrees, accepts, and is bound by this Privacy Policy 
when they use or access the Website. These policies are subject to 
change and will be updated from time to time at our sole discretion 
or on account of changes in the law and will be in effect from the 
time it is updated. Users are therefore requested to read our Privacy 
Policy along with the terms and conditions of use of the Website 
frequently.
</p>
</div>

</div>

{/*  */}

<Header></Header>

</div>

);

};

export default PrivacyPolicy;
