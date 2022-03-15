/*
// Ex1: Tìm số lớn nhất trong dãy --------------------------
const value = prompt("Nhap vao day:");

const newArray = value.split(",");

// let max = 0;
// hoặc
//Giả định vị trí số lớn nhất là số đầu tiên của mảng.
let max = newArray[0];

// So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất
for (let i = 0; i < newArray.length; i++) {
  if (max < Number(newArray[i])) {
    //Thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
    max = newArray[i];
  }
}
console.log("max=", max);

// Ex2: Tìm số nhỏ nhất trong dãy --------------------------
// Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
let min = newArray[0];

// So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất
for (let i = 0; i < newArray.length; i++) {
  //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
  if (min > Number(newArray[i])) {
    min = newArray[i];
  }
}
console.log("min=", min);
*/

// Ex3: Kiểm tra số chẵn lẻ --------------------------
// const value3 = Number(prompt("Nhập 1 số vào đây:"));

// if (value3 % 2 === 0) {
//   console.log(`Đây là số chắn = ${value3}`);
// } else if (value3 % 2 !== 0) {
//   console.log(`Đây là số lẻ = ${value3}`);
// }

// Ex4: Kiểm tra số nguyên tố --------------------------
// const value4 = Number(prompt("Nhập 1 số vào đây:"));

// if (value4 < 2) {
//   console.log(`False, Đây không là số nguyên tố`);
// } else if (value4 === 2) {
//   console.log(`True, Đây là số nguyên tố = ${value4}`);
// } else if (value4 % 2 === 0) {
//   console.log(`False, Đây không là số nguyên tố`);
// } else {
//   for (let i = 3; i < Math.sqrt(value4); i += 2) {
//     if (value4 % i === 0) {
//       console.log(`False, Đây không là số nguyên tố`);
//     }
//   }
// }

// Ex5: Tính tổng các phần tử trong chuỗi
const value5 = prompt("Nhập vào đây:");
const newArray5 = value5.split(",");
console.log(value5);
console.log(newArray5);
let sum = 0;

for (let i = 0; i < newArray5.length; i++) {
  sum += Number(newArray5[i]);
}
console.log(sum);
