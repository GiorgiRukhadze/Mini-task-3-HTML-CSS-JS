let mainCont = document.querySelector(".maincontainer");
let cont = document.querySelector(".container");
let div1 = document.querySelector(".div");
let but = document.querySelector(".button");

but.addEventListener("click", function () {
  div1.remove();
  let img = document.createElement("img");
  img.src = "./img1.png";
  cont.appendChild(img);
  img.classList.add("wina");

  let img2 = document.createElement("img");
  img2.src = "./img2.png";
  cont.appendChild(img2);
  img2.classList.add("ukana");

  img.addEventListener("click", function () {
    cont.remove();

    wina = Math.floor(Math.random() * 2) == 0;
    if (wina) {
      let win = document.createElement("p");
      mainCont.appendChild(win);
      win.innerHTML = "YOU WIN ;)";
      win.classList.add("winstyle");
      img.src = "./img1.png";
      mainCont.appendChild(img);
      img.classList.add("photo");
    } else {
      let lose = document.createElement("p");
      mainCont.appendChild(lose);
      lose.innerHTML = "YOU LOSE ;(";
      lose.classList.add("losestyle");
      img2.src = "./img2.png";
      mainCont.appendChild(img2);
      img2.classList.add("photo");
    }
  });

  img2.addEventListener("click", function () {
    cont.remove();

    ukana = Math.floor(Math.random() * 2) == 0;
    if (ukana) {
      let win = document.createElement("p");
      mainCont.appendChild(win);
      win.innerHTML = "YOU WIN ;)";
      win.classList.add("winstyle");
      img2.src = "./img2.png";
      mainCont.appendChild(img2);
      img2.classList.add("photo2");
    } else {
      let lose = document.createElement("p");
      mainCont.appendChild(lose);
      lose.innerHTML = "YOU LOSE ;(";
      lose.classList.add("losestyle");
      img.src = "./img1.png";
      mainCont.appendChild(img);
      img.classList.add("photo2");
    }
  });
});
