import big from "./img/big.jpg";
import small from "./img/small.png";
import style from "./css/style.scss";

let img = new Image();
img.src = big;
img.classList.add(style.img);
let img2 = new Image();
img2.src = small;
img2.classList.add(style.img);
let root = document.getElementById("root");
root.append(img);
root.append(img2);
