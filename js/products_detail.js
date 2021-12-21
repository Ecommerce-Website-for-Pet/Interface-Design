var xmlhttp = new XMLHttpRequest();
var url = "./json/products.json";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        render_products_gallery(myArr);
        render_products_infor_summary(myArr);
    }
};

xmlhttp.open("GET", url, true); //ra lệnh
xmlhttp.send(); //thực hiên

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


            div += '</div></div></div><div class="products_infor"><div class="products_infor-summary" id="products_infor-summary"><h1 class="products_name">' + arr[i].name + '</h1><span class="sub-title-products" style="color: #da1f24;">Thương hiệu</span><a href="" class="brand_name">' + arr[i].label + '</a></div>';

            div += '<div class="products_buybox-wrapper"><div class="products_buybox-options"><div class="products_price"><div><label>Giá bán:</label><span class="price-amount"><span class="price">' + arr[i].price[0] + '</span><span style="color: #b93505; font-weight: 700;">đ</span></span></div></div><div class="availability"><div class="stock">Còn hàng</div></div><div class="button_select-weight"><div class="weight-option">'

            if (arr[i].weights != "") {
                div += '<div class="weight-label"><label>Chọn trọng lượng (Select weight)</label></div>'
                for (j = 0; j < arr[i].weights.length; j++) {
                    div += '<button>' + arr[i].weights[j] + ' - ' + arr[i].price[j] + ' đ</button>';
                }
            }

            div += '</div></div><div class="button_select-color"><div class="color-option">'
            if (arr[i].colors != "") {
                div += '<div class="weight-label"><label>Chọn màu sắc (Select color)</label></div><div class="btn_color">'
                for (j = 0; j < arr[i].colors.length; j++) {
                    div += '<button style="background-color: ' + arr[i].colors[j] + '"></button>';
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

            div += '</div></div></div></div><div class="products_buybox"><form action="" class="cart"><div class="quantity_select" style="float: left;"><div class="quantity-dropdown"><label for="quantity">Số lượng</label><select name="quantity" id="quantity" title="Chọn số lượng" class="qty_select"><option value="1" selected="selected">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option></select><button type="submit" name="add-to-cart" class="btn_add-to-cart">Thêm vào giỏ hàng</button></div></div></form></div></div></div></div></div><div class="products_detail"><div class="products_detail-description"><ul class="products_detail-tabs"><li class="tab-active"><p>Mô tả</p></li></ul><div class="products_description-container"><div class="products_description"><div class="products_description-text"><h3 class="products_description-title">Mô tả</h3><p id="description">' + arr[i].description + '</p><br><h3 class="products_description-title">Mục đích</h3><p>' + arr[i].purpose + '</p><br><h3 class="products_description-title">Hướng dẫn sử dụng</h3><p>' + arr[i].instruct + '</p></div></div></div></div> <div class="description_right"><img src="./library/cattt.gif" alt=""><div></div><p>Products you can trust</p></div></div></div></div>'
            document.getElementById("container").innerHTML = div;
            break;
        }

    }




}