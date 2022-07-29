const products = [
  {
    id: 0,
    name: "Fiddle-leaf fig",
    price: "110.99",
    category: "decorar",
    imageSrc:
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 1,
    name: "Strelitzia nicolai",
    price: "99",
    category: "",
    imageSrc:
      "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    name: "Aloe vera",
    price: "90.50",
    category: "decorar",
    imageSrc:
      "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    name: "cactus",
    price: "90.50",
    category: "decorar",
    imageSrc:
      "https://images.unsplash.com/photo-1551888419-c41351800459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 4,
    name: "Fiddle-leaf fig",
    price: "110.99",
    category: "decorar",
    imageSrc:
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 5,
    name: "Strelitzia nicolai",
    price: "99",
    category: "",
    imageSrc:
      "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 6,
    name: "Aloe vera",
    price: "90.50",
    category: "decorar",
    imageSrc:
      "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const productsContainer = document.querySelector(".products");

function createProducts() {
  products.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.className = "product";

    let proImg = document.createElement("img");
    proImg.className = "product-img";
    proImg.src = product.imageSrc;
    proImg.alt = product.name;

    let productInfo = document.createElement("div");
    productInfo.className = "product-info";

    let proName = document.createElement("span");
    proName.className = "name";
    proName.innerHTML = product.name;

    let proCategory = document.createElement("span");
    proCategory.className = "category";
    proCategory.innerHTML = product.category;

    let proPrice = document.createElement("span");
    proPrice.className = "price";
    proPrice.innerHTML = product.price;

    let addBtn = document.createElement("button");
    addBtn.className = "add-to-cart-btn";
    addBtn.innerHTML = "<i class='fa-light fa-cart-plus'></i>";

    productInfo.append(proName, proCategory, proPrice, addBtn);
    productDiv.append(proImg, productInfo);
    productsContainer.append(productDiv);
  });
}

createProducts();

const txtSearch = document.querySelector(".txt-search");
const categorySelect = document.querySelector(".category-selector");
const priceSelect = document.querySelector(".price-selector");
const productsDivs = document.querySelectorAll(".product");

function search(keyword) {
  for (product of productsDivs) {
    const name = product.children[1].children[0].innerText.toLowerCase();
    const category = product.children[1].children[1].innerText.toLowerCase();
    const price = product.children[1].children[2].innerText.toLowerCase();

    if (
      name.includes(keyword) ||
      category.includes(keyword) ||
      +price <= +keyword
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
}

txtSearch.addEventListener("keyup", (e) => {
  search(e.target.value.toLowerCase());
});
categorySelect.addEventListener("change", (e) => {
  search(e.target.value.toLowerCase());
});
priceSelect.addEventListener("change", (e) => {
  search(e.target.value.toLowerCase());
});
