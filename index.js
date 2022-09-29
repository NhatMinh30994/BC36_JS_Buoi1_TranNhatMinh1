// ========Bài 1========
// input: lương ngày, số ngày
var daySalary = 100000;
var day = 28;
// output: Tổng lương theo số ngày làm
var earn;
// progress
earn = daySalary * day;
// Xuất ra kết quả
console.log(earn);



// ========Bài 2========
// input: 5 số thực
var n1 = 1;
var n2 = 3;
var n3 = 5;
var n4 = 8;
var n5 = 9;
// output: Giá trị trung bình
var avg;
// progress
avg = (n1+n2+n3+n4+n5)/5;
// Xuất ra kết quả
console.log(avg);



// ========Bài 3========
// input: tỉ giấ USD sang VND
var usd = 23500;
// output: quy đổi sang VND
var preciousPrice;
// progress
preciousPrice = 2 * usd;
// Xuất ra kết quả
console.log(preciousPrice);



// ========Bài 4========
// input: chiều dài, chiều rộng
var a = 5;
var b = 3;
// output: diện tích, chu vi
var area;
var perimeter;
// progress
area = a*b;
perimeter = (a+b)*2;
// Xuất ra kết quả
console.log(area, perimeter);



// ========Bài 5========
// input: 1 nguyên có 2 ký số
var n = 44;
// output: số hàng đơn vị, số hàng chục, tổng 2 ký số
var so_hang_dv;
var so_hang_chuc;
var sum;
// progress
so_hang_dv = n % 10;
so_hang_chuc = Math.floor(n % 100/10);
sum = so_hang_dv + so_hang_chuc;
// Xuất ra kết quả
console.log(sum);