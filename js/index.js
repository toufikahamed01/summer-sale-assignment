// card-1
function handleClickCart() {
    const productPrice = priceProduct("k-accessories-price");
    const totalAmmount = priceProduct("total-price");
    const amoundSet = productPrice + totalAmmount;
    totalPriceSet("total-price", amoundSet);
    productEntry("K. Accessories");
    totalPriceSet("final-total", amoundSet);
    const purchaseButtonEnabal = document.getElementById("btn-disabled");
    purchaseButtonEnabal.removeAttribute("disabled");
    const priceTotal = priceProduct("total-price");
    const promoCodeBtn = document.getElementById("appy-coupon");
    if (priceTotal > 200) {
        promoCodeBtn.removeAttribute("disabled");
    }
}

// card-2
function handleClickCart2() {
    const productPrice = priceProduct("k-accessories-price2");
    const totalAmmount = priceProduct("total-price");
    const amoundSet = productPrice + totalAmmount;
    totalPriceSet("total-price", amoundSet);
    productEntry("K. Accessories");
    totalPriceSet("final-total", amoundSet);
    const purchaseButtonEnabal = document.getElementById("btn-disabled");
    purchaseButtonEnabal.removeAttribute("disabled");
    const priceTotal = priceProduct("total-price");
    const promoCodeBtn = document.getElementById("appy-coupon");
    if (priceTotal > 200) {
        promoCodeBtn.removeAttribute("disabled");
    }
}

// card-3
function handleClickCart3() {
    const productPrice = priceProduct("home-cooker-price");
    const totalAmmount = priceProduct("total-price");
    const amoundSet = productPrice + totalAmmount;
    totalPriceSet("total-price", amoundSet);
    productEntry("Home Cooker");
    totalPriceSet("final-total", amoundSet);
    const purchaseButtonEnabal = document.getElementById("btn-disabled");
    purchaseButtonEnabal.removeAttribute("disabled");
    const priceTotal = priceProduct("total-price");
    const promoCodeBtn = document.getElementById("appy-coupon");
    if (priceTotal > 200) {
        promoCodeBtn.removeAttribute("disabled");
    }
}
// card-4
function handleClickCart4() {
    const productPrice = priceProduct("sports-back-cap");
    const totalAmmount = priceProduct("total-price");
    const amoundSet = productPrice + totalAmmount;
    totalPriceSet("total-price", amoundSet);
    productEntry("Sports Back Cap");
    totalPriceSet("final-total", amoundSet);
    const purchaseButtonEnabal = document.getElementById("btn-disabled");
    purchaseButtonEnabal.removeAttribute("disabled");
    const priceTotal = priceProduct("total-price");
    const promoCodeBtn = document.getElementById("appy-coupon");
    if (priceTotal > 200) {
        promoCodeBtn.removeAttribute("disabled");
    }
}


// card-5
function handleClickCart5() {
    const productPrice = priceProduct("full-jersey-set");
    const totalAmmount = priceProduct("total-price");
    const amoundSet = productPrice + totalAmmount;
    totalPriceSet("total-price", amoundSet);
    productEntry("Full Jersey Set");
    totalPriceSet("final-total", amoundSet);
    const purchaseButtonEnabal = document.getElementById("btn-disabled");
    purchaseButtonEnabal.removeAttribute("disabled");
    const priceTotal = priceProduct("total-price");
    const promoCodeBtn = document.getElementById("appy-coupon");
    if (priceTotal > 200) {
        promoCodeBtn.removeAttribute("disabled");
    }
}



// card-6
function handleClickCart6() {
    const productPrice = priceProduct("sports-cates");
    const totalAmmount = priceProduct("total-price");
    const amoundSet = productPrice + totalAmmount;
    totalPriceSet("total-price", amoundSet);
    productEntry("Sports cates");
    totalPriceSet("final-total", amoundSet);
    const purchaseButtonEnabal = document.getElementById("btn-disabled");
    purchaseButtonEnabal.removeAttribute("disabled");
    const priceTotal = priceProduct("total-price");
    const promoCodeBtn = document.getElementById("appy-coupon");
    if (priceTotal > 200) {
        promoCodeBtn.removeAttribute("disabled");
    }
}

// card-7
function handleClickCart7() {
    const productPrice = priceProduct("single-relax-chair");
    const totalAmmount = priceProduct("total-price");
    const amoundSet = productPrice + totalAmmount;
    totalPriceSet("total-price", amoundSet);
    productEntry("Single Relax Chair");
    totalPriceSet("final-total", amoundSet);
    const purchaseButtonEnabal = document.getElementById("btn-disabled");
    purchaseButtonEnabal.removeAttribute("disabled");
    const priceTotal = priceProduct("total-price");
    const promoCodeBtn = document.getElementById("appy-coupon");
    if (priceTotal > 200) {
        promoCodeBtn.removeAttribute("disabled");
    }
}

// card-8
function handleClickCart8() {
    const productPrice = priceProduct("children-play");
    const totalAmmount = priceProduct("total-price");
    const amoundSet = productPrice + totalAmmount;
    totalPriceSet("total-price", amoundSet);
    productEntry("Children play");
    totalPriceSet("final-total", amoundSet);
    const purchaseButtonEnabal = document.getElementById("btn-disabled");
    purchaseButtonEnabal.removeAttribute("disabled");
    const priceTotal = priceProduct("total-price");
    const promoCodeBtn = document.getElementById("appy-coupon");
    if (priceTotal > 200) {
        promoCodeBtn.removeAttribute("disabled");
    }
}


// card-9
function handleClickCart9() {
    const productPrice = priceProduct("flexible-sofa");
    const totalAmmount = priceProduct("total-price");
    const amoundSet = productPrice + totalAmmount;
    totalPriceSet("total-price", amoundSet);
    productEntry("Flexible Sofa");
    totalPriceSet("final-total", amoundSet);
    const purchaseButtonEnabal = document.getElementById("btn-disabled");
    purchaseButtonEnabal.removeAttribute("disabled");
    const priceTotal = priceProduct("total-price");
    const promoCodeBtn = document.getElementById("appy-coupon");
    if (priceTotal > 200) {
        promoCodeBtn.removeAttribute("disabled");
    }
}

function priceProduct(priceId) {
    const productPriceElement = document.getElementById(priceId);
    const priceString = productPriceElement.innerText;
    const productPrice = parseFloat(priceString);
    return productPrice;
}

function totalPriceSet(price, priceProduct) {
    const totalPriceElement = document.getElementById(price);
    totalPriceElement.innerText = priceProduct;
}

function productEntry(productName) {
    const entry = document.getElementById("product-list");
    const p = document.createElement("p");
    const count = entry.childElementCount;
    p.classList.add("my-2");
    p.innerHTML = `${count + 1 + "."} ${productName}`;
    entry.appendChild(p);
}

function promoBtnApply() {
    const inputFIeld = document.getElementById("promoCodeInput");
    const totalPrice = priceProduct('total-price');
    const inputValue = inputFIeld.value;
    if(inputValue === "SELL200"){
        const discountAmount = (20/100) * totalPrice;
        console.log(discountAmount);
        totalPriceSet("discountedPrice", Math.round(discountAmount));
        const finalTotalAmount = totalPrice - discountAmount;
        totalPriceSet("final-total", Math.round(finalTotalAmount));
    }
}

function homeBtnReload() {
    location.reload();
}

