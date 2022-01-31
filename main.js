document.querySelector(".clear").addEventListener("click", clearAll);
document.querySelector(".equals").addEventListener("click", equals);
let numbers = document.querySelectorAll(".num"),
  operations = document.querySelectorAll(".ops");
let strikes = 0,
  reducerArray = [],
  sum = 0,
  reference = "";
Array.from(numbers).forEach(function (element) {
  element.addEventListener("click", function (e) {
    sum += e.target.dataset.num;
    document.querySelector(".viewer").innerHTML = +sum;
    if (isNaN(+sum)) {
    alert('Not a valid number!')
      clearAll();
    }
  });
});
Array.from(operations).forEach(function (element) {
  element.addEventListener("click", function (e) {
    if (reference === "plus" || reference === "minus") {
      reducerArray.push(+sum || 0);
      if (reference === "plus") {
        reducerArray = [reducerArray.reduce((a, b) => a + b, 0)];
      } else {
        reducerArray = [reducerArray.reduce((a, b) => a - b)];
      }
    } else {
      reducerArray.push(+sum || 1);
      if (reference === "times") {
        reducerArray = [reducerArray.reduce((a, b) => a * b, 1)];
      }
      if (reference === "divided") {
        reducerArray = [reducerArray.reduce((a, b) => a / b)];
      }
    }
    document.querySelector(".viewer").innerHTML = reducerArray[0];
    reference = e.target.dataset.ops;
    sum = 0;
  });
});

function equals() {
  if (reference === "times") {
    reducerArray.push(+sum);
    reducerArray = [reducerArray.reduce((a, b) => a * b, 1)];
    document.querySelector(".viewer").innerHTML = reducerArray[0];
    sum = 0;
  } else if (reference === "divided") {
    reducerArray.push(+sum);
    reducerArray = [reducerArray.reduce((a, b) => a / b)];
    document.querySelector(".viewer").innerHTML = reducerArray[0];
    sum = 0;
  } else if (reference === "plus") {
    reducerArray.push(+sum);
    reducerArray = [reducerArray.reduce((a, b) => a + b, 0)];
    document.querySelector(".viewer").innerHTML = reducerArray[0];
    sum = 0;
  } else if (reference === "minus") {
    reducerArray.push(+sum);
    reducerArray = [reducerArray.reduce((a, b) => a - b)];
    document.querySelector(".viewer").innerHTML = reducerArray[0];
    sum = 0
  }
}

function clearAll() {
  document.querySelector(".viewer").innerHTML = 0;
  reducerArray = [];
  sum = 0;
  reference = "";
}
