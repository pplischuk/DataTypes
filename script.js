"use strict";

//Класна робота

//1. Порівняти 2 рядки без урахування регістру

let str1 = 'piter';
let str2 = 'Piter';
console.log(str1.toLowerCase() === str2.toLowerCase());

//2. Зробити з заданого рядка - масив. "Морква, картопля, буряк"

let str = "Морква, картопля, буряк";
let arr = str.split(', ');
console.log(arr);

//3. Емуляція гри в кубики, юзер клацає на конфірм та отримує 2 результати(кубики стандартні 1-6 значення на них.) Якщо випадає 2 шестірки, вивести додаткове повідомлення що це - джекпот!

let play = confirm('Кинути кубики');
let min = 1;
let max = 6;
let random = Math.floor(Math.random()* (max - min + 1)) + min;
let random2 = Math.floor(Math.random()* (max - min + 1)) + min;
alert(`${random}:${random2}`);
if(random === 6 && random2 === 6){
	alert('Це джепоооот!!!');
}

//4. Створіть програму яка запитує у юзера 2 значення та виводить рандомне число між цими двома значеннями

let min = +prompt('введіть мінімальне число');
let max = +prompt('введіть максималне число');
let random = Math.floor(Math.random()* (max - min + 1)) + min;
alert(random);

// 5. Створити масив у якому буде 3 юзера описані як об'єкт из такими полями - age - name - hobby(теж повинно бути масивом)

let user1 = {
	name:'Piter',
	age: '21',
	hobby: ['reading', 'snowboarding']
}

let user2 = {
	name:'Vika',
	age: '21',
	hobby:['make video', 'snowboarding']
}

let user3 = {
	name:'Andrew',
	age: '21',
	hobby: ['ski', 'boxing']
}
let arr = [user1, user2, user3];

console.log(arr);

//HomeWork

// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined. 

let num = prompt('Введіть суму');

if(num != Number || num ===null || num === undefined || num <= 0){
	alert('Введіть коректне число')
}
let currency = prompt('Введіть: usd, euro, brent, gold');
if(currency === 'usd'){
	alert(num*27.7);
}else if(currency === 'euro'){
	alert(num*33.5);
}else if(currency === 'gold'){
	alert(num/1700+' gramm');
}else if(currency === 'brent'){
	alert(num/1770);
}

//3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок! 

const discount1 = 1;
const discount2 = 5;
const discount3 = 10;
const sertificate = 200;
let price = prompt('Введіт суму замовленя');
if(price <= 500){
	alert(`Ваша сума замовлення з урахуванням знижки:${price -(price * discount1/100)}`)
}else if(price <= 1000){
	alert(`Ваша сума замовлення з урахуванням знижки:${price -(price * discount2/100)}`)
}else if(price > 1000){
	alert(`Ваша сума замовлення з урахуванням знижки:${price -(price * discount3/100)} та сертифакат на суму ${sertificate}грн у подарунок`)
}

//4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал, якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал. 

let rating = 0;
let quest1 = prompt('скільки буде 2+3');
let quest2 = prompt('скільки буде 10/5');
let quest3 = prompt('скільки буде 27/9');
let quest4 = prompt('скільки буде 6*5');
let quest5 = prompt('скільки буде 42-12');

if(quest1 === '5'){
	rating += 1;
}
if(quest2 === '2'){
	rating += 1;
}
if(quest3 === '3'){
	rating += 1;
}
if(quest4 === '30'){
	rating += 1;
}
if(quest5 === '30'){
	rating += 1;
}
if(rating === 5){
	rating += 1;
}

// alert(`your score is ${rating}`);

//5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 

let num = prompt('Введіть трьох значне число');
let str = String(num);

if(str[0] === str[1]|| str[1] === str[2] || str[0] === str[2]){
	alert('Число містить одинакові цифри')
}else{
	alert('Одинакових цифр немає');
}


//6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.

let btn = prompt('Введіть цифру від 1 до = на клавіатурі');

if(btn==='1'){
	alert('!')
}else if(btn==='2'){
	alert('@')
}else if(btn==='3'){
	alert('#')
}else if(btn==='4'){
	alert('$')
}else if(btn==='5'){
	alert('%')
}else if(btn==='6'){
	alert('^')
}else if(btn==='7'){
	alert('&')
}else if(btn==='8'){
	alert('*')
}else if(btn==='9'){
	alert('(')
}else if(btn==='0'){
	alert(')')
}else if(btn=='-'){
	alert('_')
}else if(btn==='='){
	alert('+')
}else{
	alert('Введіть коректне значення')
}