
var xmlhttp = new XMLHttpRequest();
var url = "./json/products.json";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        searchFunction(myArr);
        searchFunc(myArr);
        searchFunc_detailpage(myArr);
        loadSearch(myArr);
    }
};
xmlhttp.open("GET", url, true); //ra lệnh
xmlhttp.send(); //thực hiên
function searchFunc() {
  let menusearch = document.querySelector("#menu__search");
  let menuitems = Array.from(document.querySelectorAll(".menu__item"));
  menusearch.value = menusearch.value.toLowerCase();
  menuitems.forEach(function (el) {
    let text = el.innerText.toLowerCase();
    if (text.indexOf(menusearch.value) > -1) {
      document.querySelector("#search__list").style.display = "block";
      el.style.display = "flex";
    } else el.style.display = "none";

    if (menusearch.value == "") {
      el.style.display = "none";
      document.getElementById("search__list").style.display = "none";
    }
  });
}
function searchFunc_detailpage() {
    let menusearch = search;
  
    let menuitems = Array.from(document.querySelectorAll(".products"));
  
    menusearch = menusearch.toLowerCase();
    var dem = 0;
    menuitems.forEach(function (el) {
      let text = el.innerText.toLowerCase();
  
      if (text.indexOf(menusearch) > -1) {
        document.querySelector("#showsearch").style.display = "flex";
        el.style.display = "flex";
      } else {
        el.style.display = "none";
        dem = dem + 1;
      }
  
      if (menusearch == "" || menusearch == "undefined") {
        el.style.display = "none";
        document.getElementById("showsearch").innerHTML =
        "<div class='errorpage'><img src='./library/banner-about.jpg' alt=''><h3>Không tìm thấy sản phẩm</h3></div>";
      }
      if (dem === document.querySelectorAll(".products").length) {
          document.getElementById("showsearch").innerHTML =
        "<div class='errorpage'><img src='./library/banner-about.jpg' alt=''><h3>Không tìm thấy sản phẩm</h3></div>";
      }
    });
    
  }

function loadSearch(arr) {
  var i;
  var div = "";
  for (i = 0; i < arr.length; i++) {
    div +=
      ' <li onclick="gotoDetail(' +
      "'" +
      arr[i].productid +
      "'" +
      ')" class="menu__item">' +
      '<img src="' +
      arr[i].image[0] +
      '" width="150px" alt="">' +
      "<span>" +
      "<span>" +
      arr[i].name +
      "</span>" +
      "<br>" +
      "<span>" +
      arr[i].price[0] +
      "</span>" +
      "</span>" +
      "</li>";
  }
  document.getElementById("search__list").innerHTML = div;
}

function gotoDetail(id) {
  window.location.href = "products_detail.html?productid=" + id;
}

function gotoSearchDetail() {
  let menusearch = document.querySelector("#menu__search").value;
  window.location.href = "Showsearch.html?search=" + menusearch;
}
function searchFunction(arr) {
  var div = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    var d = "";
    var open_del = "";
    var close_del = "";
    if (arr[i].discount != "") {
      d = "đ";
      open_del = "<del>";
      close_del = "</del>";
    }
    div +=
      '<div class="products"><div class="product-item" onclick="gotoChiTiet(' +
      arr[i].productid +
      ')" ><div class="product-top"><img src="' +
      arr[i].image[0] +
      ' "alt=""></div><div class="product-info"><div class="product-label"> ' +
      arr[i].label +
      '</div><br/><div class="product-name">' +
      arr[i].name +
      '</div><br/><div class="product-price">' +
      open_del +
      arr[i].price[0] +
      " đ" +
      close_del +
      "</div><div class='product-discount' >" +
      arr[i].discount +
      " " +
      d +
      "</div></div></div></div></div>";
  }

  document.getElementById("showsearch").innerHTML = div;
}
function decode_utf8(){
  return
}
let btn = document.querySelector("#menu__search");
  document.querySelector("#menu__search").addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
          document.getElementById("myBtnSearch").click();
      } 
  });
  btn.addEventListener("click", () => {
      const keyEvent = new KeyboardEvent("keydown", { key: "Enter" });       
      document.body.dispatchEvent(keyEvent);
  });