var xmlhttp = new XMLHttpRequest();
var url = "./json/products.json";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        render_products_gallery(myArr);
        // render_products_infor_summary(myArr);
    }
};

xmlhttp.open("GET", url, true); //ra lệnh
xmlhttp.send(); //thực hiên
let cartItemID = 1;

function render_products_gallery(arr) {
    var div = '<div class="products_main"><div class="products_content"><div class="products_gallery" id="products_gallery">';
    var i, j;
    

    for (i = 0; i < arr.length; i++) {
        if (arr[i].productid == id) {
            div += '<div class="products_gallery-left"><div class="products_gallery-slider"><div style="text-align:center" class="dot_container">';

            for (j = 0; j < arr[i].image.length; j++) {
                div += '<span class="dot" onclick="getSrc(this)"><img src="' + arr[i].image[j] + '" alt=""></span>';
            }

            div += '</div>';

            // for (j = 0; j < arr[i].image.length; j++) {
            //     div += '<div class="products_detail-img" id="products_detail-img"><img src="' + arr[i].image[j] + '" alt=""></div>';
            // }

            div += '<div class="products_detail-img" id="products_detail-img"><img src="' + arr[i].image[0] + '" alt=""></div>';


            div += '</div></div></div><div class="products_infor"><div class="products_infor-summary" id="products_infor-summary"><a href="" class="brand_name">' + arr[i].label + '</a><h1 class="products_name">' + arr[i].name + '</h1></div>';

            div += '<div class="products_buybox-wrapper"><div class="products_buybox-options"><div class="products_price">'

            if (arr[i].discount != "") {
                div += '<div class"price-original" style="color: #b4b4b4"><del><label>Giá bán:</label><span class="price-amount"><span style="color: #b4b4b4" class="price" >' + arr[i].price[0] + '</span><span style="font-weight: 700;">đ</span></del></div><div class="price-discount"><label>Giá khuyến mãi:</label><span class="price-amount"><span class="price">' + arr[i].discount + '</span><span style="color: #b93505; font-weight: 700;"> đ</span></span></div>'
            } else {
                div += '<div class"price-original"><label>Giá bán:</label><span class="price-amount"><span class="price">' + arr[i].price[0] + '</span><span style="color: #b93505; font-weight: 700;">đ</span></span></div>'
            }

            div += '</div><div class="availability"><div class="stock">Tình trạng: Còn hàng</div></div><div class="button_select-weight">'
            if (arr[i].weight != "") {
                div += '<div class="weight-label"><label>Chọn trọng lượng</label></div><div class="weight-choose">'
                div+='<div><input data-image="' + arr[i].weight[0] + '" type="radio" id="' + arr[i].weight[0] + '" name="weight" value="' + arr[i].weight[0] + '" checked><label for="' + arr[i].weight[0] + '"><span>' + arr[i].weight[0] + ' - ' + arr[i].price[0] + ' đ</span></label></div>';
                for (j = 1; j < arr[i].weight.length; j++) {
                    // div += '<button>' + arr[i].weight[j] + ' - ' + arr[i].price[j] + ' đ</button>';
                    div += '<div><input data-image="' + arr[i].weight[j] + '" type="radio" id="' + arr[i].weight[j] + '" name="weight" value="' + arr[i].weight[j] + '"><label for="' + arr[i].weight[j] + '"><span>' + arr[i].weight[j] + ' - ' + arr[i].price[j] + ' đ</span></label></div>';
                }
            }

            div += '</div></div><div class="button_select-color"><div class="color-option">'
            if (arr[i].colors != "") {
                div += '<div style="margin-bottom:8px" class="weight-label"><label>Chọn màu sắc</label></div><div class="color-choose">';

                div += '<div><input data-image="' + arr[i].colors[0] + '" type="radio" id="' + arr[i].colors[0] + '" name="color" value="' + arr[i].colors[0] + '"  checked><label for="' + arr[i].colors[0] + '"><span style="background-color: ' + arr[i].colors[0] + '"></span></label></div>';

                for (j = 1; j < arr[i].colors.length; j++) {
                    // div += '<input type="radio" name="chung" class="myColor" style="background-color: ' + arr[i].colors[j] + '"></input></div>';
                    div += '<div><input data-image="' + arr[i].colors[j] + '" type="radio" id="' + arr[i].colors[j] + '" name="color" value="' + arr[i].colors[j] + '"><label for="' + arr[i].colors[j] + '"><span style="background-color: ' + arr[i].colors[j] + '"></span></label></div>';
                }
            }

            // for (j = 0; j < arr[i].colors.length; j++) {
            //     if (arr[i].colors != "") {
            //         div += '<button style="background-color: ' + arr[i].colors[j] + '"></button>';
            //     } else {
            //         document.getElementById('colors_option').innerHTML.style.display = "none";

            //     }
            // }

            // alert(arr[i].colors[0])

            div += '</div></div></div><div class="products_buybox"><form action=""><div class="quantity_select" style="float: left;"><div class="quantity-dropdown"><label for="quantity">Số lượng</label> <fieldset data-quantity><legend>Change quantity</legend></fieldset><a class="btn_add-to-cart add-cart">Thêm vào giỏ hàng</a></div></div></form></div></div></div></div></div><div class="products_detail"><div class="products_detail-description"><div class="products_description-container"><ul class="products_detail-tabs"><li class="tab-active"><p>Thông tin chi tiết sản phẩm</p></li></ul><div class="products_description"><div class="products_description-text"><h3 class="products_description-title">Mô tả</h3><p id="description">' + arr[i].description + '</p>';
            if (arr[i].benefit != "") {
                div += '<br><h3 class="products_description-title">Lợi ích</h3><p>' + arr[i].benefit + '</p>'
            }
            if (arr[i].instruction != "") {
                div += '<br><h3 class="products_description-title">Hướng dẫn sử dụng</h3><p>' + arr[i].instruction + '</p>'
            }

            div += '</div></div></div></div> <div class="description_right"><img src="./library/cattt.gif" alt=""><div><p>MarPet <br/> tự tin làm <br/> bạn hài lòng</p></div></div></div></div></div>'
            document.getElementById("container").innerHTML = div;
            document.getElementById("tieuDeSanPham").innerHTML = arr[i].name;
            let carts = document.querySelectorAll('.add-cart');
            // let order = productid+" "
            // let counter = 1
            for (let k = 0; k < carts.length; k++) {
                carts[k].addEventListener('click', () => {
                    cartNumbers(arr[i]);
                    totalCost(arr[i]);
                })
            }
            onLoadCartNumbers();
            // displayCart(); // nháp
            // displayCartInPayment(); // nháp
            break;
        }

    }




}

onLoadCartNumbers();
displayCart();
// displayCartInPayment();

// đếm số loại sản phẩm, cùng productid nhưng khối lượng, màu sắc khác thì cũng tính là khác
// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers')
//     if (productNumbers) {
//         // document.querySelector('.cart span').textContent=productNumbers;
//         document.querySelector('.countProductsInCart1 span').textContent = productNumbers;
//         document.querySelector('.countProductsInCart2 span').textContent = productNumbers;
//         document.querySelector('.countProductsInCart3 span').textContent = productNumbers;

//     } else {

//     }
// }
// // quantity:parseInt(document.getElementById('soluongsanpham').value)
// function cartNumbers(product){
//     let productNumbers=localStorage.getItem('cartNumbers')

//     productNumbers=parseInt(productNumbers);
//     if(productNumbers){
//         localStorage.setItem('cartNumbers', productNumbers+1);
//         document.querySelector('.countProductsInCart1 span').textContent=productNumbers+1;
//         document.querySelector('.countProductsInCart2 span').textContent=productNumbers+1;
//         document.querySelector('.countProductsInCart3 span').textContent=productNumbers+1;
//     } else {
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector('.countProductsInCart1 span').textContent=1;
//         document.querySelector('.countProductsInCart2 span').textContent=1;
//         document.querySelector('.countProductsInCart3 span').textContent=1;
//     }
//     setItems(product);
// }

// đếm số lượng từng sản phẩm
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('totalQuantity');
    let productsInTheCart = getProductFromStorage();
    if (productNumbers) {
        // document.querySelector('.cart span').textContent=productNumbers;
        document.querySelector('.countProductsInCart1 span').textContent = productNumbers;
        document.querySelector('.countProductsInCart2 span').textContent = productNumbers;
        document.querySelector('.countProductsInCart3 span').textContent = productNumbers;
        cartItemID = productsInTheCart[productsInTheCart.length - 1].thutusanpham;
        cartItemID++;
    } else {
        cartItemID = 1;
    }
}
// quantity:parseInt(document.getElementById('soluongsanpham').value)
function cartNumbers(product){
    let productNumbers=localStorage.getItem('totalQuantity');

    productNumbers=parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('totalQuantity', productNumbers);
        document.querySelector('.countProductsInCart1 span').textContent=productNumbers+parseInt(document.getElementById('soluongsanpham').value);
        document.querySelector('.countProductsInCart2 span').textContent=productNumbers+parseInt(document.getElementById('soluongsanpham').value);
        document.querySelector('.countProductsInCart3 span').textContent=productNumbers+parseInt(document.getElementById('soluongsanpham').value);
    } else {
        localStorage.setItem('totalQuantity', parseInt(document.getElementById('soluongsanpham').value));
        document.querySelector('.countProductsInCart1 span').textContent=parseInt(document.getElementById('soluongsanpham').value);
        document.querySelector('.countProductsInCart2 span').textContent=parseInt(document.getElementById('soluongsanpham').value);
        document.querySelector('.countProductsInCart3 span').textContent=parseInt(document.getElementById('soluongsanpham').value);
    }
    setItems(product);
}



function setItems(product){
    // let cartItems=localStorage.getItem('productsInCart');
    // cartItems=JSON.parse(cartItems);
    // if(cartItems !==null){

    //     if(cartItems[product.productid] == undefined){
    //         cartItems={
    //             ...cartItems,
    //             [product.productid]:product
    //         }
    //     }
    //     cartItems[product.productid].inCart +=1;
    // } else {
    //     product.inCart = 1;
    //     cartItems={
    //         [product.productid]:product
    //     }
    // }

    // localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    
    // let cartItems=localStorage.getItem('productsInCart');
    // cartItems=JSON.parse(cartItems);
    let productInfo = {
        productid: product.productid,
        // image: product.image[0],
        name: product.name,
        thuocTinh:"",
        thutusanpham:cartItemID,
        // price: product.price[0],
        quantity:parseInt(document.getElementById('soluongsanpham').value) // id 'soluongsanpham' là id của input số lượng ở <fieldset>
    }
    cartItemID++;
    if (product.weight != "") {
        // productInfo["weight"] = product.weight ;
        var khoiLuong = document.getElementsByName('weight');
              
            for(i = 0; i < khoiLuong.length; i++) {
                if(khoiLuong[i].checked){
                    productInfo["weight"] = product.weight[i];
                    productInfo["thuocTinh"] = product.weight[i];
                    // productInfo["name"] = product.name+" ("+product.weight[i]+")";
                    if(product.discount==""){
                        productInfo["price"] = product.price[i];
                    }
                    else{
                        productInfo["price"] = product.discount;
                    }
                }
                
            }
        productInfo["image"] = product.image[0];
    }
    else if (product.colors != "") {
        // productInfo["colors"] = product.colors ;
        var mauSac = document.getElementsByName('color');
              
            for(i = 0; i < mauSac.length; i++) {
                if(mauSac[i].checked){
                    productInfo["image"] = product.image[i];
                    productInfo["colors"] = product.colors[i];

                    switch (productInfo["colors"]) {
                        case "red":
                            productInfo["thuocTinh"] = "đỏ";
                            break;
                        case "grey":
                            productInfo["thuocTinh"] = "xám";
                            break;
                        case "gray":
                            productInfo["thuocTinh"] = "xám";
                            break;
                        case "black":
                            productInfo["thuocTinh"] = "đen";
                            break;
                        case "brown":
                            productInfo["thuocTinh"] = "nâu";
                            break;
                        case "white":
                            productInfo["thuocTinh"] = "trắng";
                            break;
                        case "beige":
                            productInfo["thuocTinh"] = "màu be";
                            break;
                        case "lightblue":
                            productInfo["thuocTinh"] = "xanh dương nhạt";
                            break;
                        case "wheat":
                            productInfo["thuocTinh"] = "lúa mì";
                            break;
                        case "chartreuse":
                            productInfo["thuocTinh"] = "xanh nõn chuối";
                            break;
                        case "cyan":
                            productInfo["thuocTinh"] = "xanh lơ";
                            break;
                        case "blue":
                            productInfo["thuocTinh"] = "xanh dương";
                            break;
                        case "green":
                            productInfo["thuocTinh"] = "xanh lá";
                            break;
                        case "yellow":
                            productInfo["thuocTinh"] = "vàng";
                            break;
                        case "orange":
                            productInfo["thuocTinh"] = "cam";
                            break;
                        case "pink":
                            productInfo["thuocTinh"] = "hồng";
                            break;
                        case "purple":
                            productInfo["thuocTinh"] = "tím";
                            break;
                        case "silver":
                            productInfo["thuocTinh"] = "bạc";
                            break;
                        case "maroon":
                            productInfo["thuocTinh"] = "hạt dẻ";
                            break;
                        case "fuchsia":
                            productInfo["thuocTinh"] = "hồng vân anh";
                            break;
                        case "lime":
                            productInfo["thuocTinh"] = "vàng chanh";
                            break;
                        case "olive":
                            productInfo["thuocTinh"] = "ô liu";
                            break;
                        case "navy":
                            productInfo["thuocTinh"] = "xanh nước biển";
                            break;
                        case "teal":
                            productInfo["thuocTinh"] = "xanh mòng két";
                            break;

                        
                        
                            

                        case productInfo["colors"]:
                            productInfo["thuocTinh"] = productInfo["colors"];
                            break;
                    }

                    // productInfo["thuocTinh"] = productInfo["colors"];
                    // productInfo["name"] = product.name+" ("+product.colors[i]+")";
                }
                
            }
            if(product.discount==""){
                productInfo["price"] = product.price[0];
            }
            else{
                productInfo["price"] = product.discount;
            }
    }
    else{
        if(product.discount==""){
            productInfo["price"] = product.price[0];
        }
        else{
            productInfo["price"] = product.discount;
        }
        productInfo["image"] = product.image[0];
        // productInfo["name"] = product.name;
    }
    // addToCartList(productInfo);
    saveProductInStorage(productInfo);
}
function saveProductInStorage(item){
    let products = getProductFromStorage();
    products.push(item);
    localStorage.setItem('productsInCart', JSON.stringify(products));
    // updateCartInfo();
}
function getProductFromStorage(){
    return localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : [];
    // returns empty array if there isn't any product info
}
function totalCost(product) {
    // console.log("The product price is",product.price);
    let cartCost = localStorage.getItem('totalCost');
    let countQuantity = localStorage.getItem('totalQuantity');
    // console.log("My cartCost is",cartCost);
    // console.log(typeof cartCost);
    
    if (product.weight != "") {
        // productInfo["weight"] = product.weight ;
        var khoiLuong = document.getElementsByName('weight');
        var tinhTien=0;
            for(i = 0; i < khoiLuong.length; i++) {
                if(khoiLuong[i].checked){
                    // productInfo["weight"] = product.weight[i];
                    // productInfo["name"] = product.name+" ("+product.weight[i]+")";
                    if(product.discount==""){
                        tinhTien = product.price[i]*parseInt(document.getElementById('soluongsanpham').value);
                    }
                    else{
                        tinhTien = product.discount*parseInt(document.getElementById('soluongsanpham').value);
                    }
                }
                
            }
        // productInfo["image"] = product.image[0];
    }
    else if (product.colors != "") {
        // productInfo["colors"] = product.colors ;
        var mauSac = document.getElementsByName('color');
              
            for(i = 0; i < mauSac.length; i++) {
                if(mauSac[i].checked){
                    // productInfo["colors"] = product.colors[i];
                    // productInfo["image"] = product.image[i];
                    // productInfo["name"] = product.name+" ("+product.colors[i]+")";
                }
                
            }
            if(product.discount==""){
                tinhTien = product.price[0]*parseInt(document.getElementById('soluongsanpham').value);
            }
            else{
                tinhTien = product.discount*parseInt(document.getElementById('soluongsanpham').value);
            }
    }
    else{
        if(product.discount==""){
            tinhTien = product.price*parseInt(document.getElementById('soluongsanpham').value);
        }
        else{
            tinhTien = product.discount*parseInt(document.getElementById('soluongsanpham').value);
        }
        // productInfo["image"] = product.image[0];
        // productInfo["name"] = product.name;
    }
    
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + tinhTien);
        // localStorage.setItem("totalCost", cartCost + product.price[0]);
        countQuantity=parseInt(countQuantity);
        localStorage.setItem("totalQuantity", countQuantity + parseInt(document.getElementById('soluongsanpham').value));
    } else {
        localStorage.setItem("totalCost", tinhTien);
        localStorage.setItem("totalQuantity", parseInt(document.getElementById('soluongsanpham').value));

    }
    // if(countQuantity!=null){
    //     countQuantity=parseInt(countQuantity);
    //     localStorage.setItem("totalQuantity", countQuantity + parseInt(document.getElementById('soluongsanpham').value));
    // }
    // else{
    //     localStorage.setItem("totalQuantity", parseInt(document.getElementById('soluongsanpham').value));
    // }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    // let productContainerInPayment = document.querySelector(".cart");
    // let productContainer=document.querySelectorAll(".products");
    let cartCost = localStorage.getItem('totalCost');

    // console.log(cartItems);
    if (cartItems && productContainer) {
        let productContainer2 = document.querySelector(".gioHangTrong");
        productContainer2.style.display="none";
        productContainer.innerHTML = '';
        // productContainerInPayment.innerHTML = '';
        Object.values(cartItems).map(item => {
            if(item.thuocTinh!=""){
                productContainer.innerHTML += '<div class="product"><ion-icon name="close-circle-outline"></ion-icon><a href="../products_detail.html?productid='+item.productid+'"><img src="'+item.image+'"></a><span>'+item.name+' ('+item.thuocTinh+')</span></div><div class="price">'+item.price+'₫</div><div class="quantity"><span>'+item.quantity+'</span></div><div class="total">'+item.quantity*item.price+'₫</div>';
            }
            
            else{
                productContainer.innerHTML += '<div class="product"><ion-icon name="close-circle-outline"></ion-icon><a href="../products_detail.html?productid='+item.productid+'"><img src="'+item.image+'"></a><span>'+item.name+'</span></div><div class="price">'+item.price+'₫</div><div class="quantity"><span>'+item.quantity+'</span></div><div class="total">'+item.quantity*item.price+'₫</div>';
            }
        });
        productContainer.innerHTML += '<div class="basketTotalContainer"><h4 class="basketTotalTitle">TỔNG CỘNG</h4><h4 class="basketTotal">'+cartCost+'đ</h4></div><a style="margin-left:auto;margin-right:auto;display:block" class="btn_add-to-cart" href="Dog-Product.html">TIẾP TỤC MUA SẮM</a><a style="margin-left:auto;margin-right:auto;display:block" class="btn_add-to-cart" href="payment.html">THANH TOÁN</a>';

        // Object.values(cartItems).map(item => {
        //     productContainerInPayment.innerHTML += '<div class="cart_row"><span class="quantity">'+item.quantity+' x</span><img src="'+item.image+'" alt=""><div class="cart_row-name"><span class="product">'+item.name+'</span><span class="modifier">Size 15 lb</span></div><span class="price">'+item.price+' VND</span></div>';
        // });
    }
    else{
        let productContainer2 = document.querySelector(".products-container");
        productContainer2.style.display="none";
    }
}
const cartList = document.querySelector('.product');
cartList.addEventListener('click', deleteProduct);
function deleteProduct(e){
    let cartItem;
    if(e.target.tagName === "ION-ICON"){
        cartItem = e.target.parentElement;
        cartItem.remove(); // this removes from the DOM only
    } else {

    }

    let products = getProductFromStorage();
    let updatedProducts = products.filter(product => {
        return product.thutusanpham !== parseInt(cartItem.dataset.thutusanpham);
    });
    localStorage.setItem('productsInCart', JSON.stringify(updatedProducts)); // updating the product list after the deletion
    updateCartInfo();
}

// đừng xóa này nha, lỡ cần á :)))
// function displayCartInPayment() {
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);
//     let productContainerInPayment = document.querySelector(".cart");
//     let calculateCostInPayment = document.querySelector(".detail-col-query");
//     const cartCost = parseInt(localStorage.getItem('totalCost'));
//     const shippingFee = parseInt(20000);
//     const totalPayable=cartCost+shippingFee;
//     if (cartItems && productContainerInPayment) {
//         productContainerInPayment.innerHTML = '';
//         calculateCostInPayment.innerHTML = '';
//         // productContainerInPayment.innerHTML = '';
//         Object.values(cartItems).map(item => {
//             if(item.thuocTinh!=""){
//                 productContainerInPayment.innerHTML += '<div class="cart_row"><span class="quantity">'+item.quantity+' x</span><a href="../products_detail.html?productid='+item.productid+'"><img src="'+item.image+'"></a><div class="cart_row-name"><span class="product">'+item.name+' ('+item.thuocTinh+')</span><span class="modifier">'+item.thuocTinh+'</span></div><span class="price">'+item.price*item.quantity+' VND</span></div>';
//             }
            
//             else{
//                 productContainerInPayment.innerHTML += '<div class="cart_row"><span class="quantity">'+item.quantity+' x</span><a href="../products_detail.html?productid='+item.productid+'"><img src="'+item.image+'"></a><div class="cart_row-name"><span class="product">'+item.name+'</span><span class="modifier"></span></div><span class="price">'+item.price*item.quantity+' VND</span></div>';
//             }
//         });
//         calculateCostInPayment.innerHTML += '<span>'+cartCost+' VND</span><span>'+shippingFee+' VND</span><span>'+totalPayable+' VND</span>';
//     }
//     else{
        
//     }
// }








// function vippro(productid)
//     {
//         // let productNumbers=localStorage.getItem('cartNumbers')
//         // localStorage.setItem('cartNumbers', productNumbers+1);
//         let order = productid+" "
//         let counter = 1
//         if(document.cookie.indexOf(',counter=')>=0)
//         {
//             order = productid + " " + document.cookie.split(',')[0].split('=')[1]
//             counter = Number(document.cookie.split(',')[1].split('=')[1]) + 1
//         }
//         document.cookie = "orderId=" + order + ",counter=" + counter
//         // document.getElementById("badge").innerHTML = counter
//         document.querySelector('.countProductsInCart1 span').textContent=counter;
//         document.querySelector('.countProductsInCart2 span').textContent=counter;
//         console.log(document.cookie)
//     }