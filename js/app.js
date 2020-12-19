const lowerBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const h1 = document.getElementById("counter");

let number = 0;

const lowerNumber = (e) => {
  console.log("click");
  number--;

  console.log(number);
  h1.textContent = `${number}`;

  if (number < 0) {
    h1.style.color = "red";
  }
};

lowerBtn.addEventListener("click", lowerNumber);

function addNumber() {
  number++;
  console.log(number);
  h1.textContent = `${number}`;

  if (number > 0) {
    h1.style.color = "green";
  }
}

nextBtn.addEventListener("click", addNumber);
