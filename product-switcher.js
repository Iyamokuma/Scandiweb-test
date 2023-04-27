const productSwitcher = document.getElementById("productType");
const product1Form = document.getElementById("Dvd");
const product2Form = document.getElementById("Furniture");
const product3Form = document.getElementById("Book");

productSwitcher.addEventListener("change", () => {
  if (productSwitcher.value === "Dvd") {
    product1Form.style.display = "block";
    product2Form.style.display = "none";
    product3Form.style.display = "none";
  } else if (productSwitcher.value === "Furniture") {
    product1Form.style.display = "none";
    product2Form.style.display = "block";
    product3Form.style.display = "none";
  } else if (productSwitcher.value === "Book") {
    product1Form.style.display = "none";
    product2Form.style.display = "none";
    product3Form.style.display = "block";
  }
});
