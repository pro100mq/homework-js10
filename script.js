const ask = () => confirm("Натисніть OK, щоб продовжити");

const check = () => {
  let result = ask(); 

  while (!result) { 
    result = ask();
  }

alert("Hello world")
};
check();

const randomNum = Math.floor(Math.random() * 100) + 1;
const userGuess = Number(prompt("Введіть число від 1 до 100"))
const checkGuess = () => {
    if (userGuess === randomNum) {
        alert("Вітаю ви вгадали число")
    } else if (userGuess < randomNum) {
        alert("На жаль ви не виграли, загадане число більше")
    } else if (userGuess > randomNum) {
        alert("На жаль ви не виграли, загадане число менше")
    }
}
checkGuess()
console.log(randomNum)

let userClick;
let i = 0;
while(true){
    userClick = confirm("Нажміть на кнопку")
    i += 1
    if (userClick === false){
        break;
    } else {
        continue
    }
}
console.log(i)

function applyCallbackToArray(array, callback) {
    const result = []; 
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result; 
}
const arr = [1, 2, 3, 4, 5];
const squareCallback = num => num * 2;
console.log(applyCallbackToArray(arr, squareCallback));

const calculateDiskountedPrice = (price, discount, callback) => {
    const priceDiscount = price - (price * discount / 100)
    callback(priceDiscount)
};

const showPrice = (priceDiscount) => {
    alert(`Товар зі знижкою: ${priceDiscount} гривень.`)
};
const price = 250;
const discount = 15;

console.log(calculateDiskountedPrice(price, discount, showPrice)); 