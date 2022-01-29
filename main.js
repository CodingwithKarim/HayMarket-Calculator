let numbers = document.querySelectorAll(".num");
let operations = document.querySelectorAll(".ops");
let strikes = 0
document.querySelector(".clear").addEventListener("click", clearAll);
document.querySelector(".equals").addEventListener("click", equals);
document.getElementById("");
let arr = [];
let sum = 0;
let reference = "";
Array.from(numbers).forEach(function (element) {
  element.addEventListener("click", function (e) {
    sum += e.target.dataset.num;
    document.querySelector(".viewer").innerHTML = +sum;
    console.log(+sum)
    if(isNaN(+sum)){
        clearAll()
        strikes++
        handleErrors()
        alert(`You either divided by 0 or double clicked the decimal, thats strike ${strikes}`)
    }
  });
});
console.log(document.querySelector(".viewer").innerText)
Array.from(operations).forEach(function (element) {
  element.addEventListener("click", function (e) {
    if (reference === "plus" || reference === "minus") {
        arr.push(+sum || 0);
        if(reference === 'plus'){
        arr = [arr.reduce((a,b)=> a + b, 0)]
        document.querySelector(".viewer").innerHTML = arr[0].toFixed(2);
        }
        else{
            arr = [arr.reduce((a,b)=> a - b)]
            document.querySelector(".viewer").innerHTML = arr[0].toFixed(2);
        }
      } else {
        arr.push(+sum || 1);
        if(reference === 'times'){
            arr = [arr.reduce((a,b)=> a * b, 1)]
            document.querySelector(".viewer").innerHTML = arr[0].toFixed(2);
        }
        if(reference === 'divided'){
            arr = [arr.reduce((a,b)=> a / b)]
            document.querySelector(".viewer").innerHTML = arr[0].toFixed(2);
        }
      }
      reference = e.target.dataset.ops
    sum = 0;
    console.log(arr)
  });
});

function equals() {
  if (reference === "times") {
    arr.push(+sum);
    if(arr.includes(NaN)){
        clearAll()
    }
    arr = [arr.reduce((a, b) => a * b, 1)];
    document.querySelector(".viewer").innerHTML = arr[0].toFixed(2);
    sum = 0;
  } else if (reference === "divided") {
    arr.push(+sum);
    arr = [arr.reduce((a, b) => a / b)];
    document.querySelector(".viewer").innerHTML = arr[0].toFixed(2);
    sum = 0;
  } else if (reference === "plus") {
    arr.push(+sum);
    arr = [arr.reduce((a, b) => a + b, 0)];
    document.querySelector(".viewer").innerHTML = arr[0].toFixed(2);
    sum = 0;
  } else if (reference === "minus") {
    arr.push(+sum);
    arr = [arr.reduce((a, b) => a - b)];
    document.querySelector(".viewer").innerHTML = arr[0].toFixed(2);
    sum = 0;
  }
}

function clearAll() {
  document.querySelector(".viewer").innerHTML = 0;
  arr = [];
  sum = 0;
  reference = "";
}





