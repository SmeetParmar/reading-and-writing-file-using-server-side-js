"use strict";

const scores = [];

const displayScores = () => scores.join(", ");

const calculateAverage = () => {
	const total = scores.reduce( (prev, curr) => prev + parseInt(curr), 0);
	return total / scores.length;
};

// load user entries in scores array


// display all scores


// display average score

<script>
    // Create an IIFE that returns an object
    const product = (function() {
    let productId;

    function setProductId(id) {
        productId = id;
    }

    function getProductInfo() {
        const xhr = new XMLHttpRequest();
        const id = productId;

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                    const data = JSON.parse(xhr.responseText);
                    document.getElementById('producttitle').textContent = data.title;
                    document.getElementById('productdesc').textContent = data.description;
                    document.getElementById('thumbnail').src = data.thumbnail;
            }
        };

        xhr.open('GET', `https://dummyjson.com/products/${id}`);
        xhr.send();
    }

    return {
        setProductId: setProductId,
        getProductInfo: getProductInfo
    };
})();

// When the "Get Product Info" button is clicked
document.getElementById('getProductInfo').addEventListener('click', function() {
    const id = document.getElementById('productid').value;

    product.setProductId(id); // Set the product ID using the defined function
    product.getProductInfo(); // Fetch and display product information
});
        </script>