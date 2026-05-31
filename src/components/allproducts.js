import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Filterheader from "../headers_footer/Filterheader";
import Navbar from "../headers_footer/navbar";
import Filters from "./Filters";
import axios from "axios";
import "./ProductListmodule.css";
import Header from "../headers_footer/header";

const Allproducts = ({ products, filter }) => {

const [filteredProducts, setFilteredProducts] = useState([]);
const [allProducts, setAllProducts] = useState([]);
const [wishlistCount, setWishlistCount] = useState(0);
const [wishlistStatus, setWishlistStatus] = useState({});
const [cartCount, setCartCount] = useState(0);
const [arrayStore, setArrayStore] = useState([]);


// useEffect(() => {
// const storedWishlistStatus =
// JSON.parse(localStorage.getItem("wishlistStatus")) || {};
// setWishlistStatus(storedWishlistStatus);

// axios
// .get("https://lavonne-0729.onrender.com/fetchProductslist")
// .then((response) => {
// setArrayStore(response.data);
// setFilteredProducts(response.data);
// })

// .catch((error) => {
// console.error("Error fetching data:", error);
// });
// }, [] );

useEffect(() => {
const storedWishlistStatus =
JSON.parse(localStorage.getItem("wishlistStatus")) || {};

setWishlistStatus(storedWishlistStatus);
}, [] );

const location = useLocation();
const query = new URLSearchParams(location.search).get("search");
useEffect(() => {
if (query) {
axios
.get("https://lavonne-0729.onrender.com/fetchProductslist", {
params: { search: query },
})
.then((response) => {
setAllProducts(response.data);
setFilteredProducts(response.data);
})
.catch((error) => {
console.error("Error fetching products:", error);
});
} else {
axios
.get("https://lavonne-0729.onrender.com/fetchProductslist")
.then((response) => {
setAllProducts(response.data);
setFilteredProducts(response.data);
})
.catch((error) => {
console.error("Error fetching all products:", error);
});
}
}, [query] );


useEffect(() => {

if (!allProducts.length) return;

let updatedProducts = [...allProducts];

if (filter?.selectedNames?.length > 0) {

updatedProducts = updatedProducts.filter((product) =>
filter.selectedNames.some(
(name) =>
name.toLowerCase() === product.img.toLowerCase()
)
);

}

updatedProducts = updatedProducts.filter(
(product) =>
product.price >= filter.minPrice &&
product.price <= filter.maxPrice
);

setFilteredProducts(updatedProducts);

}, [filter, allProducts]);


const sendToWishlist = (product) => {
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const productIndex = wishlist.findIndex((item) => item.id === product.id);

if (productIndex === -1) {
wishlist.push(product);
} else {
wishlist.splice(productIndex, 1);
}

localStorage.setItem("wishlist", JSON.stringify(wishlist));

window.dispatchEvent(new Event("storage"));

setWishlistStatus({
...wishlistStatus,
[product.id]: !wishlistStatus[product.id],
} );

setWishlistCount(wishlist.length);

const updatedWishlistStatus = {
...wishlistStatus,
[product.id]: !wishlistStatus[product.id],
};
localStorage.setItem(
"wishlistStatus",
JSON.stringify(updatedWishlistStatus)
);
setWishlistStatus(updatedWishlistStatus);
};

const handleFilterUpdate = (filtered) => {
setFilteredProducts(filtered);
};

const slugify = (text) => {
return text
.toLowerCase()
.replace(/[^a-z0-9]+/g, '-')   
.replace(/(^-|-$)/g, '');      
};


return (

<div>

<div id="flex_filter_product">

<section>
<div className="realative_ProductContainer">
<div className="Filteration_ProductDiv"></div>
<div className="flex_productlist">
{filteredProducts.map((productlist) => (
<div key={productlist.id} className="produclist_divContainer">
<i
onClick={() => sendToWishlist(productlist)}
className={`fa fa-heart fa-heart_products ${
wishlistStatus[productlist.id] ? "wishlist-active" : ""
}`} >

{" "}

</i>

<Link to={`/products/${slugify(productlist.name)}/${productlist.id}`}>

<img
src={productlist.file_path}
alt={productlist.name}
loading="lazy" />

</Link>

<div className="padding_contain">
<div className="flex_inr">

<Link to={`/products/${slugify(productlist.name)}/${productlist.id}`}>
<li>{productlist.name}</li>
</Link>

<div className="review_Cntnr">
<img id="Review_Img"
src="https://cdn-icons-png.flaticon.com/128/15853/15853959.png"></img>
<li style={{marginTop : '.5em', marginLeft : '-.2em'}}></li>
<li className="fa_Review">{productlist.review}</li>
</div>

<div className="price_div">
<li className="fa fa-inr"></li>
<li className="fa_Price">{productlist.price}</li>
</div>

</div>
</div>
</div>
))}

</div>
</div>
</section>
</div>

</div>

);

};

export default Allproducts;