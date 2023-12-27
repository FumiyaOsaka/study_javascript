//if文
//閏年かどうかの判定文
console.log("==================================");
console.log("if文 start");
console.log("==================================");
const year = 2023;
if (year % 4 === 0) { // 4で割り切れる
  if (year % 100 === 0) { // 100で割り切れる
      console.log(`${year}年はうるう年です`);
  } else{
      console.log(`${year}年はうるう年ではありません`);
  }
} else {
  console.log(`${year}年はうるう年ではありません`);
}

//if文でfalseと判定される特別な値
if (false) {
  //この行は実行されません
}
if ("") {
  //この行は実行されません
}
if (0) {
  //この行は実行されません
}
if (undefined) {
  //この行は実行されません
}
if (null) {
  //この行は実行されません
}
console.log("==================================");
console.log("if文 end");
console.log("==================================");

console.log("==================================");
console.log("switch文 start");
console.log("==================================")
// switch文
const version = "ES6";
switch (version) {
  case "ES5":
    console.log("ECMAScript 5");
    break;
  case "ES6":
    console.log("ECMAScript 2015");
    break;
  case "ES7":
    console.log("ECMAScript 2016");
    break;
  default:
    console.log("知らないバージョンです");
    break;
}
console.log("==================================");
console.log("switch文 end");
console.log("==================================");

//while文
//あまり使わない
console.log("==================================");
console.log("while文 start");
console.log("==================================");
let x = 0;
console.log(`ループの開始前のxの値: ${x}`);
while (x < 10) {
  console.log(x);
  x += 1;
}
console.log(`ループ終了後のxの値: ${x}`);
console.log("==================================");
console.log("while文 end");
console.log("==================================");

// do-while文
// こちらもあまり使わない
console.log("====================================");
console.log("do-while文 start");
console.log("====================================");
const y = 1000;
do {
  console.log(y); // => 1000
}while (y < 10);
console.log("==================================");
console.log("do-while文 end");
console.log("==================================");

//for文
console.log("==================================")
console.log("for文 start");
console.log("==================================");
const numbers = [1, 5, 10, 15, 20];
//偶数があるかどうか
let isEvenIncluded = false;
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    //numが2で割り切れるなら偶数
  if (num % 2 === 0) {
      isEvenIncluded = true;
      break;
  }
}

if(isEvenIncluded){
  console.log("偶数は存在します");
}

console.log(isEvenIncluded);
console.log("==================================");
console.log("for文 end");
console.log("==================================");

//for of 文
console.log("==================================");
console.log("for of文 start");
console.log("==================================");
const array = [1, 2, 3];
for (const value of array){
     console.log(value);
}
console.log("==================================");
console.log("for of文 end");
console.log("==================================");

//forEach文
console.log("==================================");
console.log("forEach文 start");
console.log("==================================");
const array2 = [1, 2, 3, 4, 5];
let total = 0;
array2.forEach(currentValue => {
  total += currentValue
})
console.log(total);
console.log("==================================");
console.log("forEach文 start");
console.log("==================================");