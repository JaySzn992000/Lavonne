import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import "./FilterProducts.css";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import Creamcakefetch from "../Products/creamcakefetch";
import Allproducts from "./allproducts";
import Fruitcakefetch from "../Products/Fruitcakefetch";
import Newarrivalcakesfetch from "./newarrivalcakesfetch";

const Flexproducts = ({ type }) => {

const [allProducts, setAllProducts] = useState([]);

const [filter, setFilter] = useState({  
search: "",
price: 1000,
});

// ✅ filter update handler

const handleFilterUpdate = (newFilter) => {
setFilter((prev) => ({
...prev,
...newFilter,
}));
};

return (

<div>

{/* ✅ NORMAL PRODUCTS */}

{type === "products" && (

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Allproducts 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

)}

{/* ✅ ONLY FRUITE CAKE */}

{type === "fruitecake" && (
<div className="main_layout">
<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Fruitcakefetch 
filter={filter} 
allProducts={allProducts} />
</div>
</div>
)}

{/* ✅ ONLY New Arrival CAKE */}

{type === "newarrivalcake" && (
<div className="main_layout">
<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Newarrivalcakesfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>
)}

{/* ✅ ONLY Cream CAKE */}

{type === "creamcake" && (
<div className="main_layout">
<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Creamcakefetch 
filter={filter} 
allProducts={allProducts}
/>
</div>
</div>
)}

</div>

);
};

export default Flexproducts;