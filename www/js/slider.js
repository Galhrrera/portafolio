const sliders = [...document.querySelectorAll(".slider_body")];
const arrowNext = document.querySelector("#next");
const arrowPrev = document.querySelector("#prev");
let value;

console.log(sliders)


function changePosition(n) { //El parámetro es el número que sumará o restará para mostrar el 
  //siguiente o anterior
  const currentElement = Number(document.querySelector(".slider_body_show").dataset.id);
  document.querySelector(".slider_body_show").classList.toggle("slider_body_show");
  value = currentElement;
  value += n;

  if (value === 0 || value == sliders.length + 1) { //Con este condicional, se pueden agregar tantos div
    //en certificados y logros "sliders" como guste, y la variable "continue
    value = value === 0 ? sliders.length : 1;
  }

  sliders[value - 1].classList.toggle("slider_body_show");

}

