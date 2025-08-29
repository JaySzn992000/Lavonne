import React from "react";
import "./TermsCondition.css";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";

const TermsCondition = () => {

return (

<div>

<Navbar></Navbar>

<div className="TermsCondition_flx">

<div>
<h1 className="tms_Conditionh1">Terms & Conditions</h1>

<p>
{" "}
Your use of the Website, services, Mobile Application and tools are governed by the following terms and conditions (‘Terms of Use’) as applicable. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transactions. By mere use of the Website, you shall be contracting with namasya and these terms and conditions including the policies constitute your binding obligations with namasya.
For the purpose of these Terms of Use, Registered User / Visitor and wherever the context so require ‘You’ shall mean any natural or legal person who has agreed to become a member of the Website by providing Registration Data (as defined hereinafter) while registering on the Website as Registered User using the computer systems of the Website or who has used the Website without becoming a Registered User.  The terms ‘We’, ‘Us’, ‘Our’ shall mean namasya.
namasya may amend these Terms of Use at any time by posting a revised version on the Website. The revised version will be effective at the time we posts it on the Website. You are advised to regularly check for any amendments or updates to the terms and conditions contained in these Terms of Use.
By impliedly or expressly accepting these Terms of Use, You also accept and agree to be bound by namasya’s Policies (including but not limited to Privacy Policy here) as amended from time to time.
{" "}
</p>
</div>
</div>

<div className="TermsCondition_tw">

<h2 id="hFourTag">Privacy</h2>

<p>
namasya collects, stores, processes and uses Your information in accordance with our Privacy Policy. By using the Website and/ or by providing your information, you consent to the collection and use of the information you disclose on the Website by namasya in accordance with namasya’s Privacy Policy.
</p>

<h2 id="hFourTag">Payment</h2>

<p>
While availing any of the payment method(s) available on the Website, we will not be responsible or assume any liability whatsoever in respect to any loss or damage arising directly or indirectly. 
</p>

<h2 id="hFourTag">Limitation of Liability
</h2>

<p>
In no event shall namasya be liable for any special, incidental, indirect or consequential damages of any kind in connection with these terms of use.
</p>
</div>

<Header></Header>

</div>

);

};

export default TermsCondition;
