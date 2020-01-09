import big from "./img/big.jpg";
import small from "./img/small.png";

let img = new Image();
img.src = big;
let img2 = new Image();
img2.src = small;
let root = document.getElementById("root");
root.append(img);
root.append(img2);
