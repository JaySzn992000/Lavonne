import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import './ReturnPolicy.css';

const ReturnPolicy = () => {

return (

<div>

<Navbar></Navbar>

<div className="return_flex_">

<div>

<h1 className="accptnce_trms">Safety First</h1>

<p>We are committed to ensuring a 100% Purchase Protection to customers by offering them genuine products, robust & secure payment gateways and easy returns for items purchased on Koskii.com </p>

<h2>How can I raise a return request?</h2>

<p>
{" "}
Please reach out to support@namasyaa.com within 7 days of order delivery. Our customer support team will get back to you within 48 hours of receiving the request.
{" "}
</p>

</div>

</div>

<div className="return_flex_tw">

<h4>Who Pays the Shipping charges for returned products?
</h4>

<p>
We offer a pick-up facility for locations which are serviceable by our logistics partners. Our logistics partner will pick up the return package in 2 - 5 business days from the date the request was placed. 
If the reverse pick-up option is not available at your location, you can self-ship the products to us by any reliable courier service after raising a return request. Please pack the products and ensure that it is unused and unwashed and all the tags are intact. The return courier charges will be reimbursed by us.
The package should be addressed to our warehouse location: 
</p>

<h2>How much time does it take to get my refund?</h2>

<p>The refund will be initiated within 48 hours of approval from the returns team. The refund takes between 3 to 5 working days to reflect in your account.
</p>

</div>

{/*  */}

<Header></Header>

</div>

)

}

export default ReturnPolicy;