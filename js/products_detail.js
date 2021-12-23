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


            div += '</div></div></div><div class="products_infor"><div class="products_infor-summary" id="products_infor-summary"><a href="" class="brand_name">' + arr[i].label + '</a><h1 class="products_name">' + arr[i].name + '</h1></div>';

            div += '<div class="products_buybox-wrapper"><div class="products_buybox-options"><div class="products_price">'

            if (arr[i].discount != "") {
                div += '<div class"price-original" style="color: #b4b4b4"><del><label>Giá bán:</label><span class="price-amount"><span style="color: #b4b4b4" class="price" >' + arr[i].price[0] + '</span><span style="font-weight: 700;">đ</span></del></div><div class="price-discount"><label>Giá khuyến mãi:</label><span class="price-amount"><span class="price">' + arr[i].discount + '</span><span style="color: #b93505; font-weight: 700;"> đ</span></span></div>'
            } else {
                div += '<div class"price-original"><label>Giá bán:</label><span class="price-amount"><span class="price">' + arr[i].price[0] + '</span><span style="color: #b93505; font-weight: 700;">đ</span></span></div>'
            }

            div += '</div><div class="availability"><div class="stock">Tình trạng: Còn hàng</div></div><div class="button_select-weight">'

            if (arr[i].weight != "") {
                div += '<div class="weight-label"><label>Chọn trọng lượng (Select weight)</label></div><div class="weight-choose">'
                div += '<div><input data-image="' + arr[i].weight[0] + '" type="radio" id="' + arr[i].weight[0] + '" name="weight" value="' + arr[i].weight[0] + '" checked><label for="' + arr[i].weight[0] + '"><span>' + arr[i].weight[0] + ' - ' + arr[i].price[0] + ' đ</span></label></div>';
                for (j = 1; j < arr[i].weight.length; j++) {
                    // div += '<button>' + arr[i].weight[j] + ' - ' + arr[i].price[j] + ' đ</button>';
                    div += '<div><input data-image="' + arr[i].weight[j] + '" type="radio" id="' + arr[i].weight[j] + '" name="weight" value="' + arr[i].weight[j] + '"><label for="' + arr[i].weight[j] + '"><span>' + arr[i].weight[j] + ' - ' + arr[i].price[j] + ' đ</span></label></div>';
                }
            }

            div += '</div></div><div class="button_select-color"><div class="color-option">'
            if (arr[i].colors != "") {
                div += '<div style="margin-bottom:8px" class="weight-label"><label>Chọn màu sắc (Select color)</label></div><div class="color-choose">';

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

            div += '</div></div></div><div class="products_buybox"><form action="" class="cart"><div class="quantity_select" style="float: left;"><div class="quantity-dropdown"><label for="quantity">Số lượng</label> <fieldset data-quantity><legend>Change quantity</legend></fieldset><a type="submit" name="add-to-cart" class="btn_add-to-cart">Thêm vào giỏ hàng</a></div></div></form></div></div></div></div></div><div class="products_detail"><div class="products_detail-description"><div class="products_description-container"><ul class="products_detail-tabs"><li class="tab-active"><p>Thông tin chi tiết sản phẩm</p></li></ul><div class="products_description"><div class="products_description-text"><h3 class="products_description-title">Mô tả</h3><p id="description">' + arr[i].description + '</p>';

            if (arr[i].benefit != "") {
                div += '<br><h3 class="products_description-title">Lợi ích</h3><p>' + arr[i].benefit + '</p>'
            }
            if (arr[i].instruction != "") {
                div += '<br><h3 class="products_description-title">Hướng dẫn sử dụng</h3><p>' + arr[i].instruction + '</p>'
            }

            div += '</div></div></div></div> <div class="description_right"><img src="./library/cattt.gif" alt=""><div></div><p>MarPet <br/> tự tin làm <br/> bạn hài lòng</p></div></div></div></div>'
            document.getElementById("container").innerHTML = div;
            break;
        }

    }




}