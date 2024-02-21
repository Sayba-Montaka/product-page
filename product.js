let productImg = document.getElementById("product-img");
let btn = document.getElementsByClassName("btn");
let active = document.getElementsByClassName("active");

btn[0].onclick = function(){
    productImg.src = "t-shirt.webp"; 
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active")
}
btn[1].onclick = function(){
    productImg.src = "t-back.webp";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active") 
   
}