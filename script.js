// Toogle Account

var LoginForm = document.getElementById("LoginForm");
var RegisterForm = document.getElementById("RegisterForm");
var Indicator = document.getElementById("Indicator");

function register() {

  RegisterForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(-300px)";
  Indicator.style.transform = "translateX(100px)";
}

function login() {
    
    RegisterForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(0px)";
}

// Toogle Menu

var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoogle(){
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

// Product Galery

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("Small-img");

SmallImg[0].onclick = function(){
ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    ProductImg.src = SmallImg[3].src;
}