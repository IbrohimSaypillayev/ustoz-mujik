function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");
  
    products.forEach(product => {
      const name = product.getAttribute("data-name");
      if (name.includes(input)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }
  