var xmlhttp = new XMLHttpRequest();
var url = "../json/products.json";
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};

xmlhttp.open("GET", url, true); //ra lệnh
xmlhttp.send(); //thực hiên

function myFunction(arr) {
  var div = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].category == "food") {
      div +=
        // '<div class="products"><div class="product-item"><div class="product-top"><img src="'+ arr[i].image + ' "alt=""><button type = "button" class = "add-to-cart-btn"><i class = "fas fa-shopping-cart"></i>Thêm vào giỏ</button><button type = "button" class = "view-product-detail-btn"><i class = "fas fa-shopping-cart"></i>Xem chi tiết</button></div><div class="product-info"><div class="product-label"> '+ arr[i].label +'</div><br/><div class="product-name">'+ arr[i].name +'</div><br/><div class="product-price"> '+ arr[i].price +'</div></div></div></div></div>'
        '<div class="products"><div class="product-item"><div class="product-top"><img src="'+ arr[i].image + ' "alt=""><button type = "button" class = "add-to-cart-btn">Thêm vào giỏ</button><button type = "button" class = "view-product-detail-btn">Xem chi tiết</button></div><div class="product-info"><div class="product-label"> '+ arr[i].label +'</div><br/><div class="product-name">'+ arr[i].name +'</div><br/><div class="product-price"> '+ arr[i].price +'</div></div></div></div></div>'

    }
    document.getElementById("product").innerHTML = div;
  }
}