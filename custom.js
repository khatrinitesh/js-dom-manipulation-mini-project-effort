// var targetee = document.querySelector('#box');
// targetee.addEventListener('mousemove',function(e){
//     var x = e.offsetX
//     var y = e.offsetY
//     console.log('offset x :' + x + 'offset y' + y )

// })

// var myList = ['abc','xyz','def'];
// var [,a] = myList;
// console.log(a)

// console.log('hi')

// let word = 'hello \n world!';
// console.log(word)
// let x = 5 
// let y = 5+5
// console.log(y);
// if("10" == 10){
//   console.log('this  will execute')
// }
// else{
//   console.log('this will not always execute')
// }
// if(x == 10){
//   console.log('this will always execute');
// }
// else{
//   console.log('this will not always execute')
// }

// function onContinue(){
//   const message = confirm('do you want to join if ')
//   if(message === true){
//     console.log('this is confirmed')
//     return true;
//   }
//   else{
//     console.log('this is rejected')
//     return false;
//   }
// }

// const Element = document.getElementById('element');
// Element.innerHTML = 'this is title heading 1'

// const box = document.querySelector('.box');
// box.innerHTML = '<p>Hello there</p>'

// const firstChild = document.getElementById('#first-child');
// // firstChild.parentNode;

// const groceryList = document.getElementById('groceryList');
// const iceCream = document.getElementById('iceCream');
// groceryList.removeChild(iceCream)

// function appendLi()
// {
//   var ul = document.getElementById("lang");
//   var li = document.createElement("li");
//   var text = document.createTextNode("PHP");    
//   li.appendChild(text);
//   ul.appendChild(li);
// }

// function changeImage()
// {
//     // var img = document.getElementById('image')
//     // img.src = 'https://cdn.statusqueen.com/mobilewallpaper/thumbnail/mobile_wallpaper45-209.jpg'
//     var img = document.getElementById('image').src;
//     if (img.indexOf('https://cdn.statusqueen.com/mobilewallpaper/thumbnail/mobile_wallpaper45-209.jpg')!=-1) {
//         document.getElementById('image').src  = 'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-4.jpg';
//     }
//      else {
//        document.getElementById('image').src = 'https://cdn.statusqueen.com/mobilewallpaper/thumbnail/mobile_wallpaper45-209.jpg';
//    }
// }

// var toggle = true;
// function chngimg() {
//     if (toggle === true) {
//         document.getElementById('image').src  = 'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-4.jpg';
//     } else {
//        document.getElementById('image').src = 'https://cdn.statusqueen.com/mobilewallpaper/thumbnail/mobile_wallpaper45-209.jpg';
//     }
//     toggle = !toggle; 
// }

// const url = 'https://api.wheretheiss.at/v1/satellites/25544'
// async function getISS(){
//   const response = await fetch(url)
//   const data = await response.json()
//   const {latitude,longitude} = data
//   document.getElementById('latitude').textContent = latitude
//   document.getElementById('longitude').textContent = longitude
// }
// getISS()

// const url2 = 'https://jsonplaceholder.typicode.com/posts'
// async function getJSON(){
//   const response = await fetch(url2)
//   const data2 = await response.json()
//   const {title,body} = data2
//   document.getElementById('title').textContent = title
//   document.getElementById('body').textContent = body
// }
// getJSON()

// let jsonObj = {
//     name:'harry',
//     channel:'CW',
//     friend:'rohan das',
//     food:'bhindi'
// }
// console.log(jsonObj)
// let myjsonStr = JSON.stringify( )
// console.log(myjsonStr)
// // myjsonStr = myjsonStr.replace('harry','sachin')
// console.log(myjsonStr)

// function myFunction(){
//     let gender = document.forms[0]
//     let txt = ''
//     let i ;

//     for(let i=0;i<gender.length;i++){
//         if(gender[i].checked){
//             txt = txt + gender[i].value + '';
//         }
//     }
//     document.getElementById('results').value = 'you label yourself as :' + txt;
// }


// const btn = document.getElementById('btn');
// btn.addEventListener('click',function(){
//     var r1 = document.getElementById('r1')
//     var r2 = document.getElementById('r2')

//     if(r1.checked == true){
//         alert('the channel selected is:' + r1.value)
//     }
//     else if(r2.checked == true){
//         alert('the channel selected is:' + r2.value)
//     }
//     else{
//         alert('no channel selected')
//     }
// });


// getElementsByTagName()
// const listItems = document.getElementsByTagName('li')
// for(i=0;i<listItems.length;i++){
// 	listItems[i].style.fontSize = '2rem'
// 	listItems[i].style.color = 'red'
// }
// console.log(listItems)

// querySelectorAll()
// const container = document.querySelectorAll('div')
// console.log(container)

// DOM manipulation
// const title = document.querySelector('#main-heading')
// console.log(title)

// CREATING ELEMENTS
// const ul = document.querySelector('ul')
// const li = document.createElement('li')

// ADDING ELEMENTS
// ul.append(li)

// MODIFYING THE TEXT
// const firstListitem = document.querySelector('.list-items')
// console.log(firstListitem.innerText)
// console.log(firstListitem.textContent)
// console.log(firstListitem.innerHTML)
// li.innerHTML = 'x-men'

// MODIFYING ATTRIBUTES AND CLASSES
// li.setAttribute('id','bullet_list')
// li.removeAttribute('id')

// li.classList.remove('list-items')


// TRAVERSE THE DOM

// PARENT NODE TRAVERSAL
// let ui = document.querySelector('ul')
// console.log(ui.parentNode.parentNode)
// console.log(ui.parentElement.parentElement)


// const html = document.documentElement
// console.log(html.parentNode)
// console.log(html.parentElement)

// CHILD NODE TRAVERSAL 
// let ui = document.querySelector('ul')
// console.log(ui.childNodes)
// console.log(ui.firstChild)
// console.log(ui.lastChild)

// ui.childNodes[1].style.backgroundColor = 'red'

// console.log(ui.children)

// console.log(ui.firstElementChild)
// console.log(ui.lastElementChild)


// SIBLING NODE TRAVERSAL
// let ui = document.querySelector('ul')
// const div = document.querySelector('div')
// console.log(div.childNodes)
// console.log(ui.previousElementSibling)
// console.log(ui.nextElementSibling)

// element.addEventListener("click",function)
// const btnTwo = document.querySelector('.btn-2');
// function alertBtn(){
// 	alert('I love javascript')
// }
// btnTwo.addEventListener('click',alertBtn);

// Mouseover
// const newBgColor = document.querySelector('.box-3')
// function ChangeBgColor(){
// 	newBgColor.style.backgroundColor = 'orange'
// }

// newBgColor.addEventListener('mouseover',ChangeBgColor)

// reveal event 
// const btnReveal = document.querySelector('.btn-reveal')
// const hiddenContent = document.querySelector('.hidden-content')

// function revealContent(){
// 	if(hiddenContent.classList.contains('btn-reveal')){
// 		hiddenContent.classList.remove('btn-reveal')
// 	}
// 	else{
// 		hiddenContent.classList.add('btn-reveal')	
// 	}
// }

// btnReveal.addEventListener('click',revealContent)

// EVENT PROPAGATION
// window.addEventListener('click',function(){
// 	console.log('window')
// },true)

// document.addEventListener('click',function(){
// 	console.log('document')
// },true)

// document.querySelector('.div2').addEventListener('click',function(){
// 	// e.stopPropagation()
// 	console.log('DIV 2')
// },{once:true})
// document.querySelector('.div1').addEventListener('click',function(){
// 	console.log('DIV 1')
// },true)
// document.querySelector('button').addEventListener('click',function(e){
// 	console.log(e.target.innerText = 'button clicked')
// },true);

// EVENT DELEGATION 
// document.querySelector('#football').addEventListener('click',function(e){
// 	e.preventDefault()
// 	console.log('football is clicked');
// 	const target = e.target 
// 	if(target.matches('li')){
// 		target.style.backgroundColor = 'orange'
// 	}
// })
// document.querySelector('#basketball').addEventListener('click',function(e){
// 	e.preventDefault()
// 	console.log('basketball is clicked');
// 	const target = e.target 
// 	if(target.matches('li')){
// 		target.style.backgroundColor = 'red'
// 	}
// })
// document.querySelector('#boxing').addEventListener('click',function(e){
// 	e.preventDefault()
// 	console.log('boxing is clicked');
// 	const target = e.target 
// 	if(target.matches('li')){
// 		target.style.backgroundColor = 'purple'
// 	}
// })

// document.querySelector('#sports').addEventListener('click',function(e){
// 	console.log(e.target.getAttribute('id') + ' is clicked');
// 	const target = e.target 
// 	if(target.matches('li')){
// 		target.style.backgroundColor = 'blue'
// 	}
// });

// const sports = document.querySelector('#sports')
// const newSport = document.createElement('li')
// newSport.innerText = 'rugby'
// newSport.setAttribute = ['id','rugby']

// sports.appendChild(newSport)

// let btn = document.querySelector('#new-quote');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person')

// const quotes = [
//  {
//  	quote:`The greatest glory in living lies not in never falling, but in rising every time we fall. `,
//  	person:`Nelson Mandela`
//  },
//  {
//  	quote:`The way to get started is to quit talking and begin doing. `,
//  	person:`Walt Disney`
//  },
//  {
//  	quote:`Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
//  	person:`Steve Jobs`
//  },
//  {
//  	quote:`If life were predictable it would cease to be life, and be without flavor.`,
//  	person:`Eleanor Roosevelt`
//  },
// ]

// btn.addEventListener('click',function(){
// 	let random = Math.floor(Math.random() * quotes.length)
// 	quote.innerText = quotes[random].quote;
// 	person.innerText = quotes[random].person;
// });


// let btnopen = document.getElementById('btnopen')
// let modalContainer = document.getElementById('modal-container')
// let btnclose = document.getElementById('btnclose')

// // event listeners
// btnopen.addEventListener('click',function(){
// 	modalContainer.style.display = 'block'
// })

// btnclose.addEventListener('click',function(){
// 	modalContainer.style.display = 'none'
// })

// window.addEventListener('click',function(e){
// 	if(e.target === modalContainer){
// 		modalContainer.style.display = 'none'
// 	}
// })

// function toggle() {
//     let text = document.getElementById("extra");
//     let btn = document.getElementsByClassName("button")[0];

//     if (text.style.display === "none") {
//         text.style.display = "block";
//         btn.textContent = "Less";
//     } else {
//         text.style.display = "none";
//         btn.textContent = "More";
//     }
// }


// build in functions
// MATH FUNCTIONS
// console.log(Math.round(11.11));
// console.log(Math.random() * 100);
// console.log(Math.floor(11.11));
// console.log(Math.sqrt(81));
// console.log(Math.sin(11.11));
// console.log([12,44,55].length)
// const num = [12,6,55]
// // ARRAY FUNCTIONS
// console.log(num.sort((a,b) => a-b))
// console.log(num.filter((item) => item > 15))
// console.log(num.map((item) => item))
// console.log(num.reduce((a,b) => a+b))

// // STRING FUNCTIONS
// console.log(num.length)
// console.log(num.indexOf())
// console.log('nitesh'.toUpperCase())
// console.log('NITESH'.toLowerCase())
// console.log('nitesh'.replace('sameet'))

// // DATE FUNCTIONS 
// const date = new Date();
// console.log(Date.now())
// console.log(date.toLocaleDateString())
// console.log(date.toISOString())
// console.log(date.getTime())

// console.log(null == undefined)
// console.log(null === undefined)
// console.log(null != undefined)


// "Important Window methods in JavaScript 
// alert('hello world');
// let name = prompt('please enter your name')
// const btn = document.getElementById('btn');
// btn.addEventListener('click',function(){
//     window.open('https://www.w3schools.com/howto/howto_css_topnav_centered.asp')
// })
// window.scrollTo(0,500)
// window.scrollBy(0,100)
// window.focus();
// window.blur();
// window.location.reload();
// let currenUrl = window.location.href;
// window.history.back();
// window.history.foward();
// let userAgentString = window.navigator.userAgent;
// let windowWidth = window.innerWidth;
// let windowHeight = window.innerHeight;

// Important DOM methods in JavaScript
// document.getElementById('myDiv').innerHTML = 'hello world';
// var x = document.getElementsByClassName('myClass').innerHTML = 'hello world';
// let data = [].map.call(x,elem => elem.textContent)
// document.write(data);

// let findEleByClass = () => {
//     let myclass = document.getElementsByClassName('birds cannot_fly');  // With multiple class names.
//     let msg = document.getElementById('msg');

//    msg.innerHTML = '';

//     for (i = 0; i <= myclass.length - 1; i++) {
//         msg.innerHTML +=  myclass[i].innerHTML + '<br />';
//     }
// }

// const arr = [1, 2, 3, 4, 5];
// const res = arr.map(function(x){
//     return x * 2
// })
// console.log(res)

// const numbers = new Set([1,2,3,4,3,2,1]);
// const word = new Set(['nitesh','nitesh','sameet','sameet','arvind','urvashi'])
// console.log(numbers);
// console.log(word);

// var x = document.getElementsByTagName('p');
// var x = document.querySelector('.myClass');
// var x = document.querySelectorAll('p');
// var x = document.createElement('p');
// document.getElementById('mychild').appendChild('p');
// document.getElementById('mychild').removeChild('p');
// document.getElementById('myImage').setAttribute('src','newimage.jpg');
// var x = document.getElementById('myImage').getAttribute('src');


// let x = 'abc'
// x[1] = 'd'
// console.log(x);

// for(var i=0;i<5;i++){
//     setTimeout(() => console.log(i),1)
// }

// for(var i=0;i<10;i++){
//     setTimeout(() => console.log(i),100)
// }

// const json = '{"user1":"John","user2":"Kate","user3":"Peter"}';
// const map = new Map(Object.entries(JSON.parse(json)))
// console.log(map)

// const obj = {
//     user1: 'John',
//     user2: 'Kate',
//     user3: 'Peter',
//   };

//   const arr = Object.entries(obj)
//   console.log(arr);


// const json =
//   '{"user1":"John","user2":"Kate","user3":"Peter"}';
// const map = new Map(Object.entries(JSON.parse(json)));

// console.log(JSON.stringify(Object.fromEntries(map)))

// let userName = "Nitesh Khatri";
// let currentYear = 2023;
// function greetUser(userName,currentYear){
//     console.log('hello, ' + userName + '!welcome to' + currentYear+ '.')
// }
// greetUser(userName,currentYear)

// function User(fName,lName){
//     this.fName = fName;
//     this.lName = lName;
// }

// const user = new User('nitesh','khatri');
// console.log(user);

// class Product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
// }

// const product = new Product('book',19.99)
// console.log(product)

// const add = (a,b) =>{
//     return a +b 
// }
// console.log(add(10,20))

// function add(a,b){
//     return a+b 
// }
// console.log(add(10,20))

// console.log('nitesh khatri')

// console.log(11+22*22)
// const a = 'nitesh khatri'
// const b = 'sameet khatri'
// console.log(...a,...b)

// const word = 'nitesh'
// console.log(word.split(''));

// const signUp = (e) => {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const user = {
//         username:username,
//         email:email,
//         password:password
//     }

//     const json = JSON.stringify(user);
//     localStorage.setItem(user,json);
//     alert('user added');
// }

// var x = 2 
// var y = 2 
// console.log("==", x == y)
// console.log("===",x === y)
// console.log("!=",x != y)
// console.log("!==",x !== y)

// js array methods 
// const arr = ['banana','apple','cherry']
// const iterator = arr.values();
// for(const value of iterator){
//     console.log(value)
// }
// console.log(arr.length)
// arr.reverse();
// console.log(arr)
// arr.sort();
// console.log(arr)
// console.log(arr.at(1));
// arr.fill('orange',1,2)
// console.log(arr)
// const obj = {
//     0:'apple',
//     1:'banana',
//     2:'cherry',
//     length:3
// }
// console.log(obj)
// const result = Array.from(obj)
// console.log(result)
// const str = arr.join('-')
// console.log(str)
// const strnew = arr.toString()
// console.log(strnew)
// arr.pop()
// console.log(arr)

// let fruits = ["apple","Banana","cherry"]
// fruits.forEach(function(item){
//     console.log(item)
// })

// let fruits = ["apple","Banana","cherry"]
// let shiftFruit = fruits.shift();
// console.log(shiftFruit)
// console.log(fruits)
// let numbers = [1,2,3,4,5]
// numbers.copyWithin(2,0,2)
// console.log(numbers)

// let fruits = ['apple','banana']
// fruits.push('cherry','grape')
// console.log(fruits)

// let fruits = ['apple','banana']
// fruits.unshift('mango','watermelon')
// console.log(fruits)

// let fruits = ['apple','banana']
// let moreFruits = ['cherry','mango']
// let allFruits = fruits.concat(moreFruits)
// console.log(allFruits)

// const fruits = ['apple','banana','cherry','orange'];
// fruits.splice(2,1,'mango','kiwi')
// console.log(fruits);

// const numbers = [1,[2,[3]],4]
// const flatnumbers = numbers.flat(Infinity)
// console.log(flatnumbers)

// const numbers = [1,2,3,4,5,3]
// const lastIndexOf = numbers.lastIndexOf(3);
// console.log(lastIndexOf)

// const arr = [5,10,15,20]
// const index = arr.indexOf(5)
// console.log(index)

// const arr = Array.of(1,2,3,'four',true)
// console.log(arr)

// const arr = [2,4,6,8]
// const isEven = (num) => num % 2 === 0
// const result = arr.every(isEven)
// console.log(isEven)
// console.log(result)

// const arr = [1,2,3,4,5]
// const slicedArr = arr.slice(2,4)
// console.log(slicedArr)

// const arr = [1,2,3]
// const result = arr.flatMap(x => x *2)
// console.log(result)

// const arr = [10,20,30,40,50]
// const greaterThen = arr.filter((item) => item > 35)

// const examplegreater = (num) => num > 35 
// const result = arr.find(examplegreater)
// console.log(greaterThen)
// console.log(result)

// const arr = [10,20,30,40,50]
// const answer = arr.includes(20)
// console.log(answer)

// const arr = ['a','b','c','d']
// const iterator = arr.entries()
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)

// const arr = [44,55,66,77]
// console.log(arr.reduce((a,b) => a+b))
// console.log(arr.reduceRight((a,b) => a+b))

// const fruits = ['apple','banana','mango']
// console.log(Array.isArray(fruits));
// const number = 123
// console.log(Array.isArray(number))

// const myObj = {a:1,b:2,c:3}
// const keysArray = Object.keys(myObj)
// console.log(keysArray)

// const numbers = [1,4,3,4,4,5]
// console.log(numbers.map((v) => v))

// BOM => BROWSER OBJECT WINDOW the window object to see all the methods and properties
// console.log(window)

// // window controls
// console.log(window.open)
// console.log(window.close)
// console.log(window.moveTo)

// // navigation
// console.log(navigator.cookieEnabled)
// console.log(navigator.appName)
// console.log(navigator.onLine)
// console.log(navigator.platform)
// console.log(navigator.language)

// // location
// console.log(window.location.href);
// console.log(window.location.hostname);
// console.log(window.location.pathname);
// console.log(window.location.protocol);
// console.log(window.location.assign)

// history
// console.log(window.history.back());
// console.log(window.history.forward());

// popups
// console.log(window.alert())
// console.log(alert())
// console.log(confirm())
// console.log(prompt())

// screen
// console.log(screen.width)
// console.log(screen.height)
// console.log(screen.availHeight)
// console.log(screen.availWidth)
// console.log(screen.colorDepth)
// console.log(screen.pixelDepth)

// timeing events can be written without window
// console.log(window.setTimeout());
// console.log(setTimeout())
// console.log(setInterval())
// console.log(clearTimeout())
// console.log(clearInterval())

// var target = document.querySelector('#box');
// CtrlKey 
// target.addEventListener('click',function(e){
//     const econtrol = e.ctrlKey
//     if(econtrol){
//         console.log('yes it is control')
//     }
//     else{
//         console.log('yes it is not control')
//     }

// })
// AltKey 
// target.addEventListener('click',function(e){
//     const econtrol = e.altKey
//     if(econtrol){
//         console.log('yes it is control')
//     }
//     else{
//         console.log('yes it is not control')
//     }

// })
// ShiftKey 
// target.addEventListener('click',function(e){
//     const econtrol = e.shiftKey
//     if(econtrol){
//         console.log('yes it is control')
//     }
//     else{
//         console.log('yes it is not control')
//     }

// })
// // MetaKey 
// target.addEventListener('click',function(e){
//     const econtrol = e.metaKey
//     if(econtrol){
//         console.log('yes it is control')
//     }
//     else{
//         console.log('yes it is not control')
//     }

// })

// target.addEventListener('click',function(e){
//     console.clear();
//     var k;
//     switch(true){
//         case e.metaKey: k = 'Meta key';
//         break;
//         case e.ctrlKey: k = 'Ctrl key';
//         break;
//         case e.altKey: k = 'Alternate key';
//         break;
//         case e.shiftKey: k = 'Shift key';
//         break;
//         default: k ='other key pressed';
//         break;
//     }
//     console.log(k);
// })

// const github = 'https://api.github.com/users/khatrinitesh'
// const user = fetch(github);
// console.log(user);

// console.log(('b'+' a'+ + 'a'+'a').toLowerCase())

// window.addEventListener('keyup',() => {
//     console.log('keyup')
// })
// window.addEventListener('keydown',() => {
//     console.log('keydown')
// })
// window.addEventListener('keypress',() => {
//     console.log('keypress')
// })

// var a = 10
// console.log(a)
// var b = 100;
// console.log(this.a)
// console.log(this.b)
// console.log(window.b)

// var a = 10
// console.log(a);

// var a = 100
// {
//     var a = 10
//     let b = 20
//     const c = 30
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// console.log(a)
// console.log(b)
// console.log(c)

// const c = 100
// function x(){
//     const c = 30
//     console.log(c)
// }
// console.log(c)

// let d = 20
// {
//     var a = 20
// }

// const a = 20
// {
//     const a  = 100;
//     console.log(a);
// }

// function a(){
//     const x = 10
//     function b(){
//         console.log(x)
//     }
//     b()
//     const yy = 1000
//     function c(){
//         console.log(yy)
//     }
//     return c
// }
// var z = a();
// console.log(z)
// z();


// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

// for(var i=0;i<10;i++){
//     setTimeout(function example(){
//         console.log(i)
//     },1000)
// }
// function multiply(num1, num2) {
//     return num1 * num2
//   }
//   console.log(multiply(10,20))

// var target = document.querySelector('#box');
// target.addEventListener('mousedown',function(e){
//     var text = e.button
//     var color;
//     switch(text){
//         case 0:color = 'green';
//         break;
//         case 1:color ='red';
//         break;
//         case 2:color = 'blue';
//         break;
//         case 3:color = 'orange';
//         break;
//     }
//     target.style.backgroundColor = color;
//     console.log(color);
// });

// function multiply(num1,num2){
//     if(num1 !== num2){
//         return num1 * num2
//     }
//     return function doMultiply(num2){
//         return num1 * num2
//     }
// }
// console.log(multiply(102,20))

// var carName = "Volvo";
// // code here can use window.carName
// document.getElementById("demo").innerHTML = "I can display " + window.carName;

// function x(){
//     var i = 10
//     setTimeout(function (){
//         console.log(i)
//     },1000)
//     console.log('nitesh khatri is javascript')
// }
// x();

// function x(){
//     for(var i=0;i<10;i++){
//         setTimeout(function (){
//             console.log(i)
//         },1000)
//         console.log('nitesh khatri is javascript')
//     }
// }
// x();

// function x(){
//     for(let i=1;i<5;i++){
//         setTimeout(function (){
//             console.log(i)
//         },i*1000)
//         console.log('nitesh khatri is javascript')
//     }
// }
// x();

// function outer(b){
//     function inner(){
//         console.log(a,b)
//     }
//     let b = 10
//     return inner;
// }
// var close = outer('sdadds');

// function outer(b,x){
//     function inner(){
//         console.log(a,b)
//         function example(){
//             console.log(x,y)
//         }
//         let y = 1000
//         return example;
//     }
//     let a = 10
//     return inner;
// }
// var close = outer('eadsadad');
// close()

// var counter = 0 
// function inc(){
//     console.log(++counter)
// }
// inc()
// function dec(){
//     console.log(--counter)
// }
// dec()

// var counter = 0 
// function inc(){
//     ++counter
// }
// function dec(){
//     --counter
// }
// inc()
// dec()

// function debounce(f,ms){
//     let timeout;
//     return function(){
//         clearTimeout(timeout);
//         timeout = setTimeout(function(){
//             f.apply(this,agruments)
//         },ms);
//     }
// }
// function print(){
//     console.log('print')
// }
// let p = debounce(print,2000);
// p();
// setTimeout(() => p(),300);
// setTimeout(() => p(),700);


// const student = {
//     name:'nitesh'
// }
// console.log(student)
// if("name" in student) {...}
// if("age" in student) {...}

// let idA = Symbol('hello');
// let idB = Symbol('hello');
// console.log(idA == idB)
// console.log(idA === idB)


// const tickerA = {
//     count:0,
//     increment:() => {
//         return ++this.count;
//     }
// }
// const tickerB =  {
//     count:0,
//     increment:function(){
//         return ++this.count;
//     }
// }
// console.log(this.tickerA)
// console.log(this.tickerB)

// const buffer = new ArrayBuffer(100);
// const view = new Uint32Array(buffer);
// console.log(view);
// view[0] = 11111;
// console.log(view);

// function checkNetworkConnection(){
//     const isConnected = navigator.onLine;
//     console.log(isConnected)
// }
// checkNetworkConnection();

// const arr = [
//     {
//         "id":1,
//         "name":"nitesh"
//     },
//     {
//         "id":2,
//         "name":"sameet"
//     },
//     {
//         "id":3,
//         "name":"arvind"
//     },
//     {
//         "id":4,
//         "name":"urvashi"
//     },
// ]

// let no = 9007199254740991;
// let nextNo = no + 2 
// console.log(nextNo)

// let example1 = {name:"nitesh"};
// let example2 = {name:"sameet"}
// console.log(example1,example2)
// const map = new Map();
// console.log(map.set(example1,'nitesh is world'))

// let example3 ={name:'mom'}
// let example4 ={name:'daddy'}
// console.log(example3,example4);
// const map2 = new Map()
// console.log(map2.set(example1,'sameet khatri'))


// let example5 = {name:'vishal'}
// let example6 = {name:'mayur'}
// console.log(example5,example6)
// const mapresult = new Map()
// console.log(mapresult.set(example5,example6,'vishal & mayur is updated'));

// const a = 'sb diesel'
// const b = 'assurekit'
// const mapweak111 = new WeakMap()
// console.log(mapweak111.set(a,'adasd'))

// function counter(){
//     var count = 0
//     this.incCounter = function(){
//         count++
//         console.log(count)
//     }
//     this.decCounter = function(){
//         count--
//         console.log(count)
//     }
// }
// var counter1 = new counter();
// counter1.incCounter();

// function statement 
// function a(){
//     console.log('a is called')
// }
// a()

// function expression
// var b = function(param1,param2){
//     console.log(param1)
// }
// a()

// const b = function(param1){
//     return function xyz(){

//     }
// }
// console.log(b());

// const values = [10,20]
// const [bbb=3,b=4,c=5,d]= values
// console.log(values)

// let iceCream = "chocolate";
// if (iceCream === "chocolate"){
//     console.log("yay, i chocolate ice cream!")
// }
// else{
//     console.log("Awwww, but chocolate is my favorite…")
// }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }
//   console.log(multiply(10,20))

// function sum(a,b){
//     let example = a+b
//     return example
// }
// console.log(sum(102,22))

// setTimeout(function(){
//     console.log('timer') 
// },1000);
// function x(y){
//     console.log('x');
//     y();
// }
// x(function y(){
//     console.log("y");
// })

// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Mozilla is cool, ${myName}`;
//   }

//   function setUserJobtitle(){
//     const jobtitle = prompt('what is your job title?');
//     localStorage.setItem('job title',jobtitle)
//     myHeading1.textContent = `JOB TITLE is cool, ${jobtitle}`;
//   }

//   function setAge(){
//     const age = prompt('what is your age');
//     localStorage.setItem('Age',age)
//     myAge.innerContext = `my age is ${age}`
//   }

// let employees = [
//     {name: "David", salary: 75000, hireDate: "August 15, 2009"},
//     {name: "John", salary: 90000, hireDate: "July 1, 2010"},
//     {name: "Ana", salary: 80000, hireDate: "December 12, 2011"},
// ];

// const app = document.getElementById('app');
// employees.map(({name,salary,hireDate}) => {
//     datatoShow = `${name} : ${salary} : ${hireDate}`
//     app.innerHTML = datatoShow
//     console.log('data===>',datatoShow)
// })

// const result = employees.sort(function(a,b){
//     const example = b.salary - a.salary
//     return  example 
// })
// console.log(result)

// console.log([] === [])

// console.log([] == [])

// console.log([] !== [])

// for(let step=0;step<5;step++){
//     console.log('nitesh khatri')
// }

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   console.log(factorial(1))
//   console.log(factorial(2))
//   console.log(factorial(3))
//   console.log(factorial(4))

//   function square(n) {
//     return n * n;
//   }
//   console.log(square(9))

// const num1 = 20;
// const num2 = 3;
// const name = "Chamakh";
// function multiply(num1,num2){
//     const calc = num1 * num2
//     return calc
// }
// console.log(multiply(10,20))

// var name= 'nitesh'
// function getScore() {
//     const num1 = 2;
//     const num2 = 3;

//     function add() {
//       return `${name} scored ${num1 + num2}`;
//     }
//     return add();
//   }

//   console.log(getScore())

//   console.log(null === undefined)
//   console.log(null == undefined)
//   console.log(null !== undefined)

// function getHigher(){

//     const name= 'nitesh'
//     const num1 = 10
//     const num2 = 20 
//     function added(){
//         return `${name} expression ${num1 + num2}`
//     }
//     return added()
// }
// console.log(getHigher())

// function addSquares(a, b) {
//     function square(x) {
//       return x * x;
//     }
//     return square(a) + square(b);
//   }

//   console.log(addSquares(2, 3)); // 13
//   console.log(addSquares(3, 4)); // 25
//   console.log(addSquares(4, 5));

// function outside(x) {
//     function inside(y) {
//       return x + y;
//     }
//     return inside;
//   }

//   const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
//   console.log(fnInside(5)); // 8
//   console.log(outside(3)(5)); // 8

// function A(x) {
//     function B(y) {
//       function C(z) {
//         console.log(x + y + z);
//       }
//       C(3);
//     }
//     B(2);
//   }
//   A(1); // Logs 6 (which is 1 + 2 + 3

// function nitesh(a){
//     function sameet(b){
//         function arvind(c){
//             console.log(a+b+c)
//         }
//         arvind(1)
//     }
//     sameet(111)
// }
// nitesh(12555)


// console.log('start')
// setTimeout(function a(){
//     console.log('nitesh khatri')
// },500)
// console.log('end')

// function cb(){
//     console.log('callback')
// }
// cb();


// console.log('start')
// setTimeout(function a(){
//     console.log('timer')
// },100)
// console.log('end')

// let startDate = new Date()
// console.log(startDate);

// let startDate = new Date().getTime();
// console.log(startDate)

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000){
//     endDate = new Date().getTime();
// }
// console.log('while expired')

// function x(){
//     console.log('x is called')
// }
// x()

// function y(x){
//     x();
// }

// const radius = [3,1,2,4]
// console.log(radius)


// const radius = [3,1,2,4]
// const calArea = function (radius){
//     const output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };

// console.log(calArea(radius))

// const arr = [1,2,3,4,5]
// function double(x){
//     return x * 2;
// }
// function triple(x){
//     return x * 3;
// }
// function binary(x){
//     return x.toString(2);
// }

// function isOdd(x){
//     return x % 2
// }
// function isEven(x){
//     return x % 2 === 0
// }
// console.log(arr.map(triple))
// console.log(arr.map(double))
// console.log(arr.map(binary))
// console.log(arr.map(isOdd))
// const resullt = arr.map(isEven)
// console.log(resullt)
// console.log(arr.filter((x) => x >3))
// console.log(arr.filter((x) => x <3))

// function findSum(arr){
//     let sum = 0
//     for(let i=0;i<arr.length;i++){
//         sum = sum + arr[i]
//     }
//     return sum
// }
// console.log(findSum(arr));
// const output = arr.reduce(function(acc,curr){
//     acc = acc + curr;
//     return acc;
// })
// console.log(output)

// function sub(n1,n2){
//     return n1-n2
// }
// const result = `the result subtract ${sub(100,20)}`
// console.log(result)
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();

// const data=[1,2,3,4]
// data.length=0
// console.log(data.length)

// console.log(typeof typeof 1)


// let a =[20]
// let b =['20']
// console.warn(a[0] == b[0])
// console.warn(a[0] === b[0])

// let z= [1,2,3,4]
// let a = {name:'nitesh'}
// console.log(...z)
// console.log({...a})

// console.warn(typeof NaN)
// console.warn(typeof 'nitesh')
// console.warn(typeof 111)
// console.warn(typeof Boolean(111>11))
// console.warn(typeof [1,2,3,4])
// console.warn(typeof {name:'nitesh'})
// console.warn(typeof null)
// console.warn(typeof undefined)
// console.warn(typeof 44 > 55 && 55 < 56 || 44 < 33)

// const arr = [1,2,3,4,4,4,4]
// const result = arr.filter((item,index) => arr.indexOf(item) === index)
// console.log(result)
// console.log(...new Set(arr))

// console.warn('nitesh'.split("").reverse("").join(""))

// console.warn('nitesh'.length)
// const person = {
//     name:'nitesh',
//     age:34
// }
// person.name = 'sameet'
// person.age = 41
// console.log(person)

// const trees = ["redwood", "bay", "cedar", "oak", "maple"];
// delete trees[3]
// console.log(3 in trees)

// const trees = ["redwood", "bay", "cedar", "oak", "maple"];
// trees[3] = undefined;
// console.log(3 in trees);

// const trees = ["redwood", "bay", "cedar", "oak", "maple"];
// trees.splice(3, 1);
// console.log(trees);

// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a,b)


// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y)
// console.log(z)
// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(others); 

// const [first, ...others2] = [1, 2, 3];
// console.log(others2)
// console.log(first)

// const foo = ["one", "two", "three"];
// const [red, yellow, green] = foo
// console.log(red)
// console.log(yellow)
// console.log(green)

// const foo = ["one", "two"];

// const [red, yellow, green, blue] = foo;
// console.log(red); 
// console.log(yellow); 
// console.log(green); 
// console.log(blue); 

// let a = 1;
// let b = 3;
// [b,a] = [a,b]
// console.log(a)
// console.log(b)

// const result = false || {} || null;
// if(false){
//     console.warn('yes')
// }
// else{
//     console.warn('no')
// }
// console.log(result)
// console.log('love' === 'love')

// console.log((x => x)('I love'))

// function sumValues(x,y,z){
//     return x+y+z
// }
// console.warn(sumValues(10,20,30))

// const name = 'nitesh'
// console.log([!typeof name === 'object'])
// console.log([!typeof name === 'string'])

// const name = 'nitesh'
// const age = 34
// console.log(isNaN(name))
// console.log(isNaN(age))

// let person = {
//     name:'nitesh'
// }
// console.log(Object.seal(person))
// console.log(Object.seal(person))
// let data = [1,2,3,4,5,6]
// data.pop()
// console.log(data)

// console.log(12 / 2);
// console.log(3 / 2);
// console.log(6 / '3');
// console.log(2 / 0);

// let a = 3;
// // console.log(a/2)
// console.log(a/33)

// console.log(1 == 1);
// console.log('hello' == 'hello');
// console.log('1' ==  1);
// console.log(0 == false);

// const object1 = {
//     key: "value",
//   };

//   const object2 = {
//     key: "value",
//   };
//   console.log(object1 == object2)
//   console.log(object1 == object1)

// const d = new Date("December 17, 1995 03:24:00");
// const s = d.toString()
// console.log(s)

// const a = [1, 2, 3];
// const b = "1,2,3"
// console.log(a == b)

// console.log(3 ** 4);
// console.log(10 ** -2);
// console.log(2 ** 3 ** 2);
// console.log((2 ** 3) ** 2);

// let a = 3;
// console.log(a**=2)
// console.log(a**=0)
// console.log(a**=1)

// const getRectArea = function(w,h){
//     return w * h 
// }
// console.log(getRectArea(10,20))

// const foo = function*(){
//     yield "nitesh";
//     yield "sameet";
//     yield "arvind";
// }
// let str = ''
// for(const val of foo()){
//     str = str + val
// }
// console.log(str)

// const a = [1,2,3]
// const b = [4,5,6]
// const c = [...a,...b]
// console.log(c)


// const name="John"
// function getName(){
//     console.log(name)
// }
// getName()

// console.log('bb' > 'aa')
// console.log('00' > 'aa')
// console.log(0 > 'aa')
// console.log('aa' < 'aa')

// a = 1;
//     obj = {
//         'a': 2,
//         outer() {
//             function inner() {
//             console.log(this.a);
//         };
//         inner();
//     },
// };
// obj.outer();

// function a(x){
//     function b(y){
//         function c(z){
//             console.log(a+b+c)
//         }
//     }
// }
// a((1))
// b((1))
// c((111))

// let a = [1,2,3]
// let b = [4,5,6]
// let c = [...a,...b]
// console.log(c)

// let c = 3*3
// console.log(c)

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }
// console.log(foo1,foo2)

// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4);
// })();

// (function(){
//     console.log('nitesh khatri')
//     setTimeout(() => console.log('mom'),1000)
//     setTimeout(() => console.log('daddy'),0)
//     console.log('sameet khatri')
//     console.log('manisha khatri')
// })()

// var x = 10 
// function example(){
//     console.log(x)
// }
// example()

// let a = 'like'
// let b = `like`
// console.log(a === b)

// let a = 1 
// let b = 2
// let c = 3 
// console.warn(a === b ---c)

// const obj = {1:'a',2:'b'}
// console.log(obj)

// const obj = {1:'a',2:'b'}
// const obj2 = {name:'nitesh',age:34}
// console.log(obj.hasOwnProperty("1"))
// console.log(obj2.hasOwnProperty("name"))

// for(let i=0;i<10;i++){
//     if(i ===3) continue;
//     console.log(i)
// }

// for(let i=0;i<10;i++){
//     if(i === 3) break;
//     console.log(i)
// }

// let day = new Date().getDay();
// switch(day){
//     case 0:day = 'sunday';
//     break;
//     case 1:day = 'monday';
//     break;
//     case 2:day = 'tuesday';
//     break;
//     case 3:day = 'wednesday';
//     break;
//     case 4:day = 'thursday';
//     break;
//     case 5:day = 'friday';
//     break;
//     case 6:day = 'saturday';
//     break;
//     default:day = 'day is not there';
//     break;
// }
// console.log(day)


// const person = {
//     name:'nitesh'
// }
// function sayHi(age){
//     return `${this.name} ${this.age}`
// }

// function sayHi(age){
//     return `${this.name} ${this.age}`
// }
// console.log(typeof sayHi())


// const numbers = [1,2,3]
// numbers[6] = 11;
// console.log(numbers);

// const firstPromise = new Promise((resolve,reject) => {
//     setTimeout(resolve,500,'one')
// })
// console.log(firstPromise)

// const secondPromise = new Promise((resolve,reject) => {
//     setTimeout(resolve,200,'two')
// })
// console.log(secondPromise)
// Promise.race([firstPromise,secondPromise]).then(res => console.log(res));

// const person ={
//     name:'nitesh',
//     age:34,
//     dob:'17/06/1989'
// }
// for (let item in person){
//     console.log(item)
// }

// console.log(typeof 3+4+'5')

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));

// console.log(false == '0')
// console.log(false === '0')

// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);

// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));

// (function (nitesh){
//     return (function (sameet){
//         console.log(nitesh)
//     })(2)
// })(1)

// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity;
// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

// var person = {
//     name:"nitesh",
//     getName:function(){
//         return this.name
//     }
// }
// const result = person.getName();
// console.log(result)
// console.log("2015" - "2009" )

// (() => {
//     let x = (y=10)
// })();
// console.log(typeof x)

// (() => {
//     let x = y = 10
//     let x = 10
//     y = 10
// })()

// var length = 10
// function fn(){
// console.log(this.length)
// }
// fn()

// var obj = 5;
// length:5;
// method:function(fn){
//     fn();
//     argruments[0]();
// }
// obj.method(fn,1)

// (function(){
//     try{
//         throw new Error();
//     }
//     catch(x){
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl();

// var name = 'nitesh'
// var example = function(){
//     console.log(name)
//     var name = 'sameet'
// }
// example()

// for(let i=0;i<20;i++){
//     setTimeout(() => {
//         console.log(i)
//     },i*100)
// }

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// var myArray = ['a', 'b', 'c', 'd'];
// myArray.push('end');
// myArray.unshift('start');
// console.log(myArray);

// const fruits = ['apple','banana','watermelon']
// fruits.push('END');
// fruits.unshift('START');
// console.log(fruits)
// const result = fruits.toString()
// console.log(result.toUpperCase())

// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b)
//     }
//     inner();
// }
// outer();


// var obj2 = 1
// function outer(){
//     var obj2 = 2
//     function inner(){
//         obj2++
//         var obj2 = 3
//         console.log(obj2)
//     }
//     inner();
// }
// outer();

// var obj = {a: 1 ,b: 2}
// var objclone = Object.assign({},obj);

// let obj = {
//     a: 1,
//     b: 2,
//     c: {
//         age: 30
//     }
// };

// var objclone = Object.assign({},obj);
// console.log('objclone: ', objclone);
// obj.c.age = 45;
// console.log('After Change - obj: ', obj);           
// console.log('After Change - objclone: ', objclone);

// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable;

// name = 'nitesh'
// console.log(name)
// var name;
// var x;
// console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
// x = 23;


// const name = 'nitesh'
// function example(){
//     console.log(name)
// }
// example()

// function doSomething(){
//     x = 33;
//     console.log(x);
//     // var x;
//   } 
//   doSomething();

// const variableName = 'nitesh'
// console.log(variableName)

// const variAbleName = 'sameet'
// console.log(variAbleName)

// function f1(){
//     console.log(num)
//     var num = 8
//     num = 10
// }
// f1()

// function f2(){
//     console.log(num)
//     let num = 8
//     num = 10
// }
// f2()

// const fn = (arg1,arg2) => {
//     return `${arg1} ${arg2}`
// }
// fn('nitesh','sameet')
// function exampleA(){
//     console.log('nitesh khatri')
// }
// function exampleB(callback){
//     console.log('sameet khatri')
//     console.log('arvind khatri')
//     setTimeout(() => {
//         callback()
//     },1000)

// }
// exampleB(exampleA)

// const v1 = 50
// const v2 = 100
// const sum = v1 + v2 
// console.log(sum)
// console.log(typeof sum)

// function print(){
//     console.log('nitesh khatri')
// }
// print()

// (function exampleA(){
//     console.log('nitesh khatri is exampleA')

// })()

// function hof1(fn){
//     fn()
// }
// function hof2(){
//     return function(){
//         console.log('returned function')
//     }
// }
// function print(){
//     console.log('i am print')
// }
// hof1(print);


// const arry = [1,2,3,[5,6],[7]]
// const result = arry.flat(1)
// console.log(result)

// const array = [1,2,3,4,5]
// const newArray = array.map(function(item,index) {
//     console.log(index,item)
//     return item * 10
// })
// console.log(newArray)

// const array = [1,2,3,4,5]
// const newArray = array.map(function(item,index) {
//     if(item % 2 === 0){
//         return item * 10
//     }
//     return item
// })
// console.log(newArray)

// const array = [1,2,3,4,5]
// let sum = 0
// const result = array.forEach(function(item,index,array){
//     sum += item
//     return item * 10
// })
// console.log(result)

// const numbers = [1,2,3,4,5]
// const filtered = numbers.filter(function(item,index,array){
//     if(item % 2 === 10){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(filtered)

// const numbers = [1,2,3,4,5]
// const result = [...numbers].pop()
// console.log(result)
// console.log(numbers)
// console.log(numbers.shift())
// console.log(numbers.unshift(111))
// console.log(numbers)

// const numbers = [1,2,3,4,5]
// console.log([...numbers.fill(111)])

// const array = [1,2,3,4,5]
// console.log(array.fill('nitesh khatri'))

// const numbers = [1,2,3,4,5]
// console.log(numbers.fill(100,1))

// const value1 = 'hello';
// const value2 = {name:'nitesh'}
// const value3 = [1,2,3]
// console.log(value1)
// console.log(value2)
// console.log(value3)

// const isArray1 = Array.isArray(value1)
// const isArray2 = Array.isArray(value2)
// const isArray3 = Array.isArray(value3)
// console.log(isArray1)
// console.log(isArray2)
// console.log(isArray3)

// const friends = ['a','b','c','d']
// console.log(Array.isArray(friends))

// const array1 = [1,2,3,4,5]
// const array2 = ['nitesh','sameet',20,true,'mango']
// const array1ToString = array1.join('-')
// const array2ToString = array1.join('+')
// console.log(array1ToString)
// console.log(array2ToString)

// const array = [1,2,3,4,5]
// const third = array.at(array)
// console.log(array)
// console.log(third)
// console.log(array[3])

// const fname = 'nitesh'
// const lname = 'khatri'
// console.log(fname.concat(lname))


// function doSomething(value){
//     console.log(value.length)
// }
// doSomething([1,2,3])

// doSomething(function(){
//     console.log('nitesh khatri')
// })


// function log(value){
//     console.log(value)
// }
// function calculateValue(num1,num2,print){
//     const sum = num1 + num2 
//     print(sum)
// }
// calculateValue(10,30,log)


// function example(value){
//     console.log(value)
// }
// function calvalue(n1,n2,print){
//     const sum = n1 * n2 
//     print(sum)
// }
// calvalue(10,20,example)

/// array destrcuting
// const friends = ['vijay','ronak','hitesh','rahul']
// const firstFriends = friends[0]
// const secondFriends = friends[1]
// const [firstFriends,secondFriends,thirdFriends,fourthFriends ='vishal'] = friends
// console.log(firstFriends)
// console.log(secondFriends)
// console.log(fourthFriends)

// const obj = {
//     name:'nitesh',
//     age:34,
//     hello:function(){
//         console.log(this.name,this.age)
//     }
// }
// console.log(obj.hello());

// const variable = 'username'
// const age = 5 
// const prop1 = 'ageisLessthan7'
// const prop2 = 'ageisMorethan7'
// const obj ={
//     [variable]:'javascript',
//     [age > 2 ? 'yes' : 'no']:true,
// }
// console.log(obj)


// Object Destructuring
// const object = {
//     name:'nitesh',
//     youtube:'deccode',
//     language:'javascript'
// }
// const name = object.name
// const youtube = object.youtube
// const language = object.language
// console.log(name)
// console.log(youtube)
// console.log(language)

//  Page Visibility API

// const object = {
//         name:'nitesh',
//         youtube:'vlogs',
//         language:'js'
//     }
// const {name,youtube,language} = object 
// console.log(name,youtube,language)

// const keys = Object.keys(object)
// console.log(keys)
// const values = Object.values(object)
// console.log(values)
// const entries = Object.entries(object)
// console.log(entries)

// console.log(Object.assign(object))

// const exp = 4 < 5 
// console.log(exp)

// How to Store Objects and Arrays in Local Storage
// const obj = {
//     name:'nitesh',
//     age:34 
// }
// console.log(JSON.stringify(obj))
// const result = JSON.stringify(obj)
// console.log(JSON.parse(result))
// const array = ['nitesh',34,1,2]
// const stringArray = JSON.stringify(array)
// localStorage.setItem('object',result)
// localStorage.setItem('array',stringArray)
// const objectfromlocalstorage = localStorage.getItem('object');
// const arrayfromlocalstorage = localStorage.getItem('array');

// const objectParsed = JSON.parse(objectfromlocalstorage)
// const arrayParsed = JSON.parse(arrayfromlocalstorage)

// const isEven = true 
// console.log('it is an even')
// console.log('how did we get here?')
// const number = 50 
// if(number > 40){
//     console.log('number is greater than 4')
// }
// else{
//     console.log('number is not greater than 4')
// }


// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//     default:console.log('day is not there')
//     break;
//   }
//   console.log(day)

// const expression= 110
//   switch(expression){
//     case 40 : console.log(40);
//     break;
//     case 30 : console.log(30);
//     break;
//     case 20 : console.log(20);
//     break;
//     case 10 : console.log(10);
//     break;
//     default : console.log('i dont know the result');
//     break;
//   }
//   console.log(expression)

// let counter = 0
// function example(){
//     console.log('hi')
//     counter++
//     if(counter > 10){
//         return;
//     }
//     example();
// }
// example();

// const a1 = [1,2,3]
// const a2 = [1,2,3]
// console.log(...a1,...a2)


// spread operator
// const info = {
//     name:'nitesh',
//     age:34
// }
// const fullinfo = {
//     ...info,
//     language:'javascript',
//     martialstatus:'single'
// }
// console.log(fullinfo)

// function addNum(n1,n2,n3){
//     return n1+n2+n3
// }
// const array = [10,20,30]
// const total = addNum(...array)
// console.log(total)

// function example(){
//     console.log('nitesh khatri')
// }
// setTimeout(example,2000)

// const timer = setTimeout(() => {
//     console.log('nitesh is timer')
// },1000);
// setTimeout(() => {
//     clearTimeout(timer)
// },3000)

// const sum = '20' + 30 
// // console.log(sum)

// console.log(typeof sum)


// const sum = 50 + true 
// console.log(sum)

// const value = 0 
// if(value){
//     console.log('hello')
// }
// console.log(!value)

// console.log('20' == 20)
// console.log(0 == false)


// console.log(Number(20))
// console.log(String(100))
// console.log(Number(false))
// console.log(Boolean('hello'))

// console.log(Number('hello'))


// var b = 5 

// (function() {
//     var a = b = 5;
//     })();

//     console.log(b);

// const v1 = true
// const v2 = false
// console.log(!v1)
// console.log(!v2)


// hositing with var, let and const declared - undefined error and initialization
// let num = 20
// function print(){
//     console.log(num)
//     let num = 10
// }
// print()


// event bubbling 
// const body = document.getElementsByTagName("body")[0]
// const div = document.getElementsByTagName("div")[0]
// const span = document.getElementsByTagName("span")[0]
// const button = document.getElementsByTagName("button")[0]

// body.addEventListener('click', () => {
//   console.log("body was clicked")
// })

// div.addEventListener('click', () => {
//   console.log("div was clicked")
// })

// span.addEventListener('click', () => {
//   console.log("span was clicked")
// })

// button.addEventListener('click', () => {
//   console.log("button was clicked")
// })

// var v1 = 'nitesh'
// function example(){
//     var v2 = ' sameet'
//     console.log(v2)
// }
// example()
// console.log(v1)
// var v1 = 'something else'
// console.log(v1)


// var v1 = 'sameet'
// function example(){
//     console.log(v1)
//     // var v1 = 'nitesh'
// }
// example()


// 3 Ways to Merge Arrays
// const a1 = [1,2,3]
// const a2 = [4,5,6]
// const a3 = [7,8,9]
// console.log(...a1,...a2,...a3)
// console.log(a1.concat(a2,a3))
// console.log(a1.push(10))

// for(let i=0;i<a2.length;i++){
//     a1.push(a2[i])
// }
// console.log(a1)

// Generate Random Numbers Within A Range
// function getRandom(min,max){
//    const floatRandom = Math.random()
//    const difference = max - min 
//    const randomDifference = floatRandom * difference 
//    const randomRange = randomDifference + min
//    return randomRange
// }
// const random = getRandom(5,10)
// console.log(random)

//  string replace with callback function
// const phrase = 'I am 34 years old on the 1st.'

// const pattern = '/\d\g' 

// const replacement = function(match){
//     return `--${match}--`
// } 

// const replaced = phrase.replace(pattern,replacement)

// console.log(replaced)

// function declration and function expression and arrow function
// expression 
// const example1 = function() {
//     console.log('arvind khatri is example1')
// }
// const result1 = function(){
//     console.log('nitesh khatri is result1')
// }
// example1()
// result1()

// // declaration
// function example2(){
//     console.log('sameet khatri is example2')
// }
// function result2(){
//     console.log('sameet khatri is result2')
// }
// example2()
// result2()

// // arrow 
// const example3 = () => console.log('nitesh khatri is example3')
// const result3 = () => console.log('nitesh khatri is result3')
// example3()
// result3()

// const array = [1,2,3,4]
// array.forEach(function log(item) {
//     console.log(item)
// })

//  Conditional (Ternary) Operator
// const score = 80 
// let scoreRating 

// if(score > 70){
//     scoreRating = 'higher'
// }
// else{
//     scoreRating = 'lower'
// }

// console.log(scoreRating)

// const score = 30 
// let scoreRating 
// if(score > 70){
//     scoreRating = 'Excellent'
// }
// else if(score > 60){
//     scoreRating = 'very goood'
// }
// else{
//     scoreRating = 'poor'
// }

// console.log(scoreRating)

// The FALL-THROUGH Behaviour in JavaScript Switch Statements
// const expression1 = 10 - 8
// switch(expression1){

//     case 2:console.log('the answer is 2')
//     break;
//     case 5:console.log('the answer is 5')
//     break;
//     default:console.log('there is no answer')
//     break;
// }
// console.log(expression1);

//UNARY, BINARY and TERNARY Operators
// console.log(20+30)
// const array = [1,2,3,4]
// const result = array.filter((item) => item % 2 === 0)
// console.log(result)

// delete array[2]
// console.log(array)

// assignment
// const num = 20
// console.log(num)

// const target = 500
// const update = 120;
// const scoreRating = update > target ? 'achievement' : 'no achievement'
// console.log('sale',scoreRating)
// console.log('balance is',target-update)

// A TERNARY OPERATOR is not a CONDITIONAL OPERATOR
// const exampleTypeof = typeof 20 
// console.log(exampleTypeof)

// assignment operator 
// const score = 80 
// console.log(score>50 ? 'yes': 'no')

// const array = [1,2,3]
// const result = array.map(function(val){
//     console.log(val)
// })

// function Result(array,callback){
//     for(let i=0;i<array.length;i++){
//         const value = array[i]
//         callback(value)
//     }
// }

// function callbackfunction(value){
//     console.log('value is ' + value)
// }
// Result(array,callbackfunction)

// function generate(){
//     return function(example){
//         console.log(example)
//     }
// }
// const print = generate();
// print('this is nitesh khatri')

// DOT NOTATION vs BRACKET NOTATION
// const person = {
//     name:'nitesh',
//     age:34,
//     dob:'17/06/1989'
// }
// person.location = 'mumbai'
// person.jobtitle = 'front-end developer'
// person.experience = '7+ years'
// console.log(person)

// person.happy = 'smile' // dot notation
// const target = person['name']
// const target2 = person['happy'] // bracket notation
// console.log(target)
// console.log(target2)
// console.log(person)

// NULLISH COALESCING OPERATOR
// const v1 = false 
// const v2 = 'hello'
// function returnundefined(){
//     return undefined 
// }
// const result = returnundefined() ?? 20 + 50 
// console.log(result)

// SHORT-CIRCUIT EVALUATION
// function a(){
//     console.log('i am false')
//     return false
// }
// function b(){
//     console.log('i am true')
//     return true
// }
// const result = b() && b() && a()
// console.log('result is',result)

// Question mark ? vs PLUS VS ASTERISK * REGEX QUANTIFIERS

// how to replace links in a text with custom and clickable anchor links
// const str = 'her password are 345543, 99533 and 884499'
// const regex = /\d+/g
// const updatedStr = str.replace(regex,'******')
// console.log(updatedStr)

// const str = `hi good morning how are you doing 555`
// const regex =  /^\d+$/
// const updaed = str.replace(regex,'****')
// console.log(updaed)

// const obj = {
//     name:'nitesh',
//     age:34,
//     print:function(){
//         console.log(this)
//     }
// }

// console.log(obj)
// console.log(obj.print())

// var target = document.querySelector('#box');
// window.addEventListener('offine',function(){
//     target.innerHTML = 'your offline'
//     target.style.backgroundColor ='orange'
// })
// window.addEventListener('online',function(){
//     target.innerHTML = 'your online'
//     target.style.backgroundColor ='yellow'
// })

// if(navigator.onLine){
//     console.log('online')
// }
// else{
//     console.log('offline')
// }

// JS INTRODUCTION
// VARIABLE 1
//   let num = 5 
//   console.log(num)

//   var x 
//   let y 

// let x;
// x = 5;


// let x = 5;let y = 6;z=7
// console.log(x)
// console.log(y)
// console.log(z)


// // 5 is assigned to variable x
// let x = 5; 
// console.log(x);

// // value of variable x is changed
// x = 3 
// console.log(x)

//invalid
// let example = 5; // Error! new is a keyword.
// console.log(example)

// const x = 5;
// console.log(x);

// const x = 5;
// x = 10;  // Error! constant cannot be changed.
// console.log(x)

// const x;  // Error! Missing initializer in const declaration.
// x =5 
// console.log(x)

// console.log()
// let sum = 44;
// console.log(sum)

// console.log("I love JS");

// program to print variables values
// storing values
// const greet = 'Hello';
// const name = 'Jack';
// console.log(greet + " " +  name)

// DATA TYPES
// const x = 5 
// const y = 'nitesh khatri'
// const z = 10>9 
// const a = ['nitesh','sameet']
// const b = {name:'nitesh',age:34}
// var example
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof example)
// console.log(typeof example)

// backticks
// const name = 'ram';
// const name1 = "hari";
// const result = `The names are ${name} and ${name1}`;
// console.log(result)

// const number1 = 3;
// const number2 = 3.433;
// const number3 = 3e5
// console.log(number1,number2,number3)

// const number1 = 3/0;
// console.log(number1);

// const number2 = -3/0;
// console.log(number2);

// const number3 = "abc"/3; 
// console.log(number3);

// BigInt value
// const value1 = 900719925124740998n;
// const result1 = value1 + 1n;
// const value2 = 900719925124740998n;
// // Error! BitInt and number cannot be added
// const result2 = value2 + 1;
// console.log(value1)
// console.log(value2)
// console.log(result1)
// console.log(result2)

// const dataChecked = true;
// const valueCounted = false;
// console.log(dataChecked !== valueCounted)

// let name;
// console.log(name);

// let name = undefined;
// console.log(name);

// const number = null;
// const value1 = Symbol('hello');
// const value2 = Symbol('hello');
// console.log(value1)
// console.log(value2)

// const student = {
//     firstName: 'ram',
//     lastName: null,
//     class: 10
// };
// console.log(student)

// data is of undefined type
// let data;
// data = 5 
// console.log(data)

// OPERATORS
// ASSIGNMENT
//  const x = 5 
//  console.log(5+8)

// let x = 5;
// let y = 3;
// console.log('x + y = ', x + y)
// console.log('x + y = ', x - y)
// console.log('x + y = ', x * y)
// console.log('x + y = ', x / y)
// console.log('x + y = ', x % y)
// // increment
// console.log('++x = ', ++x); // x is now 6
// console.log('x++ = ', x++); // prints 6 and then increased to 7
// console.log('x = ', x); 
// decrement
// console.log('--x = ', --x); // x is now 6
// console.log('x-- = ', x--); // prints 6 and then decreased to 5
// console.log('x = ', x); 
// console.log('x ** y =', x ** y);

// comparison operators
// const a = 3 
// const b = 2 
// console.log(a>b)
// console.log(2 == 2); 
// console.log(2 === '2'); 

// console.log(3 !=2)
// console.log('hello' != 'Hello')
// console.log(2 === 2);
// console.log(2 === '2');
// console.log(2 !== '2');
// console.log(2 !== 2);

// logical operators
// const x = 5, y = 3;
// console.log(x < 5 && y < x)
// logical and
// console.log(true && true);
// console.log(true && false);
// logical OR
// console.log(true || false);
// logical NOT
// console.log(!true);
// console.log('hello' + 'world');
// let a = 'JavaScript';
// a += 'solid'
// console.log(a)

// COMMENTS

// type conversations
// console.log('3'+2)
// result = '3' + true
// console.log(result)
// result = '3' + undefined
// console.log(result)
// result = '3' + null; 
// console.log(result)

// let result;
// result = '4' - '2'; 
// console.log(result); // 2

// result = '4' - 2;
// console.log(result); // 2

// result = '4' * 2;
// console.log(result); // 8

// result = '4' / 2;
// console.log(result); // 2

// let result;
// result = 'hello' - 'world';
// console.log(result); // NaN

// let result;

// result = '4' - true;
// console.log(result);

// result ='3' - true
// console.log(result)

// result = 4 + true
// console.log(result)

// null is 0 when used with number
// let result;
// result = 4 + null;
// console.log(result);


// Arithmetic operation of undefined with number, boolean or null gives NaN
// let result;
// result = 4 + undefined;
// console.log(result);  // NaN

// result = 4 - undefined;
// console.log(result);  // NaN

// result = true + undefined;
// console.log(result);  // NaN

// result = null + undefined;
// console.log(result);  // NaN

// let result;
// string to number 
// result = Number('324');
// console.log(result)
// console.log(Number('324e-1'))
// console.log(Number(false))
// console.log(Number(true))
// console.log(Number(null))
// console.log(Number(' '))
// console.log(parseInt('20.01'))
// console.log(Math.floor('20.01'))
// console.log(String(324))
// console.log(String(2+4))
// console.log(String(undefined))
// console.log(String(NaN))
// console.log(String(true))
// console.log(String(false))
// console.log(true.toString())

// console.log(Boolean(''))
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const a = 5, b = 2, c = 'hello';
// console.log(a == 5);
// console.log(b == '2'); 
// console.log(c == 'Hello');

// const a = 3, b = 'hello';
// console.log(a != 2);
// console.log(b != 'Hello')
// console.log(a === 2);

// const a = 2
// const b = 'hello'
// console.log(a !== 2);
// console.log(b !== 2);
// const a = 3, b = 2;
// console.log(a > 2);
// console.log(a >= 3);
// console.log(a < 2);
// console.log(b < 3);
// console.log(a <= 3)
// console.log(a <= 2); 

// const a = true;
// const b = false;
// const c = 4;
// logical and 
// console.log(a && a);
// console.log(a && b)

// console.log(a || b);
// console.log(b || b);

// console.log((c>2) || (c<2));

// console.log(!a);
// console.log(!b);

// if else statement
// const number = prompt("Enter a number: ");
// if(number > 0){
//     console.log(`The number is positive ${number}`);
// }
// else{
//     console.log("The if statement is easy");
// }

// check if the number is positive, negative or zero
// const number = prompt("Enter a number: ");

// if (number >= 0) {
//     if (number == 0) {
//         console.log("You entered number 0");
//     } else {
//         console.log(`You entered a positive number ${number}`);
//     }
// } else {
//     console.log("You entered a negative number");
// }

// const number = 2;
// if (number > 0) {
//     console.log("The number is positive.");
// } else {
// console.log("The number is negative or zero.");
// }

// let x = function(num){
//     return num * 2
// }
// console.log(x(4))

// let x = 2;
// let y = x(3);
// console.log(y);

// global scope 
// let a = 'hello'
// function example(){
//     console.log(a)
// }
// example();

// function result(){
//     a = 'nitesh'
// }
// result()
// console.log(a)

// function greet(){
//     console.log('hello')
// }
// greet();

// console.log(2+'3'+2)

// console.log(2+2+2)

// let a = "hello";

// function greet() {
//     let b = "nitesh"
//     console.log(a + b);
// }

// greet();
// console.log(a + b); // error

// let a = 'nitesh'

// function greet(){
//     let b = 'khatri'
//     console.log(a  + ' ' + b)
//     if(b == 'khatri'){
//         let c = 'hello '
//         console.log(a + ' ' + b + '  ' + c)
//     }
//     console.log(a + ' ' + b + ' ' + c )
// }
// greet()

// const a = 'nitesh'
// function example(){
//     const a = 'sameet'
//     console.log(a)
// }
// example()

// console.log(test);   // undefined
// const test;

// let adsadas = 'nitesh khatri'
// console.log(adsadas)

// var test;
// console.log(test);

// a = 5;
// console.log(a);
// var a = 10

// var a;
// a = 5;
// console.log(a);

// console.log(a);
// var a = 5;

//     console.log(a);
// var a = 5;


// var b = 'sameet khatri'
// var a = 4;
// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     var b;
// }
// greet()
// console.log(b)

// program to print the text
// greet();
// function greet() {
//     console.log('Hi, there.');
// }

// greet();
// let greet = function(){
//     console.log('nitesh khatri')
// }
// greet()

//    function countDown(num){
//     console.log(num)
//    }
//    countDown(3)

// function countDown(n) {
//     console.log(n);
//     countDown(n+1);
// }

// countDown(3);

// function example(n){
//     console.log(n)
//     example(n+1)
// }
// example(-1)


// this is normal function
// function example(){
//     console.log()
// }

// // this is arrow function 
// const example = () => console.log('nitesh khatri')

// object 
// const person = { 
//     name: 'John', 
//     age: 20, 
// };
// accessing property
// console.log(person.name); 

// console.log(person['name'])

// nested object
// const student = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }
// console.log(student.name)
// console.log(student.marks.science)

// accessing method and property
// const person = {
//     name: 'John',
//     greet: function() { console.log('hello'); }
// };

// console.log(person.name)

// let number = '23.32';
// let result = parseInt(number);
// console.log(number)
// console.log(result)

// let student = { };
// console.log(student.name = 'John')
// student.greet = function(){
//     console.log('hello')
// }
// student.greet();

// const person = {
//     name: 'John',
//     age: 30,

//     // accessing name property by using this.name
//     greet: function() { console.log('The name is' + ' ' + this.name); }
// };

// console.log(person.greet())

// const person = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         let surname = 'Doe';
//         console.log('The name is' + ' ' + this.name + ' ' + surname); }
// };

// person.greet();

// for(i=0;i<10;i++){
//     setTimeout(() => {
//         console.log(i)
//     },1000)
// }

// function Person(){
//     this.name = 'nitesh';
//     this.age = 34
// }
// const person = new Person()
// console.log(person)

// function Person(){
//     this.name = 'nitesh';
//     this.age = 34;
//     this.greet = function(){
//         console.log('hello')
//     }
// }
// const person1 = new Person();
// const person2 = new Person();
// console.log(person1.name);
// console.log(person2.name);

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23,

//      this.greet = function () {
//         console.log('hello');
//     }
// }
// const person1 = new Person();
// const person2 = new Person();
// console.log(person1.name)
// console.log(person2.name)

// // constructor function
// function Person () {
//     this.name = 'John'
// }
// // create object
// const person1 = new Person();

// // access properties
// console.log(person1.name); 

// function Example(){
//     this.name = 'fenika',
//     this.age = 34,
//     this.jobtitle = 'fe developer'
// }
// const result = new Example()
// console.log(result)

// for(let i=0;i<3;i++){
//     console.log(i)
// }

// for(let i=0;i<10;i++){
//     setTimeout(() => {
//         console.log(i)
//     },1000)
// }

// function Person(person_name,person_age,person_dob){
//     this.name = person_name,
//     this.age = person_age,
//     this.dob = person_dob,
//     this.greet = function(){
//         return('Hi' + + this.name)
//     }
// }
// const person1 = new Person('nitesh',34,'17/06/1989')
// const person2 = new Person('sameet',41,'14/06/1982')
// console.log(person1)
// console.log(person2)

// constructor function
// function Person1 () {
//     this.name = 'John',
//     this.age = 23
// }
// function Person2 () {
//     this.name = 'John',
//     this.jobtitle = 'front-end developer',
//     this.location= 'mumbai'
// }
// let person1 = new Person1();
// let person2 = new Person2();
// person1.gender = 'male'
// person2.gender = 'female'
// console.log(person1)
// console.log(person2)

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }
// const result = new Person()
// console.log(result)

// let a = new Object();    // A new Object object
// let b = new String();    // A new String object
// let c = new Number();    // A new Number object
// let d = new Boolean();   // A new Boolean object
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// const name = new String ('John');
// console.log(name)

// const number = new Number (57);
// console.log(number); // 57

// const count = new Boolean(true)
// console.log(count)

// const student = {

//     // data property
//     firstName: 'Monica',

//     // accessor property(getter)
//     get getName() {
//         return this.firstName;
//     }
// };
// console.log(student)
// console.log(student.firstName);

// const student = {
//     firstName: 'Monica',

//     //accessor property(setter)
//     set changeName(newName) {
//         this.firstName = newName;
//     }
// };
// console.log(student.firstName)
// student.changeName = 'sameet'
// console.log(student.firstName)

// const example = {
//     fName:'nitesh',
//     set changeExample(newName){
//         this.fName = newName
//     }
// }
// example.changeExample = 'sameet'
// console.log(example.fName)

// function Person () {
//     this.name = 'John',
//     this.age = 23
// }
// const person = new Person()
// console.log(Person.prototype);

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }
// function Person2 () {
//     this.name = 'Sameet',
//     this.age = 41
// }

// const person1 = new Person();
// const person2 = new Person2();
// Person.prototype.gender = 'male';
// console.log(person1.name)
// console.log(person1.age)

// console.log(person2.name)
// console.log(person2.age)
// console.log(Person.prototype)
// console.log(person1.gender)
// console.log(person2.gender)

// const words = ['hello', 'world', 'welcome'];
// console.log(words)

// const array1 = ["eat", "sleep"];
// const array2 = new Array("eat", "sleep");
// console.log(array1,array2)

// const myList = [ ];
// console.log(myList)

// const numberArray = [2,4,6,8]
// console.log(numberArray)

// const stringArray = ['eat', 'work', 'sleep']
// console.log(stringArray)

// const newData = ['work', 'exercise', 1, true]
// console.log(newData)

// const myArray = ['h', 'e', 'l', 'l', 'o'];
// console.log(myArray[0])

// let dailyActivities = ['eat', 'sleep'];
// console.log(dailyActivities.push('sports'))
// console.log(dailyActivities.unshift('cricket'))
// console.log(dailyActivities)
// console.log('shift', dailyActivities.shift())
// console.log('pop',dailyActivities.pop())
// console.log(dailyActivities[1] = 'exercise')
// console.log(dailyActivities)
// dailyActivities[3] = 'exercise'
// console.log(dailyActivities)
// console.log(dailyActivities.length)
// console.log(dailyActivities[0].replace('eat','superb'))
// console.log(dailyActivities)
// const position = dailyActivities.findIndex('eat');
// console.log(position)
// let arr = ['h', 'e'];
// let arr1 = arr;
// arr1.push('l')
// console.log(arr1)
// console.log(arr)

// const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
// console.log(data.flat())
// let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];
// console.log(studentsData.flat())
// console.log(studentsData.filter((val) => val === 'Jack' ))
// let student1 = ['Jack', 24];
// let student2 = ['Sara', 23];
// let student3 = ['Peter', 24];
// console.log(student1.concat(student2,student3))
// let x = [
//     ['Jack', 24],
//     ['Sara', 23], 
//     ['Peter', 24]
//     ];
//     console.log(x[0])
//     console.log(x[1])
//     console.log(x[2])

// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData.forEach((item) => {
//     item.forEach((data) => {
//         console.log(data)
//     })
// })


// let studentsData = [['Jack', 24], ['Sara', 23],];
// for(let i of studentsData){
//     console.log(i)
// }
// looping outer array elements
// for(let i = 0; i < studentsData.length; i++){

//     // get the length of the inner array elements
//     let innerArrayLength = studentsData[i].length;

//     // looping inner array elements
//     for(let j = 0; j < innerArrayLength; j++) {
//         console.log(studentsData[i][j]);
//     }
// }

// function getAge(...args){
//     console.log(typeof args)
// }
// getAge(22)
// const obj = {1:"a",2:"b"}
// console.log(obj.hasOwnProperty("1"))
// console.log(obj.hasOwnProperty("2"))



// for(let i=0;i<5;i++){
//     if(i === 3){
//         break;
//     }
//     setTimeout(() => {
//         console.log(i)
//     }, 2000);
// }

// const name = 'John';
//strings example
// const name1 = "Jack";
// const result = `The names are ${name} and ${name1}`;
// console.log(name1)
// console.log(result)

// const text1 = 'hello';
// const text2 = 'world';
// const text3 = '     JavaScript    ';

// console.log(text1)
// console.log(text2)
// console.log(text2.concat(text3))

// const word = 'nitesh khatri'
// console.log(word.toUpperCase())
// console.log(word.length)
// console.log(word.replace('nitesh','sameet'))
// console.log(word.split(''))
// console.log(word.slice(1,2))

// const a = 225 
// const b = true 
// console.log(a === b)
// console.log(a !== b)
// const result1 = String(a)
// const result2 = String(b)
// console.log(result1)
// console.log(result2)

// console.warn(setInterval(() => console.log('hi'),1000))
// console.warn(setInterval(() => console.log('hi'),500))

// const student = {
//     name: 'Monica',
//     class: 7,
//     age: 12
// }

// for(let i in student){
//     // display the properties
//     console.log(`${i} => ${student[i]}`)
// }

// let data = [1,2,3,'nitesh','sameet',null,undefined,true].map((val) => {
//     if(typeof val === 'string'){
//         console.log(val)
//     }
// })


// const salaries= {
//     Jack : 24000,
//     Paul : 34000,
//     Monica : 55000
// }
// for(let i in salaries){

//     let salary = "$" + salaries[i]
//     console.log(`${i} - ${salary}`)
// }

// const string = 'code';

// // using for...in loop
// for(let i in string){
//     console.log(string[i])
// }

// const arr = [ 'hello', 1, 'JavaScript' ];
// for(let i in arr){
//     console.log(arr[i])
// }
// for(let i of arr){
//     console.log(arr[i])
// }

// let obj = {
//     name:'nitesh',
//     age:34,
//     getIntro:function(){
//         console.log(this.name + 'from ' + this.city)
//     }
// }
// let obj2 = {
//     name:'sameet'
// }
// obj2._proto__= obj

// console.log(obj2)   


// const a = 0xff;
// console.log(a);
// const b = 0x00 ;
// console.log(b);

// const a = 4 + 9;
// console.log(a);

// const a = '4' + 9;
// console.log(a);

// const a = '4' - 2;
// console.log(a);

// const a = '4' / 2;
// console.log(a);

// const a = '4' * 2;
// console.log(a);

// console.log(isNaN(9))

// const a = 4 - 'hello';
// console.log(a);

// const a = 2 / 0;
// console.log(a);

// const a = -2 / 0;
// console.log(a)

// BigInt value
// const value = 900719925124740998n;
// console.log(value)
// const value = 900719925124740998n;
// const value1 = value + 1n;
// console.log(value1);

// const a = 0.1 + 0.2;
// console.log(a)

// const a = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(a);

// const a = 0.1 + 0.2;
// console.log(a.toFixed(2));

// const a = 9999999999999999
// console.log(a);

// const a = 45;
// const b = new Number(45);
// console.log(b)

// const a = 12;
// console.log(Number.isInteger(a));

// const b = NaN;
// console.log(Number.isNaN(b));

// display upto two decimal point
// const d = 5.1234;
// console.log(d.toFixed(2));

// const a = Number.MAX_VALUE;
// console.log(a)

// const a = Number.MAX_SAFE_INTEGER;
// console.log(a);

// const a = '23'; // string
// const b = true; // boolean
// console.log(Number(a))
// console.log(Number(b))


// let a = 'nitesh khatri'
// function example(){
//     console.log(a)
//     // const a ='sameet khatri'
// }
// example()

// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject(Error('Promise Rejected Unconditionally.'));
//     },1000);
// });

// promise.then((res) => {
//     console.log(value)
// })
// promise.catch((err) => {
//     console.log(err)
// })

// const promise = new Promise((resolve,reject) => {
//     const res = false; 
//     if(res){
//         resolve('resolved')
//     }
//     else{
//         resolve(Error('rejected is error'))
//     }
// });
// promise.then((res) => console.log(res),(err) => console.log(err));

// const example = new Promise((resolve,reject) => {
//     const res = true;
//     if(res){
//         resolve('resolved')
//     }
//     else{
//         resolve(Error('rejected is getting an error'))
//     }
// });
// example.then((res) => console.log(res),(err) => console.log(err));

// const obj = {
//         name: 'nitesh',
//         age: 43
//     }
// for(let value in obj){
//     console.log(Object.values(obj))
// }
// for(let value in obj){
//     console.log(Object.keys(obj))
// }
// for(let value in obj){
//     console.log(Object.entries(obj))
// }

// let result = Object.entries(obj)
// console.log(result)

// const weakSet = new WeakSet();
// console.log(weakSet)

// weakSet.add(obj)
// console.log(weakSet)

// const weakSet = new WeakSet({a:1})
// const friends = ['a','b','c']
// for(let i of friends){
//     console.log(i)
// }

// two sets of fruits
// function union(a,b){
//     let unionSet = new Set(a)
//     for(let i of b){
//         unionSet.add(i)
//     }
//     return unionSet
// }
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = union(setA,setB)
// console.log(result);

// function intersection(setA, setB) {
//     let intersectionSet = new Set();

//     for (let i of setB) {
//         if (setA.has(i)) {
//             intersectionSet.add(i);
//         }
//     }
//     return intersectionSet;
// }

// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = intersection(setA, setB);

// console.log(result);

// assigning object attributes to variables
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }
// let name = person.name;
// let age = person.age;
// let gender = person.gender;
// console.log(name,age,gender);

// const arrValue = ['one', 'two', 'three'];
// const [x, y, z,p] = arrValue;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(p);

// let arrValue = [10];
// // assigning default value 5 and 7
// let [x=50,y=20] = arrValue
// console.log(x)
// console.log(y)

// const person = {
//     name: 'Jack',
// }
// const {name,age=34} = person 
// console.log(name)
// console.log(age)


// let x = 4;
// let y = 7;
// [x,y] = [y,x]
// console.log(x,y)

// let x = 'nitesh';
// let y = 'sameet'
// [x,y] = [y,x]
// console.log(x,y)

// const arrValue = ['one', 'two', 'three'];
// const [x,,z] = arrValue
// console.log(x,z)

// const arrValue = ['one', 'two', 'three', 'four'];
// // destructuring assignment in arrays
// // assigning remaining elements to y
// const [x, ...y] = arrValue;
// console.log(x)
// console.log(y)

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }
// let { name, ...rest } = person;
// console.log(name,rest)

// const arrValue = ['one', 'two', 'three', 'four'];
// const [...x,y] = arrValue
// console.log(x,y)


// const arrValue = ['one', ['two', 'three']];
// const [x,[y,z]] = arrValue
// console.log(x)
// console.log(y)
// console.log(z)

// const person = {
//     name: 'Jack',
//     age: 26,
//     hobbies: {
//         read: true,
//         playGame: true
//     },
//     getResult:function(){
//         this.name
//     }
// }

// console.log(person.getResult());
// const {name,age,hobbies:{read,playGame}}=person 
// console.log(name)
// console.log(age)
// console.log(read)
// console.log(playGame)


// let age = 7;
// console.log(`nitesh ${age} is years old.`)

// variables 
// const currency = '$'
// let userIncome = 850000
// console.log(currency + userIncome)

// undefined
// var a 
// console.log(a)

// learn js variables
// let name = 'nitesh'
// const found = false 
// var age = 33 
// console.log(name,found,age)

// declaring variables
// var age;
// let weight;
// const numberOfFingers = 20 
// console.log(age)
// console.log(weight)
// console.log(numberOfFingers)

// template literals
// let name = 'nitesh khatri'
// console.log(`hello ${name}`)

// ley keyword
// let count 
// console.log(count)
// count = 10 
// console.log(count)

// const keyword
// const numberOfColumns = 4
// numberOfColumns = 10 
// console.log(numberOfColumns)

// string concatenation 
// let service = 'nitesh khatri'
// let month = 'may 30th'
// let displayText = `your ${service} ${month}`
// console.log(displayText)

// function onlyUnique(value,index,array){
//     return array.indexOf(value) === index
// }
// const num = [1,222,32,32,44,55,55,66]
// const friends = ['vijay','rahul','hitesh','chandresh','ronak','chandresh']
// console.log(num.reverse().filter(onlyUnique))
// console.log(friends.filter(onlyUnique).sort((b,a) => b-a))

// console.log(friends.forEach((val) => console.log(val)))
// const colors = ["red", "green", "blue"];
// for(let i=0;i<colors.length;i++){
//     console.log(i + ' ' + colors[i])
// }
// for(let i=0;i<friends.length;i++){
//     console.log(i + ' ' + friends[i])
// }

// logical operator

// let studentDetails =
// [
//    {studentName: "John Smith"},
//    {studentName: "john smith"},
//    {studentName: "Carol Taylor"}
// ];
// var searchName="John Smith"
// console.log(studentDetails.filter(obj =>
// obj.studentName.toLowerCase().indexOf(searchName.toLowerCase()) >= 0));

// var str1 = "TexT with uPPer CAsE aND loWeR cASe";
// var str2 = "TexT with Upper Case aND LoWER CAse";
// var output = document.getElementById("str1");
// output.innerHTML += "str1 = " + str1+ "<br/>";
// output.innerHTML += "str2 = " + str2 + "<br/>";
// if (str1.toUpperCase() === str2.toUpperCase()) {
//     output.innerHTML += "The strings are converted to Uppercase and they are equal" + "<br/>";
// } else {
//     output.innerHTML += "The strings are converted to Uppercase and they are not equal";
// }

// const str = 'HELLO WORLD';
// const substr = 'hELLo';

// // 👇️ true
// console.log(str.toLowerCase().includes(substr.toLowerCase()));


// const upper = arr.map((val) => {
//     return val.toUpperCase();
// })
// const lower = arr.map((val) => {
//     return val.toLowerCase();
// })
// console.log(upper)
// console.log(lower)

// const arr = ['apple', 'banana', 'cereal','mango']
// const upper = [];
// arr.forEach((item) => {
//     upper.push(item)
// })
// console.log(upper)

// const arr = ['BOBBY', 'HADZ', 'COM'];
// const example = [];
// arr.forEach((val) => {
//     example.push(val);
// })
// console.log(example)

// logical opeartors
// console.log(true || false)
// console.log(10 > 5 || 10 < 20)
// console.log(false || false)
// console.log(10 > 100 || 10 > 20)

// ternary opeartor 
// let price = 10.5;
// let day = 'monday'
// console.log(day === 'monday' ? price -= 1.5 : price += 1.5)


// else statement
// const isTaskCompleted = false;
// if(isTaskCompleted){
//     console.log('Task Completed');
// }
// else{
//     console.log('Task InComplete');
// }

// logical opeartor && 
// console.log(true && true);
// console.log(1 > 2 && 2 > 1);
// console.log(true && false);
// console.log(4 === 4 && 3 > 1)

// switch statement
// const food = 'masala dosa'
// switch(food){
//     case 'masala dosa': console.log('yes it is masala dosa')
//     break;
//     case 'gulab jamun': console.log('yes it is gulab jamun')
//     break;
//     case 'jalebi': console.log('yes it is jalebi')
//     break;
//     default:console.log('there is no special food item')
//     break;
// }
// console.log(food);

// if statement
// const isMailSent = false;
// if(isMailSent){
//     console.log('Mail sent to recipient');
// }
// else{
//     console.log("Mail doesn't send  to recipient");
// }

// logical opeartor
// let lateToWork = true;
// let oppositveValue = !lateToWork;
// console.log(oppositveValue)

// comparison opeartor
// console.log(1 >3)
// console.log(3 > 1 )
// console.log(250 >= 250)
// console.log(1 === 1)
// console.log(1 === 2)
// console.log(1 =='1')
// console.log(1 === '1')

// else if cause 
// const size = 10
// if(size > 100){
//     console.log('Big')
// }
// else if(size > 20){
//     console.log('Medium')
// }
// else if(size > 4){
//     console.log('Small')
// }
// else{
//     console.log('Tiny')
// }

// truthy and falsy

// arrow functions 

// Arrow function with two parameters
// const sum = (fParams,lParams) => {
//     return fParams * lParams
// }
// console.log(sum(10,20))

// Arrow function with no parameters
// const printHello = () => {
//     console.log('hello')
// }
// printHello();

// Arrow functions with a single parameter 
// const checkWeight = weight => {
//     console.log(`Baggage weight :  ${weight} kilograms.`)
// }
// checkWeight(10)

// arrow function with no parametters
// const Example = () => {
//     console.log('nitesh khatri')
// }
// Example()


// arrow function with three parameters
// function result(x,y,z){
//     return x + y / z 
// }
// console.log(result(10,20,30))

// defining the function: 
// function sum(sum1,sum2){
//     return sum1 + sum2 
// }
// console.log(sum(3,6))

// named function
// function rocketToMars(){
//     return 'BOM'
// }
// console.log(rocketToMars())

// const rocketToMars = function(){
//     return 'nitesh khatri is rocket to mars'
// }
// console.log(rocketToMars())

// const dog = function(){ 
//     return 'bruno'
// }
// console.log(dog())

// the parameter is name 
// function sayHello(name){
//     return `hello ${name}`
// }
// console.log(sayHello('nitesh'))

// return keyword
// with return 
// function sum(a,b){
//     return a + b 
// }
// console.log(sum(10,20)) // it is working there output

// without return 
// function sum(a,b){
//     a +b 
// }
// console.log(sum(10,20)) // because it doesn't put return then it is not working and showed undefined output.

// function declaration
// function add(n1,n2){
//     return n1 + n2 
// }
// console.log(add(1,12))

// calling functions
// function sum(n1,n2){
//     return n1 + n2 
// }
// calling the function
// sum(10,20)

// scope 
// function myFunction(){
//     var pizzaName = 'volvo'
//     console.log(pizzaName)
// }
// myFunction();

// block scoped variables
// const isLoggedIn = true;
// if (isLoggedIn == true) {
//   const statusMessage = 'User is logged in.';
// }
// console.log(statusMessage);

// global variables 
// variable declared globally
// const color = 'blue'
// function printColor(){
//     console.log(color)
// }
// printColor() // prints:blue

// arrays
// const numbers = [1, 2, 3, 4];
// console.log(numbers.length)

// index
// Accessing an array element
// const myArray = [100, 200, 300];
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])

// method .push()
// adding a single element
// const cart = ['apple', 'orange'];
// cart.push('grape')
// console.log(cart)

// method.pop()
// const ingredients = ['eggs', 'flour', 'chocolate'];
// const poppedIngredient = ingredients.pop()
// console.log(poppedIngredient)

// mutable
// const name = ['nitesh','sameet']
// name.push('arvind')
// console.log(name)


// An array containing numbers
// const numberArray = [0, 1, 2, 3];
// const mixedArray = [1,'chicken',false];
// console.log(numberArray,mixedArray)

// while loop infinite continue
// let i = 0
// while (i<5){
//     console.log(i++)
// }

// reverse loop 
// const items = ['apricot', 'banana', 'cherry'];
// for (let i = items.length - 1; i >= 0; i -= 1) {
//     console.log(`${i}. ${items[i]}`);
//   }

// do ... while statement
// x = 0 
// i = 0;
// do{
//     x = x + i;
//     console.log(x);
//     i++;
// }
// while(i<5)

// // for loop 
// for(let i=0;i<5;i++){
//     console.log(i)
// }

// looping through arrays
// Output: Every item in the array
// const array = ['a','b','c','d']
// for(let i=0;i<array.length;i++){
//     console.log(i  + ' ' + array[i])
// }

// break keyword
// for(let i=0;i<99;i++){
//     if(i > 5){
//         break;
//     }
//     console.log(i)
// }

// nested for loop
// for(let outer=0;outer<2;outer+=1){
//     for(let inner=0;inner<3;inner+=1){
//         console.log(`${outer}-${inner}`)
//     }
// }

// iterators
// function assigned to variables
// let plusFive = (number) => {
//     return number += 5 
// }
// let f = plusFive
// plusFive(4)
// f(9)
// console.log(plusFive)

// callbackfunctions
// const isEven = (n) => {
//     return n % 2  == 0
// }
// let printMsg = (evenFunc,num) => {
//     const isNumEven = evenFunc(num);
//     console.log(`the number ${num} is an even number ${isNumEven}`)
// }
// console.log(printMsg(isEven,11))

// js functions - first class objects
//Assign a function to a variable originalFunc
// const originalFunc = (num) => { return num + 2 };
// console.log(originalFunc)

// const newFunc = originalFunc
// console.log(newFunc)

// newFunc.name; 
// newFunc.toString();
// newFunc.isMathfunction = true;
// const functionNameLength = (func) => {
//     return func.name.length;
// }
// functionNameLength(originalFunc)

// const returnFunc = () => {
//     return newFunc
// }
// console.log(returnFunc)

// reduce method 
// const arrayOfNumbers = [1, 2, 3, 4];
// const result = arrayOfNumbers.reduce((accumulator,currentValue) => {
//     return accumulator + currentValue 
// })
// console.log(result)

// forEach method

// const numbers = [28, 77, 45, 99, 27];
// numbers.forEach((val) => {
//     console.log(val)
// })

// filter method
// const randomNumbers = [4, 11, 42, 14, 39];
// const result =  randomNumbers.filter((val) => val > 40)
// console.log(result)

// map method
// const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
// const result = finalParticipants.map((members) => {
//     return members + ' joined the contest.'
// })
// console.log(result)

// restrictions in naming properties
// Example of invalid key names
// const trainSchedule = {
//     platform num: 10, // Invalid because of the space between words.
//     40 - 10 + 2: 30, // Expressions cannot be keys.
//     +compartment: 'C' // The use of a + sign is invalid unless it is enclosed in quotations.
//   }

// dot notation for accessing object properties
// const apple = {
//     color:'green',
//     price:{
//         bulk:'$3/kg',
//         smallQty:'$4/kg'
//     }
// }
// console.log(apple)
// console.log(apple.color)
// console.log(apple.price.bulk)
// console.log(apple.price.smallQty)

// objects accessing non-existent javascript properties 
// const classElection = {
//     date:'17th june 2023'
// }
// console.log(classElection.place)

// js objects are mutable 
// const Student = {
//     name: 'Sheldon',
//     score: 100,
//     grade: 'A',
// }
// console.log(Student)
// delete Student.score
// const obj1 = new Student  
// console.log(obj1)
// console.log(obj1)
// const student = {
//     name: 'Sheldon',
//     score: 100,
//     grade: 'A',
//   }
//   student.grade = 'b'

// console.log(student)

// javascript for in loop 
// let mobile = {
//     brand: 'Samsung',
//     model: 'Galaxy Note 9'
// }
// for(let i in mobile){
//     console.log(`${i} - ${mobile[i]}`)
// }

// let array = ['friends','happy','sad','crying']
// for(let i of array){
//     console.log(`${i}`)
// }

//  Properties and values of a JavaScript object
// const classOf2018 = {
//     students: 38,
//     year: 2018
//   }

// Delete operator
//   const person = {
//     firstName: "Matilda",
//     age: 27,
//     hobby: "knitting",
//     goal: "learning JavaScript"
//   };

//   delete person.hobby;
//   console.log(person)

// javascript passing objects as arguments
// const origNum = 08
// const oriObj = {
//     color:'blue'
// }
// const changeItUp =  (num,obj) => {
//     num = 7;
//     obj.color = 'red'
// }
// changeItUp(origNum,oriObj)
// console.log(origNum)
// console.log(oriObj)

// const orinString = 'nitesh'
// const orinNumber = 11
// const orinObj = {
//     name:'nitesh'
// }
// const orinArray = ['friends','happy','smile']

// const changeItUp = (str,num,obj,arr) => {
//     str='sameet';
//     num=22;
//     obj.name = 'arvind';
//     arr = ['a','b','c']
// }
// changeItUp(orinString,orinNumber,orinObj,orinArray)
// console.log(orinString)
// console.log(orinNumber)
// console.log(orinObj)
// console.log(orinArray)

// object methods 
// const engine = {
//     start(adverb){
//         console.log(``)
//     },
//     sputter:() => {
//         console.log('The engine sputters...')
//     }
// }
// engine.start('noisily');
// engine.sputter();

// JavaScript destructuring assignment shorthand syntax
// const rubiksCubeFacts  = {
//     possiblePermutations: '43,252,003,274,489,856,000',
//     invented: '1974',
//     largestCube: '17x17x17'
// }
// const {possiblePermutations,invented,largestCube} = rubiksCubeFacts
// console.log(possiblePermutations)
// console.log(invented)
// console.log(largestCube)

// shorthand property name syntax for object creation
// const activity = 'Surfing';
// const beach = {activity}
// console.log(beach)

// this Keyword
// const cat = {
//     name: 'Pipey',
//   age: 8,
//   whatName() {
//     return this.name  
//   }
// }
// console.log(cat.name)
// console.log(cat.age)
// console.log(cat.whatName)


// javascript function this
// const restaurant = {
//     numCustomers: 45,
//     seatCapacity: 100,
//     availableSeats() {
//       // this refers to the restaurant object
//       // and it's used to access its properties
//       return this.seatCapacity - this.numCustomers;
//     }
//   }
//   console.log(restaurant.availableSeats())

// const example = {
//     a:1,
//     b:2,
//     resultEe(){
//      return this.a + this.b    
//     }
// }
// console.log(example.resultEe())

// JavaScript Arrow Function this Scope
// const myObj = {
//     data: 'abc',
//     loggerA: () => { console.log(this.data); },
//     loggerB() { console.log(this.data); },
// }
// console.log(myObj)

// const example = {
//     data:'abc',
//     logA() {console.log('logger a ')},
//     logB:() => {console.log('logger b')}
// }
// console.log(example)

// getters and setters intercept property access
// const myCat = {
//     _name: 'Snickers',
//     get name(){
//       return this._name
//     },
//     set name(newName){
//       //Verify that newName is a non-empty string before setting as name property
//       if (typeof newName === 'string' && newName.length > 0){
//         this._name = newName; 
//       } else {
//         console.log("ERROR: name must be a non-empty string"); 
//       }
//     }
//   }

// javascript factory functions
// const dogFactory = (name, age, breed) => {
//     return {
//       name: name,
//       age: age,
//       breed: breed,
//       bark() {
//         console.log('Woof!');  
//       }
//     };
//   };

// javascript getters and setters restricted
// const myCat = {
//     _name: 'Dottie',
//     get name() {
//       return this._name;  
//     },
//     set name(newName) {
//       this._name = newName;  
//     }
//   };

//   // Reference invokes the getter
//   console.log(myCat.name);

//   // Assignment invokes the setter
//   myCat.name = 'Yankee';

// function getUsers(){
//     return[
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//     ]
// }
// function findUser(username){
//     const users = getUsers();
//     const user = users.find((user) => user.username === username);
//     return user;
// }
// console.log(findUser('jane'))

// function getUsers() {
//     let users = [];

//     // delay 1 second (1000ms)
//     setTimeout(() => {
//       users = [
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ];
//     }, 1000);

//     return users;
//   }
//   getUsers();

// const promise = new Promise((resolve, reject) => {
//     if (success) {
//       resolve(value);
//     } else {
//       reject(error);
//     }
// });
// console.log(promise(success))

// class Person{
//     constructor(fname,lname){
//         this.fname = fname;
//         this.lname = lname
//     }
//     getName(){
//         console.log(`the fullname is ${this.fname} and ${this.lname}`)
//     }
// }

// let obj11 = new Person('nitesh','khatri')
// console.log(obj11.getName())

// class Example {
//     constructor(fname,lname){
//         this.fname = fname,
//         this.lname = lname
//     }
//     getName(){
//         console.log(`the fullname of ${fname} and ${lname}`)
//     }
// }

// let obj22 = new Example('nitesh','khatri')
// console.log(obj22)


// function rest parameter (...)
// function sum(...args){
//     let sum = 0 
//     for(let arg of args) sum += arg;
//     return sum; 
// }
// let x = sum(4,8,12,1,22,22)
// console.log(x)

// const fruits = new Map([
//     ['apples',500],
//     ['mango',400],
//     ['pineapple',300],
//     ['watermelon',200],
// ])
// console.log(fruits)

// const fruits = new Map();
// fruits.set('apples',5010)
// fruits.set('pineapple',400)
// fruits.set('mango',300)
// fruits.set('grape',200)
// console.log(fruits)

// let srcObject = {
//     name:'nitesh khatri',
//     title:'front-end developer'
// }
// let map = new Map(Object.entries(srcObject))
// console.log(map.get('name'))

// let result = {
//     name:'nitesh khatri',
//     age:34
// }
// let example = new Map(Object.entries(result));
// console.log(example.get('age'))

// const letters = new Set(['a','b','c','d'])
// console.log(letters)

// const a = 'nietsh khatri'
// const b = 'sameet khatri'
// const result = new Set([a,b]);
// console.log(result)

// let veg = new Set();
// let cucumber = {name:'cucumber'};
// let onion = {name:'onion'};
// let potato = {name:'potato'};
// let watermelon = {name:'watermelon'}
// console.log(veg.add(cucumber))
// console.log(veg.add(onion))
// console.log(veg.add(potato))
// console.log(veg.add(watermelon))

// console.log(veg.size)

// const letters = new Set(['a','b','c']);
// let text = '';
// letters.forEach(function(val){
//     text += val + "<br>"
// })
// document.getElementById('demo').innerHTML = text;

// const example = new Set(['nitesh','sameet','vishal'])
// let letters = '';
// example.forEach((val) => {
//     letters += val + "<br>"
// })
// document.getElementById('demo').innerHTML = letters;

// const fruits = new Set(['mango','apple','watermelon','pineapple'])
// let example = '';
// fruits.forEach((val) => {
//     example += val + "<br>"
// })
// document.getElementById('demo').innerHTML = example;

// const first = new WeakMap();
// const currentAge = {};
// const currentCity = {};
// first.set(currentAge,30)
// first.set(currentCity,'mumbai')
// console.log(first.has(currentCity))
// console.log(first.delete(currentAge))

// let messages = [
//     {
//         text:'nitesh',from:'neads'
//     },
//     {
//         text:'nitesh',from:'neads'
//     },
//     {
//         text:'nitesh',from:'neads'
//     },
// ]
// let read = new WeakSet();
// console.log(messages.add[0]);
// console.log(messages.add[1]);

// function showCord(x,y,z){
//     console.log(`${x} ${y} ${z}`)
// }
// const cords = [2,1.5,3.5]
// showCord(...cords)

// function example(a,b,c){
//     console.log(`${a} ${b} ${c}`)
// }
// const result = [1,2,3]
// example(...result)

// const boys = ['nitesh','vishal','sameet']
// const girls = ['swati','aishwarya','priyanka']
// const all = [...boys,...girls]
// console.log(all)
// with an array literal

// const boys = ['pranay','tejas']
// const girls = ['swati','ashwini']
// const all = ['eric',...boys,...girls,'happy']
// console.log(all)


//  with object literal
// let obj1 = {name:'nitesh',age:34,jobtitle:'fe developer'}
// let obj2 = {name:'sameet',age:41,jobtitle:'field servic engineering'}
// let combined = {...obj1,...obj2}
// console.log(combined)

// simple array 
// const example = [1,2,3,4,5]
// const [first,second,...third] = example;
// console.log(first)
// console.log(third)

// function* getMultipleField(){
//     return 10;
//     return 20;
// }

// const result = getMultipleField();
// console.log(result)

// const person = {
//     name:'nitesh',
//     age:34
// }
// console.log(Object.entries(person))

// var p1 = new Promise((success,fail) => {
//     setTimeout(() => {
//         console.log(1);
//         success();
//     },2000)b
// });
// console.log(2)

// var p2 = new Promise((success,fail) => {
//     setTimeout(() => {
//         console.log(3)
//         success();
//     },1000)
// });

// var p3 = Promise.all([p1,p2]).then(() => new Promise((success,fail) => {
//     setTimeout(() => {
//         console.log(4);
//         success();
//     },3000)
// }));
// p3.then(() => console.log(5));

// const questionFilter = [
//     {
//         "id": 1,
//         "title": "Video 1",
//         "video_leght": "00:50:00",
//         "date": "20.05.2010",
//         "questions": [
//             {
//                 "id": 1,
//                 "question": "Question 1 ",
//                 "url": "Link"
//               },
//               {
//                 "id": 2,
//                 "question": "Question 2",
//                 "url": "Link"
//               },
//               {
//                 "id": 3,
//                 "question": "Question 3",
//                 "url": "Link"
//               }         
//         ]
//     },
//     {
//         "id": 2,
//         "title": "Video 2",
//         "video_leght": "01:00:00",
//         "date": "14.07.2016",
//         "questions":[
//             {
//                 "id": 1,
//                 "question": "Question 1 ",
//                 "url": "Link"
//               },
//               {
//                 "id": 2,
//                 "question": "Question 2",
//                 "url": "Link"
//               },
//               {
//                 "id": 3,
//                 "question": "Question 3",
//                 "url": "Link"
//               }        
//         ]
//     }
// ]
// const result = questionFilter.map((item) => item.title === 'Video 2')
// console.log(result)

// let num = 1.23456;
// console.log(Math.round(num * 100) / 100)


// const friends = ['a','b','c']
// console.log(Math.random() * friends.length)

// console.log(num.toFixed(1))
// console.log(num.toFixed(5))
// console.log(num.toFixed(55))


// https://wtfjs.com/
// length
// var foo = ["lval0", "lval1", "lval2", "lval3"];
// foo[this.length] = 'nitesh';
// console.log(foo)

// instance of 
//object and array prototype 
// console.log(Object.create(Array).length === 1)
// console.log(Object.create(Array).length === 0)

// two special numbers
// let i = 1
// console.log(i*i)
// console.log(i+1)
// console.log(i-1)
// console.log(i/i)

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr[-1] = "yo wazzzup";
// console.log(arr.length);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr.length)
// console.log(arr.slice(0,-1))
// console.log(arr.slice(0,-2))
// console.log(arr.slice(0,-4))

// console.log([1,2,3,15,30,7,5,45,60].sort())
// console.log([1,2,3,4,[5,6],[6,7]].flat())

// alert('hi')
// console.log(confirm('what are you doing'))

//VARIABLE

// let user = 'nitesh'
// let age = 34
// let message = 'hello'
// console.log(user,age,message)

// let user = 'John',
//   age = 25,
//   message = 'Hello';
//   console.log(user,age,message)

// let message;
// message = 'Hello!';
// message = 'World!'; 
// console.log(message);

// let $ = 1; // declared a variable with the name "$"
// let _ = 2;
// console.log($  + _)

// let my-name = 'a'
// console.log(my-name)

// const myBirthday = '14.06.1982'; // sam
// console.log(myBirthday)

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
// console.log(COLOR_RED)
// console.log(COLOR_GREEN)
// console.log(COLOR_BLUE)
// console.log(COLOR_ORANGE)

// no error
// let message = "hello";
// message = 123456;
// console.log(message);

// let n = 123;
// n = 12.345;
// console.log(n)

// alert( 1 / 0 );

// console.log(9007199254740991 + 1);
// console.log(9007199254740991 + 2);

// const bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt)

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;
// console.log(phrase)

// let name = "John";
// console.log(`${name}`)

// alert( `the result is ${1 + 2}`);

// let nameFieldChecked = true
// let ageFieldChecked = false;
// let isGreater = 4 > 1;
// console.log(isGreater)

// let age = null;
// console.log(age)

// let age;
// console.log(age);

// let age = 100;
// console.log(age)

// console.log(typeof undefined)
// console.log(typeof 0)
// console.log(typeof NaN)
// console.log(typeof true)
// console.log(typeof 'foo')
// console.log(typeof Symbol('id'))
// console.log(typeof Math)
// console.log(typeof null)
// console.log(typeof alert)

// let name = "Ilya";
// console.log(`hello ${name}`)

// let age = prompt('How old are you?', 100);
// console.log(age)

// let test = prompt("Test");
// console.log(test)

// let isBoss = confirm("Are you the boss?");
// console.log(isBoss)

// let value = true;
// alert(typeof value);

// alert( "6" / "2" );

// let str = "123";
// console.log(typeof str); 
// let age = Number("an arbitrary string instead of a number");
// console.log(typeof age);

// console.log(typeof Number("123"));
// console.log(typeof Number("123z"));
// console.log(typeof Number(true));
// console.log(typeof Number(false));

// console.log(Boolean(0))
// console.log(Boolean(1))
// console.log(Boolean('hello'))

// alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
// alert( 8 % 3 );

// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 );

// let s = "my" + "string";
// alert(s);

// console.log(2 >1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log(5 > 4 )

// console.log('z' > 'a')

// console.log('01' == 1)

// console.log(true == 1)
// console.log(false == 1)

// let a = 0
// console.log(Boolean(a))

// let b = '0'
// console.log(Boolean(b))

// console.log(0 == false);
// console.log('' == false);

// console.log(null == undefined)

// console.log(null === undefined)

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >=  0)

// let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if(year === 2015) alert('you are right!')
// if(year == 2015){
//     alert( "That's correct!" );
//     alert( "You're so smart!" );
// }

// if (year < 2015) {
//     alert( 'Too early...' );
//   } else if (year > 2015) {
//     alert( 'Too late' );
//   } else {
//     alert( 'Exactly!' );
//   }

// let accessAllowed;
// let age = prompt('how old are you');

// if(age > 18){
//     accessAllowed = true;
// }
// else{
//     accessAllowed = false;
// }
// console.log(accessAllowed)

// let age = 20
// let accessAllowed = (age > 18) ? true : false;
// console.log(accessAllowed)

// let score = 75 
// if(score > 80){
//     scoretext = 'A+'
// }
// else if(score > 74){
//     scoretext = 'B+'
// }
// else if (score > 60){
//     scoretext = 'C+'
// }
// else{
//     scoretext = 'fail'
// }
// console.log(scoretext);

// let example = prompt('what is your output?')
// if(example == 'Front End Developer'){
//     alert('right')
//     document.getElementById('')
// }
// else{
//     alert('you have not right')
// }

// let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";
// console.log(firstName || lastName || nickName)

// console.log(true && false)
// console.log(false && true)
// console.log(true && false)
// console.log(false && false)

// let hour = 12;
// let minute = 30;
// if(hour == 12 && minute == 30){
//     console.log('the time is 12:30')
// }
// else{
//     console.log("the time won't same 12:30")
// }

// if(1 && 0){
//     console.log("won't work, because the result is falsy")
// }

// let userName = prompt("Who's there?", '');
// if (userName === 'Admin') {
//   let pass = prompt('Password?', '');
//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }
// } 
// else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }

// var a =  10 
// {
//     var a = -10
// }
// let b = a 
// {
//     let b = -20
// }
// console.log(b)

// b = 25
// var b 
// console.log(b)

// let b 
// b = 25 
// console.log(b)

// const b 
// b = 25 
// console.log(b)

// let i = 0;
// while(i<=3){
//     console.log(i)
//     i++
// }

// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//     console.log(i);
//   }

// let i = 0;
// while(i<3){
//     console.log(i)
//     i++
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//       alert( i );
//     }
// }


// var
// var a = 'nitesh'
// function example(){
//     var a = 'sameet'
//     console.log(a)
// }
// example()

// // let
// let a = 'nitesh'
// function example(){
//     console.log(a)
//     let a = 'sameet'
// }
// example()

// const
// const a = 'nitesh'
// function example(){
//     console.log(a)
//     const a = 'sameet'
// }
// example()


// let a = 2+2;
// switch(a){
//     case 0:console.log('too small')
//     break;
//     case 1:console.log('too medium')
//     break;
//     case 3:console.log('too large')
//     break;
//     case 4:console.log('too extra large')
//     break;
//     default:console.log("I don't know such values")
//     break;
// }


// const num = [111,22,33]
// const result = num.map((item) => {
//     return item * 20
// })
// console.log(result)

// console.log('hello')
// setTimeout(() => {
//     console.log('how are you')
// },1000)
// console.log(a)
// console.log(b)
// var a = 10 
// let b = 20
// console.log('bye');


// const word = 'nitesh khatri is hero khatri'
// console.log(word.replaceAll('khatri','shah'))
// let browser = 'Test'
// switch (browser) {
//     case 'Edge':
//     console.log( "You've got the Edge!" );
//     break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       console.log( 'Okay we support these browsers too' );
//       break;
//     default:
//       console.log( 'We hope that this page looks ok!' );
//   }


// 
// let abc = ['banana','apple','watermeon','pineapple']
// console.log(abc.slice(0,-1))
// console.log(abc.slice(0,-2))
// console.log(abc.slice(0,-3))
// console.log(abc.slice(0,-4))

// let a = prompt('a?', '');

// if (a == 0) {
//   console.log( 0 );
// }
// if (a == 1) {
//   console.log( 1 );
// }

// if (a == 2 || a == 3) {
//   console.log( '2,3' );
// }

// function showMessage() {
//     console.log( 'Hello everyone!' );
//   }
//   console.log(showMessage())

// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
//     console.log( message );
//   }

//   showMessage()

// let message = "Hello, I'm JavaScript!"; // global variable
// function showMessage() {
//     console.log( message );
//   }

//   showMessage()

// const str = 'helllo how are you'
// const result = str.replace(/helllo/g,'hello nitesh')
// console.log(result)

// let regularExp = /\d+/g;
// let strAge = "John: 42, Mike: 44,Sameet:34";
// document.getElementById("result").innerHTML =strAge.match(regularExp);

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
//   }
//   console.log(checkAge())

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

//   console.log(min(10,20))

// function sayHi() {
//     console.log( "Hello" );
//   }
//   sayHi();

// function sayHi() {
//     console.log( "Hello" );
//   }
//   sayHi()

// let c = {greeting:'hey'}
// let d;
// d = c 
// c.greeting = 'hello'
// console.log(d.greeting)

// const bird = {
//     size:'small'
// }
// const mouse = {
//     name:'nitesh',
//     small:true
// }
// console.log(bird)
// console.log(mouse)

// const person = {
//     name:'nitesh'
// }
// Object.defineProperty(person,'age',{value:21});
// console.log(person)
// console.log(Object.keys(person))

// for(var i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i)
//     },1)
// }
// for(let i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i)
//     },1)
// }

// const foo = () => console.log('first');
// const bar = () => setTimeout(() => console.log('second'))
// const baz = () => console.log('third')
// foo()
// bar()
// baz()

// String.prototype.Example = () => {
//     return 'nitesh khatri'
// }
// const name222 = 'sameet'
// name222.Example();


// function getArgs(...args){
//     console.log(typeof args)
// }
// getArgs(22)

// const getRectArea = function(width, height) {
//     return width * height;
//   };
//   console.log(getRectArea(3, 4));

// let getRectArea = function(width, height) {
//     return width * height;
//   };
//   console.log(getRectArea(3, 4))

// const getExample = function(acc,smile){
//     return acc + smile 
// };
// console.log(getExample(10,20))

// function sum(a,b){
//     return a+ b 
// }
// console.log(sum(10,20))
// let sum = (a, b) => a + b;
// console.log(sum(10,20))

// let sayHi = () => console.log("Hello!");
// sayHi()
// let btn = document.createElement("button");
// btn.innerHTML = "Click Me 1";
// btn.setAttribute('type','button');
// btn.textContent = 'nitesh khatri'
// btn.classList = 'btn btn-success'
// btn.className = 'primary'
// document.body.appendChild(btn);

// let btn = document.createElement('button');
// btn.innerHTML = 'btn'
// btn.type = 'submit'
// btn.name = 'bbb'
// document.body.appendChild(btn)

// var btn = document.getElementById('buttonId');
// btn.innerText = 'happy'

// btn.addEventListener('click',function(){
//     btn.innerHTML = 'asdsadad'
// });


// const el = document.createElement('div');
// el.style.backgroundColor = 'red';
// el.style.color = 'white';
// el.style.width = ' 50px';
// el.style.height = '100px';
// el.textContent = 'hello world';
// const box = document.getElementById('boxwrapper');
// box.appendChild(el);

// const select = document.getElementById('fruit-select');
// if(select.tagName === 'SELECT'){
//     console.log('✅ element is a select dropdown');
// } else {
//   console.log('⛔️ element is not a select dropdown');
// }

// function functionMenu(){
//     console.log('adsad')
// }
// function myFunction(){
//     document.getElementById('result').innerHTML = 'you copied text.'
// }

// const para = document.getElementById('noContextMenu');
// para.addEventListener('contextmenu',function(){
//     console.log('asdad')
// });

// for(let i =0;i<5;i++){
//     console.log(i)
// }

// let i=0
// while(i<5){
//     console.log(i)
//     i++
// }

// let day = new Date().getDay();
// switch(day){
//     case 0 : console.log('sunday')
//     break;
//     case 1 : console.log('monday')
//     break;
//     case 2 : console.log('tuesday')
//     break;
//     case 3 : console.log('wednesday')
//     break;
//     case 4 : console.log('thursday')
//     break;
//     case 5 : console.log('friday')
//     break;
//     case 6 : console.log('saturday')
//     break;
//     default:console.log('no weekday and weekend')
//     break;
// }
// console.log(day)

// let smile = 'smile'
// console.log(smile  === 'smile' ? 'yes' : 'no')

// const numword = [1,2,3,4,5,'a','b','c', null,undefined]
// console.log(numword.filter((val) => typeof val !== 'string' && typeof val !== 'object' && typeof val !== 'undefined'))

// const project = [
//     {
//         name:'nitesh',age:34
//     },
//     {
//         name:'sameet',age:41
//     },
//     {
//         name:'arvind',age:68
//     },
//     {
//         name:'urvashi',age:65
//     },
// ]
// const result = project.sort(function(a,b){
//     if(a.name < b.name){
//         return -1 
//     }
//     else{
//         return 1 
//     }
// })
// console.log(result)

// console.log('nitesh'.split("").reverse("").join(""))

// const fname = 'nitesh'
// const lname = 'khatri'
// console.log(fname.concat(' ' + lname))

// console.log('nitesh'.length)
// console.log('nitesh'.toLocaleUpperCase())
// console.log('nitesh'.replace('nitesh','sameet'))
// var myarray = new Array("Orange", "Apple", "Banana", "Cherry", "Mango")

// var newText = createTextNode('the object is constructed from : "+myarray.constructor)');
// newParagraph.appendChild(newText);
// var newHeader = document.createElement('h1');
// newHeader.innerHTML = 'asdad'
// newHeader.textContent = 'sameeet khatri'
// document.body.appendChild(newParagraph)

// var div11 = document.getElementById("target");
// div11.innerHTML = '<p>This is paragraph</p>'

// var refElement = document.getElementById("sister");
// var parent = refElement.parentNode;
// var newDiv = document.createElement('div');
// parent.insertBefore(newDiv,refElement);

// var bdy = document.getElementsByTagName("body")[0];
// var newDiv = document.createElement("div");
// bdy.textContent =  'nitesh khatri'
// bdy.appendChild(newDiv);


// var header = document.createElement('h1');
// header.textContent = 'heading title'
// document.body.appendChild(header)


// const a = 'nitesh khatri'
// function example(){
//     const a = 'sameet khatro'
//     console.log(a)
// }
// example()

// let a = 'nitesh khatri'
// function example(){
//     console.log(a)
//     let a = 'sameet khatro'
// }
// example()
// var a = 'nitesh khatri' //global scope
// function example(){
//     console.log(a)
//     // var a = 'sameet khatri' // local scope
// }
// example()
// var txt = document.createTextNode("The new paragraph will contain this text");
// var para = document.createElement("p");
// para.textContent = 'nitesh khatri'
// para.className = 'txt_para'
// document.body.appendChild(para);

// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30        // by key "age" store value 30
//   };
//   console.log(user.name)
//   console.log(user.age)


// let user = {
//     name:'nitesh',
//     age:34
// }
// delete user.age;
// console.log(user)

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
//   };
//   console.log(user.name)
//   console.log(user.age)

// let user = {};
// console.log(user['likes','birds']);
// delete user['likes','birds']

// let key = "likes birds";
// console.log(key)

// let user = {
//     name: "John",
//     age: 30
//   };
//   let keys = prompt('What do you want to know about the user?", "name"')
//   console.log(keys);

// function makeUser(name,age){
//    return{
//         name:name,
//         age:age
//    }
// }
// let user = makeUser('nitesh',34)
// console.log(user.name)

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
// console.log(obj.for)  

// let obj = {
//     0: "test" // same as "0": "test"
//   };
//   console.log(0)

// let user = { name: "John", age: 30 };
// console.log(user.name)
// console.log(user.age)

// let obj = {
//     test: undefined
//   };
//   console.log(test)

// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };
//   for (let code in codes){
//     console.log(code)
//   }

// let user = {
//     name: "John",
//     surname: "Smith"
//   };
//   user.age = 25;

//   console.log(user.name)
//   console.log(user.surname)

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;


// function factory(){
//     return (a,b) => a+b 
//   }

//   const sumFunc1 = factory();
//   const sumFunc2 = factory();

//   console.log(sumFunc1)
//   console.log(sumFunc2)
//   console.log(sumFunc1 === sumFunc2); 
//   console.log(sumFunc1 === sumFunc1);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//  let sum = 0
//  for(let key in salaries){
//     sum += salaries[key]
//  }
//  console.log(sum)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// let message = "Hello!";
// let phrase = "sameet";

// let a = {};
// let b = a;
// console.log(a===b)
// console.log(a===b)


// const user = {
//     name:'nitesh'
// }
// console.log(user)

// let user = {
//     name: "John",
//     age: 30
//   };

//   let clone = {}
//   for (let key in user){
//     clone[key] = user[key]
//   }
//   clone.name = 'sameet'
//   console.log(user.name)

// let user = {name:'nitesh'};
// let p1 = {canView:true};
// let p2 = {canEdit:false};
// Object.assign(user,p1,p2)
// console.log(user.name)
// console.log(user.p1)
// console.log(user.p2)

// let person = {
//     name:'nitesh',
//     age:34
// }
// let clone = Object.assign({},person)
// console.log(clone)

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
// console.log(user.sizes.height === user.sizes.height)

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
//   const clone = structuredClone(user)
//   console.log(clone.sizes.width)

// let user = {
//     name: "John"
//   };

//   let admin = user;
//   console.log(admin)

// let user = {
//     name: "John",
//     age: 30
//   };

//   user.sayHi = function() {
//     console.log("Hello!");
//   };

// let user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//       console.log(user.name); // "user" instead of "this"
//     }
//   };

// function sayHi() {
//     console.log( this.name );
//   }
//   sayHi()

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }
// sayHi()

// let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => console.log(this.firstName);
//       arrow();
//     }
//   };

//   user.sayHi();

// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }

//   let user = makeUser();
//   console.log(user)

// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },

//     mul() {
//       return this.a * this.b;
//     },

//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
//   console.log(calculator(sum(10,20)))

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // shows the current step
//       console.log( this.step );
//     }
//   };

// named functions 
// function myFunction(){
//     console.log('codenitesh');
// }
// myFunction()

// anonymous functions => without name, used as function expression or a agruments
// let greet = function(name){
//     console.log(`hello ${name}`)
// }
// // greet('nitesh');
// let welcome = function(name,age){
//     console.log(`Hello ${name} - ${age} years old`)
// }
// welcome('nitesh',34)
// let introduction = function(name,age,dob){
//     console.log(`hello ${name}, ${age} is years old and ${dob}`)
// }
// introduction('nitesh',34,'17th june 1989')

// arrow functions => introduced in ES6 shorter syntax  & one-lined functions 
// let greet = () => console.log('hello')
// console.log(greet())
// let example = () => console.log('nitesh khatri')
// example()

// IIF functions => executed immediately after their creation, used to create private scopes and avoid polluting the global namesspace
// (function(){
//     let str = 'good evening'
//     console.log(str)
// })();

// higher order functions functions that take one or more functions or agruments or return a function
// eg: map, filter and reduce
// let ary = [10,20,30]
// let newAry = ary.map((element) => {
//     return element + 10
// })
// console.log(newAry)
// const numbers = [1,2,3,4,5]
// function Example(array){
//     for(let i=0;i<numbers.length;i++){
//         console.log(array[i])
//     }
// }
// Example(numbers)
// numbers.forEach((element) => console.log(element * 3))

// function isOdd(array,oddArr = []){
//     for(let i=0;i<array.length;i++){
//         if(array[i] % 2 !== 0){
//             oddArr.push(array[i]);
//         }
//         return oddArr
//     }
// }
// const oddArr = isOdd(numbers);
// console.log(oddArr)

// const oddArray = numbers.filter((number) => number % 2 !== 0)
// console.log(oddArray)
// const oddArray = numbers.filter((number) => number % 2 == 0)
// console.log(oddArray)

// function addOneMore(array,newArr =[]){
//     for(let i=0;i<array.length;i++){
//         newArr.push(array[i] + 1)
//     }
//     return newArr
// }
// const newArr = addOneMore(numbers);
// console.log(newArr)
// function AddOneMore(array,newArr=[]){
//     for(let i=0;i<array.length;i++){
//         newArr.push(array[i] + 1)
//     }
//     return newArr
// }
// const newArr = AddOneMore(numbers)
// console.log(newArr)

// const newArray = numbers.map((ele) => ele + 1)
// console.log(newArray)

// function getTotalValue(array){
//     let total = 0;
//     for(let i=0;i<array.length;i++){
//         total += array[i]
//     }
//     return total
// }
// const totalValue = getTotalValue(numbers)
// console.log(totalValue)

// const totalValue = numbers.reduce((sum,number) => sum + number)
// console.log(totalValue)
// const totalValue = numbers.reduce((sum,num) => sum * num)
// console.log(totalValue)

// function greetings() {
//     return "Good Morning"
// }
// greetings()

// function favouriteFood(){
//     return 'good morning'
// }
// favouriteFood.beans = 'beans'
// console.log(favouriteFood)

// const num = [10,20,30]
// const num10 = []
// for(let i=0;i<num.length;i++){
//     num10.push(num[i] * 10)
// }
// console.log(num10)

// function AddOneMore(array,newArr=[]){
//     for(let i=0;i<array.length;i++){
//         newArr.push(array[i] +1)
//     }
//     return newArr
// }
// const newArr = AddOneMore(numbers)
// console.log(newArr)

// const num = [10, 20, 30];
// console.log(num.filter((val) => val > 20))

// const students = [
//     { name: 'John James', status: true},
//     { name: 'Micheal Obi', status: false },
//     { name: 'Bola Ade', status: true },
//     { name: 'Emmanuel', status: false },
//     { name: 'Faithfulness Alamu',status: true },
//   ];

//   const presentStudent= [];

//   for(let i =0;i<students.length;i++){
//     if(students[i].status >= true){
//         presentStudent.push(students[i].name)
//     }
//   }
//   console.log(presentStudent)

//   const result = students.filter((val) => val.status === true)
//   console.log(result)
//   const result = students.filter((val) => val.status !== true)
//   console.log(result)

// const person = [
//     {
//         name:'nitesh',age:34,status:false
//     },
//     {
//         name:'sameet',age:41,status:true
//     },
//     {
//         name:'mom',age:65,status:true
//     },
//     {
//         name:'daddy',age:65,status:true
//     },
// ]

/// for(let i=0;i<person.length;i++){
//     if(person[i].status === true){
//         newPerson.push(person[i].name)
//     }
// }
// // console.log(newPerson)
// for(let i =0;i<person.length;i++){
//     if(person[i].status === true){
//         newPerson.push(person[i].name)
//     }
// }
// console.log(newPerson)



// const numberswww = [10, 29, 11, 43, 37];
// const sub = numberswww.reduce((a,b) => a+b)
// console.log(sub)

// constructor function used as blueprints for creating objects with similar properties and methods. they are invoked using the new keyword create instances of objects.
// function Person(name,place){
//     this.name = name 
//     this.place = place 
// }
// let user1 = new Person('nitesh','grantroad')
// console.log(user1)

// function Family(name,place,age){
//     this.name = name 
//     this.place = place 
//     this.age = age 
// }
// let user1 = new Family('kiran','kalyan',48)
// console.log(user1)


// a list of array methods 
// values() 1 
// const atr = ['appple','banana','curry']
// const iterator = atr.values()
// for(const item of iterator){
//     console.log(item)
// }
// const friends = ['a','b','c']
// const iterator = friends.values();
// for(let value of iterator){
//     console.log(value)
// }

// length() 2
// const arr = ['nietsh','arvind','urvashi','sameet']
// console.log(arr.length)

// reverse() 3 
// const arr = ['nitesh','sameet','urvashi','arvind']
// console.log(arr.reverse())

// sort() 4 
// const arr = ['nitesh','sameet','urvashi','arvind']
// console.log(arr.sort())

// at()  5 
// const arr = ['nitesh','sameet','urvashi','arvind']
// console.log(arr.at(2))

// fill() 6
// const arr = ['nitesh','sameet','urvashi','arvind']
// console.log(arr.fill('mom',1,2))

//  from() 7
// const objexample  = {
//     0:'apple',
//     1:'banan',
//     2:'mango',
//     3:'cherry',
//     length:4
// }
// const arr = Array.from(obj)
// console.log(objexample)

// join() 8 
// const arr = ['a','b','c']
// const str = arr.join(', ')
// console.log(str)

// toString()
// const arr = ['apple','mango','cherry']
// console.log(arr.toString())

// pop() this method removes the last element from an array and returns that element 
// const arr = ['apple','mango','cherry']
// arr.pop()
// console.log(arr)

// forEach() method executes a provided function once for each array element. it doesnt return anything it just executes the callback function on each element of the array
// let fruits = ['apple','mango','watermelon','pineapple']
// const result = fruits.forEach(function(item){
//     console.log(item)
// })

// shift() method removes the first element from an array and returns that removed element. this method changes the length of the array.
// let fruits = ['apple','mango','pineapple','watermelon']
// const result = fruits.shift()
// console.log(result)

// copyWithin() method shallow copies part of an array to another location in the same array and returns the modified location in the same array and returns the modified array without modifiying its length. syntax copyWithin(target,start,end)
// let numbersww = [1,2,3,4,5]
// const result = numbersww.copyWithin(1,2)
// console.log(result)

// push() method adds one or more elements to the ened of an array and returns the new length of the array
// let friends = ['cherry','apple','peas','watermelon','pomegranatee','guava']
// console.log(friends.length)
// const result = friends.push('kiwi')
// console.log(result)

// unshift() methods add one or more elements to the beginning of an array and returns the new length of the array 
// let fruits = ['apple','mango','watermelon','strawberry']
// console.log(fruits.length)
// const result = fruits.unshift('kiwi')
// console.log(result)

// concat() method is used to merge two or more arrays. this method doesnt change the existing arrays, but instead of returns a new array
// const a = 'nitesh'
// const b = 'sameet'
// console.log(a.concat(' ',b))

// splice()method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// const fruits = ['apple','mango','watermelon','pineapple','kiwi']
// const result = fruits.splice(2,2)
// console.log(result)

// flat() this method creates a new array with all sub-array elements concatentated into it recursively up to the specified depth
// const number = [1,[2,3],4,5]
// console.log(number.flat())

// lastIndexOf() this method returns the last index at which a given element can be found in the array
// const numbersgg = [1,2,3,4,5]
// const lastIndexOf = numbers.lastIndexOf(3);
// console.log(lastIndexOf)

// indexOf() this method returns the index of the first occurence of a specified element in an array. if the element is not present, it returns -1 
// const arr = [5,10,15,30]
// const index = arr.indexOf(30)
// console.log(index)

// of() this method creates a new array instance with a variable number of arguments, regardless of number or types of the arguments.
// const arr = Array.of(1,2,3,'four',true)
// console.log(arr)
// const example = ['nitesh','sameet',true,1,2,3,44]
// console.log(example)

// every() this method checks if all elements in an array a test (provided as a function). it returns true if all elements pass the test; otherwise it returns false 
// const arr = [2,4,6,8]
// const arrodd = [ 1,3,5,7,9,11]
// const isEven = (num) => num % 2 === 0 
// const isOdd = (num) => num % 2 !== 0
// const result = arr.every(isEven)
// const resultOdd = arrodd.every(isOdd)
// console.log(result)
// console.log(resultOdd)

// slice() this method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
// const arr = [1,2,3,4,5,6]
// const result = arr.slice(2,3)
// console.log(result)

// https://codeburst.io/javascript-array-distinct-5edc93501dc4
// const distinct = (value,index,self) => {
//     return self.indexOf(value) === index 
// }
// const years = [2011,2011,2012,2013,2014]
// console.log(years.filter(distinct))

// const distinct = (value,index,arr) => {
//     return arr.indexOf(value) === index 
// }
// const years = [2011,2011,2012,2013,2014]
// const word = ['vishal','vishal','mayur']
// console.log(...new Set(word))
// console.log(Array.from(new Set(word)))
// console.log(...new Set(years))
// console.log(Array.from(new Set(years)))
// console.log(years.filter(distinct))
// console.log(Array.from(new Set(years)))
// const array = [
//     {name:'nitesh',age:34},
//     {name:'sameet',age:41},
//     {name:'urvashi',age:65},
//     {name:'arvind',age:68},
//     {name:'nitesh',age:34},
// ]
// const result = [...new Set(array.map((val) => val.name))]
// console.log(result)


// const word = 'nitesh khatri'
// console.log(word.split("").reverse("").join(""))

// const a = 10
// const b = 20
// console.log(a+b)
// console.log(a-b)
// console.log(a%b)
// console.log(a*b)

// flatmap() this method maps each element using a mapping function, then flattens the result into a new array
// const arr = [1,2,3]
// const result = arr.flatMap((x) => [x*2])
// console.log(result)

// findIndex() this method returns the index of the first element in an array that passes a test (provided as a function). if no element passes the test , it returns - 1 
// const arr = [1,3,4,5,66,77]
// const result = (num)=> num > 30 
// const index = arr.findIndex(result)
// console.log(index)


// find() this method returns the value of the first element in an array that passes a test (provided as a function). if no element passes the test, it returns undefined.
// const arr = [10,20,30,40,50]
// const greaterThan = (num) =>  num > 30
// const result = arr.find(greaterThan)
// console.log(result)

// includes() this method determines whether an array includes a certain value among its entries, returning true or false as appropriate 
// const arr = [10,20,30,40]
// const mark = arr.includes(100)
// console.log(mark)

// entries() this method returns a new Array iterator object that contains the key/value pairs for each index in the array 
// const arr = ['a','b','c']
// const iterator = arr.entries();
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)

// reduce() this method applies a function to each element of an array and reduces that array to a single value .
// const resultarr = [10,20,3045,55,666,777]
// const result = resultarr.reduce((a,b) => a+b)
// console.log(result)

// reduceRight() this method is similar to the reduce() method. however, it is iterates over the array elements from right to left instead from left to right
// const resultarr = [10,20,3045,55,666,777]
// const result = resultarr.reduceRight((a,b) => a+b)
// console.log(result)

// isArray() this method determines whether the passed value in an array or not
// const fruits = ['apple','pineapple','watermelon','guava']
// const result = Array.isArray(fruits)
// console.log(result)
// const person = {
//     name:'nitesh',
//     age:34
// }
// const result = Array.isArray(person)
// console.log(result)

// filter() this method creates a new array with all elements that pass the test implemented by the provided function 
// const numbers111 = [10,20,30,40]
// const filtermap = numbers111.filter((number) => {
//     return number > 20
// })
// console.log(filtermap)

// keys() this method returns an array containing the keys of the given object
// const myObj = {a:1,b:2,c:3}
// const keysArray = Object.keys(myObj)
// const valuesArray = Object.values(myObj)
// const entriesArray = Object.entries(myObj)
// console.log(keysArray)
// console.log(valuesArray)
// console.log(entriesArray)

// map() this method creates a new array with the results of calling a provided function on every element in the calling array 
// const numbersword = [1,2,3,45,6,7,7]
// const result = numbersword.map((val) => val * val)
// console.log(result)

// get current date and time
// const now = new Date().getFullYear()
// console.log(now)

// check if a variable is an array
// const friends = ['nitesh','sameet','mom','daddy']
// console.log(Array.isArray(friends))

// Merge two arrays
// const a1 = 'aaa'
// const a2 = 'bbb'
// const newArray = a1.concat(a2)
// console.log(newArray)

// remove duplicates from an array
// const friends = ['vishal','mayur','vishal']
// const result = friends.map((array,index,item) => array.index(item) === index)
// console.log(result)
// function distinct(ele,index,arr){
//     return arr.indexOf(ele) === index
// }
// function remoeDup(data){
//     return data.filter((val,index) => data.indexOf(val) === index)
// }
// function ExampleDelDup(val,index,arr){
//     return arr.indexOf(val) === index
// // }
// function remveDup(data){
//     return data.filter((val,index) => data.indexOf(val) === index)
// }
// console.log(remveDup(friends))
// console.log(friends.filter(ExampleDelDup))
// console.log([...new Set(friends)])
// console.log(Array.from(new Set(friends)))

// console.log(Array.from(new Set(friends)))
// console.log([...new Set(friends)])
// function getDup(data){
//     return data.filter((val,index) => data.indexOf(val) !== index)
// }
// function removeDup(data){
//     return [...new Set(data)]
// }
// console.log(removeDup(friends))
// console.log(getDup(friends))
// https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31

// sort an array in asc / des order
// const arraynumber = [22,5,4,55,56,77,88,1,2,3,3]
// const asc = arraynumber.sort((a,b) => a-b)
// console.log(asc)
// const dsc = arraynumber.sort((a,b) => b-a)
// console.log(dsc)
// const word = ['happy','sad','crying','angry','scared','excellent','very good','poor']
// const result = word.sort(function(a,b) {
//     if(a<b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log(result)

// reverse an array
// console.log([1,2,34,55,66,77,3,4,5].reverse())

// converting string to number 
// const word = 56+66
// console.log(parseInt(word))

// generate a random number between two values
// const max = 10
// const min = 5
// const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNumber)

// check if a string contains a substring
// const word = 'how are you doing'
// console.log(word.includes('doing'))

// get the length of an object
// const person = {
//     name:'nitesh',
//     age:32,
//     mobile:9920767524,
//     email:'nitesh.khatri88@gmail.com'
// }
// console.log(Object.keys(person).length)

// convert object to array
// console.log(Object.entries(person))

// check if an object is empty
// console.log(Object.entries(person))

// get current URL
// console.log(window.location.url)

// redirect to a new URL
// console.log(window.location.replace(url))

// set a cookie 
// document.cookie = 'name=value;expiresdate;path=path;domain=domain;secure';

// check if a cookie exists
// document.cookie.split(';').some((item) => item.trim().startsWith('name='));

// get the current viewport dimensions
// const viewportWidth = Math.max(document.documentElement.clientWidth || 0,window.innerWidth || 0)
// const viewportHeight = Math.max(document.documentElement.clientHeight || 0,window.innerHeight || 0)

// copy text to clipboard
// navigator.clipboard.writeText(text);

// async/await
// async function Example(){
//     return 'hello'
// }
// console.log(Example())

// async function Example1(){
//     return 'hello'
// }
// console.log(Example1())

// function Example2(){
//     return Promise.resolve('sameet')
// }
// console.log(Example2())

// async function Example(){
//     let myPromise = new Promise(function(resolve,reject){
//         resolve('nitesh khatri')
//     });
//     document.getElementById('demo').innerHTML = await myPromise
// }
// Example();

// async function Example(){
//     let myExample = new Promise(function(resolve,reject){
//         resolve('nitesh khatri')
//     })
//     document.getElementById('demo').innerHTML = await myExample
// }
// Example();

// async function Example(){
//     let myPromise = new Promise(function(resolve,reject){
//         setTimeout(function() {
//             resolve('nitesh khatri')
//         },1000)
//     })
//     document.getElementById('demo').innerHTML = await myPromise
// }
// Example();

// async function Example(){
//     let myPromise = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('sameet khatri')
//         },1000)
//     })
//     document.getElementById('demo').innerHTML = await myPromise
// }
// Example()

// async function Example(){
//     console.log('async function')
//     return Promise.resolve(1)
// }
// Example()

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('nitesh khatri')
//     },1000)
// })
// console.log(promise)

// let example = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('nitesh khatri')
//     },1000);
// })
// console.log(example)

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//        resolve('nitesh khatri') 
//     },1000);
// })

// async function Fantastic(){
//     let result = await promise;
//     console.log(result)
//     console.log('hello')
// }
// Fantastic()

// const a = 'nitesh khatri'
// function Example(){
//     const a = 'sameet khatri'
//     console.log(a)
// }
// Example()
// let promise1 = 'nitesh'
// let promise2 = 'sameet'
// let promise3 = 'arvind'
// async function Example(){
//     let result1 = await promise1
//     let result2 = await promise2
//     let result3 = await promise3
//     console.log(result1)
//     console.log(result2)
//     console.log(result3)
// }
// Example()

// let promise1 = 'nitesh'
// let promise2 = 'sameet'
// let promise3 = 'arvind'
// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('nitesh khatri')
//     },1000)
// })
// async function Example(){
//     let result1 = await promise1
//     let result2 = await promise2
//     let result3 = await promise3
//     console.log(result1)
//     console.log(result2)
//     console.log(result3)
// }
// Example()

// // console.log('1'+'1')
// console.log('1'-1)
// console.log(1 + '1' - 1);

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//        resolve('nitesh khatri') 
//     },1000);
// })
// async function Example(){
//     let result = promise 
//     console.log(result)
//     console.log('hello')
// }
// Example()

// arName = "Volvo";
// const carName;
// console.log(arName)

// function Person(first,last,age,eyeColor){
//     this.first = first
//     this.last = last
//     this.age = age
//     this.eyeColor = eyeColor
// }
// Person.prototype.nationality ='English'
// const myExample = new Person('nitesh','khatri',34,'black')
// console.log(myExample.nationality)
// console.log(myExample)

// function User(first,last){
//     this.first = first
//     this.last = last
// }

// User.prototype.dob = '17/06/1989'
// User.prototype.email = 'nitesh.khatri88@gmail.com'
// const myExample = new User('nitesh','khatri')
// console.log(myExample)
// console.log(myExample.dob)


// constructor function
// function Person(){
//     this.first = 'nitesh' 
//     this.last = 'khatri'
// }
// creating objects
// const person1 = new Person()
// const person2 = new Person()
// console.log(person1)
// console.log(person2)

// adding property to constructor function
// Person.prototype.gender = 'male'

// prototype value of person
// console.log(Person.prototype)

// inheriting the prototype from prototype
// console.log(person1)
// console.log(person2)
// const person = new Person();
// console.log(Person.prototype)

// constructor function 
// function User(){
//     this.fullname = 'nitesh khatri',
//     this.age = 34,
//     this.jobtitle = 'front-end developer'
// }
// function User2(){
//     this.fullname = 'sameet khatri',
//     this.age = 41,
//     this.jobtitle = 'field service engineering'
// }
// createing objects
// const user1 = new User();
// const user2 = new User2();

// adding property to constructor function
// User1.prototype.gender ='male'
// User2.prototype.gender ='female'
// console.log(User.prototype)
// console.log(user1)
// console.log(user2)
// console.log(user2.gender)
// function Example(fname,lname){
//     this.fname = fname
//     this.lname = lname
// }
// let user = new Example('nitesh','khatri')
// console.log(user)

// function Person(){
//     this.fname = 'nitesh'
//     this.lname = 'khatri'
// }
// Person.prototype.gender = 'male'
// let user = new Person()
// console.log(Person.gender)
// console.log(user)

// function Person(){
//     this.name = ' nitesh'
// }
// Person.prototype.name = 'sameet'
// Person.prototype.age = 41
// const person1 = new Person()
// console.log(person1.name)
// console.log(person1.age)


// class Product1{
//     constructor(fname,age){
//         this.fname = fname;
//         this.age = age;
//     }
// }

// const user = new Product1('nitesh khatri',34)
// console.log(user)

// class Example{
//     constructor(name,age,dob){
//         this.name = 'name';
//         this.age = 'age';
//         this.dob = 'dob'
//     }
// }

// const user = new Example('nitesh',34,'17th june 1989')
// console.log(user)

// Array.prototype.myUpperCase = function(){
//     for(let i=0;i<this.length;i++){
//         this[i] = this[i].toUpperCase();
//     }
// }
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.myUpperCase();
// console.log(fruits)

// Array.prototype.myExample = function(){
//     for(let i=0;i<this.length;i++){
//         this[i] = this[i].toUpperCase();
//     }
// }
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.myExample();
// console.log(fruits)

// let text = 'how you doing where are you doing'
// console.log(text.match('are'))

// console.log('nitesh khatri'.endsWith('khatri'))
// console.log('nitesh khatri'.startsWith('khatri'))

// console.log('nietsh khatri'.charAt())

// console.log('nitesh khatri'.charCodeAt('khatri'))

// function myDisplay(some){
//     document.getElementById("demo").innerHTML = some;
// }

// function myCalc(a,b){
//     let sum = a+b
//     myDisplay(sum) 
// }
// myCalc(10,20)


// function ExampleTwo(superb){
//     document.getElementById('good').innerHTML = superb;
// }
// function myDisplay(a,b){
//     let sum =  a-b 
//     ExampleTwo(sum)
// }
// myDisplay(102,22)

// function Result(excellent){
//     document.getElementById('good').innerHTML = excellent
// }
// function myCalc(a,b){
//     let multiple = a*b 
//     Result(multiple)
// }
// myCalc(10,20);

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('nitesh khatri')
//     },100)
// })
// async function myExample(){
//     let result = await promise 
//     console.log(result)
//     let example = await promise 
//     console.log(example)
// }
// myExample()

// let um = 5*5 
// console.log(typeof um)

// const person = {
//     fullName:function(fname,lname){
//         console.log(`hello ${fname} ${lname}`)
//     }
// }
// person.fullName.call(null,'nitesh','khatri')

// const user = {
//     fullName:function(fname,lname,age){
//         console.log(`helllo ${fname} ${lname} ${age}`)
//     }
// }
// user.fullName.call(null,'sameet','khatri',41)

// const user = {
//     fullName:function(fname,lname,age){
//         console.log(`${fname} ${lname} ${age}`)
//     }
// }
// user.fullName.call(null,'nitesh','khatri',34)

// const numbers = [1,2,3,4,5]
// const max = Math.max.apply(null,numbers)
// console.log(max)
// const min = Math.min.apply(null,numbers)
// console.log(min)

// const greet = function(greeting){
//     console.log(`${greeting} ${this.name}`)
// }
// const person = {
//     name:"nitesh khatri"
// }
// const greetPerson = greet.bind(person,'hello')
// greetPerson()

// const Example = {
//     fullName:function(fname,lname,age){
//         console.log(`${fname} ${lname} ${age}`)
//     }
// }
// Example.fullName.call(null,'nitesh','khatri',34)

// let john = {
//     name:'nitesh',
//     sayHi:function(){
//         console.log('hi buddy')
//     }
// }
// nitesh.sayHi()

// let str = "Hello";
// console.log(str.toUpperCase())

// console.log( typeof 0 );

// let zero = new Number(0)
// if(zero){
//     console.log(zero)
// }

// let num = Number("123"); 
// console.log(num)

// let num = Number("123")
// console.log(typeof num)

// let arr = ["I", "go", "home"];
// delete arr[1]
// console.log(arr)

// var stringname = 'nitesh khatri'
// console.log(stringname)
// var stringname=new String("string literal");  
// console.log(stringname)

// const element = document.getElementById("div1");
// const node = document.createTextNode("This is a new paragraph.");
// para.appendChild(node)
// const child = document.getElementById("p1");
// element.insertBefore(para,child)

// let str = 'Hello World';
// let ch1 = str[0]
// console.log(ch1)


// const friends = ['vishal','vishal','mayur']
// const distinct = (value,index,self) => {
//     return self.indexOf(value === index)
// }
// function removeDup(data){
//     return [...new Set(data)]
// }

// console.log(friends.filter(distinct))
// console.log(...new Set(friends))
// console.log(Array.from(new Set(friends)))
// console.log(removeDup(friends))
// console.log(Array.from(new Set(friends)))
// const result = friends.map((arr,index,ele) => arr.indexOf(ele) === index)
// console.log(result)

// let str = 'nitesh khatri'
// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }

// console.log("a" < "b"); //true
// console.log("b" < "a"); //false
// console.log("Apple" == "Apple"); //true
// console.log("Apple" == "apple"); //false
// console.log("Apple" === "Apple"); //true
// console.log("Apple" === "apple"); //false
// console.log("Apple".localeCompare("Apple")); //0
// console.log("Apple".localeCompare("apple")); //1

// const people = ['vishal','abhijeet','simchal','vishal','abhisar']
// const result = people.sort(function(a,b) {
//     if(a<b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log(result)

const wordnumber = ['nitesh', 'khatri', 1, 2, null, undefined]
// const filter = wordnumber.filter((val) => typeof val == 'string' || typeof val == 'number' || typeof val == 'undefined')
// console.log(filter)
// const filter = wordnumber.filter((val) => typeof val !== 'object' && typeof val !== 'undefined')
// console.log(filter)
// console.log(wordnumber.toString().toUpperCase())

// function Person(fname,lname,age,dob){
//     this.fname = fname
//     this.lname = lname
//     this.age = age
//     this.dob = dob
// }
// let example = new Person('nitesh','khatri',34,'17/06/1989')
// console.log(example);

// function Person(first, last, age, eye,dob) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.dateofbirth = dob
//   }
//   Person.prototype.name = function(){
//     return this.firstName + " " + this.lastName
//   }
//   Person.prototype.dob = function(){
//     return this.dob
//   }
//   const Example = new Person('nitesh','khatri',34,'black','17th june 1989')
//   console.log(Example.name())
//   console.log(Example.dob())

// function Person(fname,lname,age){
//     this.firstName =fname
//     this.lastName =lname
//     this.age =age
// }

// Person.nationality = "English";
// Person.dob = '17/06/1989'
// Person.jobtitle = 'front-end developer'

// const myFather = new Person('arvind','khatri',68)
// const myMother = new Person('urvashi','khatri',65)
// console.log(myFather)
// console.log(myMother)
// console.log(Person.nationality)
// console.log(Person.dob)

// const friends = ['vishal','vishal','mayur','sonal']
// const distinct = ((value,index,arr) => {
//     return arr.indexOf(value) === index
// })
// console.log(friends.filter(distinct))
// console.log(Array.from(new Set(friends)))
// console.log([...new Set(friends)])

// const result = friends.sort(function(a,b)  {
//     if(a<b){
//         return -1 
//     }
//     else{
//         return 1 
//     }
// })
// console.log(result)

// const numberword = [55,66,4,11,22]
// console.log(numberword.sort((a,b) => b-a))
// for(let key of numberword){
//     console.log(key)
// }

// setTimeout(()=>{
//     console.log('nitesh khatri')
// },1000)

// setTimeout(()=>{
//     for(let i =0;i<10;i++){
//         console.log(i)
//     }
// },1000)

// let promise = new Promise(function(resolve,reject) {
//     setTimeout(() => {
//         resolve('nitesh khatri')
//     },1000)  
// })
// async function Example(){
//     let result = await promise
//     console.log(`${result} is superb`)
// }
// Example()

// let promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('nitesh khatri')
//     },1000)
// })
// async function Example(){
//     let result = await promise 
//     console.log(`${result} is superb`)
// }
// Example();


// let promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('nitesh khatri')
//     },1000)
// })
// async function Example(){
//     let result = await promise 
//     console.log(result)
// }
// Example()

// const sum = (a,b) =>{
//     return a + b 
// }
// console.log('sum',sum(10,20))
// const minus = (a,b) =>{
//     return a - b 
// }
// console.log('minus',minus(10,20))
// const multiply = (a,b) =>{
//     return a * b 
// }
// console.log('multiply',multiply(10,20))
// const divide = (a,b) =>{
//     return a / b 
// }
// console.log('divide',divide(10,20))

// const mindset = ['vijay', 'vishal', 'pranay', 'vishal']
// const distinct = (value,index,arr) => {
//     return arr.indexOf(value) === index
// }
// console.log(Array.from(new Set(mindset)))
// console.log(mindset.filter(distinct))
// console.log(new Set(mindset))
// console.log(...new Set(mindset))
// console.log([...new Set(mindset)])
// const sortorder = mindset.sort(function(a,b){
//     if(a<b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log(sortorder)
// const situation = [1,2,3,4,5,5,6]
// console.log(situation.sort((a,b) => b-a))

// console.log('situation'.split("").reverse("").join(""))
// console.log('mindset'.replace('mindset','situation'))
// console.log('mindset'.repeat(4))
// console.log('mindset'.toLocaleLowerCase())
// console.log('mindset'.toLocaleUpperCase())

// class User {
//     constructor(fname,lname){
//         this.fname = fname
//         this.lname = lname
//     }
// }
// let ability = new User('sameet','khatri')
// let motivation = new User('nitesh','khatri')
// // console.log(ability)
// // console.log(motivation)
// console.log('ability',{...ability},'motivation',{...motivation})

// function Emp(fname,lname,age){
//     this.fname = fname;
//     this.lname = lname;
//     this.age =age;
// }

// Emp.prototype.company = 'assurekit'
// Emp.prototype.dob = '14/06/1982'
// let teamwork = new Emp('nitesh','khatri',34)
// let tasks = new Emp('sameet','khatri',41)
// const result1 = 'nitesh'.__proto__.company = ' assurekit'
// const result2 = 'sameet'.__proto__.company = ' hologic'
// console.log(teamwork.fname,teamwork.lname,teamwork.age,result1)
// console.log(tasks.fname,tasks.lname,tasks.age,result2)
// console.log({...teamwork,result1})
// console.log({...tasks,result2})

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   Cat.prototype.age = 34 
//   let user = new Cat('kitten','black')
//   console.log(user.name,user.color,user.age)
//   console.log(Cat.hasOwnProperty('color'))
//   console.log(Cat.hasOwnProperty('name'))

// const a = 'nitesh khatri'
// const b = 'sameet khatri'
// console.log(...a,...b)

// const preparation = ['a','b',1,2,3,4,5,null,undefined]
// const result = preparation.filter((val) => typeof val !== 'object' && typeof val !== 'undefined')
// const result = preparation.filter((val) => typeof val === 'object' || typeof val === 'undefined')
// const result = preparation.filter((val) => typeof val === 'number' || typeof val === 'string')
// const result = preparation.filter((val) => typeof val === 'number')
// const result = preparation.filter((val) => typeof val === 'string')
// const result = preparation.filter((val) => typeof val === 'object')
// const result = preparation.filter((val) => typeof val === 'undefined')
// console.log(result)

// console.log(null === undefined)
// console.log(null == undefined)

// console.log(1 === '1')
// console.log(1 == '1')

// function compare(different){
//     return (different ? 'yes' : 'no')
// }
// console.log(compare(no));

// const age = 50;
// const result = age>=35  ? 'true' : 'false'
// console.log(result)

// const age = 62
// let comment = ''
// if(age>90){
//     comment = 'A+'
// }
// else if(age > 70){
//     comment =  'B'
// }
// else if(age > 60){
//     comment = 'C'
// }
// else{
//     comment = 'failed'
// }
// console.log(comment);

// var a = 'nitesh khatri'
// function child(){
//     console.log(a)
// }
// function rich(){
//     child();
//     var a = 'sameet khatri'
// }
// rich();

// function Example(){
//     setTimeout(() => {
//         console.log('happ timer')
//     },1000)
// }

// let objesssct = {
//     name: "Nishant",
//     age: 24, 
//     salary: 200,
//     height: '20 meters',
//     weight: '70 KG'
// }
// let user = Object.assign({},objesssct)
// console.log(user)

// class Example{
//     constructor(fname,lname){
//         this.fname = fname
//         this.lname = lname
//     }
// }
// let user = new Example('nitesh','khatri')
// Example.prototype.age = 34
// Example.__proto__.jobtitle = 'developer'
// console.log(user,user.age)


//     let objesssct = {
//         name: "Nishant",
//         age: 24, 
//         salary: 200,
//         height: '20 meters',
//         weight: '70 KG'
//     }
// let { name, salary, weight } = objesssct;
// console.log(name,salary,weight)

// function sample(a, b) {
//     return [a + b, a * b]
// }
// console.log(sample(10,20))

// let array1 = [1, 2, 3, 4, 5,5]
// let array2 = [6, 7, 8, 9, 10,10]
// console.log(array1.concat(array2))
// console.log(Array.from(new Set(array1.concat(array2))))
// const easy = (val,index,arr) => {
//     return arr.indexOf(val) === index
// }
// const mood = ['happy','sad','crying','anxiety','anxiety']
// console.log(mood.filter(easy))
// console.log(Array.from(new Set(mood)))

// console.log('nitesh'.split("").reverse("").join(""))
// console.log('nitesh'.length)
// console.log('nitesh'.repeat(2))
// const word = 'how are you doing, where are you right now'
// const example = '/are/d'
// console.log(word.   example)
// let array1 = [1, 2, 3, 4, 5]
// let array2 = [6, 7, 8, 9, 10]
// console.log(...array1,...array2)

// let array1 = [1, 2, 3, 4, 5]
// let array2 = [6, 7, ...array1, 8, 9, 10]
// console.log(array2)

// let object1 = {
//     firstName: "Nishant",
//     age: 24, 
//     salary: 300,
// }

// let object2 = {
//     lastName: "Kumar",
//     height: '20 meters',
//     weight: '70 KG'
// }
// let combinedobject = {...object1,...object2}
// console.log(combinedobject)

// const note = {
//     id: 1,
//     title: 'My first note',
//     date: '09/01/2010',
//   }
//   const id = note.id 
//   const title = note.title
//   const date = note.date 
//   console.log(id)
//   console.log(title)
//   console.log(date)
//   console.log(new Date().getFullYear())

// const note = {
//     id: 1,
//     title: 'My first note',
//     date: '01/01/1970',
//     author: {
//       firstName: 'Sherlock',
//       lastName: 'Holmes',
//     },
//   }
//   console.log(note.id)
//   console.log(note.title)
//   console.log(note.date)
//   console.log(note.author.firstName)
//   console.log(note.author.lastName)

// const tools = ['hammer', 'screwdriver']
// const otherTools = ['wrench', 'saw']
// const result = [...tools,...otherTools]
// console.log(result)

// const user = {
//     id: 3,
//     name: 'Ron',
//   }

//   const updatedUser = { ...user, isLoggedIn: true }
//   console.log(updatedUser)

// const person = {
//     name:'nitesh',
//     age:34
// }
// const user = {...person,email:'nitesh.khatri88@gmail.com'}
// console.log(user)

// const user = {
//     id: 3,
//     name: 'Ron',
//     organization: {
//       name: 'Parks & Recreation',
//       city: 'Pawnee',
//     },
//   }
//   console.log(user.organization.name)
//   console.log(user.organization.city)

// const group = ['nitesh','khatri',34]
// const [fname,...rest] = group 
// console.log(fname)
// console.log(rest)

// let promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('nitesh khatri')
//     },1000)
// })
// async function Example(){
//     let result = await promise 
//     console.log(result)
// }
// Example()

// function Parent(){
//     console.log('nitesh')
//     function Child(){
//         console.log('sameet')
//     }
// }
// Parent()

// let obj1 = {
//  fname:'nitesh',
//  lname:'khatri',
//  age:34,
//  mob:9920767524
// }

// obj1.jobtitle = 'front-end developer'
// obj1.__proto__.gender = 'male'
// const user = obj1.__proto__.gender = 'male'
// console.log(obj1,obj1.jobtitle);
// console.log(user);

// const str = "Hello World";
// console.log(str.charAt(0))

// const str = "Hello World";
// console.log(str.charCodeAt(0));

// const str = "Hello";
// const str2 = " World";
// console.log(str.concat(str2))

// console.log('nitesh khatri'.startsWith('n'))
// console.log('nitesh khatri'.endsWith('i'))

// console.log('how are you doing, where are you right now'.includes('happy'))
// console.log('how are you doing, where are you right now'.includes('smile'))
// console.log('how are you doing, where are you right now'.includes('now'))

// console.log('nitesh khatri'.indexOf('khatri'))

// console.log('nitesh khatri'.lastIndexOf('khatri'))

// console.log('nitesh khatri'.match(/[a-z]/))
// console.log('nitesh khatri'.matchAll(/[a-z]/g))

// console.log('nitesh'.padStart(20,'nitesh'))

// console.log('sameet'.padEnd(22,'sameet'))

// console.log('happy'.repeat(10))

// console.log('nitesh'.replace('sameet'))

// const result =  'how are you, where are you now?'
// console.log(result.replaceAll('are','stupid'))

// const str = 'nitesh khatri'
// const regex = /[^\h/h]/g;
// console.log(str.regex)

// console.log('nitesh'.slice(0,5))

// console.log('nitesh'.split(''))

// const friends = ['vijay','vijay','vishal']
// const distinct = (val,index,arr) => {
//     return arr.indexOf(val) === index
// }
// console.log(friends.filter(distinct))
// console.log(Array.from(new Set(friends)))
// console.log(new Set(friends))

// console.log('nitesh'.startsWith('khatri'))

// const str =' nitesh khatri'
// console.log(str.substring(1,4))

// console.log('nitesh'.substr(1,2))

// console.log('NITESH KHATR'.toLocaleLowerCase())
// console.log('NITESH KHATR'.toLocaleUpperCase());

// console.log('nitesh'.toString())
// const str = "  Hello  World  ";
// console.log(str.trim())

// console.log('nitesh'.trimEnd())

// console.log('nitesh'.trimStart());

// console.log('nitesh'.length)
// console.log('nitesh'.nth(3n))
// console.log('nitesh'.charAt(7))
// console.log('nitesh'.toLowerCase())
// console.log('nitesh'.toUpperCase())

// console.log('nitesh'.indexOf('t'))

// console.log('nitesh'.split(" "))

// console.log('nitesh   '.trim())
// console.log('nitesh' < 'sameet')
// console.log('sameet' > 'nitesh')
// console.log('nitesh'.includes('n'))
// console.log('sameet'.includes('n'))
// console.log('nitesh'.includes('n'))
// console.log('sameet'.includes('sa'))
// console.log('nitesh '.repeat(10,))
// console.log('nitesh'.endsWith('h'))
// console.log('nitesh'.charCodeAt('n'))
// console.log('nitesh'.concat('sameet'))
// console.log('nitesh'.concat(' - ' ,' +', 'sameet'))
// console.log('nitesh'.slice(1,3))
// console.log('nitesh'.substr('nitesh'))
// console.log('nitesh'.trimLeft('sameet'))
// console.log('nitesh'.trimRight('vishal'))
// console.log('nitesh'.toLocalCompare('sameet'))
let names = ["Zoe", "Adam", "Dan"]
// console.log(names.toString())
// console.log(names.join(' and '))
// concat 
// let nums = [1, 2, 3]
// let nums2 = [4, 5, 6]
// let nums3 = [7, 8, 9]
// console.log(nums.concat(nums2).concat(nums3))

// let arr = ["Danny", "Joe"]
// arr.splice(1,0,'nitesh','sameet')
// console.log(arr)

// let arr = ["Danny", "Joe"]
// let spliced = arr.splice(0,2,'sameet','arvind')
// console.log(spliced)

// let arr = ["Danny", "Joe", "Amy"]
// console.log(arr.splice(1,2,'nitesh','sameet'))

// let arr = ["Danny", "Joe", "Amy"]
// console.log(arr.slice(0))

// let arr = ["Danny", "Joe", "Amy", "Joe"]
// console.log(arr.indexOf("Joe"))

// let arr = ["Danny", "Joe", "Amy", "Joe"]
// console.log(arr.lastIndexOf("Amy"))

// let numbers = [1,2,3,4]
// console.log(numbers.forEach((val) => console.log(val)))

// let numbers = [1, 2, 3, 4]
// let dblnums = numbers.map(n => n *2 )
// console.log(dblnums)

// let dblnumsresult = numbers.map((n,i) => {
//     if(i % 2 === 1 ) return n * 2 
//     else return n 
// })
// console.log(dblnumsresult)

// let articles = [
//     { title: "PHP classes", author: "Danny Adams" ,status:true},
//     { title: "Python arrays", author: "Amy Sanders",status:false },
//     { title: "PHP php", author: "Amy Sanders",status:false },
//     { title: "Arrays in PHP", author: "Danny Adams" ,status:true},
//   ]
//   let PHPArticles = articles.filter((val) => val.status ===  false && val.title.includes('PHP'))
//   console.log(PHPArticles)

// let cities = [
//     { name: "Stokington", rivers: 3 },
//     { name: "Phillydelfia", rivers: 6 },
//     { name: "New Ports", rivers: 2 },
//   ]

//   console.log(cities.filter((val) => val.rivers > 2))

// let numbers = [1, 2, 3, 4]
// let total = numbers.reduce((total,currentNum) => total + currentNum)
// console.log(total)

// let arr = [1, 2, 3]
// let max = arr.reduce((a,b) => {
//     return Math.max(a,b)
// },-Infinity)
// console.log(max)
// let minresult = arr.reduce((a,b) => {
//     return Math.min(a,b)
// })
// console.log(minresult)

// let numbers = [4, 6, 14, 16]
// some
// let GreaterThen = numbers.some((n) => n>6)
// console.log(GreaterThen)
// let lessThen = numbers.some((n) => n<6)
// console.log(lessThen)

// every 
// let GreaterThen = numbers.every((n) => n>2)
// console.log(GreaterThen)
// let lessThen = numbers.every((n) => n<2)
// console.log(lessThen)


// // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// let arr = [1,2,3,[1,2],4]
// console.log(arr.flat())

// let arr = [1, 2, 3, [1, 2], [1, [1, 2]]]
// console.log(arr.flat())
// console.log(arr.flat(2))

// let stock = [
//     { item: "ketchup", quantity: 32 },
//     { item: "mayo", quantity: 9 },
//     { item: "hot sauce", quantity: 12 },
//     { item: "ketchup", quantity:22 },
//   ]
//   console.log(stock.find((val) => val.item === 'ketchup'))

// let stock = [
//     { item: "ketchup", quantity: 32 },
//     { item: "mayo", quantity: 9 },
//     { item: "hot sauce", quantity: 12 },
//   ]

//   console.log(stock.findIndex((val) => val.item === 'mayo'))

// let name1s = ["Zoe", "Adam", "Dan"]
// console.log(name1s.sort())

// let numbers1 = [3, 1, 7, 2]
// console.log(numbers1.sort((a,b) => a-b))
// console.log(numbers1.sort((a,b) => b-a))

// const list = [😫, 😫, 😫, 😫];
// console.log(list.map((val) => val))

// const list = [1, 2, 3, 4];
// console.log(list.map((val) => val * 2))

// const list = ['happy', 'crying', 'smile', 'angry'];
// console.log(list.filter((val) => val !== 'happy' && val !== 'smile' && val !== 'crying'))

// const list = [1, 2, 3, 4];
// const result = list.reduce((a,b) => {
//     return a + b 
// })
// console.log(result)
// const list = [1, 2, 3, 4];
// const result = list.reduceRight((a,b) => {
//     return a +b 
// })
// console.log(result)

// const list = ['nitesh','sameet','mom','daddy']
// console.log(list.fill('om namah shivay'))

// const list = ['happy', 'crying', 'smile', 'angry','angry'];
// console.log(list.find((val) => val = 'smile'))
// console.log(list.indexOf((val) => val === 'happy'))
// const list = [1, 2, 3, 4, 5];
// console.log(list.includes(11))
// console.log(list.pop())
// console.log(list.push('excellent'))
// console.log(list.shift('how are you'))
// console.log(list.unshift('how are you'))
// console.log(list)
// console.log(list.splice(1,3,'sameet'))
// console.log(list.slice(3))
// console.log(list.join('-'))

// console.log(list.reverse())

// console.log(list.sort())

// console.log(list.some((val) => val === 'happy'))

// console.log(list.every((val) => val === 'happy'))

// console.log(Array.isArray(list))
// console.log(Array.from(new Set(list)))
// const distinct = (val,index,arr) => {
//     return arr.indexOf(val) === index
// }
// console.log(list.filter(distinct))

// const listExample = Array.of(list)
// console.log(listExample);


// const result = list.at(-1)
// console.log(result)

// console.log(list.copyWithin(1,3))
// const listemoji = ['😀', '😫', ['😀',' 😫',' 🤪']];
// console.log(listemoji.flatMap())
// console.log(listemoji.flatMap());

// function regular 
// function sum(a,b){
//     return a +b 
// }
// console.log(sum(10,20))

// function expression
// const sum = function (a,b) {
//     return a +b 
// }
// console.log(sum(20,20))

// arrow function 
// const sum = (a,b) => {
//     return a+ b
// }
// console.log(sum(10,20))

// generator function 
// function* indexGenerator(){
//     let index = 0;
//     while(true){
//         yield index++
//     }
// }
// const g = indexGenerator();
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)

// function* indexExample(){
//     let index = 0;
//     while(true){
//         yield index++ 
//     }
// }
// const g = indexExample();
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)

// console.time("time");
// for(let i=0;i<10;i++){
//     console.log(i)
// }
// console.timeEnd('timeend')

// const objectExample = { a: 1, b: 2, c: 3 }
// console.log(Object.assign({},objectExample))

// const remoDup =(arr) => [...new Set(arr)]
// console.log(remoDup([1, 2, 3, 3, 4, 4, 5, 5, 6]))

// const random = (min,max) = Math.floor(Math.random() * (max-min+1))
// console.log(random)

// const random = (min,max,step=1) => Math.floor(Math.random() * (max-min+1)) * step + min;
// console.log(random(1,20,33))

// number is even or not
// const isEven = (num) => num % 2 === 0 
// console.log(isEven(2))

// number is odd or not
// const isOdd = (num) => num % 2 !== 0 
// console.log(isOdd(1))

// find the factorial of a number
// const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1))
// console.log(factorial)

// find the sum of an array 
// const sum = (arr22) => arr22.reduce((a,b) => a+b)
// console.log(sum([10,20]))

// Find median of an array
// const median = (arr) => {
//     const mid = Math.floor(arr.length / 2),
//       nums = [...arr].sort((a, b) => a - b);
//     return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
//   };
//   console.log(median([1, 2, 3, 4])); 

// Find largest numbers
// const arrggg = [11,33,55,66,77]
// const findLargest = (arr) => arr.map((subArr) => Math.max(...subArr));
// const character = (arr) => arr.map((respect) => Math.max(...respect))
// const character = (arr) => arr.map((respect) => Math.min(...respect))
// console.log(character([arrggg]))
// console.log(findLargest([arrggg]))

// function* HappyCustom(){
//     let index = 0;
//     while(true){
//         yield index++
//     }
// }
// const result = HappyCustom();
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// find average of numbers 
// const arrggg = [11,33,55,66,77]
// const findAvg= (arr) => arr.reduce((a,b) => a+b,0) / arr.length
// console.log(findAvg(arrggg))
// const average = arr => arr.reduce((a,b) => a+b,0) / arr.length
// console.log(average([1,2,2,3,4,4]))

// find smallest numbers
// const arrggg = [11,33,55,66,77]
// const smallestFind = arr => arr.map((val) => Math.min(...val))
// console.log(smallestFind([arrggg]))

// find mode of an array
// const mode = (arr) => {
//     const counts = arr.reduce((a, b) => {
//       a[b] = (a[b] || 0) + 1;
//       return a;
//     }, {});
//     const maxCount = Math.max(...Object.values(counts));
//     return Object.keys(counts).filter((key) => counts[key] === maxCount);
//   };
//   console.log(mode([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

// find the range of an array
// const range = (arr) => Math.max(...arr) - Math.min(...arr)
// console.log(range([1,2,3,4]))

// pick a random elemen from an array 
// const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]
// console.log(pick)

// map an array without map()
// const map = (arr,cb) => Array.from(arr,cb)
// console.log(map([1,2,3,4],(n) => n * 2))


// empty an array without .splice()
// const empty = (arr) => {
//     arr.length = 0
//     return arr 
// }
// console.log(empty([1,2,3,4]))

// const friends= [1,2,3,4]
// const empty = (arr) => {
//     arr.length = 0 
//     return arr 
// }
// console.log(empty(friends))

// convert array to object 
// const toObject = (arr) => ({...arr})
// console.log(toObject(friends))

// find intersection of two arrays
// const intersection = (arr1,arr2) => {
//     const set = new Set(arr1)
//     return arr2.filter((x) => set.has(x));
// }
// console.log(intersection([1,2,3],[2,3,4]))
// const intersection = (arr1,arr2) => {
//     const set = new Set(arr1)
//     return arr2.filter((x) => set.has(x))
// }
// console.log(intersection([1,2,3],[2,3,4,5]))

// const intersection = (arr1,arr2) => {
//     const set = new Set(arr1)
//     return arr2.filter((x) => set.has(x))
// }
// console.log(intersection([1,2,3],[2,3,4,5]))

// remove falsy values from an array
// const compact = arr => arr.filter(Boolean)
// console.log(compact([0,1,false,2,'',3,"a","e",NaN,"s",34]))
// const compact = (arr) => arr.filter(Boolean)
// console.log(compact([1,2,3,4,5,null,undefined,"NaN",0,true,1,false]))


// rounding number to n decimal place
// const round = (num,decimals=0) => num.toFixed(decimals) 
// console.log(round(1.244666,3))

// reverse string
// const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString('nitesh'))
// console.log(reverseString('sameet'))
// console.log(reverseString('arvind'))
// console.log(reverseString('urvashi'))

// find longest word in a string
// const longestTest = (str) => str.split(" ").reduce((a,b) => (a.length > b.length ? a:b))
// console.log(longestTest('How are you where are you doing happy concatenate wonderful fantastic marvellous '))

// generate title case 
// const titlecase = (str) => str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
// console.log(titlecase('nitesh khatri'))

// is string Palindrome
// const isPalindrome = (str) => str === str.split("").reverse().join("");
// console.log(isPalindrome("canal")); 

// Copy to Clipboard
// const copyToClipboard = navigator.clipboard.writeText(text)
// copyToClipboard('nitesh khatri')

// find a vowel in a string
// const findVowel = (str) => str.match(/[aeiou]/gi)
// console.log(findVowel('sameet'))

// email validator
// const validateEmail = (email) => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// };
// console.log(validateEmail('abc@aaa.co'); // true

// Validate only character and space
// const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
// console.log(validateName("abc")); // true
// console.log(validateName("123")); // false

// Validate only number
// const validateNum = (number) => /^[0-9]+$/.test(number);
// console.log(validateNum('123'))
// console.log(validateNum(123))

// casting values in arrays using map
// const CastingValue = (arr) => arr.map(Number)
// console.log(CastingValue(["1", "2", [3],'nitesh']))

// Date and object
// check object is emppty or not 
// const isEmpty = (obj) => Object.keys(obj).length === 0
// console.log(isEmpty({}))

// get the current date 
// const getDate = () => new Date();
// console.log(getDate())

// find the day of the week
// const getDayName = (date) => {
//     const days = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//     ]
//     return days[date.getDay()]
// }
// console.log(getDayName(new Date()))

// find the day of the year
// const getDayOfYear = (date) => {
//     const firstDay = new Date(date.getFullYear(), 0, 1);
//     return Math.ceil((date - firstDay) / 86400000);
//   };
//   console.log(getDayOfYear(new Date()));

// find the number of days in a month 
// const getDaysInMonth = (date) =>
//   new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// console.log(getDaysInMonth(new Date())); // 31

// Find the current month
// const getMonthName =(date) => {
//     const days = [
//         "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//     ]
//     return days[date.getMonth()]
// }
// console.log(getMonthName(new Date))

// find the numbers of seconds until midnight
// const getSecondsUntilMidnight = (date) =>
//   (24 - date.getHours()) * 60 * 60 +
//   (60 - date.getMinutes()) * 60 +
//   (60 - date.getSeconds());
// console.log(getSecondsUntilMidnight(new Date()))

// Log Time from Date
// const logTime1 = (date) => date.toTimeString().slice(0, 8);
// logTime1(new Date()); 
// const logTime2 = (date) => date.toLocaleTimeString("en-GB");
// logTime2(new Date());

// format json output with spaces
// const formatJSON = (json) => JSON.stringify(json,null,2)
// console.log(formatJSON({ a: 1, b: 2 }))

// deep clone an object
// const clone = (obj) => JSON.parse(JSON.stringify(obj));
// console.log(clone({ a: 1, b: 2 })); // { a: 1, b: 2 }

// const deepCopy = (obj,copy =({})) => {
//     if(!obj || typeof obj !== 'object') return obj;
//     for(const key in obj){
//         if(obj.hasOwnProperty(key)) copy[key] = deepCopy(obj[key]);
//     }
//     return copy;
// }
// console.log(deepCopy({name:'n'}))

// let promise  = new Promise(function(resolve,reject) {
//     setTimeout(() => {
//         resolve('nitesh khatri')
//     },1000)
// })

// async function Careful(){
//     let people = await promise
//     console.log(people)
// }
// Careful()

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve,ms));
// wait(1000).then(() => console.log("You'll see this after 1 second"));
// await wait(1000);

// is function async 
// const isAsync = (fn) => fn.constructor.name === 'Asyncfunction'
// console.log(isAsync(async () => {}));

// convert to rem 
// const ConverterRem = (px) => `${px / 16}rem`
// console.log(ConverterRem(22))

// window and dom 
// cont getSelectedText = () => window.getSelection().toString();
// console.log(getSelectedText());


// Arrays
// const numbersresult = [1,2,3,4,5]
// console.log(numbersresult.length)
// accessing an array elements
// const myArray = [100, 200, 300]
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])

// Method .push()
// const card = ['apple', 'orange'];
// const cart = card.push('mango')
// console.log(cart)

// method.pop()
// const ingredients = ['eggs', 'flour', 'chocolate'];
// const poppedIngredient  = ingredients.pop();
// console.log(poppedIngredient)

// mutable 
// const names1 = ['Alice', 'Bob'];
// names1.push('sameet')
// console.log(names1)

// Arrays
// const numberArray = [0, 1, 2, 3];
// const mixedArray = [1, 'chicken', false];
// console.log(mixedArray)

// const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
// const newCityArr = cities.slice(2,4);
// console.log(newCityArr)

// console.log(typeof(null))
// console.log(typeof(undefined))

// let a = null 
// console.log(a)

// let a = undefined
// console.log(a)

// console.log(null == undefined)
// console.log(null === undefined)
// console.log(null !== undefined)
// const myArray = [1, 2, 3, 4];
// console.log(myArray.length)
// console.log(myArray.push(11))
// console.log(myArray.pop())
// console.log(myArray.shift())
// console.log(myArray.slice(1,3))
// console.log(myArray.splice(2,1,'a','b'))
// console.log(myArray.concat(111))
// console.log(myArray.copyWithin(111))
// const iterator = myArray.entries();
// console.log(iterator)
// const keys = myArray.keys();
// for(const key of keys){
//     console.log(key)
// }
// function* Example(){
//     let index = 0;
//     while(true){
//         yield index++;
//     }
// }
// const result = Example()
// console.log(result.next().value)
// console.log(result.next().value)
// console.log(result.next().value)
// console.log(result.next().value)
// console.log(result.next().value)
// console.log(result.next().value)
// console.log(result.next().value)
// const distinct = (val,index,array) => {
//     return array.indexOf(val) === index
// }
// const friendsresult = ['mago','kiwi','blueburry','cherry','apple','pineapple','watermelon','watermelon']
// console.log(friendsresult.filter(distinct))
// console.log(Array.from(new Set(friendsresult)))
// console.log(new Set(friendsresult))

// const myArray = ['apple', 'banana', 'orange'];
// const keys = myArray.keys()
// const keyArray = Array.from(keys).map(key => key * 2)
// console.log(keyArray)

// const numbersres = [2, 4, 6, 8];
// const areAllEven = numbersres.every((num) => num % 2=== 0)
// console.log(areAllEven)

// const arr = new Array(5)
// console.log(arr.fill(0))

// const numbers11 = [2, 4, 6, 8, 10];
// const result = numbers11.find((val) => val > 5 )
// console.log(result)

// const numbershhh = [2, 4, 6, 8, 10];
// const firstevenindex = numbershhh.findIndex(num => num % 2 === 0)
// console.log(firstevenindex)

// const arr = [1,2,[3,4]]
// console.log(arr.flat())

// const arr = [1,2,[3,4],[5,6]]
// const mappedArr = arr.flat()
// console.log(mappedArr)

// const myArray = ['apple', 'banana', 'orange'];
// console.log(myArray.forEach((val) => val * 2))

// const myObject = {
//     myArray:[1,2,3],
//     multiplyBy:2,
//     multiply:function(){
//         this.myArray.forEach(function(element,index,array){
//             array[index] = element * this.multiplyBy;
//         },this);
//     }
// }
// myObject.multiply();
// console.log(myObject.myArray)

// const arrword = ["apple", "banana", "orange"];
// console.log(arrword.includes('watermelon'))
// console.log(arrword.includes('pineapple'))
// console.log(arrword.includes('apple'))
// const fruitsString = arrword.join();
// console.log(fruitsString)
// function joinArgs() {
//     const argsArray = Array.from(arguments);
//     const argsString = argsArray.join(', ');
//     console.log(argsString);
//   }

// const numbers11 = [1, 2, 3, 4, 5, 6, 5, 7];
// const result = numbers11.lastIndexOf(5)
// console.log(result)

// const people11 = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Mary", age: 35 },
//   ];  
// const lastIndex = people11.lastIndexOf({ name: "Bob", age: 25 });
// console.log(lastIndex)

// function a(){
//     for(var i=0;i<3;i++){
//         setTimeout(function log(){
//             console.log(i);
//         },i*3000)
//     }
// }
// a()

// var person  = {
//     name:'nitesh khatri',
//     hello:function (thing){
//         console.log(this.name + ' says hello  ' + thing)
//     },
// };



// class Product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
// }
// let user = new Product('nitesh',333)
// let user2 = new Product('sameet',1333)
// console.log(user)
// console.log(user2)

// var careful = {
//     name:'nitesh',
//     friend:function(could){
//         console.log(`${this.name} says hello ${could}`)
//     }
// }
// careful.friend('excellent')

// var alterEgo = {
//     name:"sameet"
// }

// careful.hello.friend(alterEgo,['world']);

// function addFive(a){
//     return a + 5 
// }
// console.log(addFive(10))

// function minusFive(a){
//     return a - 10
// }
// console.log(minusFive(10))


// const evaluate = compose(addFive,minusFive,minusFive)
// console.log(evaluate(5))

// function showText(text,time){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(text)
//         },time)
//     })
// }
// Promise.all([showText('nitesh',1000),Promise.resolve('hi')]).then((value) => console.log(value))

// function Permission(text,time){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(text)
//         },time)
//     })
// }
// Promise.all([Permission('nitesh',1000),Promise.resolve('hi')]).then((val) => console.log(val))

// function Yourself(text,time){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(text)
//         },time)
//     });
// }
// Promise.all([Yourself('nitesh',1000),Promise.resolve('hi happy'),Promise.reject('superb')]).then((val) => console.log(val))

// function myPromiseAll(promises){
//     let result = [];
//     return new Promise((resolve,reject) => {
//         promises.forEach((p,index) => {
//             p.then(result => {
//                 result.push(res)
//                 if(index === promises.length -1 ){
//                     resolve(result)
//                 }
//             }).catch((err) => reject(err))
//         })
//     })
// }

// console.log('nitesh'.split("").reverse("").join(""))

// const option = ['vishal','vishal','suresh','chandresh','arvind']
// const distinct = (val,index,array) => {
//     return array.indexOf(val) === index
// }
// console.log(option.filter(distinct))

// const numword = [1,2,44,55,11,22,33]
// console.log(numword.sort((a,b) => a-b))
// console.log(numword.sort((a,b) => b-a))


// const result = option.sort(function(a,b){
//     if(a<b){
//         return -1 
//     }
//     else{
//         return 1
//     }
// })
// console.log(result)
// const person =[
//     {
//         name:'nitesh',age:34,jobtitle:'front-end developer'
//     },
//     {
//         name:'sameet',age:41,jobtitle:'field service engineering'
//     },
//     {
//         name:'arvind',age:68,jobtitle:'ladies tailor'
//     },
//     {
//         name:'urvashi',age:65,jobtitle:'housewife'
//     },
//     {
//         name:'god saibaba',age:100,jobtitle:'bhajan mantra'
//     },
// ]

// const result = person.filter((val) => val.name === 'nitesh')
// console.log(result)
// const result = person.filter((val) => val.name !== 'nitesh')
// console.log(result)
// const result = person.filter((val) => val.age > 45)
// console.log(result)
// const result = person.filter((val) => val.age > 45)
// console.log(result)
// const isEven = person.age % 2 === 0 
// console.log(isEven)
// const isOdd = person.age % 2 !== 0 
// console.log(isOdd)



// class Happy {
//     constructor(fname,lname){
//         this.fname = fname,
//         this.lname = lname
//     }
// }

// let user1 = new Happy('nitesh','khatri')
// let user2 = new Happy('sameet','khatri')
// user1.age = 34
// user1.jobtitle = 'front-end developer'
// user1.location = 'india'

// user2.age = 41
// user2.jobtitle = 'field service engineering'
// user2.location = 'usa'
// console.log(user1)
// console.log(user2)

// const currentDate = new Date();
// console.log(currentDate)

// const date = new Date();
// console.log(date.toDateString())

// const date = new Date();
// console.log(date.toISOString())
// console.log(date.toLocaleDateString())
// console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)


// let emp = [
//     {
//         name:'nitesh',
//         age:34
//     },
//     {
//         name:'sameet',
//         age:41
//     },
//     {
//         name:'arvind',
//         age:68
//     },
//     {
//         name:'urvashi',
//         age:65
//     },
// ]

// console.log(emp)
// const result = emp.sort(function(a,b) {
//     if(a.age > b.age){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log(result)

// console.log(emp.filter((val) => val.age !== 65))
// console.log(emp.filter((val) => val.age !== 68))
// console.log(emp.filter((val) => val.age !== 41))
// console.log(emp.filter((val) => val.age !== 34))
// console.log(emp)


// const titlecase2 = (str) => str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
// console.log(titlecase2('nitesh khatri'))

// const firstPromise = new Promise((resolve,reject) => {
//     setTimeout(resolve,500,'one')
// })
// console.log(firstPromise)

// const secondPromise = new Promise((resolve,reject) => {
//     setTimeout(resolve,200,'two')
// })
// console.log(secondPromise)
// Promise.race([firstPromise,secondPromise]).then(res => console.log(res));

// const firstPromise = new Promise((resolve,reject) => {
//     setTimeout(resolve,200,'one')
// })
// const secondPromise = new Promise((resolve,reject) => {
//     setTimeout(resolve,300,'two')
// })
// Promise.race([firstPromise,secondPromise]).then((res) => console.log(res))

// const firstOption = new Promise((resolve,reject) => {
//     setTimeout(resolve,100,'nitesh')
// })
// const secondOption = new Promise((resolve,reject) => {
//     setTimeout(resolve,500,'sameet')
// })
// Promise.all([firstOption,secondOption]).then((res) => console.log(res))


// Btn = document.getElementById('add');
// Btn.addEventListener('click',() => {
//     console.log('hi happy promgramming coding')
// },{once : true})

// function* Example(){
//     let index = 0 
//     while(true){
//         yield index++
//     }
// }
// const g = Example();
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)

// const testPromise = new Promise((resolve,reject) => {
//     let value = 5 
//     if(value < 4 ){
//         resolve('value is less than 4')
//     }
//     else{
//         reject('value is greater than 4')
//     }
// })
// testPromise
// .then((result) => {
//     console.log('===>',result)
// })
// .catch((error) => console.log('error',error));

// const ExamplePromise = new Promise((resolve,reject) => {
//     let value = 5 
//     if(value < 4){
//         resolve('value is less than 4')
//     }
//     else{
//         reject('value is greater than 4 ')
//     }
// })
// ExamplePromise
// .then((res) => {
//     console.log('res')
// })
// .catch((error) => console.log('error',error))

// function Test(){
//     console.log('1')
//     setTimeout(function(){console.log('2')},1000);
//     setTimeout((function(){console.log('3')})(),3000);
//     console.log('4')
// }
// Test()

// const pattern = /n/g 
// console.log(pattern.test('nitesh'))


// const obj11= {
//     id: 1,
//     first: 'bobby',
//     last: 'hadz',
//     salary: 500,
//     address: {
//       country: 'Belgium',
//       city: 'Ghent',
//     },
//   };
//   const resultjsonstring = JSON.stringify(obj11)
//   const resultjsonparse = JSON.parse(resultjsonstring)
//   console.log(resultjsonstring)
//   console.log(resultjsonparse)
//   delete obj11.address.country // remove country
//   obj11.address.country = 'India' // modify for country
//   console.log(obj11)

//   const friendsexample = ['vijay','vijay','chandresh','amit']
//   const distinct = (val,index,arr) => {
//     return arr.indexOf(val) === index 
//   }
// const resultsort = friendsexample.sort(function(a,b) {
//     if(a<b) {
//         return -1
//     }
//     else{
//         return 1
//     }
// })
//   console.log(friendsexample.filter(distinct))
// console.log(resultsort)

// // how to empty a javascript array 
// let arr = [1,2,3,4,5]
// // console.log(arr=[])
// console.log(arr.length = 0)
// console.log(arr.splice(0,arr.length))

// function sum(a){
//     return function(b){
//         if(!b){
//             return a 
//         }
//         return sum(a+b)
//     }
// }
// console.log(sum(1)(2)(3)(4)(5)(6)());

// function add(a){
//     return function(b){
//         if(!b){
//             return a 
//         }
//         return add(a+b)
//     }
// }
// console.log(add(1)(2)(3)(4)());

// function minus(a){
//     return function(b){
//         if(!b){
//             return a
//         }
//         return minus(a-b)
//     }
// }
// console.log(minus(1)(2)(3)())


// const a = 'nitesh khatri'
// function Spend(){
//     console.log(a)
//     const a = 'sameet khatri'
// }
// Spend()

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve('nitesh khatri')  
//     },1000)    
// })
// console.log(promise)
// async function Happy(){
//     let result = promise 
//     console.log(result)
// }
// Happy()

// const MathExample = new Promise((resolve,reject) => {
//     let value = 10
//     if(value > 4){
//         resolve('yes')
//     }
//     else{
//         reject('no')
//     }
// })
// MathExample.then((res) => console.log('--->',res).catch((error) => console.log(error)))

// const student= {
//     name:'nitesh',
//     age:34,
//     subject:'english'
// }
// let studentOne = {...student,name:'sameet',age:41}
// const {name,...rest} = student
// console.log(name)
// console.log(rest)
// console.log(studentOne)
// const superb = ['vishal','rahul','tejas']
// const [first,...rest] = superb 
// console.log(first)
// console.log(rest)
// const newSuperb = [...superb,'ravi','pranay']
// console.log(newSuperb)

// const curreny = (a) => {
//     return (b) => {
//         return a * b 
//     }
// }
// console.log(curreny(10)(20))

// var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
// var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

// function inWords (num) {
//     if ((num = num.toString()).length > 9) return 'overflow';
//     n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
//     if (!n) return; var str = '';
//     str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
//     str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
//     str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
//     str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
//     str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
//     return str;
// }

// document.getElementById('number').onkeyup = function () {
//     document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
// };

// function Example(){
//     a = 20
//     let b=  20
// }
// Example();

// console.log(a) // a is global and declare variable is 20
// // console.log(b) // because it is block scope for let and const

// let promise = new Promise((res,rej) => rej())
// .then(() => console.log('hello'),() => console.log('world'))
// .catch(() => console.log('friend'))

// var myVariable = 10
// console.log(myVariable)

// const myVariable = 10
// console.log(myVariable)

// const distinct = (val,index,arr) => {
//     return arr.indexOf(val) === index
// }
// const example = ['vijay','vijay','vishal']
// console.log(example.filter(distinct))
// console.log(Array.from(new Set(example)))
// console.log(new Set(example))

// function test(){
//     console.log(this.name)
// }
// const a = {name:"A"}
// const b = {name:"B"}
// test.bind(a).call(b);

// function drink(beverage) {
//     return beverage === 'coffee' ? 'coffee' : 'water';
//    }
//    console.log(drink({name:'coffee'}));

// const age = 21 // global scope variable declare and assign

// createNewAge = ()=> {
//  let age = 12  // block scope let declare and assign
//  console.log(age)
//  }
//  console.log(age)

// createNewAge()

// let arr = [5, 5];
// arr.unshift('3',4);
// arr.push('4',3);
// console.log(arr[4] + arr[5]);

// map and filter method
// let arr = [1,2,3,4,5]
// const arrMapResult = arr.map((item) => item  > 2)
// console.log(arrMapResult)
// const arrFilterResult = arr.filter((item) => item > 3)
// const arrEven = arr.filter((val) =>  val % 2 ===0)
// const arrOdd = arr.filter((val) =>  val % 2 !==0)
// console.log(arrFilterResult)
// console.log(arrEven)
// console.log(arrOdd)


// var element = document.getElementById('superb')
// element.innerHTML = 'nitesh khatri adsd'
// var para = document.createElement('p')
// para.innerHTML = 'lorem ipsum'
// var div = document.getElementById('superb');
// div.appendChild(para)
// let a = 'hello world';
// console.log(a)
// var a = 'nitesh khatri'
// let newArr = stringWord.split(" ")
// let newStr = '';
// newArr.map((item,index) => {
//     for(let index=0;index<array.length;index++){
//         const element = array[index];
//     }
// })
// console.log(newArr)

// console.log('nitesh'.split("").reverse("").join(""))
// let stringWord = 'this is my country'
// console.log(stringWord)

// string to object 
// let input = 'this is my home'
// let objee = {};
// function strToObj(data){
//     console.log(data)
//     for(let index=0;index<data.length;index++){
//         objee[data[index]] = data[index].length
//     }
//     return objee
// }
// let result = strToObj(input.split(' '))
// console.log(JSON.stringify(result));

// let a = 'nitesh'
// let b = 'sameet'
// if(a.length === b.length){
//     if(a === b){
//         console.log('yes')
//     }
//     else{
//         console.log('no')
//     }
// }
// else{
//     console.log('length of string different')
// }
// if(a === b && a.toLowerCase() === b.toLowerCase()){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }
// if(a.length === b.length && a.split("").sort().join("") === b.split("").sort().join("")){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }

// const friends = ['vijay','vijay','chandresh']
// const numword = [1,2,44,55,66,11,22,22]
// const distinct = (val,index,arr) => {
//     return arr.indexOf(val) === index
// }
// console.log(numword.filter(distinct))
// const result = numword.sort((a,b) => {
//     if(a<b){
//         return -1
//     }
//     else{
//         return 1 
//     }
// })
// console.log(result)
// console.log(numword.sort((a,b) => a-b))
// console.log(numword.sort((a,b) => b-a))
// console.log('nitesh khatri'.split("").reverse("").join(""))

// let x = function (x,y){
//     return x * y 
// }
// console.log(x(10,20))

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
// let user = new Person('nitesh')
// let user2 = new Person('sameet')
// console.log(user)
// console.log(user2)

// function sum(x, y = 5) {

//     // take sum
//     // the value of y is 5 if not passed
//     console.log(x + y);
// }

// console.log(sum(10,20))

// const first_name = "Jack";
// const last_name = "Sparrow";
// console.log(first_name + last_name)

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }
// let name = person.name
// let age = person.age
// let gender = person.gender
// console.log(name,age,gender)

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }
// let {name,age,gender} = person 
// console.log(name)
// console.log(age)
// console.log(gender)

// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
//  console.log(countValue)

// let promise = new Promise((resolve,reject) => {
//     let value = 5 
//     if(value < 10){
//         console.log('yes')
//     }
//     else{
//         console.log('no')
//     }
// })

// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('nitesh khatri')
//     },1000)
// })
// async function Example(){
//     let result = promise 
//     console.log(result)
// }
// Example()

// let ranks = ['A', 'B', 'C'];
// for(let i =0;i<ranks.length;i++){
//     console.log(i + " " + ranks[i])
// }
// for (let custom of ranks){
//     console.log(custom)
// }
// let timeVar = setTimeout(function(){
//     console.log('nitesh khatri')
// },100);
// let timeInt = setInterval(function(){
//     console.log('after 2 sec')
// },90);

// function stop(){
//     clearTimeout(timeVar)
//     clearInterval(timeInt)
// }

// let mywindow
// let btn1 = document.getElementById('window1');
// let btn2 = document.getElementById('window2');
// let closebtn = document.getElementById('btnclose');
// btn1.addEventListener('click',function(){
//     mywindow = window.open('https://www.facebook.com/')
// });
// btn2.addEventListener('click',function(){
//     mywindow = window.open('https://www.twitter.com/')
// });
// closebtn.addEventListener('click',function(){
//     mywindow.close()
// });

// class Rectangle{
//     constructor(height,width){
//         this.height = height
//         this.width = width
//     }

//     // getter
//     get area(){
//         return this.calcArea()
//     }

//     // method 
//     calcArea(){
//         return this.width * this.height
//     }
//     *getSides(){
//         yield this.height;
//         yield this.width;
//         yield this.height;
//         yield this.width;
//     }
// }
// const square = new Rectangle(10,10)
// console.log(square.area);

// function Pen(name,color,price){
//     this.name = name
//     this.color = color
//     this.price = price
// }
// const pen1 = new Pen('marker','blue','3/-')
// const pen2 = new Pen('Reynolds','red','23/-')
// const pen3 = new Pen('parker','purple','13/-')
// console.log(pen1,pen2,pen3)
// console.log({...pen1},{...pen2},{...pen3})

// Pen.prototype.showPrice = function(){
//     console.log(`Price of ${this.name} is ${this.price}`);
// }
// Pen.prototype.showColor = function(){
//     console.log(`Price is ${this.name} color is ${this.color}`)
// }
// console.log(pen1.showPrice())
// console.log(pen1.showColor())
// console.log(pen2.showColor())

// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     greet(){
//         console.log(`hello ${this.name}`)
//     }
//     exampleage(){
//         console.log(`hi ${this.age}`)
//     }
// }
// class Student extends Person{

// }
// let student1 = new Student('nitesh',34);
// student1.greet();
// student1.exampleage();

// const distinct = (val,index,arr) => {
//     return arr.indexOf(val) === index 
// }
// console.log(arry.filter(distinct))
// console.log([...new Set(arry)])
// console.log(Array.from([...new Set(arry)]))
// const arry = [1, 2, 1, 3, 4, 3, 5];
// const arrygr = ['vijay', 'vijay', 'vijay','vishal', 'rahul', 'hites', 'bhavik', 'maulik','hites'];
// const count = {}
// arrygr.forEach(function(i){
//     count[i] = (count[i] || 0) + 1
// })
// console.log(count)
// const counts = arrygr.reduce((acc,value) => ({
//     ...acc,
//     [value]:(acc[value] || 0) + 1
// }))
// console.log(counts)

//  How to check if a given number is an integer?
// const data = 10 
// if(data === parseInt(data,10)){
//     console.log('data is an integer')
// }
// else{
//     console.log('data is not an integer')
// }
// console.log(data === parseInt(10) ? 'yes' : 'no')

// const object = {
//     prop1: 1,
//     prop2: 2 
//   }
//   object.prop1 = 5
//   object.prop2 = 10
//   console.log(object);

// object1 = {
//     prop1:1,
//     prop2:2,
// }
// object2 = Object.freeze(object1)
//   console.log(object1 === object2)

// let obj2 = {
//     a: 1,
//     b: 2
//   };
//   console.log(Object.freeze(obj2))

// let arr = [12, 25, 31, 23, 75, 81, 100]
// console.log(arr.sort((a,b) => a -b))
// console.log(arr.sort((a,b) => b-a))
// let word = ['stepping','morning','night','noon','evening']
// const resultword = word.sort(function(a,b) {
//     if(a>b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log(resultword)

// var animals = [
//     'cat', 'dog', 'elephant', 'bee', 'ant'
// ];
// console.log(animals.sort())

// var string = ["Suraj", "Sanjeev", "Rajnish", "Yash", "Ravi"];
// console.log("Original String");
// console.log(string)
// console.log(string)
// console.log(string)

// var employeeList = [
//     {id: 101, name: 'Rhonda', age: 20, dept: 'Audit'},
//     {id: 111, name: 'Susan', age: 28, dept: 'Accounts'},
//     {id: 191, name: 'Stephen', age: 32, dept: 'Audit'},
//     {id: 131, name: 'Napoleon', age: 20, dept: 'HR'}
//    ];
// const result1 = employeeList.find((val) => {
//     return val.dept === 'Audit'
// })
// console.log(result1)
// const result2 = employeeList.filter((val) => {
//     return val.dept !== 'Accounts' && val.dept !== 'HR'
// })
// console.log(result2)
// const result2 = employeeList.filter((val) => {
//     return val.dept !== 'Audit' 
// })
// console.log(result2)
// const result2 = employeeList.filter((val) => {
//     return val.dept !== 'Audit' 
// })
// console.log(result2)

// const listArray = ["Manish", "Chandan", "Piyush", "Manish", "Sunil", "Chandan"] 
// const distinct = (val,index,arr) => {
//     return arr.indexOf(val) === index
// }
// console.log(listArray.filter(distinct))

// Find maximum & minimum value in a numbered array
// var employeeList = [
//     {id: 101, name: 'Rhonda', age: 20, dept: 'Audit'},
//     {id: 111, name: 'Susan', age: 28, dept: 'Accounts'},
//     {id: 191, name: 'Stephen', age: 32, dept: 'Audit'},
//     {id: 131, name: 'Napoleon', age: 19, dept: 'HR'}
//    ];
//    let maxValue = employeeList.reduce((acc,value) => {
//     return ( acc = acc > value.age ? acc:value.age)
//    })
//    console.log(maxValue)

// Find the average of the numbers in the numbered array
// const arr = [1, 2, 3, 4, 5];
// const average = arr.reduce((a,b) => a+b,0) / arr.length
// console.log(average)

// How can you uppercase the first character in a string array?
// const str = 'flexiple';
// console.log(str.toUpperCase())
// console.log(str.charAt(0).toUpperCase() + str.slice(1))
// const str = 'i have learned something new today'
// const str2 = arr.join(" ")
// console.log(str2)
// console.log('nitesh khatri'.charAt(0).toUpperCase() + 'nitesh khatri'.slice(1))
// const result = 'sameet khatri'
// const arr = result.split(" ")
// for (let i=0;i<arr.length;i++){
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
// }
// const final = arr.join(" ")
// console.log(final)
// const result = 'SAMEET KHATRI'
// const arr = result.split(" ")
// for (let i=0;i<arr.length;i++){
//     arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1)
// }
// const str2 = arr.join(" ")
// console.log(str2)

// var a = ['hello', 'world'];
// console.log(a.join(" "))

// var word = ['how','are','you']
// console.log(word.join(" "))

// How can you extract a few fields from the given JSON object and form a new array?
// var input = {
//     "products": [{
//       "productId": "a01",
//       "uuid": "124748ba-6fc4f"
//     }, {
//       "productId": "b2",
//       "uuid": "1249b9ba-64d"
//     }, {
//       "productId": "c03",
//       "uuid": "124c78da-64"
//     }, {
//       "productId": "d04",
//       "uuid": "124ee9da-6"
//     }]
//   };
//   var op = input.products.map(function(item){
//     return item.productId
//   })
//   console.log(op)

//  Filter the given object based on certain conditions and return the corresponding object?
//   let objtest = {
//     'Students': [{
//         "name": "Raj",
//         "Age": "15",
//         "RollNumber": "123",
//         "Marks": "99",

//     }, {
//         "name": "Aman",
//         "Age": "14",
//         "RollNumber": "223",
//         "Marks": "69",
//     },
//     {
//         "name": "Vivek",
//         "Age": "13",
//         "RollNumber": "253",
//         "Marks": "89",
//     },
//     ]
// };
// let newArray = objtest.Students.filter(function (el){
//     return el.RollNumber >= 200
// })
// console.log(newArray)

// const result = document.getElementById('result')
// const filter = document.getElementById('filter')
// const listItems = []
// getData()
// filter.addEventListener('input', (e) => filterData(e.target.value))
// async function getData() {
// const res = await fetch('https://randomuser.me/api?results=50')
// const { results } = await res.json()
// // Clear result
// result.innerHTML = ''
// results.forEach(user => {
// const li = document.createElement('li')
// listItems.push(li)
// li.innerHTML = `
// <img src="${user.picture.large}" alt="${user.name.first}">
// <div class="user-info">
// <h4>${user.name.first} ${user.name.last}</h4>
// <p>${user.location.city}, ${user.location.country}</p>
// </div>
// `
// result.appendChild(li)
// })
// }
// function filterData(searchTerm) {
//   listItems.forEach(item => {
//   if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
//   item.classList.remove('hide')
//   } else {
//   item.classList.add('hide')
//   }
// })
// }

// (function () {
//   const second = 1000,
//   minute = second * 60,
//   hour = minute * 60,
//   day = hour * 24;
//   //I'm adding this section so I don't have to keep updating this pen every year :-)
//   //remove this if you don't need it
//   let today = new Date(),
//   dd = String(today.getDate()).padStart(2, "0"),
//   mm = String(today.getMonth() + 1).padStart(2, "0"),
//   yyyy = today.getFullYear(),
//   nextYear = yyyy + 1,
//   dayMonth = "05/29/",
//   birthday = dayMonth + yyyy;
//   today = mm + "/" + dd + "/" + yyyy;
//   if (today > birthday) {
//   birthday = dayMonth + nextYear;
//   }
//   //end
//   const countDown = new Date(birthday).getTime(),
//   x = setInterval(function() {
//   const now = new Date().getTime(),
//   distance = countDown - now;
//   document.getElementById("days").innerText = Math.floor(distance / (day)),
//   document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//   document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//   document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
//   //do something later when date is reached
//   if (distance < 0) {
//   document.getElementById("headline").innerText = "It's my birthday!";
//   document.getElementById("countdown").style.display = "none";
//   document.getElementById("content").style.display = "block";
//   clearInterval(x);
//   }
//   //seconds
//   }, 0)
//   }());

// Given an array of strings, reverse each word in the sentence?
// console.log('Hello World how is it outside'.split("").reverse().join(""))

// How to check if an object is present in an Array or not?
// const nums = [ 1, 3, 5, 7];
// console.log(nums.includes(2))
// console.log(nums.includes(3,0));

// How to empty an array?
// let arr = [1,2,3,4,5]
// console.log(arr=[])
// console.log(arr.length = 0)
// console.log(arr.splice(0,arr.length))

// What is IIFEs (Immediately Invoked Function Expressions)?
// function Greet(){
//   console.log("Welcome to GFG!");
// }
// Greet();
// (function(){
//   console.log("Welcome to immediately invoked function expression creation and execution!");
// })();
// (function myExample(){
//   console.log('nitesh khatri')
// })()
// function myFunc(){
//   (function(){
//     console.log('welcome to')
//   })()
//   console.log('hi there')
// }
// myFunc()
// (function Superb(){
//   (function Inside(){
//     console.log('sameet')
//   })()
// })() 
// (function Shiva(){
//     (function Hears(){
//       console.log('Hears')
//     })()
// })()
// function myFunc(){
//   (function(){
//     console.log('nitesh khatri')
//   })()
//   console.log('sameet katri')
// }
// myFunc()

// function myFunc(){
//   (function(){
//     console.log('nitesh')
//   })()
//   console.log('sameet')
// }
// myFunc()

// How do you sort and reverse an array without changing the original array?
// const originalArray = ['a', 'b', 'c', 'd', 'e', 'f'];
// const newArray = Array.from(originalArray).reverse()
// console.log(newArray)
// console.log(originalArray.reverse())
// console.log(originalArray.toReversed())

// const grade = 30;
// switch(true){
//   case grade>75:console.log('A+')
//   break;
//   case grade>60:console.log('B+')
//   break;
//   case grade>35:console.log('C')
//   break;
//   default:console.log('failed')
// }
// console.log(grade)

// const word = 'nitesh';
// switch(word){
//   case 'nitesh':console.log('yes nitesh')
//   break;
//   case 'sameet':console.log('yes sameet')
//   break;
//   case 'arvind':console.log('yes arvind')
//   break;
//   default:console.log('no word')
// }
// console.log(word)

// Write a function to check if a given string is Palindrome or not?
// const word = 'nitesh khatri'
// const regexword = '/nitesh/g'
// console.log(regexword.match(word))

// How can you combine two Arrays into a third Array using spread operator?
// const bikes = ['Royal Enfield', 'JAWA', 'Ather'];
// const cars = ['Jaguar', 'BMW', 'TATA'];
// console.log(bikes.push(...cars))
// console.log(...bikes,...cars)

// const cars = ['🚗', '🚙'];
// const trucks = ['🚚', '🚛'];
// console.log(...cars.concat(...trucks))
// console.log(cars.push(...trucks))

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// for(let i=0;i<array2.length;i++){
//   array1.push(array2[i])
// }
// console.log(array1)
// console.log(array1.push(array2))
// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const array3 = [7, 8, 9]
// array3.push(...array2,...array1)
// console.log(array3)

// const merge =(first,second) => {
//   for(let i=0;i<second.length;i++){
//     first.push(second[i])
//   }
//   return first;
// }
// console.log(merge([1,2,3], [4,5,6]))

// const merge = (first,second) => {
//   for(let i=0;i<second.length;i++){
//     first.push(second[i])
//   }
//   return first;
// }
// const merge = (first,second) => {
//   for(let i =0;i<second.length;i++){
//     first.push(second[i])
//   }
//   return  first
// }
// console.log(merge(merge([1,2,3],[4,5,6]),[6,7,8,8]))
// console.log(merge(merge([1,2,3],[4,5,6]),[7,8,9]))

// const wordduplicate = [11,22,33,44,55,55,66,66]
// console.log(...new Set(wordduplicate))
// console.log(Array.from([...new Set(wordduplicate)]))
// const mergeArr = (arr1,arr2) => [...new Set([...arr1,...arr2])]
// console.log(mergeArr(mergeArr([1,2,3],[4,5,6],[5,6,7]),[99,11]))

// const arr = [1,2,23]
// console.log(arr.length = 0)
// console.log(arr.length)
// console.log(arr.splice(0,arr.length))

// let firstArray = [1, 2, 3, 'Shinchan']
// let secondArray = ['Nohara', 4, 5, 6]
// let thirdArray = [7, 8, 9, 'Himawari']
// console.log(...firstArray,...secondArray,...thirdArray)

// const maxNumber = arr => Math.max(...arr)
// const minNumber = arr => Math.min(...arr)
// console.log(maxNumber([33,44,555]))
// console.log(minNumber([33,44,555]))

// How can you Insert an element at a specific index in an Array?
// const arrayConstructor = new Array('nitesh','sameet','arvind')
// console.log(arrayConstructor)

// const fruits = ['apple', 'banana', 'cherry'];
// fruits.push('grape')
// console.log(fruits)


// let friends =['a','b','c']
// for(let key in friends){
//   console.log(key)
// }
// for(let key of friends){
//   console.log(key)
// }

// const myObject = [
//   {
//     first: "one",
//     second: "two",
//   },
//   {
//     third: "third",
//     fourth: "fourth",
//   },
//   {
//     fifth: "fifth",
//     sixth: "sixth",
//   },
// ];
// for(const [key,value] of Object.entries(myObject)){
//   console.log(key,value)
// }

// const peopl1e = [
//   {name: 'Tom', age: 25},
//   {name: 'John', age: 40},
//   {name: 'Dillon', age: 30},
// ];

// const resultfiler = peopl1e.filter((val) => val.age > 30)
// console.log(resultfiler)

// var list = ["January", "March","April","June"];
// splicing the array elements using splice() method
// list.splice(1,0,'february')
// console.log(list)
// splicing the output elements after the first splicing
// list.splice(4,0,'May')
// console.log(list)

// const books = [
//   "You don't know JS", // Index 0
//   'Eloquent JavaScript', // Index 1
//   'JavaScript: The Good Parts', // Index 2
// ]

// books[1] = 'Jquery'
// books[2] = 'JavaScript: The Definitive Guide'
// console.log(books)

// const books = [
//   "You don't know JS", // Index 0
//   'Eloquent JavaScript', // Index 1
//   'JavaScript: The Good Parts', // Index 2
// ]
// const booksexample = books.indexOf('JavaScript: The Good Parts')
// console.log(booksexample)
// const fakebookexample = books.indexOf('Fake book')
// console.log(fakebookexample)

// const books = [
//   "You don't know JS", // Index 0
//   'Eloquent JavaScript', // Index 1
//   'JavaScript: The Good Parts', // Index 2
// ]
// const examplebook = books.splice(2,1,'JavaScript: The Definitive Guide')
// console.log(books)
// console.log(examplebook)

// 29. How can you Delete an element at a specific index in an Array?
// const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
// const copyWithoutFirstElement  = arrayOfLetters.splice(1);
// console.log(copyWithoutFirstElement)
// const slice2 = arrayOfLetters.slice(0,-1)
// console.log(slice2)
// const result = arrayOfLetters.filter(function(letter){
//   return letter !== 'd'
// })
// console.log(result)

// const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

// const arrayWithoutB = [];

// for(let i=0;i<arrayOfLetters.length;i++){
//   if(arrayOfLetters[i] !== 'b'){
//     arrayWithoutB.push(arrayOfLetters[i])
//   }
// }

// console.log(arrayWithoutB); // ['a', 'c', 'd', 'e', 'f']
// const arrayOfNumbers = [1, 2, 3, 4];

// const previousFirstElementOfTheArray = arrayOfNumbers.shift();
// console.log(arrayOfNumbers)
// const arrayOfNumbers = [1, 2, 3, 4];
// const previousSecondElementOfTheArray = arrayOfNumbers.splice(1, 1);
// console.log(arrayOfNumbers)

// 30 How can you delete a specific element?
// const myArray = [1, 2, 3, 4, 5];
// const x = myArray.pop()
// console.log(x)
// console.log(myArray.slice(1,1))

// const myArray = [1, 2, 3, 4, 5];
// const result = myArray[1]
// console.log(result)

// const myArray = [1, 2, 3, 4, 5];
// const result = myArray.splice(1,1)
// console.log(result)

// const myArray = [1, 2, 3, 4, 5];
// const index = myArray.indexOf(2)
// const x = myArray.splice(index,1);
// console.log(x)
// console.log(index)

// 31 How do you clone an Object?
// const employee = {
//   name : 'Dhoni',
//   age : 41,
//   height : 5.8,
// }
// const copyobject = employee
// console.log(copyobject)
// console.log(JSON.stringify(employee))

// const myArray = [1, 2, 3, 4, 5];
// myArray.push(6,7,8)
// console.log(myArray)

// const countries = ["Nigeria", "Ghana", "Rwanda"];
// countries.unshift('South africa','Australia')
// console.log(countries)

// How to remove an element from the end of the array?
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let elemsToDelete = 3;
// arr.splice(arr.length - elemsToDelete)
// console.log("modified array",arr)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrremove = 3 
// arr.splice(arr.length - arrremove)
// console.log(arr)
// const withoutLast = arr.slice(0,-2);
// console.log(withoutLast)

// const msg = new String('Yes, You Can DO It!')
// console.log(msg.split(""))
// console.log(msg)
// let str = "Yes, You Can Do It!";
// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// let name = 'Tapas Adhikary';
// let [firstName, lastName] = name.toUpperCase()
// console.log(firstName, lastName);
// let fullname = ['nitesh khatri','sameet khatri']
// let [fname,lname] = fullname.toUpperCase()
// console.log(fname,lname)

// let btn = document.getElementById("btn")

// // Get the counter element
// let counter = document.getElementById("counter")

// // Apply the addEventListener method
// btn.addEventListener("click", () => {

//    // Increase the existing value by 1
//    // Use the parseInt method to convert the existing
//    // value (which is in string format) into integer
//    counter.innerText = parseInt(counter.innerText) + 1
// })

// let arr1 = ['nitesh', 'sameet', 3, 4, 5];
// arr1.push(6)
// arr1.push(7)
// arr1.push(8)
// document.write(arr1)

// let resEle = document.querySelector(".result");
// let BtnEle = document.querySelector(".Btn");
// let student = {};
// BtnEle.addEventListener("click", () => {
//    student.name = 'Rohan Sharma';
//    student.age = 16;
//    student.place = 'Delhi';
//    student.displayInfo = function(){
//       return 'Name = '+this.name+' : Age = '+this.age+' : Place = '+this.place;
//     }
//     student.explaininfo = function(){
//       return `Name ${this.name}`
//     }
// resEle.innerHTML += student.displayInfo();
// resEle.innerHTML += student.explaininfo();
// });

// class Example{
//   constructor(fname,lname){
//     this.fname = fname
//     this.lname = lname
//   }
// }

// let user1 = new Example('nitesh','khatri')
// console.log(user1)
// Example.prototype.email = 'nitesh.khatri88@gmail.com'
// Example.prototype.dob = '17th june 1989'
// console.log(Example.prototype.email)
// console.log(Example.prototype.dob)

// 37. How can you replace an existing element in an object?
// const myArray = [
//   {name: 'Sam', age: 24}, 
//   {name: 'Rayan', age: 26},
//   {name: 'Raja', age: 34},
// ];
// const myObject = {name:'nitesh',age:34}
// const myObject1 = {name:'sameet',age:41}
// const index = myArray.findIndex(item => item.name === 'Rayan')
// const index1 = myArray.findIndex(item => item.name === 'Sam')
// myArray.splice(index,1,myObject)
// console.log(myArray)
// myArray.splice(index1,1,myObject1)
// const changeName = {name:'vishal',age:45}
// const indexfind = myArray.findIndex(item => item.name === 'Sam')
// myArray.splice(indexfind,1,changeName)
// console.log(myArray)

// let selectedColors = ['Red', 'Blue', 'Orange', 'Black', 'Pink'];
// selectedColors[0] = 'green'
// selectedColors[1] = 'purple'
// console.log(selectedColors)

// let user1 = {
//   name:"nitesh",
//   age:34,
//   dob:14061982
// }
// const changeName = {name:"sameet "}
// console.log({...user1,...changeName})

// let promise = new Promise((resolve,reject) => {
//   let value = 20 
//   if(value > 10){
//     resolve('yes')
//   }
//   else{
//     reject('no')
//   }
// })
// async function Example(){
//   let result = await promise 
//   console.log(result)
// }
// Example()

// How do you write a function which can take (x) number of parameters?
// function add(a,b){
//   return a +b 
// }
// console.log(add(10,20))
// function add(){
//   console.log(arguments);
//   var sum = 0 
//   for(let i=0;i<arguments.length;i++){
//     sum += arguments[i]
//   }
//   return sum
// }
// console.log(add(10,50))
// console.log(add(10,20))
// console.log(add(10,60))
// console.log(add(10,6110))

// How do you create an Array out of a given sentence?
// let sentence = "The big question was how to end it";
// let arraycc = sentence.split(" ",3)
// console.log(arraycc)

// let name = "John Doe is doing fine."
// const result = name.split(" ",1)
// console.log(result)

// let nameChars  = 'nitesh khatri'
// let nameCharsReversed = nameChars.toUpperCase().split("").reverse("").join("");
// let initialletter = nameChars.split(" ").map(word => word.charAt(0)).join(" ")
// console.log(nameCharsReversed)
// console.log(initialletter)

// How do you replace a given string in the string of arrays?
// function sum(a,b,c){
//   return a +b +c 
// }
// console.log(sum(10,202,30))

// function example(a){
//   return (b) => {
//     return (c) => {
//       return a +b +c 
//     }
//   }
// }
// console.log(example(10)(20)(30))
// function result(a){
//   return (b) => {
//     return (c) => {
//       return a+  b *c
//     }
//   }  
// }
// console.log(result(10)(20)(30))

// 45. Implement a groupBy method in JavaScript?
// const cars = [{
//   company: "audi",
//   model: "r8",
//   year: "2012"
// }, {
//   company: "audi",
//   model: "rs5",
//   year: "2013"
// }, {
//   company: "ford",
//   model: "mustang",
//   year: "2012"
// }, {
//   company: "ford",
//   model: "fusion",
//   year: "2015"
// }, {
//   company: "kia",
//   model: "optima",
//   year: "2012"
// }];
// const result1 = cars.map((val) => val.company)
// const result2 = cars.map((val) => val.year)
// const result3 = cars.map((val) => val.year)
// const resultfilter3 = cars.filter((val) => val.year != 2012)
// // console.log(...result1,...result2,...result3)
// console.log(resultfilter3)

// 46. Explain WeakSet in javascript with an example?
// function example(){
//   let weakSetObject = new WeakSet();
//   let ObjectOne = {}
//   weakSetObject.add(ObjectOne)
//   console.log('objectone added')
//   console.log('weakset has objectone' + weakSetObject)
// }
// example()

// let weakObject = new WeakSet();
// let ObjectOne = {};
// let ObjectTwo = {};
// weakObject.add(ObjectOne);
// console.log("objectOne added");
// weakObject.add(ObjectTwo)
// console.log('objectTwo added');
// console.log('objectTwo deleted');
// console.log('weakset has objecttwo');
// weakObject.has(ObjectTwo)

// let exampleone = new WeakSet();
// let ObjectOne = {}
// let ObjectTwo = {}
// exampleone.add(ObjectOne)
// console.log('obhectone added 1')
// exampleone.has(ObjectTwo)
// console.log('obhectone added 2')
// console.log(ObjectTwo)
// console.log(ObjectOne)

// const set1 = new Set();
// const set2 = new Set([1,'hello',{count:true}])
// const set3 = new Set([1,2,3,4,5])
// const set4 = new Set([1, 2, 3]);
// set4.add([7,8,9])
// console.log(set1)
// console.log(set2)
// console.log(set3)
// console.log(set4)
// for (let i of set4){
//   console.log(i)
// }

// const weakSet = new WeakSet()
// let myObject122 = {
//   message: 'Hi',
//   sendMessage: true
// }
// weakSet.add(myObject122)
// console.log(weakSet)

// let john = { name: "John" };
// let map = new Map();
// console.log(map.set(john,{age:34,dob:'17th june 1989',email:'nitesh.khatri88@gmail.com'}))

// let fullname = {fullname:'nitesh khatri'}
// let mapresult = new Map();
// console.log(mapresult.set(fullname,{email:'nitesh.khatri88@gmail.com'}))

// var a ='nitesh'
// var a ='khatri'
// function Example(){
//   console.log(a)
// }
// var a ='sameet'
// Example()
// const ab ='nitesh'
// function Example(){
//   const ab ='sameet'
//   console.log(ab)
// }
// Example()
// let ab ='nitesh'
// function Example(){
//   console.log(ab)
// }
// let ab ='sameet'
// Example()

// let year = '2023'
// function Result(){
//   let text ='the year is'
//   return `${text} ${year}`
// }
// console.log(Result())

// 48.Explain what is Object Destructuring with an example?
// const user = { 
//   'name': 'Alex',
//   'address': '15th Park Avenue',
//   'age': 43
// }
// const {name,address,age} = user;
// console.log(name)
// console.log(address)
// console.log(age)

// console.log(a)
// function Example(){
//   const a = 10
//   console.log(a)
// }
// Example()

// c  = 'nitesh'
// console.log(c)
// var c 

// function foo(){
//   var g = x + 5 
//   console.log(g)
// }
// var x = 200
// foo()

// 49.How can we generate a random alphanumeric string in JavaScript?
// function Example(){
//   console.log(Math.random().toString(36).split(2))
// }
// Example()

// 50. How can we call a function which logs a message after every 5 seconds?
// function myFunction(){
//   console.log('nitesh khatri')
// }
// setInterval(myFunction,1000)
// clearInterval(myFunction)

// function myFunction(){
//   console.log('nitesh khatri')
// }
// setTimeout(myFunction,1000)
// function Example(){
//   console.log('hi ,nietsh khatri')
// }
// setInterval(Example,1000)
// function Example(){
//   console.log('hi ,nietsh khatri')
// }
// setTimeout(Example,1000)


// let abc = ['itesh','sameet','manisha']
// function Example(){
//   console.log(abc)
// }
// let result = setInterval(Example,100)
// clearInterval(result)
// let exampletiming = setTimeout(Example,100)
// clearTimeout(exampletiming)

// function func(){
//   console.log('nitesh khatri')
// }
// let timerID = setTimeout(func, 500)
// console.log(timerID)

// 52. Write a function that performs binary search on a sorted array?
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(binary_Search(items,1))

// 53. How can we parse a given JSON object?
// const user = [
//   {name:'nitesh',age:34},
//   {name:'sameet',age:34}
// ]
// const jsonparse = JSON.stringify(user)
// const jsonparssse = JSON.parse(jsonparse)
// console.log(jsonparssse)

//54. How do you check whether a string contains a substring?
// const str = 'This is my example string!';
// const substr = 'my';
// console.log(str.includes(substr));
// console.log(str.includes(substr, 2));

// 55. How do I get query string values in javascript?
// let params = new URLSearchParams('q=node&page=2&component=sas')
// console.log(params.get('q'))
// console.log(params.get('page'))
// console.log(params.get('component'))

// const url = new URLSearchParams('https://stackabuse.com/search?q=node&page=2')
// console.log(url.get('q'))
// console.log(url.get('page'))
// console.log(url.get('component'))

// 56. How to create and trigger events in javascript?

// document.addEventListener('click',function(){
//   alert('you clicked inside the document')
// })
// document.addEventListener('mouseover',function(){
//   document.body.style.backgroundColor = 'orange'
// })
// document.addEventListener('mouseout',function(){
//   document.body.style.backgroundColor = 'red'
// })


// 57. How do you compare time for two dates?
// const date1 = new Date("December 15, 2010");
// const date2 = new Date("December 15, 2010");
// if(date1 < date2){
//   console.log('date1 is earlier than date2')
// }
// else if(date1 > date2){
//   console.log('date1 is later than date2')
// }
// else{
//   console.log('date1 and date2 are the same.')
// }
// if(date1 === date2){
//   console.log('date1 and date2 are the same')
// }
// else{
//   console.log('date1 and date2 are not the same')
// }

// const date = new Date()
// const [year,month,week,day,hour,minutes,seconds] = [
//   date.getFullYear(),
//   date.getMonth(),
//   date.getDay(),
//   date.getDate(),
//   date.getHours(),
//   date.getMinutes(),
//   date.getSeconds(),  
// ]
// console.log(year,month,week,day,hour,minutes,seconds)

// 59 How do you check if a string starts with another string?
// console.log('nitesh khatri is fine'.startsWith('nitesh'))
// const string = 'nitesh khatri'
// const checkmatch = 'nit'
// if(string.startsWith(checkmatch)){
//   console.log('yes, it is match')
// }
// else{
//   console.log('nope, it is not match')
// }

// 60 How do you remove whitespaces from a given string?
// const string = 'nitesh khatri how are you doing'
// const remove = ''
// console.log(string.replaceAll(/ /g,""))

// 61 How do you assign default values to variables
// let status = '' 
// status ||= 'pending'
// console.log(status)
// let status = 'Done' 
// status ||= 'pending'
// console.log(status)


// const lastStatus = 'Done'
// const status = lastStatus || 'pending'
// console.log(status)

// const lastStatus = null
// const status = lastStatus ?? 'pending'
// console.log(status)

// function getStatus(status = 'Pending'){
//   return status;
// }
// getStatus()

// 62 For a given function, count the number of parameters expected by a function
// function multiply(a,b){
//   return a *b 
// }
// console.log(multiply(10,20))
// function sum(num1,num2){
//   return num1 + num2
// }
// console.log(sum(10,20))

// 63 Implement a method which generates 5 random numbers?
// function randomNumber(min,max){
//   return Math.random() * (max-min) + min
// }
// function randomNumber(min,max){
//   return Math.floor(Math.random() * (max-min) + min)
// }
// console.log(randomNumber(10,20))

// 65  Implement a method which generates random numbers between 41 and 67 and sort

// 66 How to write an Object and implement multiple function chaining
// var car = {
//   Color: 'red',
//   brand: 'Toyota',
//   description: function (){
//   This.brand  + "is a  Motor Corporation is a Japanese multinational automotive manufacturer"
//   }
//   }
//   console.log(car?.description())

// 67 How do you determine whether an object is frozen or not?
// let obj1 = {name: "JavaScript"};
// let resultobject = Object.freeze(obj1)
// console.log(Object.isFrozen(resultobject))
// let obj2 = {name:'nitesh'}
// let result = Object.freeze(obj2)
// console.log(Object.isFrozen(result))

// 68 How do you determine two values are the same or not using an object?
// const hero1 = {
//   name: 'Batman',
//   address: {
//     city: 'aadsdd'
//   }
// };
// const hero2 = {
//   name: 'Batman',
//   address: {
//     city: 'aadsdd'
//   }
// };
// const obj1 = {"a": 1, "b": 2};
// const obj2 = {"a": 1, "b": 2};

// console.log(JSON.stringify(hero1) === JSON.stringify(hero2))

// 69 How do you copy properties from one object to another object?
// let obj1 = { a: 1, b: 2 };
// let obj2 = { a: 3, c: 4 };
// let obj3 = { b: 5, d: 6 };
// let targetobject1 = Object.assign(obj1,obj2,obj3)
// let targetobject1 = {...obj1,...obj2,...obj3}
// console.log(targetobject1)

// 70 How do you determine if an object is sealed or not?
// let empty = {}
// console.log(Object.isSealed(empty))
// let objectexample = {
//   name:"nitesh",
//   age:34
// }
// let resultobj = Object.seal(objectexample)
// console.log(Object.isSealed(resultobj))

// 71 How do you get an enumerable key and value pairs?
// const obj1 = { 0: 'adam', 1: 'billy', 2: 'chris' };
// console.log(Object.entries(obj1))
// const obj11 = { 10: 'adam', 200: 'billy', 35: 'chris' };
// console.log(Object.entries(obj11))

// 72 How can you get the list of keys of any object?
// let user ={
//   name : "Balaji",
//   age : 23,
//   greet : () => "Hello",
// };  
// const result = Object.entries(user)
// console.log(result)
// for (let val in user){
//   console.log(val)
// }
// let john = { name: 'John Doe' },
//   lily = { name: 'Lily Bush' },
//   peter = { name: 'Peter Drucker' };

// let userRoles = new Map([
//   [john, 'admin'],
//   [lily, 'editor'],
//   [peter, 'subscriber'],
// ]);

// for (let role of userRoles.values()) {
//   console.log(role);
// }

// 74  How do you encode an URL?
// const url = "https://mozilla.org/?x=шеллы";
// const encodeUrl = encodeURI(url)
// console.log(encodeUrl)

// 75 How do you define property on an Object constructor?
// function Person () {
//   this.name = 'John',
//   this.age = 23
// }
// let text = new Person()
// console.log(text)
// constructor function
// function Person() {
//   constructor(fname,age){
//     this.fname = fname;
//     this.age = age;
//   }
// }
// let user2 = new Person('sameet',41)
// console.log(user2)
// constructor function

// 76 How can you call the constructor of a parent class?
// 77  How do you check whether an object can be extendable or not
// 78 How do you prevent an object from extending?
// 79  How do you find the Vowels?
// 80 What are default values in destructuring assignment?
// const [first, ...others2] = [1, 2, 3];
// console.log(others2)
// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(others)
// const settings = {
//   speed: 150
// }
// const {speed,width=750} = settings
// console.log(speed)
// console.log(width)
// 81 How do you swap variables in destructuring assignment?
// let a = 'sameet';
// let b = 'nitesh';
// [a,b] = [b,a]
// console.log(a,b)
// let x = 22
// let y = 222
// [x,y] = [y,x]
// console.log(label1)
// console.log(label2)

// 82 How do you combine two or more arrays?
// const arrayoption1 = ['vijay','ronak','hitesh','rahul','vijay']
// const arrayoption2 = ['sachin','rahul','mayur','amit','vijay']
// console.log(...arrayoption1,...arrayoption2)
// console.log(...arrayoption1.concat(...arrayoption2))
// console.log(Array.from([...new Set(...arrayoption1,...arrayoption2)]))
// const distinct = (value,index,arr) => {
//   return arr.indexOf(value) === index
// }
// console.log(arrayoption1.filter(distinct))
// console.log(Array.from(...new Set([arrayoption1])))

// 83 How to create a specific number of copies for a string?
// 84 What is the easiest way to convert an array to an obj
// let arr1 = [1, 2, 3, 4];
// console.log(Object.assign({},arr1))
// let result = {}
// for(let i=0;i<arr1.length;i++){
//   result[i] = arr1[i]
//   return result
// }
// console.log(result)
// 85 Verify that a function argument is a Number or not?
// console.log(Number.isInteger(-1))
// console.log(Number.isInteger(11))
// console.log(Number.isInteger(0))
// console.log(Number.isInteger('niesh'))

// 86  What is the easiest way to resize an Array?
// 87 What's the difference between a function expression and function declaration?
// declaration 
// function Example(a,b){
//   return a + b 
// }
// console.log(Example(10,20))
// expression
// const ExampleTwo = function(a,b) {
//   return a * b 
// }
// console.log(ExampleTwo(10,20))

// 89  How to detect a mobile device with JavaScript?
//  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//   // true for mobile device
//   document.write("mobile device");
// }else{
//   // false for not mobile device
//   document.write("not mobile device");
// }

//90 Why do we use The some() method in Arrays?
// const words = ["cat","be","danger", "dog","log","bag","wag"]; 
// console.log(words.some((item) => item))
// console.log(words.every((item) => item))
// console.log(words.some((item) => item.length === 3))

// 91  How to add 15 minutes to a JavaScript Date?
// var add_minutes =  function (dt, minutes) {
//   return new Date(dt.getTime() + minutes*60000);
// }
// console.log(add_minutes(new Date(2014,10,2), 30).toString());

// 92 Explain JavaScript Promises with an example?
// const myFirstGenerator = function* () {
//   const one = yield 1;
//   const two = yield 2;
//   const three = yield 3;

//   return 'Finished!';
// }

// const gen = myFirstGenerator();
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next())
// console.log(gen.next())

// var promise1 = Promise.resolve(catSource);
// var promise2 = Promise.resolve(dogSource);
// var promise3 = Promise.resolve(cowSource);
// Promise.all([promise1,promise2,promise3]).then(function(values){
//   console.log(values)
// })

// 93 Which keyword can be used to deploy inheritance in ES6?
// 94 What is the difference between for..of and for..in?
// 95. How to set a property in localStorage?

// function myFunction(){
//   let a = 4;
//   return a * a 
// }
// console.log(myFunction())

// let counter = 0
// function add(){
//   counter += 1
//   return counter
// }
// console.log(add())

// for(let i=0;i<10;i++){
//   setTimeout(() => {
//     console.log(i)
//   },500)
// }
// for(let i=0;i<10;i++){
//   setInterval(() => {
//     console.log(i)
//   },500)
// }

// function myFunction(){
//   console.log('word is interval')
// }
// setInterval(myFunction,1000)
// clearInterval(myFunction)

// function myFunction(){
//   console.log('nitesh khatri')
// }
// setInterval(myFunction,100)
// clearInterval(myFunction)

// function Example(){
//   console.log('nitesh khatri')
// }
// setTimeout(Example,1000)
// clearTimeout(Example)

// let promise = new Promise((resolve,reject) => {
//   let value = 50 
//   if(value > 20){
//     resolve('yes')
//   }
//   else{
//     reject('yes')
//   }
// })
// async function Example(){
//   let result = await promise 
//   console.log(result)
// }
// Example()

// const word = 'nitesh'
// switch(word){
//   case 'nitesh' :console.log('yes nitesh')
//   break;
//   case 'sameet' :console.log('yes nitesh')
//   break;
//   case 'arvind' :console.log('yes nitesh')
//   break;
//   default:console.log('no it is not match')
// }
// console.log(word)

// ternary opeartor
// const example = true 
// console.log(example ? "yes" :  "no")

// function clock(){
//   return new Date().toLocaleTimeString()
// }
// const result = setInterval(clock,100)
// clearInterval(result)
// console.log(result)


// function sum(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// console.log(sum(10)(20)(30))

// function sum(a){
//   return function(b){
//     return function(c){
//       return function(d){
//         return ((a+b)*c-d)
//       }
//     }
//   }
// }
// console.log(sum(10)(20)(30)(5000))

// let promise1 = 'nitesh'
// let promise2 = 'sameet'
// let promise3 = 'arvind'
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });
// Promise.all([promise1,promise2,promise3]).then((values) => console.log(values))

// p1 = Promise.resolve(50)
//   p2 = 200
//   p3 = new Promise(function(resolve,reject){
//     setTimeout(resolve,1000,'geek')
//   })
//   Promise.all([p1,p2,p3]).then(function(values) {
//     console.log(values)
//   })

// let a = 5;
// let b = 10;
// function addNumbers() {
//   let a = 2;
//   let b = 4;
//   let sum = a + b;
//   console.log(sum);
// }
// addNumbers();
// console.log(a + b);

// const arr1 = [1,3,8,5]
// console.log(arr1.length = 0)

// map function structure
// const arrayword = [1,4,9,16]
// const map1 = Array.prototype.map.call(arrayword,((item) => {return item * 2}))
// const map2 = arrayword.map(x => x * 2)
// console.log(map1)
// console.log(map2)

// filter function structure 
// const numbers1 = [1,2,3,4,5,6,7,8,,9,10];
// const updatearray = Array.prototype.filter.call(numbers1,(element) => {return element > 5})
// console.log(updatearray)
// const updatearray2 = numbers1.filter((element) => element > 5)
// console.log(updatearray2)

// Promises function structure => Useful JavaScript functions for Web Developers 👾
// async function Parent(){
//   try{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     console.log(data)
//   }
//   catch{
//     (error) => {console.log(error)}
//   }
// }

// ternary operator
// const value1 = (5<7) ? "True" : "false"
// console.log(value1)
// const value2 = (6>10) ? "True" : "False"
// console.log(value2)

// const superb = [1,2,3,4,5]
// console.log(Array.prototype.map.call(superb,(item) => {return item *2 }))
// console.log(superb.map((item) => {return item *2 }))
// console.log(Array.prototype.filter.call(superb,(item) => {return item > 4}))
// console.log(superb.filter((item) => {return item > 4}))

// const profile = {
//   'name' : 'John Doe',
//   'age' : 15
//   }
//   const jsonresult = JSON.stringify(profile)
//   console.log(jsonresult)

// function foo(){
//   console.log(this.bar)
// }
// var bar = 'nitesh khatri'
// foo()

// var colors = ['red','orange','purple','pink']
// var colorsIndex = colors.indexOf('pink')
// console.log(colorsIndex)

// console.log(null == undefined)
// console.log(null !== undefined)
// console.log(null === undefined)
// console.log(undefined !== undefined)
// console.log('2'-'2'-'2'+'2')

// var developers = ["hello", "meet", "me"];
// developers.forEach((item) => {
//   console.log(item.toUpperCase())
// })

// const data = {name:"nitesh khatri",age:34}
// console.log(typeof data.name !== 'Sameet')

// function add(a, b) {
// 	const sum = a + b
//     return sum
// }
// console.log(add(10,20))

// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index 
// }
// console.log([11,222,44,3,33,44].filter(distinct))

// const friendsgroup = ['nilesh','vijay','vishal','chandersh','ronak','shefali']
// const result = friendsgroup.sort(function(a,b) {
//   if(a<b){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(result)
// const numberwise = [1,22,3,4,102,33]
// const result2 = numberwise.sort(function(a,b) {
//   if(a>b){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(result2)

// console.log('nitesh khatri'.split("").reverse("").join(""))

// console.log('nitesh khatri'.toUpperCase())

// console.log(Array.isArray(friendsgroup))

// const wordnumberwise = ['nitesh',11,null,undefined,'11']
// const result = wordnumberwise.filter((val) => typeof val === 'string' || typeof val === 'number' || typeof val === 'undefined')
// console.log(result)
// console.log(wordnumberwise.map((val) => val))
// const personwise = [
//   {id:1,name:'nitesh',age:34},
//   {id:2,name:'sameet',age:41},
//   {id:3,name:'arvind',age:68},
//   {id:4,name:'urvashi',age:65},
// ]
// const resultnew = Array.prototype.filter.call(personwise,((item) => item.age > 45))
// console.log(resultnew)

// class Person {
//   constructor(text,fname,lname,age){
//     this.user = text
//     this.FirstName = fname  
//     this.LastName = lname
//     this.Age = age
//   }
// }
// let user1 = new Person('Person1','nitesh','khatri',34)
// let user2 = new Person('Person2','sameet','khatri',41)
// let user3 = new Person('Person3','urvashi','khatri',65)
// let user4 = new Person('Person4','arvind','khatri',68)
// console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(user4)

// console.log([...'nitesh'])

// let promiseresult = new Promise((resolve,reject) =>{
//   let value = 10
//   if(value > 5){
//     resolve('yes')
//   }
//   reject('no')
// })
// async function Output(){
//   let superb = await promiseresult
//   console.log(superb)
// }
// Output()

// let n1 = 'nitesh khatri'
// function Happy(){
//   setTimeout(() => {
//     return console.log(n1)
//   },1000)
// }
// Happy()
// let n1 = 'nitesh khatri'
// function Happy(){
//   setInterval(() => {
//     return console.log(n1)
//   },100)
// }
// Happy()

// const word = 'sameet'
// switch(word){
//   case 'nitesh' : console.log('yes nitesh')
//   break;
//   case 'nitesh' : console.log('yes nitesh')
//   break;
//   default:console.log('no it is not match')
//   break;
// }
// console.log(word)
// const myFun = new Function("5 + 2");
// console.log(myFun)
// console.log(typeof 62)
// console.log(typeof 'nitesh')
// console.log(typeof ['nitesh','sameet'])
// console.log(typeof {name:'nitesh',age:34})
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof 1100 > 62)

// let x = 10
// function Example(){
//   x = 20 
// }
// Example();
// console.log(x)

// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index
// }
// const friends = ['vijay','rahul','vijay']
// console.log(friends.filter(distinct))
// console.log(Array.from([...new Set(friends)]))
// console.log([...new Set(friends)])

// console.log([...'nitesh'])
// console.log('nitesh khatri'.split("").reverse("").join(""))

// class Car{
//   constructor(make,model){
//       this.make = make 
//       this.model = model
//   }
//   startEngine() {
//   console.log(`starting the ${this.make} ${this.model}`)
//   }
// }
//   const myCar = new Car('maruti','corolla')
//  myCar.startEngine()
// class Happy{
//   constructor(make,model){
//     this.make = make 
//     this.model = model 
//   }
//   functionExample(){
//     console.log(`hello ${this.make} ${this.model}`)
//   }
// }
// const myExample = new Happy('superb','awesome')
// console.log(myExample.functionExample())

// const calculator = {
//     add:function(a,b){
//       return a +b 
//     },
//     minus:function(a,b) {
//       return a- b 
//     },
//     multply:function(a,b) {
//       return a * b 
//     },
//     divide:function(a,b) {
//       return a / b 
//     },
// }
// console.log(calculator.add(10,20))
// console.log(calculator.minus(10,20))
// console.log(calculator.multply(10,20))
// console.log(calculator.divide(10,20))
// const arr1 = [1,3,8,5]
// console.log(arr1.length = 0)

// map function structure
// const arrayword = [1,4,9,16]
// const map1 = Array.prototype.map.call(arrayword,((item) => {return item * 2}))
// const map2 = arrayword.map(x => x * 2)
// console.log(map1)
// console.log(map2)

// filter function structure 
// const numbers1 = [1,2,3,4,5,6,7,8,,9,10];
// const updatearray = Array.prototype.filter.call(numbers1,(element) => {return element > 5})
// console.log(updatearray)
// const updatearray2 = numbers1.filter((element) => element > 5)
// console.log(updatearray2)

// Promises function structure => Useful JavaScript functions for Web Developers 👾
// async function Parent(){
//   try{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     console.log(data)
//   }
//   catch{
//     (error) => {console.log(error)}
//   }
// }

// ternary operator
// const value1 = (5<7) ? "True" : "false"
// console.log(value1)
// const value2 = (6>10) ? "True" : "False"
// console.log(value2)

// const superb = [1,2,3,4,5]
// console.log(Array.prototype.map.call(superb,(item) => {return item *2 }))
// console.log(superb.map((item) => {return item *2 }))
// console.log(Array.prototype.filter.call(superb,(item) => {return item > 4}))
// console.log(superb.filter((item) => {return item > 4}))

// const profile = {
//   'name' : 'John Doe',
//   'age' : 15
//   }
//   const jsonresult = JSON.stringify(profile)
//   console.log(jsonresult)

// function foo(){
//   console.log(this.bar)
// }
// var bar = 'nitesh khatri'
// foo()

// var colors = ['red','orange','purple','pink']
// var colorsIndex = colors.indexOf('pink')
// console.log(colorsIndex)

// console.log(null == undefined)
// console.log(null !== undefined)
// console.log(null === undefined)
// console.log(undefined !== undefined)
// console.log('2'-'2'-'2'+'2')

// var developers = ["hello", "meet", "me"];
// developers.forEach((item) => {
//   console.log(item.toUpperCase())
// })

// const data = {name:"nitesh khatri",age:34}
// console.log(typeof data.name !== 'Sameet')

// function add(a, b) {
// 	const sum = a + b
//     return sum
// }
// console.log(add(10,20))

// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index 
// }
// console.log([11,222,44,3,33,44].filter(distinct))

const friendsgroup = ['nilesh', 'vijay', 'vishal', 'chandersh', 'ronak', 'shefali']
// const result = friendsgroup.sort(function(a,b) {
//   if(a<b){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(result)
// const numberwise = [1,22,3,4,102,33]
// const result2 = numberwise.sort(function(a,b) {
//   if(a>b){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(result2)

// console.log('nitesh khatri'.split("").reverse("").join(""))

// console.log('nitesh khatri'.toUpperCase())

// console.log(Array.isArray(friendsgroup))

// const wordnumberwise = ['nitesh',11,null,undefined,'11']
// const result = wordnumberwise.filter((val) => typeof val === 'string' || typeof val === 'number' || typeof val === 'undefined')
// console.log(result)
// console.log(wordnumberwise.map((val) => val))
// const personwise = [
//   {id:1,name:'nitesh',age:34},
//   {id:2,name:'sameet',age:41},
//   {id:3,name:'arvind',age:68},
//   {id:4,name:'urvashi',age:65},
// ]
// const resultnew = Array.prototype.filter.call(personwise,((item) => item.age > 45))
// console.log(resultnew)

// class Person {
//   constructor(text,fname,lname,age){
//     this.user = text
//     this.FirstName = fname  
//     this.LastName = lname
//     this.Age = age
//   }
// }
// let user1 = new Person('Person1','nitesh','khatri',34)
// let user2 = new Person('Person2','sameet','khatri',41)
// let user3 = new Person('Person3','urvashi','khatri',65)
// let user4 = new Person('Person4','arvind','khatri',68)
// console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(user4)

// console.log([...'nitesh'])

// let promiseresult = new Promise((resolve,reject) =>{
//   let value = 10
//   if(value > 5){
//     resolve('yes')
//   }
//   reject('no')
// })
// async function Output(){
//   let superb = await promiseresult
//   console.log(superb)
// }
// Output()

// let n1 = 'nitesh khatri'
// function Happy(){
//   setTimeout(() => {
//     return console.log(n1)
//   },1000)
// }
// Happy()
// let n1 = 'nitesh khatri'
// function Happy(){
//   setInterval(() => {
//     return console.log(n1)
//   },100)
// }
// Happy()

// const word = 'sameet'
// switch(word){
//   case 'nitesh' : console.log('yes nitesh')
//   break;
//   case 'nitesh' : console.log('yes nitesh')
//   break;
//   default:console.log('no it is not match')
//   break;
// }
// console.log(word)
// const myFun = new Function("5 + 2");
// console.log(myFun)
// console.log(typeof 62)
// console.log(typeof 'nitesh')
// console.log(typeof ['nitesh','sameet'])
// console.log(typeof {name:'nitesh',age:34})
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof 1100 > 62)

// let x = 10
// function Example(){
//   x = 20 
// }
// Example();
// console.log(x)

// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index
// }
// const friends = ['vijay','rahul','vijay']
// console.log(friends.filter(distinct))
// console.log(Array.from([...new Set(friends)]))
// console.log([...new Set(friends)])

// console.log([...'nitesh'])
// console.log('nitesh khatri'.split("").reverse("").join(""))

// class Car{
//   constructor(make,model){
//       this.make = make 
//       this.model = model
//   }
//   startEngine() {
//   console.log(`starting the ${this.make} ${this.model}`)
//   }
// }
//   const myCar = new Car('maruti','corolla')
//  myCar.startEngine()
// class Happy{
//   constructor(make,model){
//     this.make = make 
//     this.model = model 
//   }
//   functionExample(){
//     console.log(`hello ${this.make} ${this.model}`)
//   }
// }
// const myExample = new Happy('superb','awesome')
// console.log(myExample.functionExample())

// const calculator = {
//     add:function(a,b){
//       return a +b 
//     },
//     minus:function(a,b) {
//       return a- b 
//     },
//     multply:function(a,b) {
//       return a * b 
//     },
//     divide:function(a,b) {
//       return a / b 
//     },
// }
// console.log(calculator.add(10,20))
// console.log(calculator.minus(10,20))
// console.log(calculator.multply(10,20))
// console.log(calculator.divide(10,20))

// destructing arrays
// const myArray = [1,2,3]
// const [a,b,c] = myArray
// console.log(a)
// console.log(b)
// console.log(c)


// const myObject = {name:'nitesh',age:34,address:{city:'mumbai',state:"maharashtra"}}
// const {name,age} = myObject
// console.log(name)
// console.log(age)
// const {name,age,address:{state,city}} = myObject
// console.log(name)
// console.log(age)

// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index 
// }
// const groupwise = ['filtration','filtration','diesel','oil','brake']
// const numberwisearr = [4,6,11,22,33,55,1111,222,11,22]
// console.log(Array.prototype.map.call(groupwise))
// console.log(groupwise.filter(distinct))
// console.log([...new Set(groupwise)])
// console.log(Array.from([...new Set(groupwise)]))

// const result = numberwisearr.sort(function(a,b){
//   if(a<b){
//     return - 1
//   }
//   else{
//     return 1
//   }
// })
// console.log(result.filter(distinct))


// console.log('nitesh'.split('').reverse('').join(''))
// const arrr = [55,[2,3]]
// console.log(arrr.flat())
// console.log(Array.prototype.flat.call(arrr))

// const asddasd = [1, 4, 9];
// const roots = asddasd.map((val) => Math.sqrt(val))
// console.log(roots)
// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];
// const example = kvArray.map(({key,value}) => ({[key]:value}))
// console.log(example)
//
// const numbers22 = [1, 4, 9];
// const doubles = numbers22.map((num) => num * 2);
// console.log(doubles)

// we used implicit returns for both of the arrow functions we passsed to the matp method
// const arrsss = ['a','b','c']
// const explicit_result = arrsss.map((val) => {
//   return val 
// })
// console.log(explicit_result)

// const implicit_result = arrsss.map((val) => val)
// console.log(implicit_result)

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// plants.pop()
// plants.push('potato')
// plants.unshift('peas')
// plants.shift('peas')
// console.log(plants.indexOf('cauliflower'))
// console.log(plants.lastIndexOf('tomato'))
// console.log(plants.length)
// console.log(plants.toString().toUpperCase())
// console.log(plants.toString().split("").reverse("").join(""))
// console.log(plants.splice(1,4))
// console.log(plants.slice(1,1))


// let age = 50
// function printAge(){
//   console.log(age)
//   let age = 100 
// }
// printAge()

// function Example(){
//   function print(){
//     console.log(age)
//   }
//   const age = 20
//   print()
// }
// Example()

// console.log(x)
// var x = 10
// console.log(x)
// var c = 100
// console.log(c)
// let a = 10,b = 20
// let sum = a +b 
// console.log(sum)


// let result = 'nitesh is result'
// console.log(result)
// let a = 'nitesh'
// let b = 'sameet'
// console.log(a,b)

// const myNames = 'nitesh'
// if(myNames === 'nitesh'){
//   console.log(`Nitesh is ${job}`)
//   const age = 2023 - 1989
//   console.log(age)
//   const job = 'teacher';
//   console.log(x)
// }

// console.log("Program Started and Variable z is in Temporal Dead Zone");
// console.log("Variable z is in Temporal Dead Zone");
// console.log("Variable z is in Temporal Dead Zone");
// console.log("Variable z is in Temporal Dead Zone");
// console.log("Variable z is in Temporal Dead Zone");
// let z = 6;
// console.log("Now Variable z is not in Temporal Dead Zone");
// console.log(z);

// var x = 6 
// let z = 6 
// console.log(x)
// console.log(z)
// console.log(x)
// console.log(z)

// let people_details = [
//   {name: "ABC", age: 18},
//   {name: "GeeksforGeeks", age: 30},
//   {name: "DEF", age: 50},
// ];
// console.log(people_details.filter((val) => val.age > 41))
// console.log(people_details.filter((val) => val.name === 'ABC' || val.name === 'DEF'))
// console.log(people_details.map((val) => val.age))
// console.log(people_details.map((val) => val.name))
// console.log(people_details.map((val,index) => typeof val.name))
// console.log(people_details.map((val,index) => typeof val.age))


// let btn = document.getElementById('buttonId');
// btn.addEventListener('click',function(){
//   console.log('hi')
// })

// const buttons = document.getElementsByClassName('buttonClass');
// for(const btn of buttons){
//   btn.addEventListener('click',() => console.log('adsa'))
// }

// const buttons = document.getElementsByClassName('buttonClass2');
// for(const btn of buttons){
//   btn.addEventListener('click',() => console.log('this is called of button'))
// }

// document.body.addEventListener('click',() => {
//   console.log('Body click event in capture phase')
// },{once:false})

// document.getElementById('buttons').addEventListener('click',(event) => {
//   if(event.target.className === 'buttonClass')
//   console.log('Click!')
// })
// let menu = document.querySelector('#menu');
// menu.addEventListener('click',(event)=>{
//   let target = event.target;
//   switch(target.id){
//       case 'home':
//       console.log('Home menu item was clicked');
//       break;
//       case 'dashboard':
//       console.log('Dashboard menu item was clicked');
//       break;
//       case 'report':
//       console.log('Report menu item was clicked');
//       break;
//     }
// })
// for(let step=0;step<5;step++){
//   console.log(`'Walking east one step' ${step}`)
// }

// const groupwise = ['vijay','happy','ronak']

// const persongroup = [
//   {
//     name:'nitesh',
//     age:34
//   },
//   {
//     name:'sameet',
//     age:41
//   },
//   {
//     name:'urvashi',
//     age:41
//   },
//   {
//     name:'arvind',
//     age:67
//   },
// ]
// for(let superb of groupwise){
//   console.log(superb)
// }
// for(let superb in groupwise){
//   console.log(superb)
// }
// for(let example in persongroup){
//   console.log(example)
// }

// let n = 0
// let y = 0
// while(n < 10){
//   n++
//   y += n
// }

// for(let i =0;i<10;i++){
//   if(i === 5){
//     continue;
//   }
//   console.log(i)
// }

// for(let i =0;i<10;i++){
//   if(i === 5){
//     break;
//   }
//   console.log(i)
// }

// let i = 0
// let n = 0
// while(i < 10){
//   i++;
//   if(i === 4){
//     continue;
//   }
//   n += i;
//   console.log(n)
// }

// var obj11 = [
//   { name: 'Max', age: 23 },
//   { name: 'John', age: 20 },
//   { name: 'Caley', age: 18 }
// ];
// obj11.forEach((val) => console.log(val))

// for(var value of obj11){
//   console.log(value)
// }

// console.log(Object.entries(obj11))

// Object.keys(obj11).forEach((val) => console.log(obj11[val]))

// for(const superb of Object.keys(obj11)){
//   console.log(obj11[superb])
// }

// for(const superb of Object.values(obj11)){
//   console.log(superb)
// }

// for(var key in obj11){
//   console.log(obj11[key])
// }

// const data = [
//   { name: 'John', age: 30, group: 'A' },
//   { name: 'Mary', age: 25, group: 'B' },
//   { name: 'Mike', age: 20, group: 'A' },
//   { name: 'Jane', age: 15, group: 'C' },
//   { name: 'Peter', age: 25, group: 'B' }
// ];

// for(let superb of data){
//   console.log(superb)
// }
// for(let superb in Object.keys(data)){
//   console.log(data[superb])
// }
// for(let superb in data){
//   console.log(data[superb])
// }
// for(let superb in Object.entries(data)){
//   console.log(data[superb])
// }

// data.forEach(function(item,index){
//   console.log(item)
// })

// for(const key in data){
//   console.log(key,data[key])
// }

// for(const item of data){
//   console.log(item )
// }

// let len = data.length,count = 0;
// while(len--){
//   console.log(data[count])
//   count++
// }

// for(let i =0;i<data.length;i++){
//   console.log(i,data[i])
// }
// const filterddata = data.filter((val) => {
//   return val.age >= 24
// })
// console.log(filterddata)

// const customers = [
//   { name: 'Sara', birthday: '1995-4-12', credit: 725, group: 'A' },
//   { name: 'Mary', birthday: '1985-3-14', credit: 515, group: 'B' },
//   { name: 'Zoya', birthday: '1999-2-12', credit: 325, group: 'A' },
//   { name: 'Peter', birthday: '1992-1-10', credit: 875, group: 'C' },
//   { name: 'Mike', birthday: '1997-5-14', credit: 825, group: 'B' }
// ];
// const resultsort = customers.sort(function(a,b){
//   if(a.name>b.name){
//     return -1
//   }
//   else{
//     return 1 
//   }
// })
// console.log(resultsort)

// let str = 'nitesh khatri'
// if(str.length === 0){
//   console.log('yes it is empty')
// }
// else{
//   console.log('no, it is not empty')
// }


// event loop
// console.log('before delay ')
// function delayExample(sec){
//   let start = now = Date.now();
//   while(now-start < (sec * 1000)){
//     now = Date.now();
//   }
// }
// delayExample(5);
// console.log('after delay');

// function ExampleOne(){
//   console.log('inside level one')
// }
// function Exampletwo(){
//   ExampleOne()
// }
// function Main(){
//   Exampletwo()
// }
// Main()

// function One(){
//   console.log('god = nitesh get job selected')
// }
// function Two(){
//   One()
// }
// function Main(){
//   Two()
// }
// Main()

// let result = 'nitesh khatri'
// console.log(setTimeout(result,1000))
// const result = 'nitesh khatri ---'
// function Example(){
//   setTimeout(() => {
//     return console.log(result)
//   },1000)
// }
// Example()

// const imgwallpaper =  new Image(200,200)
// imgwallpaper.src = "https://picsum.photos/200/301";
// imgwallpaper.style.border = '10px solid red'
// document.body.appendChild(imgwallpaper)

// Throttling vs denouncing
// var searchBar = document.getElementById('search-bar');
// var numberOfKeyPresses = 0;
// var numberOfApiCalls = 0;

// function getSearchResult(){
//   numberOfApiCalls += 1;
//   console.log('Number of API Calls : ' + numberOfApiCalls);
// }
// searchBar.addEventListener('input',function(e){
//   numberOfKeyPresses += 1;
//   console.log('Search Keyword : ' + e.target.value)
//   console.log('Number of Key Presses : ' + numberOfKeyPresses);
//   getSearchResult();
// })

// function ExampleResolve(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved')
//     }, 1000);
//   })
// }
// async function Final(){
//   console.log('calling');
//   const result = await ExampleResolve();
//   console.log(result)
// }
// Final();

// const p1 = Promise.resolve(2);
// const p2 = 1337
// const p3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('foo')
//   },1000)
// })
// Promise.all([p1,p2,p3]).then((values) => {
//   console.log(values)
// })

// const e1 =  Promise.resolve('nitesh khatri')
// const e2 = 'sameet khatri'
// const e3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('finally')
//   },500)
// })
// Promise.all([e1,e2,e3]).then((values) => console.log(values))

// const example1 = Promise.resolve("REsolved");
// const example2 = 'middle'
// const example3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('finally')
//   },1000)
// })
// Promise.all([example1,example2,example3]).then((val) => console.log(val))

const words = ["hello", "world"]
// const reverse = string => [...string].reverse().join()
// console.log(words.map(reverse))
// console.log(words.map(word => word.toUpperCase()))
// const fruits = [
//   { name: "Apple",
//     price: 25,
//     emoji: "🍏",
//   },
//   { name: "Banana",
//     price: 40,
//     emoji: "🍌",
//   },
//   { name: "Melon",
//     price: 75,
//     emoji: "🍉",
//   },
// ]
// console.log(fruits.map((val) => val.name))
// const result = fruits.sort(function(a,b) {
//   if(a.emoji>b.emoji){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(result)



// let employee = {
//   eid: "E102",
//   ename: "Jack",
//   eaddress: "New York",
//   salary: 50000
// }
// let example = JSON.stringify(employee)
// console.log(example)
// let newEmp = JSON.parse(JSON.stringify(employee))
// console.log(newEmp)

// const friendsgroup1 = ['vijay','rahul','vishal','vishal','arvind']

// const resultsort = friendsgroup1.sort(function(a,b){
//     if(a<b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log(resultsort)

// let arreee = [1,2,3,4,4]
// function sum(num,arr){
//   for(let i=0;i<arreee.length;i++){
//     for(let j=1;j<arr.length;j++){
//       let sum = arr[i] + arr[j]
//       if(num === sum){ 
//         return [i,j]
//       }
//     }
//   }
// }
// console.log(sum(16,arr))

// let superb = [11,22,33,44]
// function sum(num,superb){
//   for(let i=0;i<superb.length;i++){
//     for(let j=0;j<superb.length;j++){
//       let sum = superb[i] + superb[j]
//       if(num === sum) return [i,j]
//     }
//   }
// }
// console.log(sum(16,arr))

// let examplearr = [12,3,55,4,10]
// function square(num,examplearr){
//   for(let i=0;i<examplearr.length;i++){
//     for(let j=0;j<examplearr.length;j++){
//       let square = examplearr[i] + examplearr[j]
//       if(num === square) return [i,j]
//     }
//   }
// }
// console.log(square(11,examplearr))

// let person = { name: 'Ronak' };
// const superb = [person]
// person = null 
// console.log(superb)


// shallow copy object 
// const obj2 = { name: 'Version 1', additionalInfo: { version: 1 } };
// const shallowCopy1  = {...obj2}
// console.log(shallowCopy1)
// shallowCopy1.name = 'sameet'
// shallowCopy1.additionalInfo.version = 2 
// console.log(shallowCopy1)

// deep copy object
// const obj3 = {name:'nitesh',age:34}
// console.log(JSON.parse(JSON.stringify(obj3)))

// Spread Operator: The spread operator is a concise way to shallow copy an array or object in JavaScript. Let’s consider an example:
// const originalArr = [1, 2, 3];
// const result = [...originalArr]
// console.log(result)

// Array.slice(): The slice() method creates a shallow copy of an array by extracting a portion of it. Here's an example:
// const originalArr = [1, 2, 3];
// const result = originalArr.slice();
// console.log(result)

// Object.assign(): When it comes to objects, Object.assign() can be used to create a shallow copy. It copies the values of all enumerable properties from one or more source objects to a target object:
// const originalObj = { name: 'John', age: 25 };
// const shallowobject = Object.assign({},originalObj)
// console.log(shallowobject)

// JSON.parse() and JSON.stringify(): One popular method to perform deep copying is by utilizing JSON.parse() and JSON.stringify() methods:
// const originalArray = [1, 2, 3];
// const deepresult = JSON.parse(JSON.stringify(originalArray))
// console.log(deepresult)

// Third-party Libraries: Alternatively, you can use third-party libraries like Lodash or Underscore.js, which provide convenient deep copy functions:
// const originalObject = { name: 'John', age: 25 };
// const result = _.cloneObject(originalObject)
// console.log(result)

// var obj1 = {
//   x:  43,
//   y:  "Hello world!",
//   z: function(){
//      return this.x;
//   }
// }
// console.log(obj1)

// var person = {
//   name:'nitesh',
//   z:function(){
//     return this.name 
//   }
// }
// console.log(person)

// a = 1 
// console.log('a=' + a)

// Hoisting takes place in the local scope as well
// function Example(){
//   x = 33 
//   console.log(x)
//   var x 
// }
// Example()

// var x = 2;
// var y = "2";
// console.log(x == y)  // Returns true since the value of both x and y is the same
// console.log(x === y) // Returns false since the typeof x is "number" and typeof y is "string"

// console.log(3+ '3')

// console.log(3 = 3)
// const Add = (a,b) => {
//   const sum = a +b 
//   return sum 
// }
// console.log(Add(10,20))
// const Minus = (a,b) => {
//   const sum = a - b 
//   return sum 
// }
// console.log(Minus(10,20))
// const Multiple = (a,b) => {
//   const sum = a * b 
//   return sum 
// }
// console.log(Multiple(10,20))
// const Divide = (a,b) => {
//   const sum = a / b 
//   return sum 
// }
// console.log(Divide(10,20))

// const result = (num) => num & 1 ? 'yes' : 'No' ;
// console.log(result(111))

// console.log(11 && 1 ? 'true' : 'false')

// (function(){
//   // do something
// })

// console.log(typeof firstname)
// console.log(firstname)
// if(true){
//   console.log(typeof firstname)
//   console.log(firstname)
//   let firstname = 'nitesh' 
// }

// pi 
// const pi = 'nitesh'
// console.log(pi)

// const friendsgroupwww = ['vijay','vishal','ronak','amit','kaplesh','kaplesh']
// const groupnumberwise = [11,22,33,44,55,666,77,77,88,99,99]
// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index 
// }
// console.log(friendsgroupwww.filter(distinct))
// console.log(Array.from([...new Set(friendsgroupwww)]))
// console.log([...new Set(friendsgroupwww)])
// console.log(groupnumberwise.filter(distinct))

// let age = 100
// console.log(age);

// console.log(typeof undefined)
// console.log(typeof 0)
// console.log(typeof 10n)
// console.log(typeof true)
// console.log(typeof 'foo')
// console.log(typeof Symbol("id"))
// console.log(typeof Math)
// console.log(typeof null)
// console.log(typeof alert)


// var a = 'sameet'
// function Example(){
//   console.log(a);
// }
// var a = 'nitesh'
// Example()

// let a = 'nitesh'
// function Example(){
//   console.log(a)
// }
// let a = 'sameet'
// console.log(a)

// function sum(a){
//   return function(b){
//     return function(c){
//       return a +b +c 
//     }
//   }
// }
// console.log(sum(10)(20)(30))

// let message 
// message = 'hello'
// console.log(message)

// let user = 'John', age = 25, message = 'Hello';
// console.log(user)
// console.log(age)
// console.log(message)
// console.log(user.concat(age,message))

// let $ = 1
// let _ = 2 
// console.log($)
// console.log(_)


// const myBirthday = '18.04.1982';
// console.log(myBirthday)

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
// let color = COLOR_ORANGE
// console.log(color)

// const birthday = '18.04.1982';
// console.log(birthday)

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;
// console.log(str)
// console.log(str2)
// console.log(phrase)

// let name = "John";
// console.log(name)
// let promise = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('nitesh khatri')
//   },1000)
// })

// async function Example() {
//   let result = await promise 
//   console.log(result)
// }
// Example()

// const p1 = Promise.resolve('nitesh')
// const p2 = 'nitesh 111'
// const p3 = 'sameet'
// Promise.all([p1,p2,p3]).then((values) => console.log(values))
// let example = new Promise((resolve,reject) => {
//   let value = 10
//   if(value >5){
//     resolve('yes')
//   }
//   else{
//     reject('no')
//   }
// })
// async function Finally(){
//   let smile = await example;
//   console.log(smile)
// }
// Finally()

// let numbersw = [1, 2, 3];
// let result = numbersw.reduce((a,b) => {
//   return a + b 
// },0)
// console.log(result)

// const randomValue = 21;
// function getInfo() {
//   console.log(typeof randomValue);
//   const randomValue = 'adam';
// }
// getInfo();

// function sum(a){
//   return function(b){
//     return function(c){
//       return a  + b + c 
//     }
//   }
// }
// console.log(sum(10)(20)(30))

// let hour = 12
// let minute = 30 
// if(hour == 12 && minute == 30){
//   console.log('the time is 12:30')
// }
// else{
//   console.log('the time is 1:00')
// }

// let array11 = [{id:1,name:'One'}, {id:2, name:'Two'}, {id:3, name: 'Three'}];
// let res = array11.map((val) => {return {...val}})
// console.log(res)
// res.find(a => a.id == 2).name = 'sameet'
// console.log(res)


// let originalArray = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Mark" }
// ];
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6]
// console.log(...array1,...array2)
// let deepCopy = JSON.parse(JSON.stringify(originalArray))
// originalArray[0].name =' sameet'
// console.log(deepCopy)
// console.log(originalArray)
// const resultarray = originalArray.map((val) => ({...val}))
// console.log(resultarray)

// const mergedArray = [
//   ...array1,
//   ...array2
// ];
// console.log(mergedArray)

// const original = ['zero', 'one'];
// const newArray = [...original];
// console.log(newArray)
// console.log(original)
// console.log(newArray)
// const string = 'hi';
// console.log(string)
// const set = new Set([1,2,3])
// console.log(set)
// const nodeList = document.querySelectorAll('p');
// console.log(nodeList)

// const array123 = [1, 2, 3, 4, 5];
// console.log(Math.max(...array123))
// console.log(Math.min(...array123))

// function update(arr, id, updatedData) {
//   return arr.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
// }

// const arr1 = [
//   { id: '01', name: 'John', email: 'john@email.com' },
//   { id: '02', name: 'Sara', email: 'sara@email.com' },
//   { id: '03', name: 'Michael', email: 'michael@email.com' },
// ]

// const id = '01'
// const updatedData = {email:'xyz@gmail.com'}

// const result = update(arr1,id,updatedData)

// console.log(result)

// const obj1 = {
//   id: '01',
//   name: 'John',
//   id: '02',
// }
// console.log(obj1)

// function update(arr,id,updateData){
//   return arr.map((val) => {return val.id === id ? {...val,...updateData}: val})
// }
// const arr1 = [
//   { id: '01', name: 'John', email: 'john@email.com' },
//   { id: '02', name: 'Sara', email: 'sara@email.com' },
//   { id: '03', name: 'Michael', email: 'michael@email.com' },
// ]
// const id = '01'
// const updateData =  {name:'sameet',email:'sameet1922@gmail.com'}
// const result = update(arr1,id,updateData)
// console.log(result)

// let i = 0
// while(i<3){
//   console.log(i);
//   i++
// }

// const example = name => console.log('heu' + name)
// console.log(example)

// let example = 2 
// if(example !== 32){
//   console.log('yes')
// }
// else{
//   console.log('no')
// }

// console.log(3**2)

// const x = 10
// const y = 20
// console.log(x -= y)

// let age = 32
// let isAdult = age > 17 ? 'adult' : 'child'
// console.log(isAdult)


// class Example{
//   constructor(fname,lname){
//     this.firstName = fname
//     this.lastName = lname
//   }
// }
// let user1 = new Example('nitesh','khatri')
// let user2 = new Example('sameet','khatri')
// let user3 = new Example('arvind','khatri')
// console.log(user1)
// console.log(user2)
// console.log(user3)

// console.log(" " == 0);

// console.log(0 === false)
// console.log(0 == false)
// console.log('' === false)

// function f1() {
//   console.log('f1')
// }
// function f2() {
//   console.log('f2')
// }
// function f3() {
//   console.log('f3')
// }

// // Invoke the functions one by one
// f1();
// f2();
// f3();

// const birthday = new Date(1989,6,19)
// console.log(birthday.getFullYear())
// console.log(birthday.getMonth())
// console.log(birthday.getDay())
// console.log(birthday.getHours())

// let a =5 
// b = 6 
// console.log(`sum of 5+6 is ${a + b }`)

// function doSomething(){
//   return 'hello'
// }
// const name = 'nitesh'
// const age = 34
// const sentence = `my name is ${name} & age is ${age}`
// console.log(sentence)

// const a = 20
// const b = 30
// const c = `the sume of ${a + b}`
// console.log(c)

// arrow functions
// const add = (a,b) => a+b 
// console.log(add(10,20))

// ternary operator 

// const fashion = 10
// const result = fashion > 10 ? 'y' : 'n'
// console.log(result)

// for(var i=0;i<=5;i++){
//   console.log(i)
// }

// const sleep = (delay=    ) = new Promise((resolve) => {
//   setTimeout(resolve,delay);
// })
// async function display(){
//   await sleep(2000)
//   console.log('waited for 2 seconds')
//   await sleep(4000) 
//   console.log('waited for 4 seconds')
// }
// display()

// const arraygroup = [11,11,12,13]
// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index
// }
// console.log(Array.from([...new Set(arraygroup)]))
// console.log(...new Set(arraygroup))
// console.log(arraygroup.filter(distinct))

// generate a random string 
// const random = Math.random().toString(36).slice(2);
// console.log(random)

// remove falsy values from an array 
// const arraygroup = [0,'nitesh khatri',NaN,5,true,undefined,false,null];
// const resultarraygroup = arr => arr.filter(Boolean)
// console.log(resultarraygroup(arraygroup))

// function Example(){
//   let count = 0

//   return function(){
//     count++
//     console.log(count)
//   };
// }
// const counter = Example();
// counter();
// counter();

// function Example(factor){
//   return function(number){
//     return number * factor
//   }
// }
// const double = Example(11);
// console.log(double(22))
// const triple = Example(122);
// console.log(triple(22))

// function Superb(happy){
//   return function(sad){
//     return happy * sad
//   }
// }
// const double = Superb(10)
// console.log(double(20))

// function Finally(one){
//   return function(two){
//     return two * one 
//   }
// }
// const result = Finally(10)
// console.log(result(2022))

// document.getElementById("myForm").addEventListener("submit", function(e) {
//   e.preventDefault(); // pause submission
//   document.getElementById("hiddenMessage").style.display = "block";
//   document.getElementById("formDiv").style.display = "none";
//   // setTimeout(function() {
//   //   e.target.submit()
//   // }, 10000)
// })

// var message = 'niesh khatri'
// console.log(message)

// var firstName = 123 
// console.log(firstName)


// console.log(window.firstName)

// const name = 'nitesh'
// function Example(){
//   console.log(name)
// }
// Example()

// let age = 16 
// let msg = ''
// if(age > 70){
//   msg = 'A'
// }
// else if(age > 60){
//   msg = 'B'
// }
// else if(age > 35){
//   msg = c
// }
// else{
//   msg = 'it is failed'
// }
// console.log(msg)

// let promise = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('nitesh khatri')
//   },100)
// })
// async function Example(){
//   let result = promise 
//   console.log(result)
// }
// Example()

// let promise = new Promise((resolve,reject) => {
//   let value = 50
//   if(value > 35){
//     resolve('yes')
//   }
//   else{
//     reject('no')
//   }
// })

// async function Example(){
//   let result = promise
//   console.log(result)
// }
// Example()

// let x = 0
// while(x < 10){
//   x++
//   console.log(x)
// }

// let x  = 30
// switch(x){
//   case 10 : console.log('yes it is 10');
//   break;
//   case 20 : console.log('yes it is 20');
//   break;
//   case 30 : console.log('yes it is 30');
//   break;
//   default : console.log('no it is not there');
//   break;
// }

// let x = 20
// do{
//   console.log(x)
//   x++
// }
// while(x<10)

// function firstName(){
//   console.log('first name is nitesh')
// }
// firstName()

// function add(a,b){
//   console.log(a+b)
// }
// add(10,2)

// function add(){
//   console.log(arguments)
//   let sum = 0
//   for(let i=0;i<arguments.length;i++){
//     sum+=arguments[i]
//   }
// }
// let c = add(10,5,6,6,7)
// console.log(c)

// function add(){
//   console.log(arguments)
//   let sum = 0
//   for(i=0;i<arguments.length;i++){
//     sum += arguments[i]
//   }
// }
// const c = add(10,22,33,45)
// console.log(c)

// console.log("Hello" - 1);


// function add(a,b){
//   return a +b 
// }
// let sum = add 

// function avg(a,b,fun){
//   return fun(a,b)/2
// }
// let avgvalue = avg(10,20,sum)
// console.log(avgvalue)


// var obj1 = {
//    x:  43,
//    y:  "Hello world!",
//    z: function(){
//       return this.x;
//    }
// }
// console.log(obj1.z());

// hoistedVariable = 3;
// console.log(hoistedVariable)
// var hoistedVariable

// function hoistedFunction(){
//   console.log('hello world')
// }
// hoistedFunction(); 

// doSomething()
// function doSomething(){
//   x = 33 
//   console.log(x)
//   var x 
// }

// var x  
// console.log(x)
// x = 30

// var a = 'nitesh khatr'
// function Example(){
//   console.log(a)
//   a = 'sameet'
// }
// Example()

// var x = 2;
// var y = "2";
// console.log(x === y)
// console.log(x == y)
// console.log(x !== y)

// var x = 220;
// var y = "Hello";
// var z = undefined;
// // console.log(x || y)
// console.log(x && y)
// if(x && y){
//   console.log('code runs')
// }
// if(x || z){
//   console.log('nitesh khatri')
// }

// console.log(typeof NaN)

// function Example(fn){
//   fn();
// }
// Example(function () {console.log('nitesh khatri')})

// function Supberb(fn){
//   fn();
// }
// Supberb(function() {console.log('nitesh khatri')})

// function Excellent(){
//   return function(){
//     return 'do something';
//   }
// }
// var x = Excellent();
// x();

// function Happy(a){
//   return function(b){
//     return function(c){
//       return a+b+c 
//     }
//   }
// }
// console.log(Happy(10)(20)(30))

// var obj1 = {
//   name:  "vivek",
//   getName: function(){
//     console.log(this.name);
//   }
// }

// var getName = obj1.getName;
// console.log(obj1.getName())

// function sayHello(){
//   return "Hello " + this.name;
// }
// var obj2 = {
//   name:'nitesh'
// }
// sayHello(obj2);

// var person = {
//   age: 23,
//   getAge: function(){
//     return this.age;
//   }
// }        
// var person2 = {age:54}
// console.log(person.getAge.call(person2))

// function saySomething(message){
//   return this.name + " is " + message;
// }     
// var person4 = {name:'nitesh'}
// saySomething.call(person4)

// function add(a){
//   return function(b){
//     return a+b 
//   }
// }
// console.log(add(10)(20))

// function multiply(a,b){
//   return a*b;
// }

// function currying(fn){
//   return function(a){
//     return function(b){
//       return fn(a,b)
//     }
//   }
// }

// var curriedMultiply = currying(multiply);
// console.log(multiply(30,30))
// console.log(curriedMultiply(30)(30))

// function add(a,b){
//   return a+b 
// }

// function currying(fn){
//   return function(a){
//     return function(b){
//       return fn(a,b)
//     }
//   }
// }
// const result = currying(add);
// const result1 = result(20)(30)
// const result2 = result(55)(30)
// console.log(result1)
// console.log(result2)

// BELOW CODE - GLOBAL SCOPE
// var globalVariable = "Hello world is global scope";
// function One(){
//   return globalVariable
// }
// function Two(){
//   return One()
// }
// console.log(Two())

// BELOW CODE - FUNCTION SCOPE
// function awesomeFunction(){
//   var a = 2 
//   var multiplyBy2 = function(){
//     console.log(a*2)
//   }
// }
// console.log(a)
// multiplyBy2();

// BELOW CODE - BLOCK SCOPE
// {
//   let x = 34 
// }
// console.log(x)

// for(let i=0;i<2;i++){
//   console.log(i)
// }

// BELOW CODE - SCOPE CHAIN 
// var y = 24;
// function favFunction(){
//   var x = 667;
//   var anotherFavFunction = function(){
//     console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
//   }

//   var yetAnotherFavFunction = function(){
//     console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
//   }

//   anotherFavFunction();
//   yetAnotherFavFunction();
// }
// favFunction();

// var Person = function(pName){
//   var name = pName;
//   this.getName = function(){
//     return name;
//   }
// }
// var person = new Person('nitesh');
// console.log(person.getName())

// var Person = function(pName){
//   var name = pName;
//   this.getName = function(){
//     return name;
//   }
// }
// var person = new Person('nitesh')
// console.log(person.getName())

// var Person = function(Pname){
//   var name = Pname 
//   this.getName = function(){
//     return name;
//   }
// }
// var person = new Person('nitesh');
// console.log(person.getName())

// const info = {
//   name:'nitesh',
//   age:34 
// }
// console.log(Object.seal(info))
// console.log(Object.preventExtensions(info))
// console.log(Object.freeze(info))

// function randomFunc(){
//   var obj1 = {
//     name:'nitesh',
//     age:34
//   }
//   return function(){
//     console.log(obj1.name + ' is ' + 'awesome');
//   }
// }
// var initialClosure = randomFunc();
// initialClosure();

// function Start(){
//   var obj1 = {
//     name:'nitesh'
//   }
//   return function(){
//     console.log(obj1.name + ' is ' + 'awesome')
//   }
// }
// const exampleStart = Start()
// exampleStart()

// Object prototypes
// var arr1 = [];
// arr1.push(2);
// console.log(arr1)

// var lovely = [];
// lovely.push('happy','smile')
// console.log(lovely)

// function divideByHalf(sum){
//   console.log(Math.floor(sum / 2));
// }
// function multiplybyHalf(sum){
//   console.log(sum * 2 )
// }
// function opeartionOnSum(num1,num2,opeartion){
//   var sum = num1 + num2 
//   opeartion(sum)
// }
// opeartionOnSum(3,3,divideByHalf)
// opeartionOnSum(1,3,multiplybyHalf)

// function One(sum){
//   console.log(Math.floor(sum/2))
// }
// function Two(sum){
//   console.log(sum * 2 )
// }
// function Operation(n1,n2,operation){
//   var sum = n1 + n2 
//   operation(sum)
// }
// Operation(1,1,One)
// Operation(1,33,Two)

// function addTo256(num){
//   return num + 340
// }
// console.log(addTo256(20))
// console.log(addTo256(30))
// console.log(addTo256(40))

// function add(number){
//   if(number <= 0){
//     return 0;
//   }
//   else{
//     return number + add(number - 1);
//   }
// }

// function computeSum(arr){
//   if(arr.length === 1){
//     return arr[0];
//   }
//   else{
//     return arr.pop() + computeSum(arr);
//   }
// }
// console.log(computeSum([7, 8, 9, 99]))

// function Person(name,age,gender){
//   this.Name = name;
//   this.Age = age;
//   this.Gender = gender;
// }
// var person1 = new Person('nitesh',34,'male')
// var person2 = new Person('sameet',41,'male')
// var person3 = new Person('urvashi',65,'female')
// var person4 = new Person('arvind',68,'male')
// console.log(person1,person2,person3,person4)

// var add = function(a,b){
//   return a + b;
// }
// var arrowAdd = (a,b) => a+b 
// console.log(add(10,10))
// console.log(arrowAdd(10,20))
// const sum = (a,b) => a+b 
// const multiple = (a,b) => a*b 
// const minus = (a,b) => a-b 
// const divide = (a,b) => a/b 
// console.log(sum(10,20))
// console.log(multiple(10,20))
// console.log(minus(10,20))
// console.log(divide(10,20))

// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index
// }
// const groupwise = ['vijay','ronak','ronak','vijay','chandresh','bhavik']
// const onoowise = [22,44,55,1,1,2,3,4,55,66,77,88,110]
// console.log(groupwise.filter(distinct))
// console.log([...new Set(groupwise)])
// console.log(Array.from([...new Set(groupwise)]))

// const result1 = groupwise.sort(function(a,b){
//   if(a<b){
//     return -1 
//   }
//   else{
//     return 1 
//   }
// })
// console.log(result1.filter(distinct))

// const result2 = onoowise.sort(function(a,b){
//   if(a>b){
//     return -1 
//   }
//   else{
//     return 1 
//   }
// })
// console.log(result2.filter(distinct))
// const groupwise =['nitesh','sameet',1,2,null,undefined,NaN]
// const person = [
//   {id:1,name:'nitesh',age:34},
//   {id:2,name:'sameet',age:41},
//   {id:3,name:'vishal',age:45},
//   {id:4,name:'mayur',age:47},
//   {id:5,name:'nilesh',age:47},
//   {id:6,name:'sonal',age:47},
//   {id:6,name:'nitesh',age:22},
// ]
// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index
// }
// const result = person.filter((item) => item.name === 'nitesh')
// console.log(result)

// const result2 = Array.from(new Set(person.map(s => s.id))).map(id => {
//   return{
//     id:id,
//     name:person.find(s => s.id === id).name
//   };
// });
// console.log(result2)

// const distinctObject = person.map((item) => item.name).filter((name,index,currentVal) => currentVal.indexOf(name) === index)

// const distinctObject = person.map((item) => item.name).filter((name,index,currentVal) => currentVal.indexOf(name) === index)
// console.log(distinctObject)

// const ageDistinct = [...new Set(person.map((item) => item.age))]
// console.log(ageDistinct)
// const example = [null,undefined,NaN,false,true,11,'nitesh']
// console.log(example.filter(Boolean))

// console.log(2+'2')
// console.log(2-'2')
// var name = 'nitesh'
// if(true){
//   var name = 'sameet'
//   console.log(name)
// }

// var user1 = {
//   id:1,
//   name:'nitesh',
//   age:34,
//   location:'mumbai'
// }
// var user2 = {
//   id:2,
//   name:'sameet',
//   age:41,
//   location:'usa'
// }
// var combineuser = [user1,user2]
// console.log(combineuser)

// let a = 10,b=20
// [b,a] = [a,b]
// console.log(a,b)

// console.log(3 && 2 && 1 && 0 && false)

// let num = [2,15,7,8,20,55,3]
// num.sort()
// console.log(num[2])

// var variable1 = 23;
// let variable2 = 89;
// function catchValues(){
//   console.log(variable1);
//   console.log(variable2);

// // Both the variables can be accessed anywhere since they are declared in the global scope
// }
// catchValues()

// function varVsLetFunction(){
//   let awesomeCar1 = "Audi";
//   var awesomeCar2 = "Mercedes";
// }
// console.log(awesomeCar1);
// console.log(awesomeCar2);

// function extractingArgs(...args){
//   return args[1];
// }
// function addAllArgs(...args){
//   let sumOfArgs = 0;
//   let i = 0;
//   while(i < args.length){
//     sumOfArgs += args[i];
//     i++;
//   }
//   return sumOfArgs;
// }
// console.log(addAllArgs(6, 5, 7, 99))
// console.log(addAllArgs(1,3,4))

// function addFourNumbers(num1,num2,num3,num4){
//   return num1 + num2 + num3 + num4;
// }
// let fourNumbers = [5,6,7,8]
// addFourNumbers(...fourNumbers)
// let array1 = [3,4,5,6]
// let clonedArray1 = [...array1]
// console.log(clonedArray1)

// let obj1 = {x:'Hello', y:'Bye'};
// let clonedObj1 = {...obj1}
// // console.log(clonedObj1)

// let obj2 = {z:'Yes', a:'No'};
// let merged = {...obj1,...obj2}
// console.log(merged)

// p1 = Promise.resolve(50)
//   p2 = 200
//   p3 = new Promise(function(resolve,reject){
//     setTimeout(resolve,100,'geek')
//   })
//   Promise.all([p1,p2,p3]).then(function(values) {
//     console.log(values)
//   })

// p1 = Promise.resolve('nitesh')
// p2 = 50
// p3 = new Promise(function(resolve,reject){
//   setTimeout(resolve,100,'sameet')
// });
// Promise.all([p1,p2,p3]).then(function(values){
//   console.log(values)
// })

// let result = new Promise(function(resolve,reject){
//   let value = 20
//   if(value > 30){
//     console.log('yes')
//   }
//   else{
//     console.log('no')
//   }
// })
// async function Example(){
//   let final = await result 
//   console.log(final)
// }
// Example()

// function Student(name,rollNumber,grade,section){
//   this.name = name;
//   this.rollNumber = rollNumber;
//   this.grade = grade;
//   this.section = section;
// }
// Student.prototype.getName = function(){
//   return `== ${this.name} ${this.rollNumber} ${this.grade} ${this.section}`
// }

// let student1 = new Student('nitesh',34,'6th',"A")
// student1.getName
// console.log(student1)

// let student2 = new Student('sameet',41,'7th','B')
// student2.getName
// console.log(student2)
// function* genFunc(){
//   yield 3;
//   yield 4;
// }
// genFunc()

// function* iteratorFunc() {
//   let count = 0;
//   for (let i = 0; i < 2; i++) {
//       count++;
//       yield i;   
//   } 
//   return count;
// }
// let iterator = iteratorFunc();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// function* Superb(){
//   let count = 0;
//   for(let i=0;i<1;i++){
//     count++
//     yield i 
//   }
//   return count 
// }
// let iteratorcount = Superb()
// console.log(iteratorcount.next())
// console.log(iteratorcount.next())
// console.log(iteratorcount.next())
// console.log(iteratorcount.next())
// console.log(iteratorcount.next())

// function* Happy(){
//   let count = 0
//   for(let i=0;i<10;i++){
//     count++;
//     yield i 
//   }
//   return count 
// }
// let countnumberwise = Happy()
// console.log(countnumberwise.next())
// console.log(countnumberwise.next())
// console.log(countnumberwise.next())
// console.log(countnumberwise.next())
// console.log(countnumberwise.next())
// console.log(countnumberwise.next())

//   const map1 = new Map();
// map1.set('Value', 1);
// console.log(map1)

// const numbersw = [3,5,2,4,1];
// let newNumbers = numbersw.reverse();
// console.log(newNumbers)
// console.log(newNumbers[2])
// console.log(newNumbers[1])

// function Superb(array){
//   return array.filter((item) => item % 2 === 0)
// }
// console.log(Superb([1,2,3,3,4,5,5,6,7,8]))

// function Example(array){
//   const newarr = array.map((item,i) => item + i)
//   return newarr 
// }
// console.log(Example([1,2,3]))

// function multiply(a,b){
//   return a * b 
// }
// function minus(a,b){
//   return a - b 
// }
// function add(a,b){
//   return a + b 
// }
// function divide(a,b){
//   return a / b 
// }
// function currency(fn){
//   return function(a){
//     return function(b){
//       return fn(a,b)
//     }
//   }
// }
// var example1 = currency(multiply)
// var example2 = currency(minus)
// var example3 = currency(add)
// var example4 = currency(divide)
// console.log(example1(10)(20))
// console.log(example2(10)(20))
// console.log(example3(10)(20))
// console.log(example4(10)(20))

// const groupwise = ['nitesh','sameet','arvind','sameet','vishal','ashwini','vishal']
// const nowise = [1,2,2,3,4,5,6,777,88,88]
// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index 
// }
// const resultgrpwise = nowise.sort(function(a,b){
//   if(a<b){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(resultgrpwise.filter(distinct))

// console.log(10 === "10");

// const classDetails = {
//   strength: 78,
//   benches: 39,
//   blackBoard:1
// }

// const {strength,benches,blackBoard} = classDetails
// console.log(classDetails)
// console.log(strength)
// console.log(benches)
// console.log(blackBoard)
// const {strength,...rest} = classDetails
// console.log(rest)

// array destructing 
// const arr1 = [1, 2, 3, 4];
// // console.log(...arr1)
// console.log(arr1[0])
// console.log(arr1[1])
// console.log(arr1[2])
// console.log(arr1[3])
// the sample example using object destructing
// const [first,second,...rest] = arr1 
// console.log(first)
// console.log(second)
// console.log(rest)

// x = 24 
// let x 
// function Example(){
//   message = 'hello'
//   let message 
// }
// Example()

// fname = 'nitesh'
// let fname 
// function Example(){
//   sname = 'khatri'
//   let sname 
// }
// Example()

// fname = 'nitesh'
// const fname 
// function Example(){
//   sname = 'khatri'
//   const sname 
// }
// Example()

// var scope = "global scope";
// function check(){
//   var scope = 'local scope'
//   function f(){
//     return scope
//   }
//   return f
// }
// console.log(check())

// var scope = 'global scope'
// function Example(){
//   var scope = 'local scope'
//   function f(){
//     return scope
//   }
//   return f 
// }
// console.log(Example())

// function func1(){
//   setTimeout(() => {
//     console.log(x)
//     console.log(y)
//   },500)

//   var x = 'abc'
//   let y = 'def'
// }
// func1()

// function Example(a){
//   return function(b){
//     return function(c){
//       return function(d){
//        return a+b+c*d
//       }
//     }
//   }
// }
// console.log(Example(10)(20)(30)(40))

// function func2(){
//   for(var i=0;i<3;i++){
//     setTimeout(() => console.log(i++),200)
//   }
// }
// func2()

// (function(){
//   setTimeout(() => console.log(1),500);
//   console.log(2);
//   setTimeout(() => console.log(3),200)
//   console.log(4)
// })();

// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);

// function runFunc(){
//   console.log("1" + 1);
//   console.log("A" - 1);
//   console.log(2 + "-2" + "2");
//   console.log("Hello" - "World" + 78);
//   console.log("Hello"+ "78");
// }
// runFunc();

// let a = 0;
// let b = false;
// console.log(a === b)
// console.log(a == b)

// var x = 23;
// (function(){
//   var x = 34 
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21
//   })()
// })()

// function random(){
//   var x 
//   x++ 
//   console.log(x)
//   x = 21
// }
// random()

// let hero = {
//   powerLevel: 99,
//   getPower(){
//     return this.powerLevel;
//   }
// }
// let getPower = hero.getPower;
// let hero2 = {
//   powerLevel:42
// }
// console.log(getPower())
// console.log(getPower.apply(hero2))

// const a = function(){
//   console.log(this);
//   const b = {
//     func1:function(){
//       console.log(this)
//     }
//   }

//   const c = {
//     func2:() => {
//       console.log(this)
//     }
//   }
//   b.func1()
//   c.func2()
// }
// a();

// const b = {
//   name:"Vivek",
//   f: function(){
//     var self = this;
//     console.log(this.name);
//     (function(){
//       console.log(this.name);
//       console.log(self.name);
//     })();
//   }
// }
// b.f();

// (function(a){
//   return (function(){
//     console.log(a)
//     a = 23 
//   })()
// })(45);

// function bigFunc(element){
//   let newArray = new Array(700).fill('heart');
//   return newArray[element]
// }
// console.log(bigFunc(11000))
// console.log(bigFunc(800))

// function randomFunc(){
//   for(var i=0;i<2;i++){
//     setTimeout(() => console.log(i),100)
//   }
// }
// randomFunc()


// var newP = document.createElement('p');
// var textNode = document.createTextNode('this is paragraph happy');
// newP.appendChild(textNode)
// document.getElementById('parent1').appendChild(newP)


// console.log('nitesh khatri'.split("").reverse("").join(""))

// const vowels = ['a', 'e', 'i', 'o', 'u']
// for(let final of vowels){
//   console.log(final.toUpperCase())
// }
// for(let final in vowels){
//   console.log(final.toUpperCase())
// }

// let obj1 = { id: "1", name: "user22", age: "26", work: "programmer" };
// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i=0;i<b.length;i++){
//   console.log(b[i])
// }
// for(var i=0;i<10;i++){
//   console.log(b[i])
// }

//   var hello = 'Hello!';
//   function sayHello() {
//     console.log(hello);
//   }
// sayHello();

// function sayHello() {
//   var hello = 'Hello!';
//   console.log(hello);
// }
//  sayHello()

// function Example(){
//   var hello = 'nitesh'
//   console.log(hello)
// }
// Example()
// above code - Variables declared inside a function are local variables. They can only be accessed from within that function; they are not accessible from outside code. An example showing local scope of a variable

// anonymous function => anonymous functions without name used as function expression or a agruments
// let example = function(name) {
//   console.log(`this is an example ${name}`)
// }
// example('nitesh')

// arrow functions => arrow functions introduced in es6, shorter syntax and one lined functions 
// let greet = () => console.log('nitesh khatri is arrow function')
// greet()

// immediately invoked function expression IIFE executed immediately after their creation used to create private scope and avoid polluting the global namespace 
// (function(){
//   let str = 'goood evening'
//   console.log(str)
// })()

// (function(){
//   let name = 'nitesh khatri is IIDF'
//   console.log(name)
// })()

// higher order function functions that take one or more functions as agruments or return a function 
// map, filter and reduce
// let arrwise = [10,20,33]
// const result = arrwise.map((item )=> item * 2)
// console.log(result)
// const result = arrwise.filter((item) => item > 20)
// console.log(result)
// const result = arrwise.reduce((a,b) => a+b)
// console.log(result)

// global scope 
// var name = 'nitesh khatri'
// function example(){
//   console.log(name)
// }
// example()

// local or function scope => Variables declared inside a function are local variables. They can only be accessed from within that function; they are not accessible from outside code. An example showing local scope of a variable
// function example(){
//   let name = 'nitesh'
//   console.log(name)
// }
// example()

// block scope => Unlike var variables, let and const variables can be scoped to the nearest pair of curly brackets in ES6. They can't be reached from outside that pair of curly braces, which means they can't be accessed from the outside. An example showing the block scope of a variable.
// {
//   let hello = 'message is hello'
//   var language = 'message is english'
//   var example = 'message is sachin tendulkar'
//   const happy = 'message is happy'
// }
// console.log(language)
// // console.log(hello)
// console.log(example)
// console.log(happy);

// scope chain 
// let a = 'a'
// function foo(){
//   let b ='b'
//   console.log(b)
//   console.log(a)
//   randomNumber = 33 
//   console.log(randomNumber)
// }
// foo()

// Example('tiger')
// function Example(text){
//   console.log(text)
// }

// function Example(a,b,c){
//   return a+b*c
// }
// console.log(Example(10,20,30))

// var arr2 = [13,40,47];
// var odd = arr2.filter(x => x % 2);
// console.log(odd)

// let i =0;
// while(i<10){
//   console.log(i)
//   i++
// }

// let i =0
// while(i<50){
//   console.log(i)
//   i++
// }

// let i = 0
// while(i<10){
//   console.log(i)
//   i = i + 2
// }

// for(let i=0;i<10;i++){
//   if(i === 4){
//     break;
//   }
//   console.log(i)
// }

// for(let i=0;i<10;i++){
//   if(i === 4){
//     continue;
//   }
//   console.log(i)
// }

// var a= "11";  
// var counter = 22;  
// const result = a + counter 
// console.log(result)

// block scope 
// {
//   let example1 = 'hello example'
//   const example2 = 'hello example2'
//   var example3 = 'hello example3'
//   console.log(example2)
// }
// console.log(example1)
// console.log(example2)
// console.log(example3)
// function Example(){
//   let superb = 'superb'
//   console.log(superb)
// }
// Example()

// var name = 'nitesh khatri'
// function printMe(){
//   console.log(name)
// }
// printMe()

// console.log(num)
// var num = 20
// num = 30

// const person = {
//   fullName(name,age){
//     console.log(`Full form is ${name} ${age}`)
//   }
// }
// console.log(person.fullName.call(null,'sameet',41))

// const nwose = [11,22,33]
// console.log(Math.max.apply(null,nwose))
// console.log(Math.min.apply(null,nwose))

// [1,2,3,4,5].forEach(v => {
//   if(v % 2 === 0){
//     return
//   }
//   console.log(v)
// })

// let array = [1, 2, 3, 4, 5];
// let max = 0
// array.forEach((ele) => {
//   if(ele > max){
//     max = v 
//   }
// })
// console.log(max)

// const array1 = ['a', 'b', 'c'];
// array1.forEach((item) => console.log(item))

// console.log(1 + - 1 + 1 - - 1);

// const numberswise = [1,2,3,4,5]
// const [y] = numberswise
// console.log(y)

// console.log(['n'] === ['n'])

// console.log(0 === 0)

// console.log(false === false)
// console.log(true === true)
// console.log(false !== false)

// const smile = [55,46,111,22,98,[55,25],[88]]
// console.log(smile.push(99))
// console.log(smile.unshift(45))
// console.log(smile.pop())
// console.log(smile.shift())
// console.log(smile.filter((val) => val > 55))
// console.log(smile.map((val) => val))
// console.log(smile.join('-'))
// console.log(smile.concat([55,125,130]))
// console.log(smile.flat())
// // console.log(smile.slice(1,3))
// console.log(smile.some((val) => val > 55))
// console.log(smile.every((val) => val > 55))
// console.log(smile.find((val) => val > 55))
// console.log(smile.findIndex((val) => val > 55))
// console.log(smile.indexOf((val) => val > 55))
// console.log(smile.includes((val) => val === 55))
// console.log(smile.at(6))
// console.log(smile.sort((a,b) => a-b)) // ascending
// console.log(smile.sort((a,b) => b-a)) // descending
// console.log(smile.reverse())
// console.log(smile.fill(11111))
// console.log(smile.splice(1,4,'nitesh'))
// console.log(smile.findLastIndex((val) => val === 111))
// console.log(smile.findLast((val) => val === 111))


// function myFunction() {
//   let a = 4;
//   console.log(a *a)
// }
// myFunction()

// let a = 4
// function myFunction(){
//   console.log(a *a )
// }
// myFunction()

// let counter = 0;
// function add(){
//   console.log(counter += 1)
// }
// add()
// add()
// add()
// add()

// let counter = 0
// function Example(){
//   console.log(counter += 1)
// }
// Example()
// Example()
// Example()
// Example()

// function init(){
//   var name = 'nitesh'
//   function displayName(){
//     console.log(name)
//   }
//   displayName()
// }
// init()

// function start(){
//   var name = 'nitesh'
//   function displaystart(){
//     console.log(name)
//   }
//   displaystart()
// }
// start()

// if(Math.random() > 0.5){
//   var x = 1
// }
// else{
//   var x = 2
// }
// console.log(x)

// (function example(){
//   console.log('nitesh')
//   function happy(){
//     console.log('sameet')
//   })
// })()

// (function Example(){
//   const name = 'nitesh khatri'
//   function Inside(){
//     console.log(name)
//   }
//   return Inside()
// })()
// const happy = Example()
// happy()

// function result(a){
//   return function(b){
//     return function(c){
//       return function(d){
//         return a+b+c*d
//       }
//     }
//   }
// }
// console.log(result(10)(20)(30)(50))

// let promise = new Promise((resolve,reject) => {
//   let value = 35
//   if(value > 20){
//     console.log('yes')
//   }
//   else{
//     console.log('no')
//   }
// })
// async function Example(){
//   let result = await promise 
//   console.log(result)
// }
// Example()

// const p1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log('the first promise has resolved');
//     resolve(10);
//   },1*1000);
// });

// const p2 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log('the second promise has resolved');
//     resolve(20);
//   },2*1000)
// });
// const p3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log('the third promise has been resolved');
//     resolve(30) 
//   },3*1000)
// });
// Promise.all([p1,p2,p3]).then((results) => {
//   const total = results.reduce((a,b) => a+b)
//   console.log(`Results: ${results}`)
//   console.log(`Total: ${total}`)
// })

// const p1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log('the first promise has been resolved');
//     resolve(10);
//   },1*1000)
// })
// const p2 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log('the second promise has been resolved');
//     resolve(20)
//   },2*1000)
// })
// const p3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log('the third promise has been resolved');
//     resolve(30)
//   },3*1000)
// })
// Promise.all([p1,p2,p3]).then((results) => {
//   const total = results.reduce((a,b) => a+b)
//   console.log(`Results ${results}`)
//   console.log(`Total ${total}`)
// })

// const p1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log('the first promise has been resolved');
//     resolve(10)
//   },1*1000)
// })
// const p2 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log('the second promise has been rejected')
//     reject('failed')
//   },2*1000)
// })
// const p3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log('the third promise has been resolved');
//     resolve(30)
//   },3*1000)
// })
// Promise.all([p1,p2,p3]).then((results) => console.log(results))

// what is the output of the following code?
// const cmd = 'git clone twitter threads'
// console.log(cmd.slice(10,17))

// fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr',{
//     method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f'
// 	}
// })
// .then((response) => response.json())
// .then((data) => {
//   const list = data.d;
//   list.map((item) => {
//     console.log(item)
//     const name = item.l
//     const serial = item.q
//     const poster = item.i.imageUrl;
//     const movie = `<li><img src="${poster}"/> <h2>${name} - ${serial}</h2></li>`
//     document.querySelector(".movies").innerHTML += movie;
//   })
// })
// .catch(error => {
//     console.log(error)
// })
// console.log (greeter);
// var greeter = "say hello"

// var greeter;
// console.log(greeter); // greeter is undefined
// greeter = "say hello"

// var greeter 
// function Example(){
//   console.log(greeter)
// }
// var greeter = 'it is greeter'
// Example()
// console.log('polyfill of prmise.race')
// const p1 = new Promise((resolve,reject) => {
//   resolve('success')
// })
// const p2 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     // api call
//     resolve('failed')
//   },100)
// })
// const p3 = 10

// Promise.race([p1,p2,p3]).then((data) => console.log(data)).catch(e => console.error(data))


// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index 
// }
// const groupwise = [1,222,222,33,44,55]
// const namewise = ['nitesh','nitesh','sameet','urvashi','urvashi']
// console.log(groupwise.filter(distinct))
// console.log(namewise.filter(distinct))
// console.log([...new Set(namewise)])
// console.log([...new Set(groupwise)])
// console.log(Array.from([...new Set(groupwise)]))
// console.log(Array.from([...new Set(namewise)]))

// const person = [
//   {id:1,name:'nitesh',age:34},
//   {id:2,name:'sameet',age:41},
//   {id:3,name:'urvashi',age:65},
//   {id:4,name:'arvind',age:68},
//   {id:5,name:'nitesh',age:34},
// ]

// const sortdsc = person.sort((a,b) => {
//   if(a.name>b.name){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(sortdsc)
// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index 
// }
// const sortasc = person.sort((a,b) => {
//   if(a.name<b.name && a.age < b.age){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(sortasc)
// const resultperson = person.filter((item) => item.age > 45)
// console.log(resultperson)
// const resultpersonname = person.filter((item) => item.id > 2)
// console.log(resultpersonname)

// console.log('nitesh khatri'.repeat(2))
// console.log('nitesh'.replace('nitesh','sameeet'))
// console.log('nitesh'.split('').reverse('').join(''))

// const mood = 'nitesh'
// console.log(`i feel ${mood.repeat(3)}`)

// const a = 'nitesh'
// function Example(){
//   console.log(a)
//   const a = 'sameet'
// }
// Example()

// function example(){
//   if(true){
//     var x = 5 
//   }
//   console.log(x)
// }
// example()

// function example(){
//   if(true){
//     let x = 5 
//     console.log(x)
//   }
//   console.log(x)
// }
// example()

// function One(a){
//   return function(b){
//     return function(c){
//       return function(d){
//         return a + b + c * d 
//       }
//     }
//   }
// }
// console.log(One(1)(2)(3)(10))

// function One(){
//   var name = 'nitesh khatri'
//   function Two(){
//     console.log(name)
//   }
//   Two()
// }
// One()

// const p1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('nitesh khatri')
//   },1000)
// })
// const p2 = 1100
// const p3 = 'nitesh khatr'
// Promise.all([p1,p2,p3]).then((data) => console.log(data))
// console.log([10] === [10])
// console.log(8 + + '10')


// console.log('nitesh')
// console.log([1,1,2,3,4,5])
// const array = [1,22,33,44]
// console.log(array.push(1))

// different data types in JavaScript
// const n1 = 42
// const n2 = '3.14'
// console.log(n1)
// console.log(n2)

// const string1 = 'nitesh'
// const string2 = `javascript`
// console.log(string1)
// console.log(string2)

// console.log(10>2)

// var a 
// console.log(a)

// const null1 = {name:'nitesh'}
// console.log(typeof null1)
// console.log(Object.keys(null1))
// console.log(Object.values(null1))

// const arrgroup = ['nitesh','sameet','arvind','urvashi']
// console.log(arrgroup)

// function Example(){
//   console.log('this is an example')
// }
// Example()

// declare a variable in JavaScript
// var greeting = 'greeting is variable'
// console.log(greeting)

// let count  = 10
// console.log(count)

// const PI = 3.14
// console.log(PI)

// difference between let, const, and var
// >> temporal dead zone
// function myFun(){
//   const greeting = 'hi'
//   console.log(`${greeting} ${name}`)
//   const name = 'nitesh'
// }
// myFun()

// hoisting work in JavaScript
// console.log(x)
// var x = 5 
// console.log(x)

// foo()
// function foo(){
//   console.log('hello world')
// }

// console.log(x)
// x = 5 

// function greet(){
//   console.log('nitesh khatri is greeting')
// }
// greet()

// var greet 
// greet()
// greet = function(){
//   console.log('hello')
// }

// closures in JavaScript
// function outerFunction(){
//   var outputname = 'i am from the outer function'
//   function innerFunction(){
//     console.log(outputname)
//   }
//   return innerFunction;
// }
// var closure = outerFunction()
// closure();

// function OuterFunction(){
//   var name = 'nitesh khatri'
//   function innerFunction(){
//     console.log(name)
//   }
//   return innerFunction;
// }
// const result = OuterFunction()
// result()

// callbacks in JavaScript
// function greeting(name,callback11){
//   console.log('hello', + name + '!');
//   callback11();
// }
// function sayGoodBye(){
//   console.log('goodbye')
// }
// greeting('nitesh',sayGoodBye)

// function Example(name,callback){
//   console.log(`hello ${name}`)
//   callback()
// }
// function sayGoodBye(){
//   console.log('Goodbye');
// }
// Example('nitesh',sayGoodBye)

// function Example(name,callback){
//   console.log(`Hello ${name}`);
//   callback()
// }
// function sayGoodBye(){
//   console.log('sayGoodBye')
// }
// Example('nitesh',sayGoodBye)

// Promises in JavaScript
// const fetchData = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     const data = {
//       message:'date fetch successfully'
//     }
//     resolve(data)
//   },20)
// })
// fetchData.then((data) => console.log(data.message)).catch((error) => console.log(error.message))

// const FetchData = new Promise((resolve,reject) => {
//   let value = 50
//   setTimeout(() => {
//     if(value > 30){
//       resolve('yes')
//     }
//     else{
//       reject('no')
//     }
//   },20)
// })
// FetchData.then((data) => console.log(data)).catch((error) => console.log(error))

// var x = 10;
// var y = "5";

// if (x === y) {
//  console.log("Option A");
// } else if (x == y) {
//  console.log("Option B");
// } else if (x > y) {
//  console.log("Option C");
// } else {
//  console.log("Option D");
// }

// const p1 = 'nitesh khatri'
// const p2 = Promise.resolve('sameet khatri')
// const p3 = 5555
// Promise.all([p1,p2,p3]).then((data) => console.log(data))

// function fetchData(){
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       const data = 'some fetched data'
//       if(data){
//         resolve(data)
//       }
//       reject('data is not found')
//     },100)
//   })
// }
// fetchData().then((value) => console.log(value)).catch((error) => console.log(error));

// async function fetchData(){
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       const data = 'some fetched data'
//       if(data){
//         resolve(data)
//       }
//       reject('data is not found')
//     },100)
//   })
// }
// fetchData().then((result) => console.log(result)).catch((error) => console.log(error))

// handle errors in JavaScript
// function divide(a,b){
//   if(b===0){
//     throw new Error('division by zero');
//   }
//   return a /b 
// }
// divide(10,20)

// function Person(name,age,city){
//   this.Name = name;
//   this.Age = age;
//   this.City = city;
// }
// const person1 = new Person('nitesh',34,'mumbai')
// console.log(person1)

// class Person{
//   constructor(name,age,city){
//     this.Name = name;
//     this.Age = age;
//     this.City = city;
//   }
// }

// const person1 = new Person('nitesh',34,'mumbai')
// console.log(person1)

// const Person = {
//   name:"nitesh",
//   age:34,
//   city:'mumbai',
//   getfull: function(){
//     console.log(`hello ${this.name} ${this.age} ${this.city}`)
//   }
// }
// Person.getfull()

// arithmetic operators
// addition
// subtraction 
// multiple
// division
// remainder
// exponentation
// equal to
// not equal to 
// strict equal to 
// strict not equal to 
// greater than
// less than
// greater than or equal to 
// less than or equal to
// logical &&
// logical ||
// logical !
// bitwise and 
// bitwise |
// bitwise ^
// bitwise ~
// bitwise <<
// bitwise >>
// unary plus
// unary minus
// incrment ++
// decrement -- 
// logical not !
// typeof 
// ternary operator 

// difference between null and undefined in 
// let x 
// console.log(x)

// function greet(name){
//   console.log(`HELLO ${name}`)
// }
// greet('nitesh')

// let user = null;
// console.log(user)

// let person = {
//   name:'nitesh',
//   age:34
// }
// delete person.age
// console.log(person)

// class Example{
//   constructor(name,age){
//     this.Name=name,
//     this.Age=age
//   }
// }
// let p1 = new Example('nitesh',34)
// let p2 = new Example('sameet',41)
// console.log({...p1,...p2})

// let value = null
// if(value === null){
//   console.log('value is null')
// }
// else{
//   console.log('value is not null')
// }


// function Outer(){
//   var name = 'nitesh khatri'
//   function Inner(){
//     console.log(name)
//   }
//   return Inner;
// }
// var result = Outer()
// result()

// function Example(name,callback){
//   console.log(`hello ${name}`) 
//   callback()
// }
// function GoodBye(){
//   console.log('Goodbye')
// }
// Example('nitesh',GoodBye)

// function fetchData(callback){
//   setTimeout(function(){
//     const data = 'some data';
//     callback(data)
//   },100)
// }
// function processData(data){
//   console.log('processing data',data)
// }
// fetchData(processData)

// function fetchData(callback){
//   setTimeout(function(){
//     const data = 'some data'
//     callback(data)
//   },100)
// }
// function processData(data){
//   console.log('processing data',data)
// }
// fetchData(processData)

// function fetchData(){
//   return new Promise(function(resolve,reject) {
//     setTimeout(function(){
//       const data = 'some fetched data'
//       resolve(data)
//     },1000)
//   })
// }
// function processData(data){
//   console.log('processing data',data)
// }
// fetchData().then(processData).catch(function(error) {console.log('error',error)})

// function fetchData(){
//   return new Promise(function(resolve,reject){
//     setTimeout(function() {
//       const data = 'some fetched data'
//       resolve(data)
//     },100)
//   })
// }
// function processData(data){
//   console.log('processing data',data)
// }
// fetchData().then(processData).catch(function(error) {console.log('error',error)})

// const p1 = 'nitesh khatri'
// const p2 = Promise.resolve('sameet khatri')
// const p3 = 123456
// Promise.all([p1,p2,p3]).then((data) => console.log(data))

// function myFnc(){
//   const name = 'nitesh'
//   console.log(`hello ${name} ${age}`)
//   const age = 34
// }
// myFnc();

// event loop 
// console.log('start')
// setTimeout(function(){
//   console.log('timeout callback')
// },100)
// Promise.resolve().then(function(){
//   console.log('promise resolved')
// });
// console.log('end')

// console.log('start')
// setTimeout(function(){
//   console.log('timeout callback')
// },100)
// Promise.resolve().then(function(){
//   console.log('promise resolved')
// })
// console.log('end')

// console.log('start')
// setTimeout(function(){
//   console.log('timeout callback')
// },1000)
// Promise.resolve().then(function(){
//   console.log('promise resolved')
// })
// console.log('end')

// difference between call, apply, and bind methods 
// function greet(name){
//   console.log(`hello ${name}`)
// }
// greet.call(null,'nitesh')

// function Example(name,age){
//   console.log(`hello ${name} ${age}`)
// }
// Example.call(null,'nitesh',34)

// function Example(name,age,email){
//   console.log(`Hello ${name} ${age} ${email}`)
// }
// Example.apply(null,['nitesh',34,'nitesh.khatri88@gmail.com'])

// function greet(name){
//   console.log(`hello ${name}`)
// }
// const greetNew = greet.bind(null,'nitesh')
// greetNew()


// function result(name,age){
//   console.log(`hello ${name} ${age}`)
// }
// const final = result.bind(null,'nitesh',34)
// final()

// function Example(name,age){
//   console.log(`hello ${name} ${age}`)
// }
// Example.apply(null,['nitesh',34])

// function Example(name,age){
//   console.log(`hello ${name} ${age}`)
// }
// const final = Example.bind(null,'nitesh',34)
// final()

// create a class in JavaScript
// class Person{
//   constructor(name,age,city){
//     this.Name = name
//     this.Age = age
//     this.City = city
//   }
// }
// let n1 = new Person('nitesh',34,'mumbai')
// let n2 = new Person('sameet',41,'usa')
// let n3 = new Person('mayur',47,'dubai')
// console.log({...n1},{...n2},{...n3})

// arrow functions in JavaScript
// const happynum = [1,2,3,4,5]
// const doubled = happynum.map((item) => item *2)
// console.log(doubled)

// template literals in JavaScript
// const name = 'John';
// const greeting = `Hello, ${name}!`;
// console.log(name)
// console.log(greeting)

// const multiline = `
//   This is a
//   multiline
//   string.
// `;
// console.log(multiline)

// const a = 5;
// const b = 10;
// const sum = `the sum of ${a} and ${b} is ${a+b}`
// console.log(a)
// console.log(b)
// console.log(sum)

// function customTag(strings,...values){
//   console.log(strings)
//   console.log(values)
//   return strings[0] + values[0].toUpperCase() + strings[1]
// }
// const name  = 'nitesh'
// const result = customTag`hello, ${name}`
// console.log(result)

// rest and spread operators
// function sum(...numbers){
//   return numbers.reduce((acc,val) => acc + val,0)
// }
// console.log(sum(1,2,3,4,5,6,7,8))

// function final(...numbers){
//   return numbers.reduce((a,b) => a+b,0)
// }
// console.log(final(1,2,3,4,5,66))

// const numbersww = [1, 2, 3, 4, 5];
// console.log(numbersww)

// const numbersCopy = [...numbersww]
// console.log(...numbersCopy)

// const arrn1 = [1, 2, 3];
// const arrn2 = [4, 5, 6];
// console.log([...arrn1,...arrn2])

// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// console.log({...obj1,...obj2})

// const arr11 = [0, ...numbers, 6, 7];
// console.log(arr11.filter(Boolean))

// const result = ['nitesh',1,21,3,null,undefined,false,true]
// console.log(result.filter(Boolean))

// object destructuring in JavaScript
// const person = {
//   name: 'John',
//   age: 30,
//   country: 'USA'
// };
// const {name,age} = person 
// console.log(name)
// console.log(age)

// const { name, age, country = 'Unknown' } = person;
// console.log(name)
// console.log(age)
// console.log(country)
// const {name:fullName,age:Age} = person 
// console.log(fullName)
// console.log(Age)

// var x = 1 
// function foo(){
//   var x = 2 
//   if(true){
//     console.log(x)
//   }
// }
// foo()

// handle date and time in JavaScript
const date = new Date()
// console.log(date.toLocaleString('en-US'))
// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getHours())
// console.log(date.getMilliseconds())

// const personnew = {
//   name:'nitesh is good human'
// }
// console.log(personnew)

// const employee = {
//   jobtitle:"FE developer"
// }
// employee.__proto__ = personnew 
// console.log(employee)
// console.log(employee.name)
// Object.setPrototypeOf(employee,personnew)
// const superb = {
//   name:'nitesh is superb'
// }
// const newcompany = {
//   jobtitle:"UI developer"
// }
// newcompany.__proto__ = superb
// console.log(newcompany,newcompany.jobtitle)

// function Person(name){
//   this.name = name
// }
// Person.prototype.sayHello = function(){
//   console.log(`hello, my name is ${name}`)
// }
// handle regular expressions 
// const regex = new RegExp(/^n....h$/);
// console.log(regex.test('nitesh'))

// const groupwise = ['nitesh','nitesh','sameet','arvind']
// console.log(groupwise.fill('filled'))
// console.log(groupwise.some('nitesh'))
// const resultwise = groupwise.filter((val) => val !== 'nitesh')
// console.log(resultwise)
// const resultwise = groupwise.filter((val) => val === 'nitesh')
// const distinct = (val,index,arr) => {
//   return arr.indexOf(val) === index
// }
// console.log(resultwise.filter(distinct))
// const dscsort = groupwise.sort(function(a,b) {
//   if(a>b){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(dscsort.filter(distinct))
// const ascsort = groupwise.sort(function(a,b) {
//   if(a<b){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(ascsort.filter(distinct))

// a test function: returns an even number
// function isEven(elementeven){
//   return elementeven % 2 === 0
// }
// function isOdd(elementodd){
//   return elementodd % 2 !== 0
// }
// defining an array
// let numberswise = [1, 3, 2, 5, 4];
// console.log(numberswise.some(isEven))
// console.log(numberswise.some(isOdd))
// console.log(numberswise.every(isEven))
// console.log(numberswise.every(isOdd))


// even
// const resulteven = [1,2,3,4,5,6,7,8,9,10].filter((val) => val % 2 === 0)
// console.log(resulteven)
// odd
// const resultodd = [1,2,3,4,5,6,7,8,9,10].filter((val) => val % 2 !== 0)
// console.log(resultodd)

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// arrayword.push(111)
// console.log(arrayword)

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// arrayword.pop()
// console.log(arrayword)

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// arrayword.shift()
// console.log(arrayword)

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// arrayword.unshift(111)
// console.log(arrayword)

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// console.log(arrayword.concat(2,2,2,2,3,4,5))

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// console.log(arrayword.join('-'))

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// console.log(arrayword.slice(1))

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// console.log(arrayword.indexOf(111))

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// console.log(arrayword.includes(7))

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// console.log(arrayword.find((n) => n % 8 === 0))

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// console.log(arrayword.findIndex((n) => n % 5 === 0))

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// console.log(arrayword.map((n) => n % 2 !== 0))

// const arrayword = [1,2,3,4,5,6,7,8,9,10]
// console.log(arrayword.filter((n) => n % 8 === 0))

// a test function: returns age that is less that 18
// function checkMinor(age) {
//   return age < 18;
// }
// const ageArray = [34,23,20,26,12]
// let check = ageArray.some(checkMinor);
// console.log(check)

// const groupwise = [44,55,66,12,3,333,444]
// const filtergroupwise1 = groupwise.reduce((a,b) => a+b)
// console.log(filtergroupwise1)

// const filtergroupwise2 = groupwise.reduceRight((a,b) => a+b)
// console.log(filtergroupwise2)

// var nowse = [45,4,9,16,24]
// var sum = nowse.reduce(myFunction);
// document.getElementById('demonew').innerHTML = 'the sum is ' + sum
// function myFunction(total,val,index,array){
//   return total + value
// }

// different ways to create a function
// declaration 
// function add(a,b){
//   return a+b 
// }
// console.log(add(10,20))

// expression
// const add = function(a,b){
//   return a+b 
// }
// console.log(add(10,20))

// arrow
// const add =(a,b) => {
//   return a + b 
// }
// console.log(add(20,30))

// const Happy = new Promise((resolve,reject) => {
//   const sum = 1+1 
//   if(sum == 2){
//     resolve('nitesh')
//   }
//   reject('sameet')
// })
// Promise.all([Happy]).then((val) => console.log(val))

// Promise.all([Promise.resolve('Good1'),Promise.resolve('Good2'),Promise.reject('Good3')])
// .then((val) => console.log(val))
// .catch((val) => console.error(val))

// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())

// object destructing 
// let student = {
//  name:'nitesh',
//  age:34,
//  course:"Computer Science"
// }
// let studentName = student.name
// let studentAge = student.age
// let studentCourse = student.course 

// console.log(studentName)
// console.log(studentAge)
// console.log(studentCourse)

// array destructing
let colors = ['red', 'blue', 'green']

// below normal destructing
// let fColor = colors[0]
// let sColor = colors[1]
// let tColor = colors[2]
// console.log(fColor)
// console.log(sColor)
// console.log(tColor)
// below array destructing
// const [fColor,sColor,tColor] = colors 
// console.log(fColor)
// console.log(sColor)
// console.log(tColor)

// const fruits = ['apple', 'banana', 'orange'];
// fruits[3] = 'grape';
// console.log(fruits.length);

// const myString = "Hello, World!";
// const result = myString.substring(0, 5);
// console.log(result);

// console.log('start');
// const promise1 = new Promise((resolve,reject) => {
//   console.log(1)
// })
// console.log(promise1)

// const usersArray = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ];

// const result = usersArray.map((val) => ({[val.name]:val.age}))
// console.log(result)

// const fruits = ['apple', 'banana', 'orange'];
// const fruitObject = fruits.map((val,index) => ({
//   id:index+1,
//   name:val
// }))
// console.log(fruitObject)

// const products = [
//   { id: 1, name: 'Laptop', price: 1000, category: 'Electronics' },
//   { id: 2, name: 'Smartphone', price: 800, category: 'Electronics' },
//   { id: 3, name: 'Chair', price: 150, category: 'Furniture' },
//   { id: 4, name: 'Tablet', price: 500, category: 'Electronics' },
//   { id: 5, name: 'Desk', price: 250, category: 'Furniture' }
// ];
// const electronicProducts = products.filter((product) => product.category === 'Electronics')
// console.log(electronicProducts)

// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// fruits.splice(2,2)
// console.log(fruits)

// const colors1 = ['red', 'green', 'blue'];
// colors1.splice(1,0,'yellow','orange')
// console.log(colors1)

// const animals = ['dog', 'cat', 'elephant', 'tiger'];
// animals.splice(1,2,'lion','zebra')
// console.log(animals)

// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi','apple'];
// const numwise = [1,22,33,44,55,77,888,99,66,55,44,55]
// console.log([...new Set(fruits)])
// console.log(Array.from([...new Set(fruits)]))
// const distinctarray = (val,index,arr) => {
//   return arr.indexOf(val) === index
// }
// console.log(fruits.filter(distinctarray))
// console.log(numwise.filter(distinctarray))
// const orangeIndexOf = fruits.indexOf('orange')
// console.log(orangeIndexOf)
// const pearIndex = fruits.indexOf('pear')
// console.log(pearIndex)

// console.log(5 == '5')
// console.log(5 === '5')
// console.log(5 !== '5')
// console.log(5 !== 5)

// const multiply = function(a,b){
//   return a *b 
// }
// console.log(multiply(10,20))

// const divide = (a,b) => a+b 
// console.log(divide(10,20))

// const number = [1,2,3,4,5]
// number.forEach((val) => console.log(val))

// font-family:'Open Sans'

// function square(number){
//   return number * number 
// }
// function withLogging(func){
//   return function(...args){
//     console.log(`Calling function with arguments: ${args}`)
//     const result = func (...args);
//     console.log(`Function result: ${result}`)
//     return result;
//   }
// }
// const enhancedSquare = withLogging(square)
// const result = enhancedSquare(5);
// console.log(result)

// function addThreeNumbers(a,b,c){
//   return a + b + c 
// }
// function curryAdd(a){
//   return function (b){
//     return function (c){
//       return a + b + c 
//     }
//   }
// }
// const one = curryAdd(5)
// const example = one(22)
// console.log(example(222))

// function add(a){
//   return function(b){
//     return function(c){
//       return a + b +c 
//     }
//   }
// }
// const add1 = add(1)
// const add2 = add(2)
// console.log(result)

// const result = add(1)(2)(3)
// console.log(result)
// Regular function that takes three arguments

// function add(a,b,c){
//   return a+b+c 
// }
// // Curried version of the add function
// function curriesAdd(a){
//   return function(b){
//     return function(c){
//       return a+b+c 
//     }
//   }
// }
// const addWithCurrying = curriedAdd;
// const result = addWithCurrying(2)(3)(10)
// console.log(result)

// remove decimals
// let x = Math.trunc(8.7512356)
// console.log(x)

// console.log(Math.trunc(55.666))

// console.log('nitesh khatri'.split("").reverse("").join(""))

// const originalArray = [1, 2, 2, 3, 4, 4, 5];
// const distinctarray =  (val,index,arr) => {
//   return arr.indexOf(val) === index 
// }
// // console.log([...new Set(originalArray)])
// // console.log(Array.from([...new Set(originalArray)]))
// const final = originalArray.filter(distinctarray)
// console.log(final)

// const people1 = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 40 },
//   { name: "Charlie", age: 40 },
// ];
// const distinctobject = (val,index,arr) => {
//   return arr.indexOf(val) === index
// }
// const resultasc = people1.sort((a,b) => a.age-b.age)
// console.log(resultasc)
// const resultdsc = people1.sort((a,b) => b.age-a.age)
// console.log(resultdsc)
// const dsc = people1.sort(function(a,b) {
//   if(a.age>b.age){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// const distinctpeople = Array.from(new Set(people1.map(person => person.name))).map(name => {
//   return people1.find(person => person.name === name)
// })
// console.log(distinctpeople)
// const asc = people1.sort(function(a,b) {
//   if(a.name<b.name){
//     return -1
//   }
//   else{
//     return 1
//   }
// })
// console.log(asc)
// console.log('banana'.charAt(2)) 
// console.log('banana'[2]) // "n"

// console.log(typeof nitesh)
// console.log(typeof 'nitesh')
// console.log(typeof 111)
// console.log(typeof [1,2,2,3])
// console.log(typeof {name:'nitesh',age:34})
// console.log(typeof 4+4)
// console.log(typeof 8+9*1)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof NaN)
// console.log(typeof NaN)
// console.log(typeof true)

// // https://github.com/Asabeneh/Destructuring-in-JavaScript
const numbers1 = [1, 2, 3]
// const countries = ['Finland', 'Sweden', 'Norway']
// for (const num of numbers1) {
//     console.log(num)
// }
// for (const international of countries) {
//     console.log(international)
// }
// let n1 = numbers1[0]
// let n2 = numbers1[1]
// let n3 = numbers1[2]
// console.log(n1)
// console.log(n2)
// console.log(n3)

// function sayHello(){
//   console.log('hello world')
// }
// sayHello()

// sayHello()
// function sayHello(){
//   console.log('function is say hello')
// }

// sayHi()
// var sayHi = function(){
//   console.log('hello world')
// }

// console.log(x)
// var x = 5 

// console.log(x)
// let x = 5 

// console.log(x)
// const x = 5 

// foo()
// function foo(){
//   console.log('nitesh khatri')
// }

// example()
// var example = function(){
//   console.log('this is an example')
// }

// function outerFunction(){
//   function innerFunction(){
//     return x+ y 
//   }
//   return innerFunction()
// }
// const addFive = outerFunction(5);
// console.log(addFive(3));
// console.log(addFive(10))

// function ouerFunction(){
//   var outeranswer = ' am outer anser'
//   function innerFunction(){
//     console.log(outeranswer)
//   }
//   return innerFunction
// }
// const Superb = ouerFunction();
// Superb()

// function counter(){
//   var count =  0 
//   return {
//     increment:function(){
//       count++
//     },
//     decrement:function(){
//       count--
//     },
//     getCount:function(){
//       return count
//     }
//   }
// }

// var counterInstance = counter();
// counterInstance.increment();
// counterInstance.decrement();
// console.log(counterInstance.getCount())

// function outerFunction(x){
//   function innerFunction(y){
//     return x + y 
//   }
//   return innerFunction
// }
// const c1 = outerFunction(20);
// const c2 = outerFunction(30);
// console.log(c1(20))
// console.log(c2(20))

// function Animal(name){
//   this.name = name;
// }
// Animal.prototype.sayHello = function(){
//   console.log(`Hello, I am from ${this.name}`)
// }
// function Dog(name,breed){
//   Animal.call(this,name);
//   this.breed = breed;
// }
// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog; 
// Dog.prototype.bark = function(){
//   console.log('nitesh khatri')
// }

// const dog1 = new Dog('Nitesh','Golden Retriver');
// const dog2 = new Dog('Sameet','Madad');
// dog1.sayHello();
// dog2.sayHello();


// closure
// function Outerfunction() {
//     function innerFunction() {
//         console.log('inner function')
//     }
//     innerFunction()
// }
// Outerfunction()

// console.log(typeof 1)
// console.log(typeof 'nitesh')
// console.log(typeof 1 > 10)
// console.log(typeof false)
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof [55, 85])
// console.log(typeof { name: 'nitesh', age: 34 })
// console.log(typeof 5588)

// const values = [3, 1, 3, 5, 2, 4, 4, 4];
// console.log([...new Set(values)])

// const users = [
//     { id: 11, name: 'Adam', age: 23, group: 'editor' },
//     { id: 47, name: 'John', age: 28, group: 'admin' },
//     { id: 85, name: 'William', age: 34, group: 'editor' },
//     { id: 97, name: 'Oliver', age: 28, group: 'admin' }
// ];
// let res = users.filter((i) => i.age >= 30)
// console.log(res)

// const cities = {
//     Lyon: 'France',
//     Berlin: 'Germany',
//     Paris: 'France'
// };
// const resultcities = cities.map((val) => val)
// console.log(resultcities)

// const users = [
//     { id: 11, name: 'Adam', age: 23, group: 'editor' },
//     { id: 47, name: 'John', age: 28, group: 'admin' },
//     { id: 85, name: 'William', age: 34, group: 'editor' },
//     { id: 97, name: 'Oliver', age: 28, group: 'admin' }
// ];
// const resultusers = users.map(({ id, name, age }) => `id - ${id}, name - ${name}, age - ${age}`)
// console.log(resultusers)

// console.log('nitesh khatri'.split("").reverse("").join(""))

// const a = 'a'
// const b = 'b'
// const merge = a + " " + b
// console.log(merge)

// const a = 'nitesh'
// const Upper = a.toUpperCase()
// console.log(Upper)

// const a = 'sachin'
// const replacea = a.replace('sachin', 'rahul')
// console.log(replacea)

// const a = 'nit'
// console.log(a.repeat(5, '++'))

// const nameWise = ['sujeet','ramesh','piyush','mayank','vighnesh']
// const sortasc = nameWise.sort(function(a,b) {
//   if(a<b){
//     return -1 
//   }
//   else{
//     return 1
//   }
// })
// console.log(sortasc)
// const sortdesc = nameWise.sort(function(a,b) {
//   if(a>b){
//     return -1 
//   }
//   else{
//     return 1
//   }
// })
// console.log(sortdesc)
// const distinctgrp = (val,index,arr) => {
//   return arr.indexOf(val) === index
// }

// const person11 = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   email: 'johndoe@example.com'
// };
// console.log(Object.keys(person11))
// console.log(Object.values(person11))
// console.log(Object.entries(person11))

// // Sample array with duplicate values
// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

// // Use a Set to store unique values
// const uniquearr = [...new Set(arrayWithDuplicates)]
// console.log(uniquearr)

// const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// // Using a Set to get unique values
// const uniqueArray = [...new Set(array)]
// console.log(uniqueArray)

// const fruits = ['apple', 'banana', 'cherry', 'date'];
// console.log(fruits.at(0))
// console.log(fruits.at(1))
// console.log(fruits.at(2))
// console.log(fruits.at(3))
// const fruits1 = ['apple', 'banana', 'cherry', 'date', 'fig'];
// console.log(fruits1.at(2)) // Access the element at index 2 (cherry)
// console.log(fruits1.filter((val) => val !== 'apple'))

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// const concatenatedArray = array1.concat(...array2,...array3)
// console.log(concatenatedArray)

// const originalArray = [1, 2, 3];
// const newArray = originalArray.concat(4,5,6)
// console.log(newArray)

// const myArray = [1, 2, 3];
// Use the constructor property to get the constructor function
// const constructorFunction = myArray.constructor;
// console.log(constructorFunction)

// const myArray = [1, 2, 3, 4, 5];
// // copy elements starting from the second-to-last index to the end
// myArray.copyWithin(-2)
// console.log(myArray)

// function personFn(name,age){
//   var personObj = {};
//   personObj.name = name;
//   personObj.age = age;

//   return personObj
// }
// var shawn = personFn('ntesh',34)
// console.log(shawn)

// function PersonConstructor(name,age){
//   this.name = name;
//   this.age = age ;
// }
// var example1 = new PersonConstructor('nitesh',34)
// var example2 = new PersonConstructor('sameet',41)
// console.log(example1,example2)

// function Demo() {
//   console.log(this);
//   this.value = 5;
//   return 10;
// }
// Demo()

// let username = ['a','b']
// let [a,b]  = ['p','w']
// console.log(a,b)

// let [user1,user2] = ['ajay','john']
// console.log(user1,user2)
// [user1,user2] = [user2,user1]
// console.log(user1,user2)


// let numArray=  [10,20,30,40,50]
// let [firstNum,,,,lastNum] = numArray;
// console.log(firstNum,lastNum)

// const people1 = ["Sam", "Alex", "Charlie"];
// people1.forEach(person => {
//   console.log(person);
// });

// const frigroup = ['a','b','c']
// frigroup.forEach(element => {
//   console.log(element)
// })

// const person11 = {
//   key: "value",
//   first_name: "John",
//   last_name: "Doe"
// };

// console.log(Object.keys(person11))

// let counter = 0;
// console.log(counter++)

// const text = "Hello World";
// console.log(text.toUpperCase())

// class Animal{
//   constructor(name){
//     this.name = name; 
//   }

//   speak(){
//     console.log(`${this.name} makes a sound.`)
//   }
// }

// class Dog extends Animal{
//   constructor(name,breed){
//     super(name);
//     this.breed = breed;
//   }

//   speak(){
//     console.log(`${this.name} barks.`)
//   }

//   fetch(){
//     console.log(`${this.name} fetches a ball.`)
//   }
// }

// const genericAnimal = new Animal('Generic Animal');
// const myDog = new Dog('Buddy','Golden Retriever');

// genericAnimal.speak();
// myDog.speak();
// myDog.fetch();

// function findDuplicates(arr){
//   const set = new Set();
//   const duplicates = [];
//   for(const item of arr){
//       duplicates.push(item);
//       if(set.has(item)){
//         duplicates.push(item)
//       }
//       else{
//         set.add(item);
//       }
//       return duplicates
//     }
// }

// const myArray = [1, 2, 3, 2, 4, 5, 4, 6];
// const duplicates = findDuplicates(myArray);
// console.log(duplicates)

// function findDuplicates(arr){
//   const duplicates = [];
//   for(let i=0;i<arr.length;i++){
//     for(let j=1+1;j<arr.length;j++){
//       if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
//         duplicates.push(arr[i])
//       }
//     }
//   }
//   return duplicates;
// }

// const myArray = [1, 2, 3, 2, 4, 5, 4, 6]
// const duplicates = findDuplicates(myArray);
// console.log(duplicates)

// function findDuplicates(arr){
//   return arr.reduce((acc,currentValue,index,array) => {
//     if(arr.indexOf(currentValue,index+1) !== -1 && acc.indexOf(currentValue) === -1){
//       acc.push(currentValue)
//     }
//     return acc;
//   },[])
// }

// const myArray = [1, 2, 3, 2, 4, 5, 4, 6]
// const duplicates = findDuplicates(myArray)
// console.log(duplicates)

// const myArray = [1, 2, 3, 2, 4, 5, 4, 6]
// const result = myArray.length;
// console.log(result)

// function countDuplicates(arr) {
//   const countMap = {};
//   const duplicates = {};

//   for (let item of arr) {
//     if (countMap[item] === undefined) {
//       countMap[item] = 1;
//     } else {
//       countMap[item]++;
//       if (countMap[item] === 2) {
//         duplicates[item] = 2;
//       }
//     }
//   }

//   return duplicates;
// }
// const arr2 = [1, 2, 2, 3, 4, 4, 4, 5];
// const duplicate = countDuplicates(arr2)
// console.log(duplicate)

// function isInteger(number) {
//   // Use the Number.isInteger() method if available (ES6+)
//   if (Number.isInteger(number)) {
//     return true;
//   } else {
//     // If the Number.isInteger() method is not available
//     return Math.floor(number) === number;
//   }
// }
// console.log(isInteger(10))
// console.log(isInteger(20))
// console.log(isInteger(30))
// console.log(isInteger(40))
// console.log(isInteger(-5))
// console.log(isInteger(0.25));

// const x = 5;
// x = 10 
// console.log(x)

// const arradda = [1, 2, 3];
// console.log(arradda.push(10))

// const person1 = {
//   name:'nitesh',
//   age:30
// }
// console.log(Object.freeze(person1))

// person.age = 31
// person.address = 'amir house'

// console.log(person)

// const pi = 3.14159;
// console.log(pi)

// const personeg = Object.freeze({ name: "John", age: 30 });
// console.log(personeg)

// const numbers11 = [5, 2, 9, 1, 5, 6];
// const resultNumber = numbers11.sort(function(a,b){
//   return a - b 
// })
// console.log(resultNumber)

// const numbers11 = [5, 2, 9, 1, 5, 6];
// const resultNumber = numbers11.sort(function(a,b){
//   return b - a
// })
// console.log(resultNumber)

// const fruits = ['banana', 'apple', 'cherry', 'date', 'fig'];
// const resultFruits = fruits.sort(function(a,b){
//   return b.localeCompare(a);
// })
// console.log(resultFruits)

// const resultfruits = fruits.sort((a,b) => b.localeCompare(a))
// console.log(resultfruits)



// const arr111111 = [1, 2, 2, 3, 4, 4, 5];
// const uniqueValues = [...new Set(arr111111)]
// console.log(uniqueValues)
// const arrUni = []
// for(const value of arr111111){
//   if(!arrUni.includes(value)){
//     arrUni.push(value)
//   }
// }
// console.log(arrUni)

// const uniqueValue = arr111111.filter((value,index,self) => self.indexOf(value) === index)
// console.log(uniqueValue)

// const uniqueValue = arr111111.filter((value,index,self) => self.indexOf(value) === index)
// console.log(uniqueValue)

// function findUniqueSortedValues(arr) {
//   // Use a Set to store unique values
//   const uniqueValues = new Set(arr);

//   // Convert the Set back to an array and sort it
//   const sortedUniqueValues = Array.from(uniqueValues).sort((a, b) => a - b);

//   return sortedUniqueValues;
// }
// const arr123 = [4, 2, 2, 5, 1, 4, 3, 1, 5];
// const uniqueSortedValue = findUniqueSortedValues(arr123)
// console.log(uniqueSortedValue)

// const a = { name: 'Alice' };
// const b = a;
// b.name = 'Bob';
// console.log(a.name);

// 4 How to find the count of duplicates in an array?
// function countDuplicates(arr) {
//   const countMap = {}; // Create an empty object to store element counts

//   for (const item of arr) {
//     if (countMap[item]) {
//       // If the element exists in the countMap, increment the count
//       countMap[item]++;
//     } else {
//       // If the element is not in the countMap, initialize its count to 1
//       countMap[item] = 1;
//     }
//   }

//   // Create an array to store the duplicates
//   const duplicates = [];

//   // Iterate through the countMap and find elements with a count greater than 1
//   for (const item in countMap) {
//     if (countMap[item] > 1) {
//       duplicates.push({ element: item, count: countMap[item] });
//     }
//   }

//   return duplicates;
// }

// const myArray = [1, 2, 2, 3, 4, 4, 4, 5];
// const duplicates = countDuplicates(myArray)
// console.log(duplicates)

// 5 How to check if a given number is an integer?
// function isInteger(number){
//   return Number.isInteger(number);
// }
// const n1 = 42;
// const n2 = 3.4;
// const n3 = "7";

// console.log(isInteger(n1));
// console.log(isInteger(n2));
// console.log(isInteger(n3));

// 6 Explain the difference between Object.freeze() vs const?
// const pi = 3.14159;
// const pi1 = 3.14;
// const person1 = {name:'nitesh'};
// person1.name = 'sameet';
// const person2 = Object.freeze({name:'sameet'});
// const user = Object.freeze({info:{name:'michale'}});
// user.info.name = 'sameet'
// console.log(user)

// 7 How to Sort a Number Array?
// const numbersUes = [5, 2, 9, 1, 5, 6];
// const result = numbersUes.sort((a,b) => b-a)
// console.log(result)
// const sortAsc = [...numbersUes].sort((a,b) => a-b)
// console.log(sortAsc)
// const sortDsc = [...numbersUes].sort((a,b) => b-a)
// console.log(sortDsc)

// 8 Sort a given array of strings
// const strings = ["banana", "apple", "cherry", "date", "fig"];
// console.log(strings.sort());
// const resultStrings = strings.sort(function(a,b) {
//   if(a<b){
//     return -1
//   }
//   else{
//     return 1
//   }
// })

// console.log(resultStrings)

// 9 How to find unique values in an array?
// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [...new Set(array)]
// console.log(uniqueArray)
// const uniqueArray = [...new Set(array)]
// console.log(uniqueArray)

// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueValues = array.reduce((one,two) => {
//   if(!one.includes(two)){
//     one.push(two)
//   }
//   return one 
// },[])
// console.log(uniqueValues)

// 10 How to find unique values from an Array in sorted order?
// const array = [5, 3, 2, 4, 2, 1, 5];
// const uniqueValueSet = [...new Set(array)]
// console.log(uniqueValueSet)
// const uniqueArray = [...array]
// console.log(uniqueArray)
// console.log(array.sort((a,b) => a-b))

// 11  Find maximum value in a numbered array?
// const numbersResult = [5, 2, 9, 1, 5, 6];
// const max = Math.max(...numbersResult)
// console.log(max)
// let max = numbersResult[0]
// for(let i =0;i<numbersResult.length;i++){
//   if(numbersResult[i] > max){
//     max = numbersResult[i]
//   }
// }
// console.log(max)

// 12 Find minimum value in a numbered array?
// const min = Math.min(...numbersResult)
// console.log(min)
// let min = numbersResult[0]
// for(let i=0;i<numbersResult.length;i++){
//   if(numbersResult[i] < min){
//     min = numbersResult[i]
//   }
// }
// console.log(min)

// 13. Find the average of the numbers in the numbered array?
// const numbersss = [5, 2, 9, 1, 5, 6];
// let sum = 0;
// for(let i=0;i<numbersss.length;i++){
//   sum += numbersss[i]
// }
// const avg = sum / numbersss.length 
// console.log(avg);
// const sum = numbersss.reduce((one,two) => one + two,0)
// const avg = sum / numbersss.length
// console.log(avg);

// 14.  How can you uppercase the first character in a string array?
// const stringArray = ["apple", "banana", "cherry", "date"];
// const capitzlied = stringArray.map((val) => val.charAt(0).toUpperCase())
// console.log(capitzlied)

// 15. How to make a sentence out of the given string array?
// const stringArray = ["I", "love", "programming", "in", "JavaScript"];
// const resulStringArray = stringArray.concat(' ')
// console.log(resulStringArray)

// 16. How can you extract a few fields from the given JSON object and form a new array?
// const data = [
//   { id: 1, name: "John", age: 30, city: "New York" },
//   { id: 2, name: "Alice", age: 25, city: "San Francisco" },
//   { id: 3, name: "Bob", age: 35, city: "Los Angeles" },
// ]
// // const extractedData = data.map(item => ({name:item.name,age:item.age}))
// // console.log(extractedData)
// const filterData = data.filter((val) => val.name !== 'John' && val.age > 34)
// console.log(filterData)

// 17. Filter the given object based on certain conditions and return the corresponding object?
// const peopleArray = [
//   { name: "John", age: 35 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 42 },
//   { name: "Eve", age: 28 },
// ]
// const condition = 30 
// const filteredPeople = peopleArray.filter((val) => val.age > condition)
// console.log(filteredPeople)

// 18.  Given an array of strings, reverse each word in the sentence?
// const sentenceArray = ["Hello", "world", "this", "is", "a", "test"];
// const reversedArray = sentenceArray.map(word => {
//   return word.split('').reverse().join('');
// })
// console.log(reversedArray)

// 19. How to check if an object is present in an Array or not?
// const fruits = ["apple", "banana", "cherry", "date"];
// const searchFruit = 'cherry';
// if(fruits.indexOf(searchFruit) !== -1){
//   console.log(`${searchFruit} is in the array`)
// }
// else{
//   console.log(`${searchFruit} is not in the array`)
// }

// const searchFruit = 'pineapple'
// if(fruits.indexOf(searchFruit)){
//   console.log(`${searchFruit} is in array`)
// }
// else{
//   console.log(`${searchFruit} is not in array`)
// }

// function isInArray(array,element){
//   return array.includes(element);
// }
// if(isInArray(fruits,searchFruit)){
//   console.log(`${searchFruit} is in the array`)
// }
// else{
//   console.log(`${searchFruit} is not in the array`)
// }

// 20. How to empty an array?
// const myArray = [1, 2, 3, 4, 5];
// console.log(myArray.length = 0)
// const resultsplice = myArray.splice(0)
// console.log(resultsplice)
// let myArray = [1, 2, 3, 4, 5];
// const resultempty = myArray.length = 0
// console.log('empty',resultempty)

// 21. What is IIFEs (Immediately Invoked Function Expressions)?
// (function(){
//   // you code here
// })();
// (function(){
//   var message = 'hello, life';
//   console.log(message)
// })()

// (function(){
//   var a = 'nitesh';
//   var b = 'sameet';
//   var c = 'arvind';
//   var d = 'urvashi';
//   console.log(a,b,c,d)
// })()

// function Outer(){
//   console.log('outer')
//   function Inner(){
//     console.log('inner')
//   }
//   return Inner();
// }
// Outer()
// (function(){
//   var privateVariable = 43 
//   function inner(){
//     console.log('this is a private function');
//   }
//   console.log('inside the iife '  + privateVariable)
// })()

// 22. How do you sort and reverse an array without changing the original array?
// const originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const sortedReversedArray = originalArray.slice();
// console.log(sortedReversedArray)
// console.log(sortedReversedArray.sort((a,b) => a-b))
// console.log(sortedReversedArray.sort((a,b) => b-a))
// console.log(sortedReversedArray.reverse())

// 23. Write a function to check if a given string is Palindrome or not?
// function isPalindrome(str){
//   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   const reversedStr = cleanStr.split('').reverse().join('');
//   return cleanStr === reversedStr;
// }
// const teaString1 = 'racecar';
// const teaString2 = 'hello'
// console.log(teaString1)
// console.log(teaString2)

// 24. How can you combine two Arrays into a third Array using spread operator?
// const firstArray = [1, 2, 3];
// const secondArray = [4, 5, 6];
// const combinedArray = [...firstArray,...secondArray]
// console.log(combinedArray)

// 25. How can you Insert an element at a specific index in an Array?
// const myArray = [1, 2, 3, 4, 5];
// console.log(myArray.splice(2,0,6));
// const index = 2 
// const elementToInsert = 6 
// const newArray = [...myArray.slice(0,index),elementToInsert,...myArray.slice(index)]
// console.log(newArray)

// 26. How can you Replace an element at a specific index in an Array?
// const myArray = [1, 2, 3, 4, 5];
// const indexToReplace = 2
// const newValue = 'test'
// console.log(myArray[indexToReplace] = newValue)

// 27. How can you Delete an element at a specific index in an Array?
// const myArray = [1, 2, 3, 4, 5];
// const indexToDelete = 4 
// console.log(myArray.splice(indexToDelete,1))
// const indexToDelete = 2 
// const newArray = myArray.filter((_, index) => index !== indexToDelete);
// console.log(newArray)

// 28. How can you delete a specific element?
// const myArray = [1, 2, 3, 4, 5];
// const elementToDelete = 3;
// const indexToDelete = myArray.indexOf(elementToDelete)
// if(indexToDelete !== -1){
//   myArray.splice(indexToDelete,1)
// }
// console.log(indexToDelete)
// const newArray = myArray.filter((item) => item !== elementToDelete)
// console.log(newArray)

// 29. How do you clone an Object?
// const originalObject = { name: "John", age: 30 };
// console.log({...originalObject})
// console.log(Object.assign({},originalObject))
// console.log(JSON.parse(JSON.stringify(originalObject)))

// 30. How do you add an element at the beginning of an array?
// const myArray = [2, 3, 4, 5];
// const elementToAdd = 1; // Element to add at the beginning
// myArray.unshift(elementToAdd)
// console.log(myArray)

// 31.  How to remove an element from the end of the array?
// const myArray = [1,2, 3, 4, 5,6];
// myArray.pop()
// console.log(myArray)

// 32. How can you split a string into an Array?
// const myString = "apple,banana,cherry,date";
// const myArray = myString.split(",")
// console.log(myArray)

// 33. How can you remove an element from the beginning of the array?
// const myArray = [1,2, 3, 4, 5,6];
// myArray.shift()
// console.log(myArray)

// 34. How can you add an element to an object?
// const myObject = {};
// const newKey = 'dynamicKey'
// myObject[newKey] = 'dynamic value'
// console.log(myObject)
// const myObject = {key1:"value1",key2:'value'}
// const newKey = 'dynamickey'
// const newValue = 'dynamic value'
// myObject[newKey] = newValue
// console.log(myObject)

//35. How can you replace an existing element in an object?
// const myObject = {key1:"value1",key2:'value2'}
// const exisintKey = 'key1'
// const newValue  = 'dynamic Value'
// myObject[exisintKey] = newValue
// const newKey1 = 'example1'
// const newValue1 = 'Example 1 is happy'
// myObject[newKey1] = newValue1
// console.log(myObject)

//36.How can you combine two objects?
// const object1 = { key1: "value1" };
// const object2 = { key2: "value2" };
// const combinedObject = Object.assign({},object1,object2)
// console.log(combinedObject)
// const combinedObject = {...object1,...object2}
// console.log(combinedObject)

//37. How do you write a function which can take (x) number of parameters?
// function sum(...numbers){
//   return numbers.reduce((x,y) => x + y , 0)
// }
// console.log(sum(10,20,333))
// console.log(sum(10,20,30))
// console.log(sum(11))
// console.log(sum())

//38. How do you create an Array out of a given sentence?
// const sentence = "This is a sample sentence.";
// const wordArray = sentence.split(" ")
// console.log(wordArray)

// 39.  How do you replace a given string in the string of arrays?
// const stringArray = ["Hello, world!", "This is a sample sentence.", "Replace me!"];
// const search = 'Replace me';
// const replacement = 'Replaced';
// const replacedArray = stringArray.map(str => str.replace(search,replacement))
// console.log(replacedArray)

//40. How do you write an add() function using javascript currying concept?
// function add(x){
//   return function(y){
//     return x + y 
//   }
// }
// const add5 = add(5);
// console.log(add5(4));
// const add10 = add(10);
// console.log(add10(20));

// 41. Implement a groupBy method in JavaScript?
// function groupBy(array,criterian){
//   function groupBy(array, criterion) {
//     return array.reduce((result, item) => {
//       const key = typeof criterion === 'function' ? criterion(item) : item[criterion];
//       if (!result[key]) {
//         result[key] = [];
//       }
//       result[key].push(item);
//       return result;
//     }, {});
//   }
//   const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 30 },
//     { name: 'David', age: 25 },
//   ];

//   const groupedByAge = groupBy(people, 'age');
//   console.log(groupedByAge);

// 42. Explain WeakSet in javascript with an example?
// const myWeakSet = new WeakSet();
// const obj1 = {name:'nitesh'};
// const obj2 = {name:'sameet'};
// const obj3 = {name:'arvind'};
// myWeakSet.add(obj1);
// myWeakSet.add(obj2);
// myWeakSet.add(obj3);
// console.log(myWeakSet.has(obj1))
// console.log(myWeakSet.has(obj2))
// console.log(myWeakSet.has(obj3))
// myWeakSet.delete(obj3)
// console.log(myWeakSet.has(obj3))
// const myWeakSet = new WeakSet();
// const objp = {name:'a'}
// const objb = {name:'b'}
// const objc = {name:'c'}
// myWeakSet.add(objp);
// myWeakSet.add(objb);
// myWeakSet.add(objc);
// console.log(myWeakSet.has(objb));
// console.log(myWeakSet.has(objp));
// console.log(myWeakSet.has(objc));

// 43. Explain WeakMap in javascript with an example?
// const myWeakMap = new WeakMap();
// const k1 = {}
// const k2 = {}
// myWeakMap.set(k1,'value associated with k1')
// myWeakMap.set(k2,'value associated with k2')
// console.log(myWeakMap.get(k1))
// console.log(myWeakMap.get(k2))
// console.log(myWeakMap.has(k1))
// console.log(myWeakMap.has(k2))
// console.log(myWeakMap.has(k1))

// 44. Explain what is Object Destructuring with an example?
// const person = {
//   firstName: 'Alice',
//   age: 30,
// };
// // Destructuring the 'person' object with default values
// const {firstName,lastName = 'khatri',age} = person
// console.log(firstName)
// console.log(lastName)
// console.log(age)

// 45. How can we generate a random alphanumeric string in JavaScript?
// function generateRandomAlphaNumericString(length){
//   const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   let result = ''
//   for(let i=0;i<length;i++){
//     const randomIndex = Math.floor(Math.random() * alphanumericCharacters.length)
//     result += alphanumericCharacters.charAt(randomIndex)
//   }
//   return result;
// }
// const randomString = generateRandomAlphaNumericString(10);
// console.log(randomString)

// 46. How can we call a function which logs a message after every 5 seconds?
// function logMsg(){
//   console.log('nitesh khatri')
// }
// const intervalID = setInterval(logMsg,1000)
// console.log(intervalID)

// let count = 0;
// const maxCount = 10;

// const intervalID = setInterval(function(){
//   logMsg();
//   count++;

//   if(count >= maxCount){
//     clearInterval(intervalID)
//   }
// },500)

// 47. How can we delay calling a function after 5 seconds?
// function delayedFunction(){
//   console.log('Function called after 1 seconds');
// }
// setTimeout(delayedFunction,1000)

//48. Write a function that performs binary search on a sorted array?
// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return mid; // Found the target, return its index
//     }

//     if (arr[mid] < target) {
//       left = mid + 1; // Target is in the right half
//     } else {
//       right = mid - 1; // Target is in the left half
//     }
//   }

//   return -1; // Target not found in the array
// }
// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
// const targetValue  = 11;
// const result = binarySearch(sortedArray,targetValue);
// if(result !== -1){
//   console.log(`Found ${targetValue} at index ${result}`)
// }
// else{
//   console.log(`${targetValue} not found in the array`);
// }

//49. How can we parse a given JSON object?
// const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject)
// console.log(jsonString)

// 50. How do you check whether a string contains a substring?
// const mainString = "Hello, World!";
// const substring = "World 1";
// if(mainString.includes(substring)){
//   console.log(`"${mainString}" contains the substring "${substring}"`)
// }
// else{
//   console.log(`"${mainString}" does not contain the substring "${substring}"`);
// }

// 51. How do I get query string values in javascript?
// const queryString = window.location.search; // Get the query string
// const urlParams = new URLSearchParams(queryString);

// // Access the values using the get() method
// const p1 = urlParams.get('p1')
// const p2 = urlParams.get('p2');
// console.log(param1); // Output: "value1"
// console.log(param2); // Output: "value2"

// 52. How to create and trigger events in javascript?
// const customEvent = new CustomEvent('myEvent',{
//   detail:{message:'Custom event trigged'}
// });
// const myElement = document.getElementById('myElement');
// myElement.dispatchEvent(customEvent);

// 53.  How to display the current date in javascript?
// Create a new Date object
// const currentDate = new Date();
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth())
// console.log(currentDate.getDate())
// currentDate.getHours();
// currentDate.getMinutes();
// currentDate.getSeconds();

// Get the individual components of the date
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth() + 1; // Months are 0-based, so add 1
// const day = currentDate.getDate();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();

// // Create a formatted date string
// const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// console.log(formattedDate)

// 54. How do you compare time for two dates?
// const date1 = new Date('2023-01-15T12:00:00');
// const date2 = new Date('2023-01-20T15:30:00');
// if (date1.getTime() < date2.getTime()) {
//   console.log('date1 comes before date2');
// } else if (date1.getTime() > date2.getTime()) {
//   console.log('date1 comes after date2');
// } else {
//   console.log('date1 and date2 are the same');
// }

// 55. How do you check if a string starts with another string?
// const mainString = "Hello, world!";
// const substring = "Hello";
// const regex = new RegExp(`^${substring}`);
// if (regex.test(mainString)) {
//   console.log("mainString starts with the substring.");
// } else {
//   console.log("mainString does not start with the substring.");
// }

// 56. How do you remove whitespaces from a given string?
// const inputString = "   This is a string    with spaces.   ";
// console.log(inputString.trim());

// 57. How do you assign default values to variables
// const name = ''; // Falsy value
// const defaultName = 'John';
// const finalname = name || defaultName
// console.log(finalname)
// const age = null; // Null value
// const defaultAge = 30;
// const finalAge = age ?? defaultAge 
// console.log(finalAge)
// function greet(name='Guest'){
//   console.log(`hello, ${name}`)
// }
// greet()
// greet('nitesh')


// 58. For a given function, count the number of parameters expected by a function?
// function exampleFunction(a, b, c) {
//   return a+b+c
// }
// const paramCount = exampleFunction.length;
// console.log(`The function expects ${paramCount} parameters.`);

// 59. Implement a method which generates 5 random numbers?
// function generateRandomNumbers(min, max, count) {
//   const randomNumbers = [];
//   for (let i = 0; i < count; i++) {
//     const randomNumber = Math.random() * (max - min) + min;
//     randomNumbers.push(randomNumber);
//   }

//   return randomNumbers;
// }
// const min = 1;
// const max = 100;
// const count = 5;
// const randomNumbers = generateRandomNumbers(min,max,count);
// console.log(randomNumbers)

// setTimeout(() => {console.log('1')},0)
// Promise.resolve('hello').then(() => console.log('2'));
// console.log('3');

// 60 Implement a method which generates random numbers between 41 and 67 and sort
// function generateAndSortRandomNumbers(count) {
//   const randomNumbers = [];

//   // Generate 'count' random numbers between 41 and 67
//   for (let i = 0; i < count; i++) {
//     const randomNumber = Math.floor(Math.random() * (67 - 41 + 1) + 41);
//     randomNumbers.push(randomNumber);
//   }

//   // Sort the array in ascending order
//   randomNumbers.sort((a, b) => a - b);

//   return randomNumbers;
// }
// const count = 5; // Number of random numbers
// const sortedRandomNumbers = generateAndSortRandomNumbers(count);
// console.log(sortedRandomNumbers);

// 61. How to write an Object and implement multiple function chaining?
// const Calculator  = { 
//   result:0,
//   add:function(value){
//     this.result += value;
//     return this;
//   },
//   subtract:function(value){
//     this.result -= value; 
//     return this;
//   },
//   multiply:function(value){
//     this.result *= value;
//     return this;
//   },
//   divide: function (value) {
//     this.result /= value;
//     return this; // Return the object for chaining
//   },
//   clear: function () {
//     this.result = 0;
//     return this; // Return the object for chaining
//   },
//   getResult: function () {
//     return this.result;
//   },
// };
// const result = Calculator.add(5).subtract(3).multiply(4).divide(2).getResult();
// console.log(result);

// 62. How do you determine whether an object is frozen or not?
// const myObject = { prop1: 42, prop2: "Hello" };
// Object.freeze(myObject)
// if(!Object.isExtensible(myObject)){
//   console.log('The object is frozen.')
// }
// else{
//   console.log('The object is not frozen.')
// }

// 63. How do you determine two values are the same or not using an object?
// const value1 = 5;
// const value2 = "5";
// if(value1 == value2){
//   console.log('The values are equal (with type coercion)');
// }
// else{
//   console.log("The values are not equal (with type coercion).");
// }
// const obj1 = { key: "value" };
// const obj2 = { key: "value" };
// const obj3 = obj1;
// if(obj1 == obj2){
//   console.log("obj1 and obj2 are the same object.");
// } else {
//   console.log("obj1 and obj2 are different objects.");
// }

// 64. How do you copy properties from one object to another object
// const sourceObject = { prop1: "value1", prop2: "value2" };
// const targetObject = {}
// // console.log(targetObject)
// for(const key in sourceObject){
//   if(sourceObject.hasOwnProperty(key)){
//     targetObject[key] = sourceObject[key]
//   }
// }
// Object.assign(targetObject,sourceObject)

// 65. How do you determine if an object is sealed or not?
// const myObject = {
//   prop1: 'value1',
//   prop2: 'value2',
// };
// Object.seal(myObject);
// if(Object.isSealed(myObject)){
//   console.log('The object is sealed.');
// } else {
//   console.log('The object is not sealed.');
// }

// 66. How do you get an enumerable key and value pairs?
// const obj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
// };
// const keys = Object.keys(obj);
// keys.forEach(key => {
//   const value = obj[key]
//   console.log(`key : ${key}, Value:${value}`)
// })

// const entries = Object.entries(obj);
// entries.forEach(([key,value]) => {
//   console.log(`key: ${key},value:${value}`);
// });

// for(const[key,value] of Object.entries(obj)){
//   console.log(`key :${key},value:${value}`);
// }

// 67. What is the main difference between Object.values and Object.entries method?
// const obj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
// };
// const values = Object.values(obj)
// console.log(values)

// const entries = Object.entries(obj)
// console.log(entries)

// 68. . How can you get the list of keys of any object?
// const obj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
// };
// const keys = Object.keys(obj)
// console.log(keys)
// const keys = [];
// for(const key in obj){
//   if(obj.hasOwnProperty(key)){
//     keys.push(key)
//   }
// }
// console.log(keys)

// const keys = Reflect.ownKeys(obj);
// console.log(keys)

//69. How do you encode an URL
// const originalURL = "https://www.example.com/search?q=query string with special characters&param=value";
// const encodeURL = encodeURIComponent(originalURL)
// console.log(encodeURL)
// const w3schools = "https://www.w3schools.com/howto/howto_css_social_media_buttons.asp"
// console.log(encodeURIComponent(w3schools))

// 70. How do you define property on an Object constructor
// function Person(name, age,desc) {
//   this.name = name;
//   this.age = age;
//   this.desc = desc;
// }

// Define a property on the constructor's prototype
// Person.prototype.description = 'A human being'
// const p1 = new Person('nitesh',30,'a human being 1')
// const p2 = new Person('sameet',41,'a human being 2')

// console.log(p1)
// console.log(p2)
// console.log(p1.description)
// console.log(p2.description)

// function Example(name,city){
//   this.name = name;
//   this.city = city;
// }
// const pro1 = Example.prototype.address = 'amir house'
// const pro2 = Example.prototype.address = 'illignos'
// const n1 = new Example('nitesh','mumbai')
// const s1 = new Example('sameet','chicago')
// console.log(n1,pro1)
// console.log(s1,pro2)

// 71. How can you call the constructor of a parent class?
// class Animal{
//   constructor(name){
//     this.name = name;
//   }
//   speak(){
//     console.log(`${this.name} makes a sound.`)
//   }
// }
// class Dog extends Animal{
//   constructor(name,breed){
//     super(name);
//     this.breed = breed;
//   }
//   bark(){
//     console.log(`${this.name} (a ${this.breed}) barks.`);
//   }
// }
// const myDog = new Dog('Buddy','Golden Retriever');
// myDog.speak();
// myDog.bark();

// 72.How do you check whether an object can be extendable or not?
// const user = {
//   name: "Jane",
//   surname: "Traveller",
//   stayDuration: "3 weeks",
//   roomAssigned: 1022,
// }
// const group1 = {}
// const grp = [111,22,22]
// console.log(Object.isExtensible(user)); 
// console.log(Object.isExtensible(group1)); 
// console.log(Object.isExtensible(grp)); 

// 73. How do you prevent an object from extending
// const obj = {};
// const obj2 = Object.preventExtensions(obj);
// console.log(obj === obj2)
// const empty = {}
// console.log(Object.preventExtensions(empty))

//74. How do you find the Vowels?
// program to count the number of vowels in a string
// const countVowels = str => Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;
// console.log(countVowels('abcdefghijklmnopqrstuvwxyz'))
// console.log(countVowels('test'))
// console.log(countVowels('ddd'))

//75. What are default values in destructuring assignment?
// const settings = {
//   speed: 150
// }
// const {speed = 750, width = 500} = settings;
// console.log(speed);
// const mySpeed = 0;
// const speed = mySpeed || 760;
// console.log(speed)
// const { dogName = 'snickers' } = { dogName: undefined }
// console.log(dogName)
// const { dogName = 'snickers' } = { dogName: null }
// console.log(dogName)
// const { dogName = 'snickers' } = { dogName: false }
// console.log(dogName)
// const { dogName = 'snickers' } = { dogName: 0 }
// console.log(dogName)

// 76. How do you swap variables in destructuring assignment
// let a 
// let b 
// [a,b] = [1,2,3]
// console.log(a)
// console.log(b)
// let a = 13;
// let b = 22;
// [a,b] = [b,a]
// console.log(a,b)

// 77. How do you combine two or more arrays
// const a1 = ['a','b','c']
// const a2 = ['d','e','f']
// const mergeResult = [...a1,...a2];
// console.log(mergeResult)
// const heroes = ['nitesh']
// heroes.push('hitman')
// console.log(heroes)

//78. How to create a specific number of copies for a string
// var st = "Today is Monday.";
// var times = 5;
// var repeatedSt = "";
// while(times > 0){
//   repeatedSt += st;
//   times-- ;
// }
// console.log(st)
// console.log(repeatedSt)
// console.log(times)

// 79. What is the easiest way to convert an array to an object?
// const arr2 = ['zero', 'one', 'two'];
// const obj1 = Object.assign({},arr2)
// console.log(obj1)

// 80. Verify that a function argument is a Number or not?
// function isNumber(value){
//   return typeof value === 'number'
// }
// console.log(isNumber(43))

// const currentDate = new Date();
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//81. What is the easiest way to resize an Array?
// const oldArray = [1, 2, 3];
// const newArray = new Array(oldArray.length);
// for(let i=0;i<oldArray.length;i++){
//   newArray[i] = oldArray[i]
// }
// console.log(newArray)

//82. What's the difference between a function expression and function declaration?
// const getRectangleArea = function(w,h){
//   return w * h
// }
// console.log(getRectangleArea(3,10))
// const ExampleArea = function(w,h){
//   return w * h 
// }
// console.log(ExampleArea(10,20))

//83. How to detect a mobile device with JavaScript?

//84. Why do we use The some() method in Arrays?
// function checkAvailability(arr,val){
//   return arr.some(function(arrVal){
//     return val === arrVal
//   })
// }
// function func(){
//   let arr = [2,6,8,1]
//   console.log(checkAvailability(arr,2))
//   console.log(checkAvailability(arr,11))
// }
// func()
// function isGreat(ele,idx,arr){
//   return ele > 5;
// }
// function func(){
//   let arr = [11,22,33,44]
//   let val=   arr.some(isGreat)
//   console.log(val)
// }
// func()

// 85. How to add 15 minutes to a JavaScript Date?
// const nums = [34, 2, 48, 91, 12, 32];
// function addMinutes(date,minutes){
//   date.setMinutes(date.getMinutes() + minutes)
//   return date;
// }
// const result1  = addMinutes(new Date(),10)
// console.log(result1)

//86. Explain JavaScript Promises with an example?
// let promise = new Promise(function(resolve,reject){
//   let value = 'water'
//   resolve(value)
// })
// console.log(promise);

//87. Which keyword can be used to deploy inheritance in ES6?
// function Vehicle(name,type){
//   this.name = name 
//   this.type = type 
// }
// Vehicle.prototype.getName = function getName(){
//   return this.name 
// }
// Vehicle.prototype.getType = function getType(){
//   return this.type 
// }
// var car =  new Vehicle('bmw','car')
// console.log(car.getName())
// console.log(car.getType())

//88. What is the difference between for..of and for..in?
// let list = [4, 5, 6];
// for(let i in list){
//   console.log(i)
// }
// for(let i of list){
//   console.log(i)
// }
// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(const index in digits){
//   console.log(digits[index]);
// }
// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(const index of digits){
//   console.log(digits[index])
// }

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(const digit of digits){
//   console.log(digit)
// }
// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(const digit of digits){
//   if(digit % 2 === 0){
//     continue;
//   }
//   console.log(digit)
// }
// const str = "Hello World";
// for(let example of str){
//   console.log(example)
// }
// for(let example in str){
//   console.log(example)
// }
// const student = {
//   registration: "123456",
//   name: "Sandeep",
//   age: 33,
// }
// Object.defineProperty(student,"marks",{
//   value:98,
//   enumerable:false
// })
// console.log(student.marks)
// for(key in student){
//   console.log(key)
// }


//89. How to set a property in localStorage
// const user = { brand:"Suzuki", color:"white", price:10000 };
// console.log(localStorage.setItem('car',JSON.stringify(car)));
// const userArray = ["Obaseki",25]
// localStorage.setItem('user', JSON.stringify(userArray));
// const userData = JSON.parse(localStorage.getItem('user'));
// console.log(userData)
// var answer = localStorage.key(1);
// console.log(answer)
// window.localStorage.setItem("grade","One");
// const Car = {
//   brand:"Suzuki",
//   color:"white",
//   price:10000
// }
// console.log(window.localStorage.setItem('car',JSON.stringify(Car)))
// window.localStorage.getItem('car');
// JSON.parse(window.localStorage.getItem('car'))

// 90.  Give a list of the various ways using which an HTML element can be accessed within a JavaScript code?
// Accessing the element by getElementById method
// let temp = document.getElementById("Geeksforgeeks");
// console.log(temp)

// 91. State the difference between Apply and Call?
// const func = function() {
//   console.log("Hello world!");
// };
// func()
// function test(...arguments){
//   console.log(this.num, arguments);//100, [1,2,3]
// }
// test.apply({num:100},[1,2,3])

// 92. What is the difference between undefined and not defined in JavaScript?
// var a; 
// console.log(a)
// a;
// console.log(a)
// a = undefined 
// console.log(a)

// 93. Explain Closure in JavaScript with an example?
// function outerFunction(){
//   var a= 1 
//   function innerFunction(){
//     console.log(a)
//   }
//   return innerFunction()
// }
// outerFunction();

// 94. How to calculate the length of an associative array using JavaScript?
// const obj = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };
// let length = 0;
// for (const key in obj){
//   length++;
// }
// console.log(length)

// 95. Explain JavaScript promise.all with an example?
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 1000);
// });
// console.log(p1);
// const p2 = new Promise((resolve,reject) => {
//   setTimeout(() => resolve('one'),1000)
// })
// console.log(p2)
// const p3 = new Promise((resolve,reject) => {
//   setTimeout(() => resolve('two'),2000)
// })
// console.log(p3)

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The first promise has resolved');
//     resolve(10);
//   }, 1 * 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The second promise has resolved');
//     resolve(20);
//   }, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The third promise has resolved');
//     resolve(30);
//   }, 3 * 1000);
// });
// Promise.all([p1,p2,p3]).then((results) => {
//   const total = results.reduce((p,c) => p+c)
//   console.log(`Results: ${results}`)
//   console.log(`Total: ${total}`)
// })

// 96. Explain Promise.race with an example?
// const p1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve(10)
//   },1000)
// })
// console.log(p1)
// const p2 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve(10)
//   },1000)
// })
// console.log(p2)
// const p3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve(10)
//   },1000)
// })
// console.log(p3)

//97.  Give an example of an Anonymous function?
// (function() {  
//   console.log('Hello');  
// })();  
// (function(){
//   console.log('nitesh khatri')
// })()
// (function(){
//   console.log('sameet khatri')
// })()
// (function(){
//   console.log('urvashi khatri')
// })()
// (function(){
//   console.log('arvind khatri')
// })()
// var greet = function(){
//   console.log('welcome javascript code')
// }
// greet()

//98. What is Prototype Property? Explain with an Example
// constructor function
// function Person () {
//   this.name = 'John',
//   this.age = 23
// }
// Person.prototype.address = 'amir house'
// console.log(Person())

// 99. Explain function hoisting with an exampl
// var a = 100;
// console.log(a)
// function hoist() {
//   a = 20;
//   var b = 100;
// }
// function hoist() {
//   console.log(message);
//   var message='Hoisting is all the rage!'
// }
// hoist();
// function hoist() {
//   var message;
//   console.log(message);
//   message='Hoisting is all the rage!'
// }
// hoist()
// function hoist() {
//   var message='Hoisting is all the rage!'
//   return (message);
// }
// hoist()
// console.log(hoist); 
// let hoist = 'Velit pariatur consequat amet proident id Lorem nisi. Eiusmod aliqua et aliqua exercitation consectetur duis ipsum. Qui adipisicing reprehenderit laboris deserunt magna veniam laboris excepteur voluptate magna eiusmod ut consequat eu. Reprehenderit duis incididunt cillum duis. Ipsum reprehenderit officia eiusmod quis eiusmod nostrud commodo. Do quis elit sunt non pariatur culpa Lorem.'
// console.log(hoist); 
// const hoist = 'The variable has been hoisted.';
// const PI = 111;
// console.log(PI); // Ouput: SyntaxError: Missing initializer in const declaration

// 100. How to implement Bubble sort in JavaScript?
// const bubbleSort = array => {
// 	let swapped;
// 	do {
// 		swapped = false;
// 		array.forEach((number, index) => {
// 			if (number > array[index + 1]) {
// 				[array[index], array[index + 1]] = [array[index + 1], array[index]];
// 				swapped = true;
// 			}
// 		});
// 	} while (swapped);
// 	return array;
// };

// function _bubbleSort(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = 0; j < array.length - i - 1; j++) {
// 			if (array[j] > array[j + 1]) {
// 				const less = array[j + 1];
// 				array[j + 1] = array[j];
// 				array[j] = less;
// 			}
// 		}
// 	}

// 	return array;
// }
// mocha.setup("bdd");
// const { assert } = chai;
// describe("Bubble Sort", () => {
// 	it("Should implement bubble sort", () => {
// 		assert.deepEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
// 		assert.deepEqual(bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
// 		assert.deepEqual(_bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
// 		assert.deepEqual(_bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
// 	});
// });

// mocha.run();

// 101. How to find prime numbers in an Array?
// function checkPrime(num){
//   for (let i = 2; i < num; i++){
//     if(num % i === 0){
//       }
//     }
//  }
//  function detectPrime(arr){
//      if (checkPrime){
//          return true;
//           }else{
//             return false;
//        }
// }
// console.log(detectPrime([15,110,7,22,25]));// true
// console.log(detectPrime([15,110,77,290,20]));// false

// 102. How to generate fibonacci series in JavaScript?
// let fn1 = 0, fn2 = 1, nextFibonacci;
// console.log('Fibonacci Series upto 8 terms is:');
// for (let i = 1; i <= 8; i++) {
//    console.log(fn1);
//    nextFibonacci = fn1 + fn2;
//    fn1 = fn2;
//    fn2 = nextFibonacci;
// }

// function f1(){
//   let n1 = 100;
//   let n2 = 200;
//   return [n1,n2]
// }
// let result = f1()
// console.log(result)

// let myStringSingle = 'Hello, World!';
// let myStringDouble = "Hello, World!";
// console.log(myStringSingle)
// console.log(myStringDouble)

// const myString = 'nitesh khatri'
// let length = myString.length; 
// console.log(length)

// console.log(42)
// console.log('nitesh khatri')

// Array methods - filter - for each - join - every - some - find index
// const arrayN = [20,34,55,66,1122,3333]
// for(let i=0;i<=arrayN.length;i++){
//   console.log(arrayN[i])
// }
// arrayN.forEach(function(){
//   console.log('function called')
// })
// arrayN.forEach(function(val,index){
//   console.log(val)
// })
// console.log(arrayN.some((value) => {
//   return value > 10
// }))
// console.log(arrayN.filter((val) => val > 70))
// console.log(arrayN.findIndex((val) =>{return val == 9999}))

// function printNames(){
//   let name = 'nitesh';
//   const name2 = 'sameet';
//   const name3 = 'arvind';
//   console.log(name,name2,name3)
// }
// printNames()

// function outer(x){
//   function inner(y){
//     return x + y;
//   }
//   return inner();
// }
// const outerResult = outer(30);
// console.log(outerResult)

// function f2(){
//   console.log('secondfunc calling')
// }
// f2()

// function personName(){
//   console.log('nitesh khatri')
// }
// personName()

// function personName(names){
//   console.log(names)
// }
// personalName('nitesh')

// function add(a,b){
//   console.log(a+b)
// }
// add(3,10)

// const expFunc = function(x,y){
//   console.log(x,y)
// }
// expFunc(10,20)

// function add(a,b){
//   return a +b 
// }
// console.log(add(10,20))


// function add(a,b){
//   let data = a+b 
//   return data; 
// }
// console.log(add(20,30))

// function minus(a,b){
//   let data = a -b 
//   return data 
// }
// console.log(minus(10,20))

// function multiple(a,b){
//   let data = a*b 
//   return data 
// }
// console.log(multiple(20,3))

// function add(a,b=40){
//   return a +b 
// }
// console.log(add(20))











// remove duplicate values from array values 
// const arr123 = [1,34,1,56]
// const uniqueValues = new Set(arr123)
// const uniqueArray = Array.from(arr123)
// console.log(uniqueArray)
// console.log(uniqueValues)

// js array methods and properties
// at
// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// const firstFruit = fruits[0]; // "apple"
// const secondFruit = fruits[1]; // "banana"
// const lastFruit = fruits[fruits.length - 1]; // "elderberry"
// console.log('firstFruit',firstFruit)
// console.log('secondFruit',secondFruit)
// console.log('lastFruit',lastFruit)
// let index = 2 
// console.log(fruits.at(index))

// entries 
// const person12 = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// // Accessing object entries
// console.log("Name",person12.name)
// console.log("City",person12.age)
// console.log("Age",person12.city)
// console.log('first fruit',fruits[0])
// console.log('second fruit',fruits[1])
// console.log('last fruit',fruits[fruits.length -1])

// every
// const numbers2 = [1, 2, 3, 4, 5, 6];
// const allEven = numbers2.every(function(num){
//   return num % 2 === 0
// })
// console.log(allEven)
// const numbers2 = [2, 4, 7, 8, 10];
// const areAllEven = numbers2.every(function (element) {
//   return element % 2 === 0;
// });
// console.log("Are all elements even?",areAllEven)

// fill
// const numbers2 = [1, 2, 3, 4, 5];
// console.log(numbers2.fill(55));

//filter 
// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
// const resultNum = numbers2.filter((val) => val % 2 === 0)
// console.log(resultNum)

// find
// const numbers2 = [1, 3, 5, 4, 7, 9, 8];
// const resultNum = numbers2.find((val) => val % 2 === 0)
// console.log(resultNum)

// findIndex
// const numbers22 = [1, 3, 5, 4, 7, 9, 8];
// const firstEvenIndex = numbers22.findIndex(function(element){
//   return element % 2 === 0
// })
// console.log("Index of the first even number:", firstEvenIndex)

// flat 
// const arrayflat = [1, 2, [3, 4], [5, [6, 7]]];
// const flat1 = arrayflat.flat(1)
// console.log(flat1)
// const flat2 = arrayflat.flat(2)
// console.log(flat2)

// flatMap
// const array = [1, 2, [3, 4], [5, [6, 7]]];
// const flattenedAndMappedArray = array.flatMap(function(element){
//   if(Array.isArray(element)){
//     return element.map(subElem => subElem * 2)
//   }
//   else{
//     return element
//   }
// })
// console.log(flattenedAndMappedArray)
// const flattenedAndMappedArray = array.flatMap(ele => Array.isArray(ele) ? ele.map(subEle => subEle * 2) : ele)
// console.log(flattenedAndMappedArray)

// forEach 
// const fruits11 = ["apple", "banana", "cherry", "date"];
// fruits11.forEach((ele,index) => {
//   console.log(`Element at index ${index} : ${ele}`)
// })

// Array.from 
// const str = "Hello";
// const strArray = Array.from(str);
// console.log(strArray)
// const numbers22 = [1, 2, 3, 4, 5];
// const reusltNum = Array.from(numbers22)
// console.log(reusltNum)
// const numbers12 = [1, 2, 3, 4, 5];
// const squaredNumbers = Array.from(numbers12, x => x * x)
// console.log(squaredNumbers)

// includes 
// const fruitsP = ["apple", "banana", "cherry", "date"];
// const isBanana = fruitsP.includes('banana')
// console.log(isBanana)
// const isNotMatch = fruitsP.includes('Date')
// console.log(isNotMatch)
// const numbers222 = [1, 2, 3, 4, 5, 6, 7];
// const isSaveIncluded = numbers222.includes(7,4)
// console.log(isSaveIncluded)
// const isTenIncluded = numbers.includes(10, 4);
// console.log(isTenIncluded)
// console.log("Is 7 included starting from index 4? " + isSaveIncluded); // Output: true
// console.log("Is 10 included starting from index 4? " + isTenIncluded); 

// indexOf
// const fruitsP = ["apple", "banana", "cherry", "date"];
// const bananaIndex = fruitsP.indexOf('banana')
// console.log(bananaIndex)
// const grapeIndex = fruitsP.indexOf('grape')
// console.log(grapeIndex)
// const numbers22 = [1, 2, 3, 4, 5,6,7];
// const sevenIndex = numbers22.indexOf(7,4)
// console.log(sevenIndex)
// const tenIndex  = numbers22.indexOf(10,4)
// console.log(tenIndex)

// isArray 
// const arr12 = [1, 2, 3];
// const str1 = "Hello";
// const obj = { key: "value" };
// console.log(Array.isArray(arr12))
// console.log(Array.isArray(str1))
// console.log(Array.isArray(obj))

// JavaScript Array Methods and Properties >> JOIN 
// const fruitsP = ["apple", "banana", "cherry", "date"];
// const commaSeparatedFruits = fruitsP.join(", ")
// console.log(commaSeparatedFruits)
// const hyphenSeparatedFruits  = fruitsP.join("- ")
// console.log(hyphenSeparatedFruits)
// const emptySeparatedFruits   = fruitsP.join("")
// console.log(emptySeparatedFruits )

// JavaScript Array Methods and Properties >> KEYS 
// const person122 = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// console.log(Object.keys(person122))

// const fruitsP = ["apple", "banana", "cherry", "date"];
// console.log(fruitsP[0])
// console.log(fruitsP[1])
// const myMap = new Map();
// const k1 = {id:1}
// const k2 = 'stringKey'
// myMap.set(k1,'value for key1')
// myMap.set(k2,'value for key2')
// console.log(myMap.get(k1))
// console.log(myMap.get(k2))

// JavaScript Array Methods and Properties >> LASTINDEXOF
// const numbers22 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// const searchElement = 4;
// let lastIndex  = -1;
// for(let i=numbers22.length - 1;i>=0;i--){
//   if(numbers22[i] === searchElement){
//     lastIndexOf = i;
//     break;
//   }
// }
// if(lastIndex  !== -1){
//   console.log("Last index of " + searchElement + " is: " + lastIndex)
// }
// else{
//   console.log(searchElement + " not found in the array.");
// }

// JavaScript Array Methods and Properties >> LENGTH 
// const numbers22 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// const ArrayLengthy = numbers22.length 
// console.log(ArrayLengthy)

// JavaScript Array Methods and Properties >> MAP 
// const numbers22 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// const squaredAndDoubled = numbers22.map(function(ele,index,array){
//   return ele * ele * 2 
// })
// console.log(squaredAndDoubled)
// const squareAndDoubled = numbers22.map(ele => ele * ele * 2 )
// console.log(squareAndDoubled)

// JavaScript Array Methods and Properties >> POP 
// const fruitsP = ["apple", "banana", "cherry", "date"];
// console.log(fruitsP.pop())
// console.log(fruitsP.at(-1))

// JavaScript Array Methods and Properties >> PROTOTYPE 
// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.eyeColor = eyecolor;
// }
// const myFather = new Person('arvind','khatri','black')
// const myMother = new Person('urvashi','khatri','black')
// Person.prototype.nationality = 'English'
// console.log(myFather.nationality)
// console.log(myMother.nationality)

// JavaScript Array Methods and Properties >> PUSH
// const fruitsP = ["apple", "banana", "cherry", "date"];
// const newLength = fruitsP.push('grape','elderberry')
// console.log('modified' + fruitsP)
// console.log(newLength)

// JavaScript Array Methods and Properties >> REDUCE 
// const numbers22 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// const sum1 = numbers22.reduce(function(a,b){
//   return a +b 
// })
// console.log(sum1)
// const sum2 = numbers22.reduce((a,b) => {
//   return a +b 
// })
// console.log(sum2)

// JavaScript Array Methods and Properties >> REDUCERIGHT
// const numbers22 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// let result = 0 
// for(let i=numbers22.length - 1;i>=0;i--){
//   result += numbers22[i]
// }
// console.log('Result: ' + result)

// JavaScript Array Methods and Properties >> REVERSE 
// const numbers22 = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
// console.log(numbers22.reverse())

// JavaScript Array Methods and Properties >> SHIFT
// const numbers22 = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
// console.log(numbers22.shift())
// console.log(numbers22.shift())
// console.log(numbers22.shift())
// console.log(numbers22.shift())
// console.log(numbers22.shift())
// console.log(numbers22.shift())
// console.log(numbers22.shift())
// console.log(numbers22.shift())
// console.log(numbers22.shift())

// JavaScript Array Methods and Properties >> SLICE 
// const fruitsP = ["apple", "banana", "cherry", "date"];
// console.log(fruitsP.slice(1, 3))

// JavaScript Array Methods and Properties >> SOME 
// const numbers22 = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
// const hasEvenNumbers = numbers22.some(function(ele) {
//   return ele %  2 === 0 
// })
// console.log(hasEvenNumbers)
// const hasEvenNumbers = numbers22.some((ele) => ele % 2 === 0)
// console.log(hasEvenNumbers)

// JavaScript Array Methods and Properties >> SORT
// const fruitsP = ["apple", "banana", "cherry", "date"];
// console.log(fruitsP.sort((a,b) => a -b ))
// const descarray = fruitsP.sort(function(a,b){
//   if(a>b){
//     return -1
//   }
//   else{
//     return1 
//   }
// })
// console.log(descarray)

// JavaScript Array Methods and Properties >> SPLICE 
// const fruitsP = ["apple", "banana", "cherry", "date"];
// const removedFruit = fruitsP.splice(1,2)
// console.log(removedFruit)

// JavaScript Array Methods and Properties >> TOSTRING 
// const fruitsP = ["apple", "banana", "cherry", "date"];
// console.log(fruitsP.toString())

// JavaScript Array Methods and Properties >> UNSHIFT
// const fruitsP = ["apple", "banana", "cherry", "date"];
// const newLength = fruitsP.unshift('pineapple','grape');
// console.log('modified : ' + fruitsP)
// console.log(newLength)

// JavaScript Array Methods and Properties >> VALUEOF 
// const fruitsP = ["apple", "banana", "cherry", "date"];
// console.log(fruitsP.valueOf())

// JavaScript String Methods >> charAt
// const text = "Hello, World!";
// console.log(text.charAt(3))
// console.log(text.charAt(5))
// console.log(text.charAt(text.length - 1))

// JavaScript String Methods >> charCodeAt
// const text = "Hello, World!";
// console.log(text.charCodeAt(0))
// console.log(text.charCodeAt(1))
// console.log(text.charCodeAt(text.length - 1))

// JavaScript String Methods >> concat
// const fname = "nitesh";
// const lname = "khatri";
// console.log(fname.concat(' ',lname))

// JavaScript String Methods >> constructor
// const stringLiteral = "Hello, World!";
// const stringObject = new String("Hello, World!");
// console.log(stringLiteral.constructor)
// console.log(stringObject.constructor)

// JavaScript String Methods >> endsWith
// const text = "Hello, World";
// console.log(text.endsWith('world'));
// console.log(text.endsWith('hello',5));

// JavaScript String Methods >> fromCharCode
// const charCode1 = 72; // 'H'
// const charCode2 = 101; // 'e'
// const charCode3 = 108; // 'l'
// const charCode4 = 108; // 'l'
// const charCode5 = 111; // 'o'

// const text = String.fromCharCode(charCode1,charCode2,charCode3,charCode4,charCode5)
// console.log(text)

// JavaScript String Methods >> includes
// const text = 'nitesh'
// console.log(text.includes('p'))
// console.log(text.includes('nit'))

// JavaScript String Methods >> indexOf()
// const text = 'nitesh'
// console.log(text.indexOf('h'))

// JavaScript String Methods >> lastIndexOf()
// const text = 'nitesh'
// console.log(text.lastIndexOf('h'))

// JavaScript String Methods >> length 
// const text = 'nitesh'
// console.log(text.length)

// JavaScript String Methods >> localeCompare()
// const string1 = "apple";
// const string2 = "banana";
// const result = string1.localeCompare(string2)
// if(result < 0) {
//   console.log("string1 comes before string2 in the locale.");
// } else if (result > 0) {
//   console.log("string2 comes before string1 in the locale.");
// } else {
//   console.log("Both strings are equivalent in the locale.");
// }

// JavaScript String Methods >> match
// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match(/ain/g))

// JavaScript String Methods >> prototype
// String.prototype.customMethod = function(){
//     return this.toUpperCase()
// }
// const myString = 'hello world'
// console.log(myString.customMethod)

// JavaScript String Methods >> repeat 
// const myString = 'nitesh khatri'
// console.log(myString.repeat(10))

// JavaScript String Methods >> replace
// const myString = 'nitesh khatri nitesh khatri'
// console.log(myString.replace('nitesh','sameet'))

// JavaScript String Methods >> replaceAll
// const myString = 'nitesh khatri nitesh khatri'
// console.log(myString.replaceAll('nitesh','sameet'))

// JavaScript String Methods >> search
// const myString = 'where are you? how are you doing?'
// console.log(myString.search('where'))

// JavaScript String Methods >> slice
// const text = "Hello, World!";
// const portion1 = text.slice(0, 5);   // Extracts from index 0 to 5, "Hello"
// const portion2 = text.slice(0,7); 
// console.log("Portion 1: " + portion1);
// console.log("Portion 2: " + portion2);

// JavaScript String Methods >> split
// const text = "apple,banana,cherry,date";
// const fruitsArray = text.split(",", 2);
// console.log(fruitsArray);

// JavaScript String Methods >> startsWith
// const text = "nitesh khatri is best";
// console.log(text.startsWith('best'));

// JavaScript String Methods >> substr
// const text = "Hello, World!";
// const p1 = text.substr(0,5)
// const p2 = text.substr(7)
// console.log(p1)
// console.log(p2)

// JavaScript String Methods >> substring
// const text = "This is a sample text for substring example.";
// // Extract a substring from index 5 to 10
// const substring1 = text.substring(5, 11); // "is a s"
// console.log(substring1)
// const substring2 = text.substring(11);
// console.log(substring2)
// const substring3 = text.substring(-3, 22);
// const substring4 = text.substring(10, 5);
// console.log("Substring 1: " + substring1);
// console.log("Substring 2: " + substring2);
// console.log("Substring 3: " + substring3);
// console.log("Substring 4: " + substring4);

// JavaScript String Methods >> toLocaleLowerCase()
// const text = "Hello, World!";
// const lowerCaseText = text.toLocaleLowerCase("arabia");
// console.log(lowerCaseText)

// JavaScript String Methods >> toLocaleUpperCase()
// const text = "Hello, World!";
// const lowerCaseText = text.toLocaleUpperCase("arabia");
// console.log(lowerCaseText)

// JavaScript String Methods >> toLowerCase()
// const text = "Hello, World!";
// const lowerCaseText = text.toLowerCase("arabia");
// console.log(lowerCaseText)

// JavaScript String Methods >> toString()
// const text = 'hello'
// console.log(text.toString())

// JavaScript String Methods >> toUpperCase()
// const text = 'nitesh khatri'
// console.log(text.toUpperCase())

// JavaScript String Methods >> trim()
// const text = 'hello   world'
// console.log(text)

// JavaScript String Methods >> trimEnd()
// const text = 'hello world   '
// console.log(text.length)
// console.log(text.trimEnd().length)

// JavaScript String Methods >> trimStart()
// const text = '    hello world'
// console.log(text.length)
// console.log(text.trimStart().length)

// JavaScript String Methods >> valueOf()
// const text = 'hello world'
// console.log(text.valueOf())

// JavaScript Number Methods >> constructor
// function Person(name){
//   this.name = name 
// }
// const person122 = new Person('nitesh')
// console.log(person122)
// const num = 42;
// console.log(num.constructor);

// const str = "Hello";
// console.log(str.constructor)

// function Person(name){
//   this.name = name; 
// }
// const person12 = new Person('nitesh')
// console.log(person12)

// console.log(Number.isFinite(42));
// console.log(Number.isFinite(-123.45));
// console.log(Number.isFinite(0));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(-Infinity));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite("42"));

// console.log(Number.isInteger(42))
// console.log(Number.isInteger(-123))
// console.log(Number.isInteger(0))
// console.log(Number.isInteger(42.0))
// console.log(Number.isInteger(42.5))
// console.log(Number.isInteger("42"))
// console.log(Number.isInteger(NaN))
// console.log(Number.isInteger(Infinity))

// console.log(Number.isNaN(123))
// console.log(Number.isNaN('s'))
// console.log(Number.isNaN(0))
// console.log(Number.isNaN(null))
// console.log(Number.isNaN(undefined))
// console.log(Number.isNaN(-11))
// console.log(Number.isNaN(0/0))
// console.log(Number.isNaN(' '))
// console.log(Number.isNaN('2005/12/12'))
// console.log(Number.isNaN(' '))

// console.log(Number.isSafeInteger(123))
// console.log(Number.isSafeInteger(0))
// console.log(Number.isSafeInteger(-123))
// console.log(Number.isSafeInteger(0.5))
// console.log(Number.isSafeInteger(0/0)) 

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// console.log((-Number.MAX_VALUE) * 2)
// console.log((-Number.MIN_VALUE) * 2)

// console.log((Number.POSITIVE_INFINITY) * 2)

// console.log(parseFloat(10))
// console.log(parseFloat('10'))
// console.log(parseFloat('10.33'))
// console.log(parseFloat('34 45 66'))
// console.log(parseFloat('he was 40'))

// console.log(parseInt("10"))
// console.log(parseInt("10.00"))
// console.log(parseInt("10.33"))
// console.log(parseInt("34 45 66"))
// console.log(parseInt(" 60 "))
// console.log(parseInt("40 years"))
// console.log(parseInt("he was 40"))

// console.log(Number.prototype.myMethod = function(){
//   return this.valueOf() / 2
// })

// const num = 14000
// console.log(num.toExponential())

// const num = 5.78899
// console.log(num.toFixed())

// let num = 1000000;
// console.log(num.toLocaleString())
// let text = num.toLocaleString("fi-FI");
// console.log(text)

// let num = 13.3714;
// console.log(num.toPrecision(2));

// let num = 15;
// let text = num.toString();
// console.log(text)

// const num = 10
// console.log(num.valueOf());

// JavaScript Math Object Methods & Properties  
// console.log(Math.abs(-111))
// console.log(Math.acos(-111))
// console.log(Math.acosh(-111))
// console.log(Math.asin(-111))
// console.log(Math.atan(-111))
// console.log(Math.atan2(-111))
// console.log(Math.cbrt(-111))
// console.log(Math.ceil(55))
// console.log(Math.clz32(-111))
// console.log(Math.cos(-111))
// console.log(Math.E(-111))
// console.log(Math.exp(-55))
// console.log(Math.expm1(55))
// console.log(Math.floor(1.588))
// console.log(Math.fround(11.55))
// console.log(Math.LN2(0.693))
// console.log(Math.log(10))
// console.log(Math.log10(55))
// console.log(Math.LOG10E(555))
// console.log(Math.log1p(111))
// console.log(Math.log2(111))
// console.log(Math.LOG2E(111))
// console.log(Math.max(55,44,88,5))
// console.log(Math.min(55,44,88,5))

// const radius = 0
// const circumference = 2 * Math.PI * radius;
// const area = Math.PI * Math.pow(radius,2);
// console.log(`${radius}`)
// console.log(`${circumference}`)
// console.log(`${area}`)

// const numbers122 = [8.5,4.5,63.66]
// const numersCeil = numbers122.map(Math.ceil)
// console.log(numbers122)
// console.log(numersCeil)
// console.log(Math.pow(4,3))
// console.log(Math.random(10,20))
// console.log(Math.round(25.55))
// console.log(Math.sign(-222))
// console.log(Math.sin(125))
// console.log(Math.sinh(55))
// console.log(Math.sqrt(625))
// console.log(Math.sign(85))
// console.log(Math.sin(555))
// console.log(Math.sinh(122))
// console.log(Math.SQRT1_2(64))
// console.log(Math.SQRT2(64))
// console.log(Math.tan(65))
// console.log(Math.tanh(85))
// console.log(Math.trunc(15.5550000))

// JavaScript Date Methods and Properties
// console.log(new Date().constructor)
// console.log(new Date().getDate())
// console.log(new Date().getDay())
// console.log(new Date().getMonth())
// console.log(new Date().getFullYear())
// console.log(new Date().getUTCFullYear())
// console.log(new Date().getMilliseconds())
// console.log(new Date().getTime())
// console.log(new Date().getTimezoneOffset())
// console.log(new Date().getUTCDay())
// console.log(new Date().getSeconds())
// console.log(new Date().getFullYear())
// console.log(new Date().getHours())
// console.log(new Date().getMinutes())
// console.log(new Date().getSeconds())
// console.log(new Date().getTime())
// console.log(new Date().getTimezoneOffset())
// console.log(new Date().getUTCDate())
// console.log(new Date().getUTCDay())
// console.log(Date.now())
// console.log(Date.parse("march 21,2011"))
// Date.prototype.gettingMonth = function(){
//   if(this.getMonth() == 0) {
//     return 'January'
//   }
//   if(this.getMonth() == 1) {
//     return 'February'
//   }
//   if(this.getMonth() == 2) {
//     return 'March'
//   }
//   if(this.getMonth() == 3) {
//     return 'April'
//   }
//   if(this.getMonth() == 4) {
//     return 'May'
//   }
//   if(this.getMonth() == 5) {
//     return 'June'
//   }
//   if(this.getMonth() == 6) {
//     return 'July'
//   }
//   if(this.getMonth() == 7) {
//     return 'August'
//   }
//   if(this.getMonth() == 8) {
//     return 'September'
//   }
//   if(this.getMonth() == 9) {
//     return 'October'
//   }
//   if(this.getMonth() == 10) {
//     return 'November'
//   } 
//   if(this.getMonth() == 11) {
//     return 'December'
//   }
// }
// const d  = new Date();
// console.log(d.getMonth())

// console.log(new Date().setDate(15))
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toLocaleString())
// console.log(new Date().toLocaleTimeString())
// console.log(new Date().toString())
// console.log(new Date().toUTCString())
// console.log(Date.UTC)
// console.log(new Date().valueOf())

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined)

// const d = new Date();
// console.log(d)
// var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var len = txt.length;
// console.log(txt)
// console.log(len)

// const arrayresult = [1,2,3]
// const itr = arrayresult[Symbol.iterator]()
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())

// console.log(this)
// console.log(window)
// var firstName = 'test1'
// console.log(firstName)
// var firstName = 'test2'

// let firstName = 'nitesh'
// console.log(firstName)

// const firstName = 'nitesh'
// console.log(firstName)

// function getFullName(fName,lName){
//   console.log(arguments);
//   let myVar =  'var inside func'
//   console.log(myVar);
//   const fullName  = fName + lName 
//   return fullName
// }
// const personName  = getFullName('nitesh','khatri')
// console.log(personName)

// const printName  = function(){
//   const firstName = 'nitesh';
//   const lastName = 'khatri';
//   function myFunction(){
//     console.log(firstName);
//     console.log(lastName);
//   }
//   myFunction()
// }
// printName()

// iterables
// const firstName = 'nitesh'
// for(example of firstName){
//   console.log(example)
// }

// const users = {
//   'key1':'value1',
//   'key2':'value2',
// }
// for(user of users){
//   console.log(user)
// }

// const fName = 'nitesh'
// console.log(fName.length)
// console.log(fName[2])

// const numberslist = new Set([1,2,3,3,4,4,5,5,5,6,6,6,7,8])
// console.log(numberslist)

const items = ['item1', 'item2', 'item3']
// const numberslist = new Set([1,2,3,3,4,4,5,5,5,6,6,6,7,8])
// console.log(numberslist.add(1))
// console.log(numberslist.add(2))
// console.log(numberslist.add(1))
// if(numberslist.has(4)){
//   console.log('there is an including number wise')
// }
// else{
//   console.log('there is not an including number wise')
// }
// const numberslist = new Set()
// numberslist.add(1)
// numberslist.add(11)
// numberslist.add(12)
// numberslist.add(25)
// // console.log(numberslist)

// for(let list of numberslist){
//   console.log(list)
// }

// const myArray = [55,55,6,6,77,78,80,81]
// const uniqueA = new Set(myArray)
// console.log(uniqueA)
// for(let use of uniqueA){
//   console.log(use)
// }

// const person = {
//   fName:'test',
//   age:34,
//   1:'one'
// }
// console.log(person[1])
// const fName = person.fName
// const age = person.age
// console.log(fName,'-',age)
// for(let key in person){
//   console.log(typeof key)
// }
// const personalFamily = new Map();
// personalFamily.set('firstName','test');
// personalFamily.set('lastName','test1');
// personalFamily.set('age','24');
// console.log(personalFamily)

// const person1 = {
//   id:1,
//   firstName:'test'
// }
// const userInfo  = new Map();
// userInfo.set(person1,{age:24,dob:'17/06/1989'})
// console.log(userInfo)
// const person1 = {
//   id:1,
//   fname:'test1'
// }
// const person2 = {
//   id:2,
//   fname:'test2'
// }
// const userInfo = new Map()
// userInfo.set(person1,{age:34,gender:'male'})
// userInfo.set(person2,{age:41,gender:'male'})
// console.log(userInfo)

// const obj1 = {
//   'key1':'test1',
//   'key2':'test2',
// }
// const obj2 = Object.assign({},obj1)
// console.log(obj2)

// const user = {
//   fname:'nitesh',
//   address:{houseNumber:'1234'}
// }
// console.log(user?.fname)
// console.log(user?.address?.houseNumber)

// most important array methods
// const numbersList = [4,2,5,8,55,8,68]
// function multiply(number,index){
//   console.log('index is ',index);
//   console.log(`${number}*2=${number*2}`);
// }

// for(let i=0;i<numbersList.length;i++){
//   console.log(i)
// }

// const users = [
//   {fname:'nitesh',age:34},
//   {fname:'sameet',age:41},
//   {fname:'mom',age:45,},
//   {fname:'daddy',age:55,}
// ]
// users.forEach(function(user){
//   console.log(user.fname)
// });
// users.forEach(function(user){
//   console.log(user.age)
// });
// for(let user of users){
//   console.log(user)
// }

// const squareNumber = [25,255,99].map(function(num,index){
//   return `${index} ${num * num}`
// })
// console.log(squareNumber)
// console.log(99*99)

// const numberwise = [1,3,2,6,4,8]
// const isEven = function(num){
//   return num % 2 === 0
// }
// console.log(numberwise.filter(isEven))
// const reduceAns = numberwise.reduce((a,b) => a+b)
// console.log(reduceAns)

// const userCart =[
//   {
//     "userId": 1,
//     "id": 1,
//     "price":10,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "price":11,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "price":30,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   },
// ];
// var reduced = userCart.reduce(function(a, b){
//   return a + b.price},0);
// console.log(reduced) // r

// const people  = [
//   {name:'nitesh',age:34},
//   {name:'sameet',age:41},
//   {name:'urvashi',age:65},
//   {name:'arvind',age:68},
//   {name:'manisha',age:44},
// ]

// const maparray = people.map((val) => val.name)
// console.log(maparray)
// const a = Object.assign(people,person => person.name[0])
// console.log(a)

// console.log('script start')
// for(let i=1;i<5;i++){
//   console.log('inside for loop')
// }
// console.log('script end');


// function Hello(){
//   console.log('hello word')
// }
// setTimeout(Hello,1500)

// console.log('start')
// setTimeout(() => {
// 	console.log('inside settimeout')
// },1000)
// console.log('end')


// for(let i=0;i<50;i++){
// 	console.log(i)
// }

// console.log('start')
// setInterval(() => {
// 	console.log(Math.random())
// },500)
// console.log('end')


// const body = document.body
// const button = document.querySelector('button')
// const resultInterval = setInterval(() => {
// 	const red = Math.floor(Math.random() * 126)
// 	const blue = Math.floor(Math.random() * 126)
// 	const green = Math.floor(Math.random() * 126)
// 	const rgb = `rgba(${red} ${green} ${blue})`
// 	body.style.backgroundColor = rgb;
// },1000)
// console.log(resultInterval)
// button.addEventListener("click",() => {
// 	clearInterval(resultInterval)
// })

// function myFunc(){
// 	console.log('the console log is called')
// }
// myFunc()
// function myFunc2(){
// 	console.log('the console log 2 is called')
// }
// myFunc2()
// function getTwoNumbers(n1,n2){
// 	console.log(n1+n2)
// }
// getTwoNumbers(10,20)

// function getTwoNumbersAndAdd(n1,n2,onSuccess,onFailure){
// 	if(typeof n1 ===  'number' && typeof n2 === 'number'){
// 		onSuccess(n1,n2)
// 	}
// 	else{
// 		onFailure();
// 	}
// }
// getTwoNumbersAndAdd(4,4,(n1,n2) => {
// 	console.log(n1 + n2)
// }, () => {
// 	console.log('wrong data type')
// 	console.log('please pass numbers only')
// })

// const heading1 = document.querySelector('.heading1')
// setTimeout(() => {
// 	heading1.textContent = 'heading 1'
// 	heading1.style.color = 'red'
// },1000);
// setTimeout(() => {
// 	heading2.textContent = 'heading 2'
// 	heading2.style.color = 'purple'
// },3000);
// const h1 = document.querySelector('.heading1')
// const h2 = document.querySelector('.heading2')
// const h3 = document.querySelector('.heading3')
// const h4 = document.querySelector('.heading4')
// const h5 = document.querySelector('.heading5')
// setTimeout(() => {
// 	console.log(h1)
// 	h1.style.color = 'red'
// 	h1.textContent = 'nitesh khatri'
// 	h1.style.backgroundColor = 'orange'
// }	)
// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
//   setTimeout(()=>{
//     if(element){
//       element.textContent = text;
//       element.style.color = color;
//       if(onSuccessCallback){
//         onSuccessCallback();
//       }
//     }else{
//       if(onFailureCallback){
//         onFailureCallback();
//       }
//     }
//   },
// // pyramid of doom
// changeText(heading1, "one","violet",1000,()=>{
//   changeText(heading2, "two","purple",2000,()=>{
//     changeText(heading3, "three","red",1000,()=>{
//       changeText(heading4, "four","pink",1000,()=>{
//         changeText(heading5, "five","green",2000,()=>{
//           changeText(heading6, "six","blue",1000,()=>{
//             changeText(heading7, "seven","brown",1000,()=>{
//               changeText(heading8, "eight","cyan",1000,()=>{
//                 changeText(heading9, "nine","#cda562",1000,()=>{
//                   changeText(heading10, "ten","dca652",1000,()=>{

//                   },()=>{console.log("Heading10 does not exist")})
//                 },()=>{console.log("Heading9 does not exist")})
//               },()=>{console.log("Heading8 does not exist")})
//             },()=>{console.log("Heading7 does not exist")})
//           },()=>{console.log("Heading6 does not exist")})
//         },()=>{console.log("Heading5 does not exist")})
//       },()=>{console.log("Heading4 does not exist")})
//     },()=>{console.log("Heading3 does not exist")})
//   },()=>{console.log("Heading2 does not exist")})
// },()=>{console.log("Heading1 does not exist")})
// const randomString = () => Math.random().toString(35).slice(2)
// console.log(randomString)


// const randomString = (length =10) => {
// 	let result = ''
// 	while(result.length < length){
// 		result += Math.random().toString(36).slice(2);
// 	}
// 	return result.slice(0,length)
// }

// const copyClipboard = (text) => navigator.clipboard.writeText(text);
// console.log(copyClipboard('hello world'))

// const getSelectedText = () => window.getSelection().toString();
// console.log(getSelectedText)

// const goToTop = () => window.scrollTo(0,0)
// console.log(goToTop)

// const isTabView = () => !document.hidden;
// console.log(isTabView)

// const redirect  = url => location.href = url
// console.log(redirect('https://www.google.com/'))

// const showPrintDialog = () => window.print()
// console.log(showPrintDialog)

// const randomBoolean = () => Math.random() >= .5;
// console.log(randomBoolean());

// const randomNumber = Math.random() * (max - min) + min
// console.log(randomNumber)

// const isInteger = (num) => num % 1 === 0
// console.log(isInteger)

// const arr11 = [1,2,3,4,5,5,6,7,7]
// const removeDuplicates = (arr) => [...new Set(arr11)]
// console.log(removeDuplicates([]))


// const isArray = (arr) => Array.isArray(arr11);
// console.log(isArray[1,2,3])

// console.log(isArray({name:'nitesh'}))
// console.log(isArray('nitesh'))

// const isWeekend = (date) => [0,6].indexOf(date.getDay()) !== -1
// // console.log(isWeekend)
// // console.log(isWeekend(new Date(2021,4,14)))
// // console.log(isWeekend(new Date(2021,4,15)))

// const daysDiff = (date,date2) => Math.ceil(Math.abs(date - date2) / 8640000);
// console.log(daysDiff(new Date('2021-05-10'), new Date('2021-11-25')))

// const capitazlied = (str) => str.charAt(0).toUpperCase() + str.slice(1)
// console.log(capitazlied('hello world'))

// get the day of the year from a date
// const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(),0,0)) / (100*60*60*24))
// console.log(dayOfYear(new Date()))

// check if a string is a palindrome
// const isPalindrome = str => str === str.split('').reverse().join('');
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('hello'));
// console.log(isPalindrome('nitesh khatri'))

// get the first elements of an array
// const take = (arr,n) => arr.slice(0,n)
// console.log(take([1,2,3,4,5,6,7,8,9,10],6));

// get the last n elements of an array
// const takeRight = (arr,n ) => arr.slice(-n);
// console.log(takeRight([1,2,3,4,4,,6],3))

// remove all vowels from a string
// const removeVowels = (str) => str.replace(/[aeiou]/gi,'')
// console.log(removeVowels('hello world'))

// check if a string contains a substring
// const contains = (str,substr) => str.includes(substr);
// console.log(contains('hello world','world'))
// console.log(contains('hello','world'))

// get the current time in a hh:mm:ss format
// const getTime = () => new Date().toLocaleTimeString()
// console.log(getTime())

// check if an objects is empty
// const isEmpty = obj => Object.keys(obj).length === 0
// console.log(isEmpty({}))
// console.log(isEmpty({name:'test'}))

// check if the provided array is not empty
// check if the provided array is not empty
// const isArrayNotEmpty = (arr) => {
// 	// check if 'arr' is an empty and has more than 0 elemens
// 	return Array.isArray(arr) && arr.length > 0
// }
// console.log(isArrayNotEmpty([]))
// console.log(isArrayNotEmpty([1,2,3]))

// find the max value in an array
// const arrayMath = [2,44,22]
// console.log(Math.max(1,333,55))
// console.log(Math.min(1,333,55))

// const isEmpty = obj => Object.keys(obj).length === 0
// console.log(isEmpty({}))
// console.log(isEmpty({name:'test'}))

// checks if the provided array is not empty
// const isArrayEmpty = (arr) => {
// 	return Array.isArray(arr) && arr.length > 0
// }
// console.log(isArrayEmpty([]));
// console.log(isArrayEmpty([1,2,3,4]));

// find the max value in an array
// get the current date and time
// console.log(new Date())
// console.log(new Date().toLocaleTimeString())

// const array1 = [22,55,66,77,1,3]
// const sortAsc = array1.sort(function(a,b){
// 	if(a>b){
// 		return -1
// 	}
// 	else{
// 		return 1
// 	}
// })
// console.log(sortAsc)
// const sortDsc = array1.sort(function(a,b){
// 	if(a<b){
// 		return -1
// 	}
// 	else{
// 		return 1
// 	}
// })
// console.log(sortDsc)

// extract the domain name from an email
// const email = 'nitesh.khatri88@gmail.com'
// const extractDomain = (email) => email.split('@')[1]
// console.log(extractDomain(email))

// flattern an nested array
// const flat = (arr) => arr.flat(1);
// console.log(flat(['cat',['lion','tigers']]))

// generates a random color in hexadecimal format
// const randomColor = () => `#${Math.random().toString(16).slice(2,8).padEnd(6,'0')}`
// console.log(randomColor());
// console.log(randomColor());

// checks if a given value is a valid hexadecimal color code
// const isHexColor = (hex) => {
// 	const regex = /#?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/;
// 	return regex.test(hex)
// }
// console.log(isHexColor)


// get the current time in a specific timezone
// const currentTimeZone = (timezone) => new Date().toLocaleTimeString('en-US',{timezone:timezone})
// console.log(currentTimeZone('Europe/London'))

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()).then((json) => console.log(json)).catch((err) => console.log('error is',err))

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()).then((json) => console.log(json)).catch((err) => console.log('error is',err))

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()).then((json) => console.log(json)).catch((err) => console.log('error is',err))

// convert a string to kebab-case
// const toKebabCase = (str) => str.toLowerCase().replace(/\s+/g,'-')
// console.log(toKebabCase('hello world'))
// console.log(toKebabCase('this is a test'))

// shuffle an array
// const shuffle = arr => arr.sort(() => Math.random() - 0.5);
// console.log(shuffle([1,2,3,4,5,6]));

// shuffle an array using the fisher- yates (knuth) shuffle algorithm
// const fisherYatesShuffle = (arr) => {
// 	for(let i=arr.length-1;i>0;i--){
// 		const j = Math.floor(Math.random() * (i+1));
// 		[arr[i],arr[j] = [arr[j],arr[i]];
// 	}
// 	return arr;
// }

// const originalArray = [1,2,3,4,5]
// const shuffleArray = fisherYatesShuffle([...originalArray]);
// console.log(shuffleArray)

// convert RGB color code to valid hexadecimal color code
// const rtoH = (r,g,b) => "#" + ((1<<24)) + (r<16) + (g<<8+b).toString(16).slice(1)
// console.log(rtoH(255,255,255))

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
// 	if(response.ok){
// 		console.log('positive')
// 		return response.json()
// 	}
// 	console.log('negative')
// })
// .then((json) => console.log(response.json))
// .catch((err) => console.log('error in',err))

// async function makeRequest(){
// 	try{
// 		const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
// 		const data = await response.json()
// 		console.log(data)
// 	}
// 	catch(err){
// 		console.log('error is',err)
// 	}
// }
// makeRequest()

// truncate a number to a fixed decimal point
// const round = (n,d) => Number(Math.round(n + "e" + d) + "e" + d)
// console.log(round(1.005,2))
// console.log(round(1.555,2))

// remove falsy values from array
// const removeFalsy = (arr) => arr.filter(Boolean)
// console.log(removeFalsy([0,1,'nitesh',NaN,null,undefined,2,true,false]))

// a function that toggles a boolean value
// const toggleBoolean = () => (bool = !bool)
// console.log(toggleBoolean)

// swapping two variables
// [foo,bar] = [bar,foo]
// console.log(foo,bar)

// let a1 = 10
// let b1 = 20
// [a1,b1] = [b1,a1]
// console.log(a1,b1)

// merging multiple arrays using concatenation
// the concat method returns a new array containing elements from both arr1 and arr2
// const arr1  = ['a','b','c']
// const arr2  = ['d','e','f']
// const merged = arr1.concat(arr2)
// console.log(merged)

// merging multiple arrays using spread operator
// the spread operator is concise and visually clear it takes the elements from both arrays and creates a new array
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// console.log(...arr1,...arr2)

// merging multiple arrays using push and apply
// this approach modifies arr1 in place by using push along with apply to add elements from arr2
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// console.log(arr1.push.apply(arr1,arr2))

// let a = 5;
// let b = 10;
// [a,b] = [b,a]
// console.log('after swapping')
// console.log('a',a)
// console.log('b',b)

// merging multiple arrays using push and spread opeartor
// the spread opeartor is used to expand the elements of arr2 into individual argruments for the push method
// const arr111 = [1,2,3]
// const arr222 = [4,5,6]
// console.log(arr111.push(arr222))

// merging multiple arrays using concat with spread operator the spread opeartor is used to expand
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const mergedArray = arr1.concat(arr2)
// console.log(mergedArray)

// const bucket = ['coffee','chips','vegetables','salt','rice']
// new Promise((resolve,reject) => {
// 	if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
// 		resolve('fried rice')
// 	}else{
// 		reject('couldnt do it')
// 	}
// })
// console.log(bucket);

// friedRicePromise.then((myfriedrice) => {
// 	console.log('let us eat',myfriedrice)
// })

// for(let i=0;i<=100;i++){
// 	console.log(Math.random(),i)
// }

// console.log('script ')

// myPromise().then((value) => {
// 	console.log(value)
// 	value += 'bar';
// 	return value;
// })
// .then((value) => {
// 	console.log(value)
// });

// "nitesh".then((value) => {
// 	console.log(value)
// })

// const trueTypeOf = (obj) => {
// 	return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
// }
// console.log(trueTypeOf(''))
// console.log(trueTypeOf(0))
// console.log(trueTypeOf())
// console.log(trueTypeOf(null))
// console.log(trueTypeOf({}))
// console.log(trueTypeOf([]))
// console.log(trueTypeOf(0))
// console.log(trueTypeOf(() => {}))

// truncate string at the end
// the function will truncate the input string to the specified length and add an ellipsis () at the ened if the string is longer than the specified length

// const truncateString = (string,length) => {
// 	return string.length < length ? string : `${string.slice(0,length-3)}....`
// }
// console.log(truncateString('hi, i should be truncated because i am too long!',36))

// truncae string from the middle
// the function is to truncate the input string while keeping the specified number of characters from the start and end, and adding an ellipsis (...) in the middle
// const truncateString = (string,length) => {
// 	return string.length < length ? string : `${string.slice(0,length - 3)}...`
// }
// console.log(truncateString('hi, i should be truncated because i am too long!',36))

// get the value of a browser cookie by it is name
// const getCookieValue = (name) => {
// 	const cookies = `${document.cookie}`;
// 	const cookieArray = cookies.split(`;${name}=`)
// 	const cookieValue = cookieArray.pop().split(';').shift();
// 	return cookieValue;
// }
// const getValue = getCookieValue("_ga")
// console.log(getValue)


// get the time hh:mm:ss from a javascript date object
// const getTimeFromDate = (date) => {
// 	return date.toTimeString().slice(0,9)
// }
// const exampleDate = new Date(2021,0,10,17,30,0);
// const timeString = getTimeFromDate(exampleDate)
// console.log(timeString)

// check if a number is even or odd
// const isEven = num => num % 2 === 0
// console.log(isEven(11))

// converts the first character of a given string to lowercase
// const lowercaseFirst = (str) => {
// 	const firstCharLowerCase = str.charAt(0).toLowerCase();
// 	const restOfString = str.slice(1);
// 	return `${firstCharLowerCase}${restOfString}`;
// }
// console.log(lowercaseFirst('Hello World'));

// repeats a given string a specific number of times
// const repeat = (str,numberOfTimes) => {
// 	return str.repeat(numberOfTimes)
// }
// console.log(repeat)

// check if the code is running in node.js
// const isNode = typeof process !== 'undefined' && process.versions !== null && process.versions.node == ui;
// console.log(isNode)

// get all siblings of a given element
// const siblings = ele => Array.from(ele.parentNode.children).filter(child => child != ele)
// console.log(siblings)

// go back to the previous page using the history object
// history.back()
// or
// history.go(-1)

// function to get the largest element in an array
// const getLargest = (arr) => {
// 	return arr.reduce((largest,num) => Math.max(largest,num), -Infinity)
// }
// const arr1 = [13,6,7,88,11,1122,333]
// console.log(getLargest(arr1))
// console.log(Math.max(...arr1))
// console.log(Math.min(...arr1))

// Function to remove HTML tags from a given String
// function removeHTMLTags(inputString){
// 	 return inputString.replace(/<[^>]*>/g, '');
// }

// const htmlString = '<p>This is <b>an example</b> <a href="#">HTML</a> string.</p>'
// const stringWithoutHtml = removeHTMLTags(htmlString)
// console.log(stringWithoutHtml)

// function isDOMElement(value) {
//   return value instanceof Element || value instanceof HTMLDocument;
// }

// const element = document.getElementById('exampleElement');
// const isElement = isDOMElement(element);
// console.log(isElement);  // Output: true

// document.getElementById('commonAncestor').addEventListener('click', function (event) {
//    // Check if the clicked element is an <li> inside the #commonAncestor
//    if (event.target.tagName === 'LI') {
//      alert('Clicked on: ' + event.target.textContext)
//    }
//  });

// es5 function
// function es5function(){
// 	var self = this;
// 	setTimeout(function(){
// 		console.log(self);
// 	},1000)
// }
// es5function();


// es6 function
// function ES6function(){
// 	setTimeout(() => {
// 		console.log(this);
// 	},1000)
// }
// ES6function()
// class myExample{
// 	constructor(){
// 		this.property = 42
// 	}
// 	myMethod(){
// 		console.log(this.property)
// 	}
// }
// const myInstance = new myExample();
// myInstance.myMethod();

// let myObject = {
// 	property:'hello',
// 	myMethod:function(){
// 		console.log(this.property)
// 	}
// }


// let anotherObject = {
// 	property:'world'
// }
// let myMethodWithoutBoundThis = myObject.myMethod.bind(anotherObject)
// myMethodWithoutBoundThis();

// function Person(name){
// 	this.name  =name;
// }

// Person.prototype.sayHello = function(){
// 	console.log('hello, my name is ' + this.name)
// }

// var person1 = new Person('nitesh')

// person1.sayHello()

// var parent = {
// 	greet:function(){
// 		console.log('Hello from the parent object')
// 	}
// }

// var child = Object.create(parent)
// console.log(child.greet())


// var parentBox = {
// 	greet:function(){
// 		console.log('hello from the parent object')
// 	}
// }

// var childBox = Object.create(parentBox)
// console.log(childBox.greet())

// function Animal(name){
// 	this.name = name
// }
// Animal.prototype.makesound = function(){
// 	console.log('some generic sound')
// }

// function Dog(name){
// 	Animal.call(this,name)
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.makeSound = function(){
// 	console.log('woof')
// }
// var myDog = new Dog('buddy')
// myDog.makeSound();

// differentiate between a variable that is null, undefined, or undeclared.
// var x
// console.log(x)

// function exampleFunction(y){

// 	console.log(y)
// }
// var person = null;
// console.log(person)
// console.log(undeclaredVariable);
// 'use strict'
// undeclaredVariable = 42
// console.log(undeclaredVariable)

//----------------------- Define what a closure is and describe its uses and advantages. -----------------------//
// function outerFunction(){
// 	console.log('outer function')
// 	function innerFunction(){
// 		console.log('inner function')
// 	}
// 	innerFunction()
// }
// outerFunction()

// function outerFunction(){
// 	var outerVariable = 'nitesh khatri'
// 	function innerFunction(){
// 		console.log(outerVariable)
// 	}
// 	return innerFunction
// }
// var closureFunction = outerFunction()
// closureFunction()

// function createCounter(){
// 	var count = 0;
// 	return function(){
// 		return ++count
// 	}
// }

// var counter = createCounter()
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// function createCount(){
// 	var count = 0
// 	return function(){
// 		return ++count
// 	}
// }

// var counter = createCount()
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// function createCounter(){
// 	var count = 0
// 	return function(){
// 		return ++count
// 	}
// }

// var counter = createCounter()
// console.log(counter())

// function greetinGenerator(greeting){
// 	return function(name){
// 		console.log(greeting + ',' + name + '!')
// 	}
// }
// var resultexample = greetinGenerator('hello')
// resultexample('nitesh')

// var resultexample1 = greetinGenerator('goodbye')
// resultexample1('sameet')

// function fetchData(url,callback){
// 	setTimeout(function(){
// 		var data = 'data from ' + url
// 		callback(data)
// 	},1000)
// }

// fetchData('https://www.google.com',function(result){
// 	console.log(result)
// })

// function multiply(a){
// 	return function(b){
// 		return a  * b
// 	}
// }
// var data = multiply(2)
// console.log(data(4))

// Explain the primary distinction between the Array.forEach() loop and Array.map() method, as well as when to choose one over the other.
// let numbers = [1, 2, 3, 4];
// numbers.forEach((item) => {
// 	console.log(item * 2)
// })
// numbers.forEach(function(item) {
// 	console.log(item * 2)
// })
// let doubledNumbers = numbers.map(function(item) {
// 	return item * 2
// })
// console.log(doubledNumbers)

// What is a common scenario for employing anonymous functions?
// 1) event handling
// 2) callback functions
// 3) array methods (etc. map filter and reduce)
// 4) immediately invoked function expressions (IIFE)
// 5) as arguments for higder order functions
// 6) timeouts and intervals
// 7) dynamic function creation

// document.getElementById('myButton').addEventListener('click',function(){
// 	console.log('this is result')
// })

// fetchData('https://www.google.com',function(data){
// 	console.log('data received',data)
// })

// let numbers = [1, 2, 3, 4];
// const doublednum = numbers.map(function(val) {
// 	return val * 2
// })
// console.log(doublednum)

// (function(){
// 	// private scope
// 	var localVar = 'i am local'
// 	console.log(localVar)
// })()

// let numbers = [55,88,11,22]

// let filteredNumbers = numbers.filter(function(val) {
// 	return val > 33
// })
// console.log(filteredNumbers)

// setTimeout(function(){
// 	console.log('this is timeout')
// },600)

// var dyamicfunction = function(){
// 	console.log('dynamic function')
// }
// dyamicfunction()

// (function(name){
// 	console.log('hello' , + name)
// })('nitesh')

// for(var i=0;i<5;i++){
// 	(function(j){
// 		setTimeout(function(){
// 			console.log(j)
// 		},100)
// 	})(i)
// }

// var myArray = [1, 2, 3];
// var myString = "Hello, World!";
// var myFunction = function(){
// 	console.log('i am a function')
// }
// myFunction()

// window.alert("This is a host object");
// var httpRequest = new XMLHttpRequest();

// native object
// var myArray = [1, 2, 3];
// console.log(Array.isArray(myArray))

// host object
// var elementBtn = document.getElementById('myButton')
// console.log(elementBtn.tagName)

// Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()
// function User(){
// 	this.name = 'nitesh'
// 	this.age = 34
// }
// var user1 = new User();
// console.log(user1)

// function User(){
// 	this.name = 'nitesh'
// 	this.age = 34
// }
// var user = User()
// console.log(user)
// console.log(name)

// function User(){
// 	this.name = 'nitesh'
// 	this.age = 34
// }
// var user = new User()
// console.log(user.name)

// Can you elucidate the purposes of Function.call and Function.apply, along with their notable differences
// function greet(name){
// 	console.log(`Hello, ${name}. I am ${this.title}`)
// }

// var person = {title:'mr'}
// greet.call(person,'nitesh')

// function greet(name,city){
// 	console.log(`hello ${name}. I am ${this.title}, city is ${city}`)
// }
// var person = {title:'MR'}
// greet.apply(person,['nitesh','mumbai'])

// function example(name,city,mobile){
// 	console.log(`hello ${this.title} ${name} - ${city} ${mobile}`)
// }

// var person = {title:"mr"}
// example.apply(person,['nitesh','mumbai',1234567890])

// Describe the Function.prototype.bind method.
// function greet(name,greeting){
// 	console.log(`${greeting} ${name} i am ${this.title}`)
// }

// var person = {title:'mr'}
// var greetPerson  = greet.bind(person,'nitesh')
// greetPerson('hello')

// var obj = {x:43}
// function getX(){
// 	return this.x
// }
// var result = getX.bind(obj)
// console.log(result())

// function add(a,b){
// 	return a +b
// }
// console.log(add(10,20))

// function Example(value){
// 	this.property = value
// }
// var example = Example.bind(null,'example value')
// var instance = new example();
// console.log(instance.property)

//  Explain the differences between feature detection, feature inference, and utilizing the User Agent (UA) string.
// if(typeof window.localStorage !== 'undefined'){
// 	localStorage.setItem('key','value')
// }
// else{
// 	console.log('local storage is not supported.')
// }

// if(window.localStorage){
// 	localStorage.setItem('key','value')
// }
// else{
// 	console.log('local storage is not supported')
// }

// var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// if(isMobile){
// 	console.log('mobile device detected')
// }

// Define the concept of "hoisting."
// console.log(x)
// var x = 5
// console.log(x)

// sayHello()
// function sayHello(){
// 	console.log('hello world')
// }

// console.log(myVar)
// var myVar = 10
// console.log(myVar)

// What is type coercion, and what are some common pitfalls associated with relying on it in JavaScript code?
// var number = 42
// var string = 'the answer is  ' + number
// console.log(string)

// var numberString = "42"
// var sum = numberString + 10
// console.log(sum)
// var sumresult = Number(numberString) + 10
// console.log(sumresult)

// var booleanValue =  true
// var stringBoolean = String(booleanValue)
// console.log(stringBoolean)
// console.log("5" == 5);
// var value = 'hello'
// if(value){
// 	console.log('truthy')
// }

// console.log('5'+5)
// console.log('5'-5)
// var result = "2" * "3";
// console.log(result)

// console.log('5'===5)

// var numericString = "42";
// var number = Number(numericString)
// console.log(number)

// var value = "42"
// if(typeof value === 'number'){
// 	console.log(value)
// }

// document.getElementById('parent').addEventListener('click', function() {
//   console.log('Parent clicked');
// }, true);

// document.getElementById('child').addEventListener('click', function() {
//   console.log('Child clicked');
// });

//

// What distinguishes an "attribute" from a "property"?
// var inputElement = document.getElementById('myInput');
// var inputValue = inputElement.value
// console.log(inputValue)

//  Explain the differences between == and ===.
// console.log('5' === 5)
// console.log('5' == 5)
// var x = 5;
// var y = '5';
// console.log(x === y)
// console.log(x == y)

// Discuss the same-origin policy's implications for JavaScript.

// Why is it referred to as a "Ternary operator," and what does the term "Ternary" signify?
// var result = 'test'
// console.log(result === 'test' ? 'yes' : 'no')

// var score = 25
// if(score > 35){
// 	result = 'yes'
// }
// else{
// 	result = 'no'
// }
// console.log(result)

// Define strict mode and outline some of its advantages and disadvantages.

// function asynchronousFunction() {
//   console.log("Step 1");

//   setTimeout(function () {
//     console.log("Step 2 (after a delay)");
//   }, 1000);

//   console.log("Step 3");
// }

// asynchronousFunction();

// console.log("Step 1");

// Promise.resolve().then(function () {
//   console.log("Step 2 (microtask)");
// });

// console.log("Step 3");

// var x = 1
// if(true){
//   var x = 2
//   console.log(x)
// }

// let y =  1
// if(true){
//   let y = 2
//   console.log(y)
// }
// console.log(y)

// const z = 1
// console.log(z)

// Compare ES6 classes and ES5 function constructors, and furnish a use case for the arrow (=>) function syntax.
// class Person {
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
//   sayHello(){
//     console.log(`hello my name is ${this.name} and i am ${this.age} years old.`)
//   }
// }
// const person1 = new Person('nitesh',34)
// person1.sayHello();

// function Person(name,age){
//   this.name = name
//   this.age = age

//   this.sayHello = function(){
//     console.log('hello, my name is ' + this.name + 'my age is ' + this.age)
//   }
// }
// var person1 = new Person('niesh',34)
// person1.sayHello();

// const add = (a,b) =>a +b
// console.log(add(10,20))

// const square = function(x){
//   return x * x
// }
// const squareArrow = (x ) => x * x
// console.log(squareArrow)

// Describe the advantages of using the arrow syntax for methods in constructors.
// function myClass(){
//   this.value = 42;

//   this.method = () => {
//     console.log(this.value)
//   }
//   this.method2 = () => {
//     console.log(this.value)
//   }
// }
// myClass()

// Define a higher-order function and provide an example of object or array destructuring.
// function multipler(factor){
//   return function(number){
//     return factor * number
//   }
// }
// const double = multipler(2)
// const triple = multipler(3)
// console.log(double(5))
// console.log(triple(5))

// const person = {
//   fName:'tet',
//   lName:'khatri',
//   age:34
// }
// const {fName,lName,age} = person
// console.log(fName)
// console.log(lName)
// console.log(age)

// const numbers = [1,2,3,4,5]
// const [f,s,t,...v] = numbers
// console.log(f)
// console.log(s)
// console.log(t)
// console.log(v)

// Give an example of generating a string using ES6 Template Literals and explain their benefits.
// const name = 'test'
// const age = 34
// const greeting = `hello my name ${name} ${age}`
// console.log(greeting)

// const multilineText = `
//   This is a multiline string
//   that spans across multiple lines.
// `;
// console.log(multilineText)
// const a = 5
// const b = 10
// const result = `the sum of ${a} and ${b} is ${a+b}`
// console.log(result)

// function customTag(strings,...values){
//   return `${strings[0]} - ${values.join(', ')} - ${strings[1]}`
// }
// const taggedResult = customTag`First part ${name} Second part ${age} years old.`;
// console.log(taggedResult)

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (...moreArgs) {
//         return curried(...args, ...moreArgs);
//       };
//     }
//   };
// }


// // example function to be curried
// function add(a,b,c){
//   return a+b+c
// }
// console.log(add(10,20,30))

// // using curry to create a new function
// const curriedArrary = curry(add)
// // console.log(curriedArrary)

// // partial application
// const add5 = curriedArrary(5);
// const add5and6 = add5(6);
// console.log(add5and6)

// Discuss the benefits of using spread syntax and differentiate it from rest syntax.
// array/object expansion
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// console.log(arr1.concat(arr2))

// function agrumetns
// function add(a,b,c){
//   return a +b +c
// }
// console.log(add(10,20,30))

// cloning array / objects
// const originalArray = [1,2,3]
// const copyArray = [...originalArray]
// const originalObject = {a:1,b:2}
// const copyObject = {...originalObject}
// console.log(originalArray)
// console.log(copyArray)
// console.log(copyObject)

// function parameters
// function sum(...numbers){
//   return numbers.reduce((acc,num) => acc + num,0)
// }
// console.log(sum(20,30,50))


// destructing assignments
// const [first,...rest] = [1,2,3,4,5]
// console.log(first)
// console.log(rest)

// Explain how code sharing between files can be accomplished.
// export const add = (a,b) => a+b
// import {add} from './file1.js'
// console.log(add(10,20))

//  Define what a promise is and describe its applications.
// Explore how Object-Oriented Programming (OOP) principles can be applied when coding in JavaScript.

// basics of js (variables, hoisting of variables)
// var x = 10;
// console.log(x)

// let y = 20
// console.log(y)

// const PI = 3.04
// console.log(PI)

//  hositing
// console.log(a)
// var a = 5
// console.log(a)

// console.log(b)
// let b = 10

// console.log(name)
// var name = 'nitesh'

// console.log(age)
// var age = 34

// functions (arrow functions, higher order functions)
// const add = function(a,b){
//   return a +b
// }
// console.log(add(20,30))

// implicit return
// const square = (x) => x  * x
// console.log(square)

// no binding of us
// function Person(){
//   this.age = 0
//   setInterval(function growUp(){
//     this.age++
//     console.log(this.age)
//   },1000)
// }
// const person = new Person()
// console.log(person)

// function as arguments
// function operaNumb(a,b,operation){
//   return operation(a,b)
// }
// const add = (a,b) => a+b
// const multiply  = (a,b) => a * b
// console.log(operaNumb(3,4,add))
// console.log(operaNumb(3,4,multiply))

// function as return values
// function multiplier(factor){
//   return function (number){
//     return number * factor
//   }
// }
// const multiplyByTwo = multiplier(2)
// console.log(multiplyByTwo(5))

// function as return values
// function multipler(factor){
//   return function(number){
//     return number * factor
//   }
// }
// const multiplyByTwo = multipler(2)
// console.log(multiplyByTwo)

// built in higher order functions
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num )=> num * 2 )
// console.log(doubled)

// const evenN = numbers.filter((val) => val % 2)
// console.log('even ' + evenN)

// const oddN = numbers.filter((val) => val !== 1)
// console.log('odd ' + oddN)

// arrays and objects (array destructuring, object destructuring, rest operator, spread operator)
// const numbers = [1, 2, 3, 4, 5];
// const [first,second,...rest] = numbers
// console.log(first)
// console.log(second)
// console.log(rest)

// object desctructing
// const person = {name:'nitesh',age:34,country:'india'}
// const {name,age,...details} = person
// console.log(name)
// console.log(age)
// console.log(details)

// console.log([] == ![]);

// array destructing
// const colors1 = ['red', 'green', 'blue'];
// const [firstcolor,secondcolor,thirdcolor] = colors1
// console.log(firstcolor)
// console.log(secondcolor)
// console.log(thirdcolor)

// object destructing
// const person = {
//   name:'nitesh',
//   age:34,
//   city:'mumbai'
// }
// const {name,city} = person
// console.log(name)
// console.log(city)

// rest operator
// const [first,second,...rest] = [1,2,3,4,5]
// console.log(rest)

// const {a,b,...otherProps} = {a: 1, b: 2, c: 3, d: 4}
// console.log(otherProps)

// spread operator
// const arr1 = [1,2,3]
// const arr2 = [...arr1]
// console.log(arr2)

// const obj1 = { a: 1, b: 2}
// const obj2 = {...obj1,c:3,d:4}
// console.log(obj2)

// conditions in js (if else, ternary operator, using && ||, optional chaining
// let x = 0
// if(x >0){
//   console.log('positive')
// }
// else if(x<0){
//   console.log('negative')
// }
// else{
//   console.log('zero')
// }

// ternary operator
// let x = 10
// let result = (x>0) ? 'positive' : (x<0) ? 'negative' : 'zero';
// console.log(result)

// logical operator (&& and ||)
// let y = 10
// if(y>0 && y<100){
//   console.log(`x is between 0 and 100`)
// }
// using ||
// let x = 10
// if(x === 0 || x === 1){
//   console.log(`x is either 0 or 1`)
// }

// optional chaining
// let user = {
//   name:'nitesh',
//   address:{
//     city:'mumbai',
//     zipcode:'10001'
//   }
// }
// let city = user.address ? user.address.city : 'unknown'
// let cityWithOptionalChaining = user.address?.city || 'unknown';
// console.log(city)
// console.log(cityWithOptionalChaining)

// array methods (map, filter, reduce, sort)
// map method
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((val) => val * 2 )
// console.log(result)
// filter method
// const resultfilter = numbers.filter((val) => val > 4)
// console.log(resultfilter)
// reduce method
// const resultreduce = numbers.reduce((a,b) => a +b )
// console.log(resultreduce)
// sort method
// const fruits = ['banana', 'apple', 'orange', 'grape'];
// const resultfruits = fruits.sort(function(a,b) {
//   if(a<b){
//     return -1
//   }
//   else{
//     return 0
//   }
// })
// console.log(resultfruits)

// event listeners (onclick, onblur, onchange, onfocus, settimeout, setinterval)
// onclick
// document.getElementById('btn').onclick = function(){
//   alert("hi")
// }
// onblur
// document.getElementById('myInput').onclick = function(){
//   console.log('input lost focus')
// }

// onchange
// document.getElementById('myselect').onchange = function(){
//   console.log('selection changed')
// }

// onfocus
// document.getElementById('myInput').onfocus = function(){
//   console.log('input focused')
// }

// settimeout
// setTimeout(function(){
//   console.log('Delayed function executed after 2000 milliseconds')
// },1000)

// setInterval
// let counter = 0
// const intervalID = setInterval(function(){
//   console.log('Interval function executed every 1000 milliseconds');
//   counter++
//   if(counter === 5){
//     clearInterval(intervalID)
//   }
// },1000)

// asynchronous events (callbacks, callback hell, promises and promise APIs)
// function fetchData(callback){
//   setTimeout(function(){
//     console.log('Data fetched successfully')
//     callback()
//   },1000)
// }
// function processData(){
//   console.log('data processed')
// }
// fetchData(processData)

// function fetchData(){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       console.log('data fetched successfully')
//       resolve()
//     },1000)
//   })
// }

// function processData(){
//   console.log('Data processed')
// }
// fetchData(processData)

// chaining promises
// fetchData()
//     .then(function() {
//         return processData();
//     })
//     .then(function() {
//         console.log('All tasks completed');
//     })
//     .catch(function(error) {
//         console.error('An error occurred:', error);
//     });

// Promise APIs
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then((response) => response.json())
// .then((data) => console.log('data',data))
// .catch((error) => console.log('error',error))

// async/await
// async function fetchData(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Data fetched successfully');
//       resolve('data');
//     },1000)
//   })
// }
// async function processData(){
//   console.log('Data processed')
// }
// async function fetchDataAndProcess(){
//   try{
//     const data = await fetchData();
//     processData(data);
//     console.log('all tasks completed.');
//   }
//   catch(error){
//     console.error('an error occurred',error)
//   }
// }
// fetchDataAndProcess();

// aync await (alternative for promises)
// async function exampleAsyncFunction(){
//   return 'hello world'
// }
// async function fetchData(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('data recovered successfully')
//     },1000)
//   })
// }

// async function exampleasyncusage(){
//   const result = await fetchData()
//   console.log(result)
// }
// exampleasyncusage()

// async function example1(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('data recovered successfully 1')
//     },1000)
//   })
// }
// async function dataProcess(){
//   const result = await example1()
//   console.log(result)
// }
// dataProcess()

// async function fetchData(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('data successfully')
//     },1000)
//   })
// }
// async function exampleAsyncUsage(){
//   const result = await fetchData()
//   console.log(result)
// }
// exampleAsyncUsage()

// async function fetchData(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('data superman')
//     },1000)
//   })
// }
// async function simple(){
//   const result = await fetchData()
//   console.log(result)
// }
// simple()

// try, catch (for error handling)
// try{
//   const result = someFunction();
//   console.log(result)
// }
// catch(error){
//   console.error('an error occured',error)
// }

// let str = ' welcome to this javascript series'
// console.log(str.split("").reverse("").join(""))
// console.log(str.split(" ").reverse(""))


// let x = 'nitesh'
// let y = 'sameet'
// let a = x.toLowerCase().split("").sort().join("")
// let b = y.toLowerCase().split("").sort().join("")
// let result = (a == b) ? true : false

// function common(str){
//   return str.toLowerCase().split("").sort().join("")
// }
// let x ='nitesh'
// let y = 'nitesh'
// let a = common(x)
// let b = common(y)
// let result = (a === b) ? true : false
// console.log(result)

// let x  = 10
// let y = 20
// function add(a,b){
//   let c = a+b
//   return c
// }
// let multiply = function(a,b){
//   let c =  a *b
//   return c
// }
// let add1 = add(x,y)
// let multiply =  multiply(x,y)

// abc()
// var a = 10
// function abc(){
//   console.log('this is a final')
// }
// abc()

// Basics of Programming in JavaScript
// *** variable and data types
// let x1 = 5
// const pi = 3.14
// console.log(x1)
// console.log(pi)

//  data types
// let name = 'nitesh'
// let age = 33
// let isStudent = true
// // console.log(name)
// console.log(age === 33)
// console.log(isStudent ? 'yes' : 'no')
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof isStudent)
// console.log(typeof {name:'nitesh'})
// console.log(typeof ['pineapple','mango'])
// console.log(typeof null)
// console.log(typeof undefined)

// operators => Arithmetic, Comparison, Logical, Assignment operators.
// console.log(5+3)
// console.log(5 === '5')
// console.log(true && false)

// conditional flow => conditional statements if, else if, else
// let num = 10
// if(num > 10){
//   console.log('positive')
// }
// else if(num < 0){
//   console.log('negative')
// }
// else{
//   console.log('zero')
// }

// loops - for, while and do-while
// for(let i=0;i<5;i++){
//   console.log(i)
// }
// let i = 0
// while(i < 5){
//   console.log(i)
//   i++
// }

// functions - define functions using the function keyword
// function greet(name){
//   console.log('hello', + name + '!')
// }
// greet('nitesh')

// arrow functions are a concise way to define functions
// const add = (a,b) => a +b
// console.log(add(10,20))

// arrays => arrys hold collection of data.
// let fruits = ['apple', 'orange', 'banana'];
// console.log(fruits[0])

// objects => objects store data in key-value pairs
// let person = {
//   name:'nitesh',
//   age:34,
//   isStudent:false
// }
// console.log(person.name)
// console.log(person.age)
// console.log(person.isStudent)

// dom manipulation => javascript is often used to interact with the document object model (dom) to change html content, styles or structure

// error handling
// // use 'try', 'catch' and 'finally' to handle errors
// try{
// // Code that might throw an error
// }
// catch(error){
// // Handle the error
// }
// finally(){
//    // Code that always runs
// }

// asynchronous javascrpt -> js supports asynchronous programming using promises and async/await
// async function fetchData(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos")
//   let data = await response.json()
//   console.log(data)
// }
// fetchData()

// Hello world program
// console.log("Hello, World!");

// Declare variable using var
// var message = 'hello world'
// console.log(message);

// var message = 'updated message.'
// console.log(message)

// More about variable
// variable scope - global scope
// var globalVar = "I am a global variable";
// function example(){
//   console.log(globalVar)
// }
// example()
// local scope - using var
// let localVar = 'hello world'
// function example(){
//   console.log(localVar)
// }
// example()
// variable hosting
// console.log(hoistedvar)
// var hoistedVar = 'I am hoisted'
// console.log(hoistedVar)

// reassigning and mutability
// var mutableVar = 'original value';
// console.log(mutableVar)
// mutableVar = 'updated value'
// console.log(mutableVar)

// constants (`const`)
// const pi = 3.14159
// console.log(pi)

// block scope => (`let`)
// if(true){
//   let blockVar = ' i am a block-scoped variable';
//   console.log(blockVar)
// }

// if(true){
//   let example = 'happy new year 2024'
//   console.log(example)
// }

// closure
// function outerFunction(){
//   var outerVar = 'i am from outer function'

//   function innerFunction(){
//     console.log(outerVar)
//   }
//   return innerFunction;
// }
// var closurefunction = outerFunction()
// closurefunction()

// const student = {
//   name:'nitesh 1',
//   age:34,
//   dob:'17/06/1989',
//   printname1:function(){
//     console.log(this.name,this.age,this.dob)
//   }
// }
// student.printname1()

// const student2 = {
//   name:"sachin tendulkar",
//   age:41,
//   dob:'17/06/1973',
// }

// student.printname1.call(student2)

// console.log(window.x())
// let a = 'nitesh khatri'
// console.log(a)

// var a = 'nitesh khatri is resulted'
// function Example(){
//   console.log(a)
// }
// Example()

// const obj = {
//   a:10,
//   x:function(){
//     const y = () => {
//      console.log(this)
//     }
//     y()
//   }
// }
// obj.x();

// let v1 = 'nitesh'
// let v2 = 'khatri'
// console.log(v1.concat(" ",v2))

// let x = 9
// function myfunc(){
//   if(x === 15){
//     console.log('true')
//   }
//   else{
//     console.log('false')
//   }
// }
// myfunc()

// let x = 10;
// function myfunc(){
//   switch(x){
//     case 20: console.log('a+');
//     break;
//     case 35: console.log('b');
//     break;
//     case 21:
//     case 22:
//     case 23:
//     case 24:console.log('the value is between 21 and 24');
//     default:console.log('no value of x matches');
//   }
// }
// let answer = myfunc();

// function myfunc(){
//   let i = 0
//   while(i > 0){
//     console.log(i)
//     i--;
//   }
// }
// myfunc()

// let myvar = myfunc();
// console.log('the value of i ',myvar)

// function myfunc(){
//   let i = 0;
//   let myarray = [1,2,3,4,5,6,7,8,9,10]
//   // while(i < 6){
//   //   myarray.push(i)
//   //   i++;
//   // }
//   for(let i=0;i<=myarray.length;i++){
//     console.log(myarray[i])
//   }

//   let my2darray = [[1,2,[3,4],[5,6]]]
//   console.log(my2darray[0][0])
// }
// let myvar = myfunc()
// console.log('the value of variable is ' +  myvar)

// function countdown(number){
//   console.log(number)
//   let newnumber = number - 1
//   if(newnumber > 0){
//     countdown(newnumber)
//   }
// }
// countdown(15)

// function addmyarray(arr,n){
//   let sum = 0
//   for(let i =0;i<n;i++){
//     sum = sum + arr[i]
//   }
//   return sum;
// }
// let myarr = [12,13,14]
// addmyarray(myarr)

// var a = window.prompt('enter first number :')
// var b = window.prompt('enter second number :')
// var mysum = a+b

// const myvar = {firstName:'nitesh',lastName:'khatri',age:34,fullname:function(){
//   return this.firstName + " " + this.lastName + " " + this.age
// }}
// document.getElementById('myp1').innerHTML = myvar.fullname()
// myvar.rollnum = 35
// delete myvar.lastName
// let mysentence = "";
// for(let x in myvar){
//   mysentence = mysentence + myvar[x] + " "
// }
// console.log(mysentence)

// const person = {
//   name:'nitesh',
//   age:34
// }
// console.log(Object.values(person))

// let mystring123 = JSON.stringify(person)
// console.log(mystring123)


// function countdown(number){
//   console.log(number)
//   let newnumber = number - 1

//   if(newnumber>0){
//     countdown(newnumber)
//   }
// }
// countdown(5)

// function addmyarray(arr,n){
//   let sum = 0;
//   for(let i=0;i<n;i++){
//     sum = sum + arr[i]
//   }
//   return sum
// }
// let myarr = [1,2,3,4,5]
// let myvar = addmyarray(myarr,4)
// console.log(myvar)

// let i=0;
// let arr1 = [1,2,3,4,511]
// for(let i=0;i<arr1.length;i++){
//   console.log('asdsada', arr1[i])
// }

// function addmyArray(arr,n){
//   if(n<=0){
//     return 0
//   }
//   else{
//     return sum
//   }
// }

// function btnExample(){
//   document.getElementById('mydemo').innerHTML = 'adsdd'
//   console.log('clicked')
// }

// string indexing
// let myString = "Hello, World!";
// console.log(myString[0])
// console.log(myString[7])

// console.log(myString.charAt[1])
// console.log(myString.charAt[12])

// let modifiedString = myString.substring(0,7) + 'J' + myString.substring(8);
// console.log(modifiedString)

// Useful string methods
// length methods = return the length of a string
// let str = 'hello world'
// console.log(str.length)
// charAt method = return the character at a specified index
// console.log(str.charAt(7))
// substring method = extracts a portion of a string between two specified indices
// console.log(str.substring(0,5))
// indexOF method = returns the index of the first occurrence of a specified substring
// console.log(str.indexOf('e'))
// replace method = replaces a specified substring or pattern with another string
// console.log(str.replace('hello','hi'))
// toLowerCase() method = converts a string to lowercase or uppercase
// console.log(str.toLowerCase())
// toUpperCase() method = converts a string to uppercase or lowercase
// console.log(str.toUpperCase())
// trim method = removes whitespace from both ends of a string
// console.log(str.trim())
// spit method = splits a string into an array of substring based on a specified delimiter
// let strarray = "apple,orange,banana"
// let fruits = strarray.split(",")
// console.log(fruits)

// Template Strings
// let name = 'nitesh'
// let age = 34
// let message = `${name} - age is ${age}`
// console.log(message)

// let a = 10
// let b = 20
// let result  = `${a} - ${b}`
// console.log(result)

// let multiLine = `
// This is a
// multi-line
// string.`;
// console.log(multiLine)

// Null, undefined, BigInt, typeof
// null
// let nullVariable = null
// console.log(nullVariable)
// console.log(typeof nullVariable)

// undefined
// let undefinedVariable;
// console.log(undefinedVariable)
// console.log(typeof undefinedVariable)

// BigInt
// let bigIntNumber = 9007199254740991n;
// console.log(bigIntNumber)
// console.log(typeof bigIntNumber)

// example to show typeof for different data types
// let stringVariable = 'hello';
// let numberVariable = 42
// let booleanVariable = true
// let objectVariable = {key:'value'}
// let arrayVariable = [1,2,3,4,5]
// console.log(typeof stringVariable)
// console.log(typeof numberVariable)
// console.log(typeof booleanVariable)
// console.log(typeof objectVariable)
// console.log(typeof arrayVariable) // (Note: arrays are also of type 'object' in JavaScript)

// what is event delegation, and how does it function in JavaScript?
// Common ancestor (ul element)
//  const myList = document.getElementById('myList');

//  // Event listener on the common ancestor
//  myList.addEventListener('click', function(event) {
//    // Check if the clicked element is an li element
//    if (event.target.tagName === 'LI') {
//      // Output the text content of the clicked li element
//      console.log(event.target.textContent);
//    }
//  });

// const person = {
//   name:'nitesh',
//   age:34,
//   dob:'17/06/1989'
// }
// const {name,age,dob} = person
// console.log(name)
// console.log(age)
// console.log(dob)

//------------ comments
// this is a comment
/* or this is a comment */

//------------ variable creation
// let school = 'fellowship school'
// console.log(school)
// let fullPackage = 'shecodesprop'
// console.log(fullPackage)
// let projects = 4
// console.log(projects)
// let awesome = true
// console.log(awesome)

//------------ alert
// alert('ola')

//------------ variable operations
// let x = 2
// let y = 10
// let z =  x + y
// console.log(z)

// let city = 'mumbai'
// let country = 'india'
// let place = city + ' ' + country
// console.log(place)

//------------ prompt
// let firstname = prompt('what is your firstname')
// let lastname = prompt('what is your lastname')
// let fullname = firstname + ' ' + lastname
// alert(fullname)

//------------ variable data types
// let age = 23
// let name =  'nitesh'
// let canCode = true
// let objectProp = {name:'nitesh',age:34}
// let arrayProp = ['a','b','c','d']
// console.log(typeof age)
// console.log(typeof name)
// console.log(typeof canCode)
// console.log(typeof objectProp)
// console.log(typeof arrayProp)

//------------ if else
// let country = prompt('what country are you from?')
// if(country === 'India'){
//   alert('it is match - India')
// }
// else{
//   alert('it is not match - India')
// }
// let score = 35
// if(score == 35){
//   console.log('yes, it is perfect score')
// }
// else{
//   console.log('yes, it is not perfect score')
// }

//------------ if else statement
// let age = prompt('how old are you?')
// if(age < 17){
//   console.log('you can apply')
// }
// else{
//   console.log('you cannot apply')
// }


//------------ structure structure types
// let students = ['vishal','nilesh','mayur'] // array
// let example = {
//   fname:'nitesh',
//   lname:'khatri',
//   age:34,
//   canCode:true
// }
// console.log(example) // object

//------------ creating a string
// let name = 'testing'
// console.log(name) // string

//------------ string concatenation
// let firstName = "Julie";
// let lastName = "Johnson";
// let fullName = `${firstName} ${lastName}`
// console.log(fullName)
// console.log(firstName.concat(' ',lastName))

//------------ nested if else statements
// let age = 150
// if (age<18){
//   console.log('you can apply')
// }
// else{
//   if(age>120){
//     console.log('you can apply')
//   }
//   else{
//     console.log('you cannt apply')
//   }
// }

//------------ trim
// let city = " Montrea  l  ";
// let strimmed = city.trim();
// console.log(strimmed)

//------------ logical or
// let age = 24
// let gender = 'male'
// if(age < 5 || gender === 'male'){
//   console.log('you can join')
// }
// else{
//   console.log('you cannt join')
// }

//------------ replace
// let city = 'mumbai'
// console.log(city.replace('mumbai','gujarat'))

//------------ logical and
// let continent = 'Europe'
// let language = 'Portuguese1'
// if(continent === 'Europe' || language === 'Portuguese'){
//   alert("You are from Portugal 🇵🇹");
// } else {
//   alert("You are not from Portugal");
// }

//------------ toLowerCase
// let upper = 'BC'
// console.log(upper.toLowerCase())

// //------------ toUpperCase
// let upper = 'bc'
// console.log(upper.toUpperCase())

//------------ comparison and logical operators
// console.log(2>3) // false
// console.log(2<3) // true
// console.log(2<=2) // true
// console.log(3>=2) // true
// console.log(2===5) // false
// console.log(2!==3) // true
// console.log(1+2===4) // false

//------------ template literals
// let fname = 'test f'
// let lname = 'test l'
// console.log(`${fname} ${lname}`)

//------------ dates get current time
// console.log(new Date())

//------------ array declaration
// let myList = []
// let fruits = ["apples", "oranges", "bananas"]
// myList = ['banana', 3, go, ['John', 'Doe'], {'firstName': 'John', 'lastName': 'Smith'}]
// console.log(myList)

//------------ create a date
// let date1 = Date.parse("01 Jan 2025 00:00:00 GMT")
// console.log(date1)

//------------ access an array
// const fruits = ["apples", "oranges", "bananas"]
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

//------------ get date data
// let now = new Date();
// console.log(now.getDate())
// console.log(now.getMinutes())
// console.log(now.getHours())
// console.log(now.getSeconds())
// console.log(now.getMonth())
// console.log(now.getFullYear())

//------------ update an array item
// let fruits = ['apple','pineapple','watermelon','guava']
// let replaceFruits = fruits[0] = 'grape'
// console.log(replaceFruits)
// console.log(fruits)

//------------ round
// console.log(Math.round(5.6))

//------------ while loop
// let times = 0
// while(times < 100){
//   console.log(times)
//   times = times + 1
// }
// while(times < 1000){
//   console.log(times)
//   times = times  +  1
// }
// let fruits = ['apple','pineapple','watermelon','guava']
// for(let i =0;i<fruits.length;i++){
//   console.log(i + ' ' + fruits[i])
// }

//------------ floor
// console.log(Math.floor(5.32))

//------------ forEach loop
// let fruits = ['apple','pineapple','watermelon','guava']
// // fruits.forEach((item) => console.log(item))
// fruits.forEach(function(val) {
//   console.log(val)
// })

//------------ ceil
// console.log(Math.ceil(10.566))

//------------ do while loop
// let times = 1
// do{
//   console.log(times)
//   times = times + 1
// }
// while(times < 10)
// do{
//   console.log(times)
//   times = times + 1
// }
// while(times < 546)

//------------ min
// console.log(Math.min(2, 5, 1))

//------------ for loop
// for(let i=0;i<10;i++){
//   console.log('i is ' + i)
// }
// let mylist= ['p','t','s','n','k','d']
// for(let i=0;i<mylist.length;i++){
//     console.log('i have ' + mylist[i] + 'in my shopping bag.')
// }

//------------ max
// console.log(Math.max(2, 5, 1))

//------------ random
// console.log(Math.random(11))

//------------ remove first item
// let fruits = ['apple','pineapple','watermelon','guava']
// let removedfirstitem = fruits.shift()
// console.log(removedfirstitem)

//------------ Creating a new object
// let fruit = new Object();
// let user = {}
// let student = {
//   fname:'nitesh',
//   lname:'khatri'
// }
// let anotherStudent = {
//   fname:'ni',
//   lname:'ni',
//   female:true,
//   greet:function(){
//     console.log('hey')
//   }
// }
// console.log(anotherStudent)
// console.log(student)
// console.log(user)
// console.log(fruit)

//------------ Functions
// function sayFact(){
//   let name = prompt('what is your name');
//   if(name === 'nitesh'){
//     console.log('Your name comes from the Greek -> Nitesh')
//   }
//   else{
//     console.log("Your name doesn't comes from the Greek -> Nitesh")
//   }
// }
// sayFact()

//------------ Reading an object properties
// let user = {
//   firstName: "Lady",
//   lastName: "Gaga",
//   gender: "female",
// };
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user['firstName'])
// console.log(user['lastName'])
// console.log(user.firstName)
// console.log(user.lastName)
// console.log(user['gender'])

//------------ JS Functions Parameters
// function fullName(firstName, lastName) {
//   alert(firstName + " " + lastName);
// }
// let firstName = prompt("What's your first name?");
// let lastName = prompt("What's your last name?");
// fullName(firstName,lastName)
// function fullName(fname,lname){
//   console.log(`${fname} ${lname}`)
// }
// const fname = prompt('what is your first name')
// const lname = prompt('what is your last name')
// fullName(fname,lname)

//------------ Adding object properties
// let user = {
//   firstName: "Lady",
//   lastName: "Gaga",
//   gender: "female",
// };
// user.profession = 'fe developer'
// user.dob = 'dd/mm/yyyy'
// console.log(user)

//------------ js function return
// function add(x, y) {
//   return x + y;
// }
// let result = add(3,4)
// let result2 = add(result,0)
// function getFullName(fname,lname){
//   let fullName = fname + lname
//   return fullName
// }
// let userFullName = getFullName("Kate", "Robinson");
// console.log(userFullName);

//------------ object arrays
// let users = [
//   {
//     firstName: "Bradley",
//     lastName: "Cooper",
//   },
//   {
//     firstName: "Lady",
//     lastName: "Gaga",
//   },
// ];
// users.forEach(function(user,index){
//   for(let prop in user){
//     console.log(prop + " " + user[prop] )
//   }
// })
// users.map(function(val){
//   console.log(val)
// })

//------------ Closures
// function hello(){
//   function go(name){
//     console.log(name)
//   }
//   let name ='example testing'
//   go(name)
// }
// hello()

//------------ enumerating the properties of an object
// let user = {
//   firstName: 'Lady',
//   lastName: 'Gaga',
//   gender: 'female'
// }
// for(let prop in user){
//   console.log(prop)
//   console.log(user[prop])
// }

//------------ debugging
// console.log(name)
// console.log('let us code')

//------------ events
// function sayHi(){
//   console.log('hi')
// }
// sayHi()

//------------ selectors
// let li = document.querySelector('li')
// let day = document.querySelector('.day');
// let paragraph = document.querySelector('#myList p');

//------------ creating an event listener
// function sayHi(){
//   console.log('hi')
// }
// let element = document.querySelector('#city')
// element.addEventListener('click',sayHi)

//------------ QuerySelectorAll
// let lis = document.querySelectorAll('li')
// let para = document.querySelector('#listspecial p');

//------------ setTimeout
// function example() {
//       console.log('nitesh')
// }
// setTimeout(example,800)

//------------ ajax with fetch
// let serverurl = 'https://jsonplaceholder.typicode.com'
// let endpoint = 'users/1'
// fetch(serverurl + '/' + endpoint)
// // below code i did code
// .then((res) => (
//   res.json()
// ))
// .then((json) => {
//   console.log(json)
// })

//------------ ajax with axios
// function showUser(response){
//   console.log(`${response.data.name}`)
// }

// let url = "https://jsonplaceholder.typicode.com/users/2"
// axios.get(url).then(showUser);

//------------ element manipulation
// let li = document.querySelector("li#special");
// let likedd = document.querySelector("#liked");
// likedd.classList.remove("liked");
// li.classList.remove("something");
// li.classList.add('backgroundclor');

//------------ html content
// let li = document.querySelector('#special')
// li.innerHTML = 'hiii'

//------------ forms
// function signUp(event){
//   event.preventDefault();
//   let input = document.querySelector('#email');
//   console.log(input.value)
// }
// let form = document.querySelector('form');
// form.addEventListener('submit',signUp)

//------------ html attributes manipulation
// let button = document.querySelector("input#button");
// button.setAttribute("disabled", "disabled");
// let email = document.querySelector("input#email");
// email.setAttribute('required')

//------------ css styles
// const box = document.querySelector('.gsapbox');
// gsap.to(box,{
//   duration: 2,
//   x: 200, // Move the box 200 pixels to the right
//   rotation: 360, // Rotate the box 360 degrees
//   backgroundColor: '#e74c3c', // Change the background color
//   ease: 'power2.out', // Easing function
//   onComplete: () => {
//     console.log('Animation complete');
//   },
// })

//----------- css styles
// let boxElement = document.querySelector("#boxElement");
// boxElement.style.width = "100px";
// boxElement.style.height = "100px";
// boxElement.style.backgroundColor = "red";
// boxElement.style.padding = "10px 20px";
// boxElement.style.marginRight = "10px";
// boxElement.style.color = "#fff";
// boxElement.style.border = "5px solid blue";
// boxElement.style.borderRadius = "10px";
// boxElement.style.boxShadow = "5px 5px 5px 5px #999";

//---- Explain the primary distinction between the Array.forEach() loop and Array.map() method, as well as when to choose one over the other
// const numbers = [1, 2, 3, 4];
// numbers.forEach((val,index)  => {
//   console.log(val)
// })
// numbers.map((val,index) => {
//   console.log(val)
// })

//----- What is a common scenario for employing anonymous functions
// callback functions
// setTimeout(function(){
//   console.log('timeout complete')
// },1000)
// immediately invoked function expressions (IIFE)
// (function(){
//   setTimeout(() =>{
//     console.log('IIFE')
//   },1000)
// })()
// array methods
// const squareNum = numbers.map(function(num) {
//   return num * 2
// })
// console.log(squareNum)
// event handlers
// document.getElementById("myButton").addEventListener("click", function() {
//   console.log("Button clicked!");
// });
// as arguments in higher-order-functions
// function example(result){
//   result()
// }
// example(function(){
//   console.log("Callback function called!");
// })
// Dynamic Function Creation:
// const operation = (addition) => addition ? (a,b) => a - b : (a,b) => a -b
// const add = operation(true)
// const subtract = operation(true)
// console.log(add(20,30))
// console.log(subtract(20,30))

//--- Distinguish between host objects and native objects

//---- Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()
// function User() {
//   this.name = "John";
// }
// var UserInstance = new User();
// console.log(UserInstance.name)
// console.log(window.name);

// function User() {
//   this.name = "John";
// }
// const userName = new User()
// console.log(userName.name)

//--- Can you elucidate the purposes of Function.call and Function.apply, along with their notable differences?
// function example(msg){
//   console.log(`${msg} ${this.name}`)
// }
// const person = {name:'nitesh'}
// example.call(person,'hello')
//------------- What is event delegation, and how does it function in JavaScript?
// const commonAncestor = document.getElementById('commonAncestor');
// commonAncestor.addEventListener('click', function(event) {
//   // Handle the event here
// });

// commonAncestor.addEventListener('click', function(event) {
//   const targetElement = event.target;
//   // Check if the target element matches the desired criteria
//   if (targetElement.matches('.specificElement')) {
//       // Handle the event for the specific element
//   }
// });
// commonAncestor.addEventListener('click', function(event) {
//   const targetElement = event.target;
//   // Check if the target element matches the desired criteria
//   if (targetElement.matches('.specificElement')) {
//       // Handle the event for the specific element
//       console.log('Specific element clicked!');
//   }
// });

//-------------- Can you provide an illustration of how ES6 has altered the approach to working with "this" in JavaScript?
// function TraditionalFunction() {
//   this.value = 1;

//   // Regular function expression as a method
//   this.method = function() {
//     setTimeout(function() {
//       // In a regular function, "this" refers to the global object (e.g., window in a browser)
//       console.log("TraditionalFunction - Regular function:", this.value); // undefined or unexpected value
//     }, 1000);
//   };
// }

// const instance = new TraditionalFunction();
// instance.method();
// function ES6Function() {
//   this.value = 1;

//   // Arrow function as a method
//   this.method = function() {
//     setTimeout(() => {
//       // In an arrow function, "this" is lexically scoped and retains the value from the enclosing context
//       console.log("ES6Function - Arrow function:", this.value); // 1 (expected value)
//     }, 1000);
//   };
// }

// const es6Instance = new ES6Function();
// es6Instance.method();

//------------------ Differentiate between a variable that is null, undefined, or undeclared.
// let x;
// console.log(x);
// function exampleFunction(param) {
//   console.log(param); // undefined if no argument is passed
// }
// const obj = {};
// console.log(obj.nonExistentProperty);

// let y = null;
// console.log(y);
// const objWithNullProperty = { prop: null };
// console.log(objWithNullProperty.prop);
// console.log(z);

//--------------Define what a closure is and describe its uses and advantages.
// function outerFunction(x) {
//   // Inner function defined within the outer function
//   function innerFunction(y) {
//     // Accesses both x from outerFunction and y from its own parameters
//     return x + y;
//   }

//   // Returning the inner function from the outer function
//   return innerFunction;
// }

// // Creating a closure by calling outerFunction and storing the returned inner function
// const closure = outerFunction(10);

// // Using the closure to add 5 to the original x (10)
// const result = closure(5);
// console.log(result); // Outputs 15
// console.log('asdda')

// const data = {
//   silk:'html'
// }
// data.name = 'nitesh'
// console.log(data)

// let x = 5
// let y = 10
// if(x>y){
//   console.log('x is greater than y')
// }
// else if(x<y){
//   console.log('x is less than y')
// }
// else{
//   console.log('x is equal to y')
// }
// console.log(true+true+true*3)

// const cl = console.log.bind(console)
// console.log(cl)


// Example array of strings
// var myfriends = ['pawan','prathmesh','rahul','vighnesh']
// var numberwise = [10,203,405,50]
// const sortasc = myfriends.slice().sort(function(a,b) {
//     if(a<b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// const sortdsc = myfriends.slice().sort(function(a,b) {
//     if(a>b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log('ascending',sortasc)
// console.log('descending',sortdsc)
// const sortascnum = numberwise.slice().sort(function(a,b) {
//     if(a<b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// const sortdscnum = numberwise.slice().sort(function(a,b) {
//     if(a>b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log('ascending',sortascnum)
// console.log('descending',sortdscnum)
//Use a loop to update the original array in place
// const originalArrays = myfriends.map(val => val.toUpperCase())
// console.log(originalArrays)

// var $cvityname = 'mumbai'
// console.log($cvityname)

// var $dob = '17/06/1989'
// console.log($dob)

// var isRaining = 'nitesh' 
// if(isRaining === 'nitesh'){
//     console.log('yes it is nitesh')
// }
// else{
//     console.log('yes it is not nitesh')
// }


// function declaration
// function sum(a,b){
//     return a + b 
// }
// console.log(sum(10,20))

// function expression
// let sum = function(a,b) {
//     return a + b 
// }
// console.log(sum(10,50))

// arrow function 
// const sum = (a,b) => {
//     return a +b 
// }
// console.log(sum(20,30))

// named function expression
// const add = function sum(a,b){
//     return a + b 
// }
// console.log(add(210,20))

// function constructor 
// const add = new Function('a','b','return a+b');
// const sub = new Function('a','b','return a-b');
// const multiply = new Function('a','b','return a*b');
// const divide = new Function('a','b','return a/b');
// console.log(add(10,20))
// console.log(sub(10,20))
// console.log(multiply(10,20))
// console.log(divide(10,20))

// var badMemories = null 
// console.log(typeof badMemories)

// let str = 5 
// console.log(typeof String(str))
// console.log(typeof str + '')

// -- Variable Hoisting
// console.log(x)
// var x = 5 
// console.log(x)
// var x 
// console.log(x)
// x = 5
// console.log(x)

// -- function hositing
// sayHello()
// function sayHello(){
//     console.log('hello world')
// }
// function sayHello(){
//     console.log('hello world')
// }
// sayHello()

// -- impact on variable declarations
// console.log(y)
// var y = 10
// console.log(y)

// -- impact on function declarations
// greet()
// function greet(){
//     console.log('hello, there')
// }

// -- impact on function expressions
// sayHi()
// var sayHi = function(){
//     console.log('hello, there')
// }

//  The differences between let, const, and var in variable declaration and scope
// reassignment
// function exampleVar(){
//     if(false){
//         var x = 10
//     }
//     console.log(x)
// }
// exampleVar()

// function exampleLet(){
//     if(true){
//         let x = 10
//         console.log(x)
//     }
//     console.log(x)
// }
// exampleLet()

// function exampleConst(){
//     const x = 10
//     z = 40
// }
// exampleConst()

// console.log(isNaN('nitesh'))
// console.log(isNaN('55'))
// console.log('dob',isNaN('17/06/1989'))
// console.log('array wordwise',isNaN(['nitesh','test']))
// console.log('array numberwise',isNaN([22,22]))

// console.log(0/0)
// console.log('abc'*5)
// let x 
// let result = x * 10
// console.log(result)
// console.log(NaN + 5)
// let result = 'test'
// if(isNaN(result)){
//     console.log('the result is NaN')
// }
// else{
//     console.log('the result is a number')
// }
// let sum = 'vinod' - 5
// console.log(sum)
// console.log('test' - 'test')
// console.log(10-20)
// console.log(false-true)
// console.log(true-true)
// var result = 50+125
// console.log(result.toFixed(0))
// var str1  = 'test1'
// var str2 = 'test2'
// console.log(str1 + str2)
// console.log(5 === 5)
// console.log(5 !== 5)

// let num1 = 1
// let num2 = '1'
// if(num1 === num2){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }


// var x = 5 
// var y = 10
// console.log(x > 0 && y < 0)

// const person = [
//     {id:1,name:'test1',age:35},
//     {id:2,name:'test2',age:45},
//     {id:3,name:'test3',age:55},
//     {id:4,name:'test4',age:65},
//     {id:5,name:'test5',age:33},
//     {id:6,name:'test6',age:23},
// ];
// const filtered = person.filter((val) => val.name !== 'test1' && val.name !== 'test3')
// console.log(filtered);
// const isOpen = false
// const isClose = true
// console.log(!isOpen)
// console.log(isClose)

// let age = 35
// let result = age > 20 ? 'yes' : 'no'
// console.log(result)

// let score = 111
// console.log(`${score} > 35 ? 'pass' : 'fail'`)
// console.log(isNaN('20'+10+10))
// console.log(isNaN('test+test'))
// console.log(typeof ("5-3"));
// console.log(typeof ['test','test2']);
// console.log(typeof [10,20,30]);
// console.log(typeof '17/06/1989');
// var temp = 40
// if(temp > 30){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }
// console.log(typeof ('5'-3))
// var temperature = 30
// if(temperature > 40){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }
// var temperature = 30
// if(temperature > 40){
//     console.log('yes')
// }
// else if(temperature > 20 && temperature > 10){
//     console.log('asdad')
// }
// else{
//     console.log('no')
// }

// function enableDesignMode(){
//     document.designMode = 'on'
// }
// function disableDesignMode(){
//     document.designMode = 'off'
// }

// let userAge = 40
// let  isCitizen = true;
// let isRegistered = false
// if(userAge >18){
//     if(isCitizen){
//         if(isRegistered){
//             console.log('you are eligible to vote')
//         }
//         else{
//             console.log('you are not eligible due to registration status')
//         }
//     }
//     else{
//         console.log('you are not eligible due to citizenship status')
//     }
// }
// else{
//     console.log('you are not eligible to vote (younger')
// }

// var num = '6'

// ===
// if(num % 2 === 0){
//     console.log('number is even') // even should be like 2  4 6 8 10 12 
// }
// else{
//     console.log('number is odd') // odd should be like 1 3 5 7 9 11 13
// }

// not equal !==
// if(num % 2 !== 0){
//     console.log('number is even') // even should be like 2  4 6 8 10 12 
// }
// else{
//     console.log('number is not even') // odd should be like 1 3 5 7 9 11 13
// }


// var num = 12;
// if(num === 0){
//     console.log('num is zero')
// }
// else if(num > 0){
//     console.log('num is positive')
// }
// else{
//     console.log('num is negative')
// }

// let fruit = 'mango'
// switch(fruit){
//     case "mango":console.log('it is a mango')
//     break;
//     default:
//         console.log('it is not there any item in fruit')
// }
// let day = 'sadsad'
// switch(day){
//     case "sunday":console.log('sunday')
//     break;
//     case "monday":console.log('monday')
//     break;
//     case "tuesday":console.log('tuesday')
//     break;
//     case "wednesday":console.log('wednesday')
//     break;
//     case "thursday":console.log('thursday')
//     break;
//     case "friday":console.log('friday')
//     break;
//     case "saturday":console.log('saturday')
//     break;
//     default:console.log('there is no mention weekday and weekoff')
// }

// let i = 1
// while(i < 10){
//     console.log(i)
//     i++
// }


// let i = 1
// do{
//     console.log(i)
//     i++;
// }
// while(i < 10)

// let i = 1
// do{
//     console.log(i)
//     i++
// }
// while(i < 10)

// var num = 1 
// do{
//     console.log(num)
//     num++
// }
// while(num < 20)

// let example = 20
// while(example < 100){
//     console.log(example)
//     example++
// }


// let fruit = 'watermelon'
// switch(fruit){
//     case 'mango':console.log('this is mango')
//     break;
//     case 'mango':console.log('this is watermelon')
//     break;
//     case 'mango':console.log('this is pineapple')
//     break;
//     case 'mango':console.log('this is cherry')
//     break;
//     case 'mango':console.log('this is grape')
//     break;
//     default:console.log('there is no fruit any item')
//     break;
// }

// var num = 12;
// var isPrime = true
// if(num == 15){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }

// let i = 0
// for(let i=0;i<10;i++){
//     console.log(i)
//     i++
// }

// var year = 2002
// if((year % 4 === 0 && year % 100 === 0) || year % 400 ===0){
//     console.log(`${year}, it is a leap year`)
// }
// else{
//     console.log(`${year},it is not a leap year`)
// }

// for (var i=1;i<10;i++){
//     console.log(i,'*')
// }

// var a  = 5;
// var b = 10;
// function sum(a,b){
//     return a + b 
// }
// console.log(sum(2,45))

// var c = 10
// var d = 20
// function sum1(a,b){
//     return a + b 
// }
// console.log(sum1(2,111))

// function outer(){
//     function inner(){
//         console.log('inner')
//     }
//     inner()
// }
// outer()

// function greet(){
//     console.log('welcome to thape technical JS course');
// }
// greet()

// var result  = (function(a,b){
//     console.log(a,b)
//     return a + b 
// })(10,20)
// console.log(result)

// let age = 30
// let message = `this is age ${age}`
// console.log(message)

// const test = 'happy coding'
// const colleagues = ['pawan','prathmesh','vishal','koushik']
// console.log(colleagues[1])
// const isReverse = test.split("").reverse().join("");
// console.log(isReverse)
// console.log(test[6])


// const persons = ['vishal','nilesh','bhavin','mayur','bhavini','sonal','jackie','bhagyesh','deepa','ragini','urvashi','arvind','hemala','dinesh','sameet','manisha','jinal','jigisha','mita delhi','mita kalyan','bhagyesh','kajal','chetna','shantilal','suhas','ashok','jackie','anita','yashvit','nitesh']
// const mappedpersons = persons.map((val,index) => {
//     return{
//         index:index + 1,
//         name:val
//     }
// })
// console.log(mappedpersons)
// const filteredpersons = persons.filter((val) => val === 'yashvit')
// console.log(filteredpersons)

// let arr1 = ['nitesh','sameet']
// console.log(arr1.length)

// let fruits = new Array('apple','banana','orange')
// console.log(fruits)
// console.log(fruits[0])
// for(let item of fruits){
//     console.log(item)
// }
// for(let item=0;item<fruits.length;item++){
//     console.log(fruits[item])
// }
// for(let item in fruits){
//     console.log(item)
// }
// for (let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }
// for (let item in fruits){
//     console.log(item)
// }
// const numbersWise = [1,2,23,5,5,5,6,8,98,9,99]
// const result = numbersWise.unshift()
// console.log(result)
// console.log(numbersWise > 10)

// let text = 'Hello javascript welcome to our world best javascript course'
// console.log(text.search(/javascript/g))
// let example = 'test'
// const result = example === 'test' ? 'yes' : 'no'
// console.log(result)

// let text = 'hello javascript, welcome to our world best javascript best javascript course'
// console.log(text.matchAll(/javascript/g))

// let n1 = 'nitesh '
// let n2 = 'khatri'
// let combined = n1 + n2
// console.log(combined)

// const collagues = ['prathmesh','pawan','vighnesh','ramesh','sumit','nitesh']
// const sortasc = collagues.slice().sort(function(a,b){
//     if(a<b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log(sortasc)
// const sortdsc = collagues.slice().sort(function(a,b){
//     if(a>b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log(sortdsc)
// const result = 'hello example'
// console.log(result)
// let result = 'hello example'
// console.log(result)
// var result = 'hello example'
// console.log(result)

// function outer(){
//     function inner(){
//         console.log('this is inner')
//     }
//     inner()
// }
// outer()

// const fruits = ['apple','pineapple','watermelon','grape']
// let numbersWise = [1, 5, 8, 10, 12];
// let evenIndex = numbersWise.findIndex((val) =>val % 2 ===0)
// console.log(evenIndex)

// let myArray = [1, 2, 3];
// let notAnArray = 'Hello, world!';
// console.log(Array.isArray(myArray))
// console.log(Array.isArray(notAnArray))
// if (fruits.length >= 2) {
//     // Use splice to remove the last 2nd item (at index length - 2)
//     fruits.splice(fruits.length - 3, 3);
//   }
  
//   console.log(fruits)

// const mapFruits = fruits.map((val) =>{
//     return val.toUpperCase()
// })
// console.log(mapFruits)
// const mapFruits = fruits.reverse((val) =>{
//     return val.toUpperCase()
// })
// console.log(mapFruits)
// const resultFruits = fruits.sp lice(2,2);
// console.log('original array', fruits)
// console.log('modified array', resultFruits)

// const fname = 'prathmesh'
// const lname = 'chande'
// const merge = fname.concat(' ',lname)
// console.log(merge)

// const fullname = 'prathmesh'
// console.log(fullname.split('').reverse().join(''))

// const numberWise = [1,2,3,4,5,6,7,8,9]
// const finalnumWise = numberWise.indexOf(6)
// console.log(finalnumWise)

// const result = numberWise.lastIndexOf(6)
// console.log(result)

// const monthWise = ['jan','feb','mar','apr','may','jun']
// console.log(monthWise[2])

// let value = 6
// const numbers = [1,2,3,4,5,6,7,8,9]
// const resultsss = numbers.filter((val) => {
//     return val === value 
// })
// console.log(resultsss)

// const person = [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     },
// ]

// const products = [
//     {name:'laptop',price:1200},
//     {name:'phone',price:800},
//     {name:'tablet',price:300},
//     {name:'smartwatch',price:150},
//     {name:'smartwatch',price:111150},
// ]
// console.log(products.filter((val) => val.name === 'smartwatch'))

// let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// let result = [...new Set(arrayWithDuplicates)]
// console.log(result)
// let uniqueArray = arrayWithDuplicates.filter((val,index,self) => {
//     return self.indexOf(val) === index
// })
// console.log(uniqueArray)

// const amt = 70650;
// const incentivePercentage = 17; // Note: Percentage is given without '%'
// const incentiveDecimal = incentivePercentage / 100;

// const calculator = amt * incentiveDecimal;
// console.log(calculator)
// const finalCalc = calculator + amt 
// console.log(finalCalc); 

// let textsss = 'hello javascript, welcome to our world best Javascript course'

// let matchResult = text.matchAll("best")
// for(let item of matchResult){
//     console.log(item)
// }

// let includesResult = text.includes('welcome')
// console.log(includesResult)

// console.log(Math.pow(2,4))
// console.log(2**3)
// let squareRoot = Math.sqrt(625)
// console.log(squareRoot)
// let logResult = Math.log(1)
// console.log(logResult)
// console.log(Math.random() * 100)
// console.log(Math.round(Math.random() * 100))
// const originalArray = [1.23, 2.89, 4.56, 7.89];
// const roundedArray = originalArray.map((val) => Math.round(val))
// console.log(roundedArray)

// const originalObject = {
//     a: 1.23,
//     b: 2.89,
//     c: 4.56,
//     d: 7.89
// };
// const roundedObject = Object.fromEntries(Object.entries(originalObject).map(([key,value]) => [key,Math.round(value)]))
// console.log(roundedObject)

// console.log((Math.random() * 100).toFixed(3))

// window.alert('hi alert')

// const groupwise = ['filtration','autographic','elf','upcl']
// for(let result of groupwise){
//     console.log(result)
// }
// for(let result in groupwise){
//     console.log(result)
// }

// console.log('Available Screen Width:', window.screen.availWidth)

// // Create a comment node
// var para = document.createElement('p')
// para.textContent = 'this is a paragraph '
// para.setAttribute('style','color:white;border:1px solid blue;background:orange;padding:5px 10px;border-radius:10px')
// // Create a text node with some content
// var textNode1 = document.createTextNode('this is a happy | ')
// var textNode2 = document.createTextNode('wonderful tasty | ')
// var textNode3 = document.createTextNode('be positive | ')
// var textNode4 = document.createTextNode('believe yourself')
// para.appendChild(textNode1)
// para.appendChild(textNode2)
// para.appendChild(textNode3)
// para.appendChild(textNode4)
// document.body.appendChild(para);
//  var comment = document.createComment("This is a comment added dynamically.");
//  // Append the comment to the body of the document
//  document.body.appendChild(comment)

// // Get the inner height of the browser window
// var windowHeight = window.innerHeight;
// var windowWidth = window.innerWidth;
// var windowOuterHeight = window.outerHeight;
// var windowOuterWidth = window.outerWidth;
// // inner width and height
// console.log('Inner width is ' + windowWidth)
// console.log('Inner height is ' + windowHeight)
// // outer width and height
// console.log(`Outer Height is ${windowOuterWidth}`)
// console.log(`Outer Height is ${windowOuterHeight}`) 



// // Create a button element
//        var buttonElement = document.createElement("button");
//        // Set the button's text content
//        buttonElement.textContent = "Click me!";
//         // Set the id of the button
//        buttonElement.id = "myButton";
//        buttonElement.setAttribute('id','myBu55tton')
//        // Set a style attribute using setAttribute
//        buttonElement.setAttribute("style", "font-size: 16px;background:red;padding:5px 20px;border:0;color:white");
//         // Add a click event listener to the button
//        buttonElement.addEventListener("click", function() {
//            alert("Button clicked!");
//        });
//         // Append the button to the body of the document
//        document.body.appendChild(buttonElement);

// // Create a new paragraph element
//    var paragraph = document.createElement("p");

//    // Create text content for the paragraph
//    var textNode = document.createTextNode("This is a dynamically created paragraph.");
//     // Append the text node to the paragraph element
//    paragraph.appendChild(textNode);
//     // Append the paragraph element to the body of the document
//    document.body.appendChild(paragraph);

// const firstname = 'nitesh'
// const surname = 'khatri'
// const fullname = `${firstname} ${surname}`
// console.log(fullname)

// const sum = function(a,b) {
// return a  + b 
// }
// console.log(sum(10,20))

// console.log('test'.split("").reverse("").join(""))

// function add(a,b){
//  return a + b 
// }
// console.log(add(10,20))

// const arr1 = ['fruit','grape','pineapple','watermelon']
// const arr2 = ['cherry','mosabmi','banana']
// const copyarr = [...arr1,...arr2]
// console.log(copyarr);

// const greeting = 'hello'
// console.log(greeting)


// const name = "John";
// const message = greeting + name + "! Welcome to our website.";
// console.log(${name}  ${message})

// let obj = [
//     {id:1,name:'text1'},
//     {id:2,name:'text2'},
//     {id:3,name:'text3'},
//     {id:4,name:'text4'},
// ]
// console.log({...obj})

// let happy = {
//     name1:'hritisk'
// }
// let occupation = {
//     name2:'sameet'
// }
// let result2 = Object.assign({},happy,occupation)
// console.log(result2)

// let teacher = {
//     name: "Saikrishna"
//    };
   
//    let lesson= {
//    lessonName: "Datastructures"
//    }
   
//    let course = Object.assign({},teacher,lesson);
//    console.log(course)
// let numberdd = 55
// if(numberdd === 90){
//     console.log('a+')
// }
// else if(numberdd === 35){
//     console.log('b')
// }
// else{
//     console.log('d')
// }

// console.log(2+2)
// console.log("2"+"2")
// console.log(2+2-2)
// console.log("2"+"2"-"2")

// const sortedData = (arr1, arr2) => {
//     let i = 1;
//     let j = 1;
//     let array1 = arr1[0];
//     let array2 = arr2[0];
//     let mergedArray = [];
//     while (array1 || array2) {
//     if (array2 === undefined || array1 < array2) {
//     mergedArray.push(array1);
//     array1 = arr1[i];
//     i++;
//     } else {
//     mergedArray.push(array2);
//     array2 = arr2[j];
//     j++;
//     }
//     }
//     console.log(mergedArray);
//    };
   
//    sortedData([1, 3, 4, 5], [2, 6, 8, 9]);

// let name1 = {
//     name1:'nitesh',
//     age1:34
// }
// let name2 = {
//     name2:'sameet',
//     age2:41
// }
// let result = Object.assign({},name1,name2)
// console.log(result)

// arrow function
// function add(a,b){
//     return a + b 
// }
// console.log(add(10,20))

// template literals
// const name = 'nitesh'
// const greeting = `hello ${name}`
// console.log(greeting)

// destructing assignment
// const person = {
//     name:'test',
//     age:42,
//     dob:'17/06/1989'
// }
// const {name,age} = person 
// console.log(`Name:${name} Age ${age}`)

// spread operator
// const numbers = [1,2,3]
// const newNumbers = [...numbers,4,5]
// console.log(newNumbers)

// rest parameter 
// const sum = (...number) => {
//     return number.reduce((acc,num) => {
//         return acc+num
//     },0);
// };
// console.log(sum(10,20))

// async / await
// const baseurl = 'https://jsonplaceholder.typicode.com/users'
// const fetchData = async () => {
//     try{
//         const response = await fetch(`${baseurl}`);
//         const result = await response.json()
//         console.log(result)
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// fetchData()

// map & set 
// const numberMap = new Map().set('one',1)
// console.log(numberMap)
// const numberMap1 = new Map().set('nitesh','sameet',1)
// console.log(numberMap1)
// const unique = new Set([1,2,3,2,1])
// unique.forEach(number => console.log(number))
// const unique = new Set(['nitesh','nitesh','pawan','sonu'])
// console.log(unique)

// default parameters
// const greet = (name = 'guest') => {
//     return `hello ${name}`
// }
// console.log(greet('sameet'))

// modules
// export const Example = () => {}
// import {Example} from "../example";

// map method
// const numbers = [1,2,3,4,5]
// const doubled = numbers.map((val) => val * 2)
// console.log(doubled)

// filter method
// const numbers = [1,2,3,4,5]
// const filtered = numbers.filter((val) => val >3)
// console.log(filtered)

// reduce method 
// const numbers = [1,2,3,4,5]
// const result = numbers.reduce((a,b) => a+b)
// console.log(result)


// Master the Amazing use cases for the Spread Operator in JavaScript 🔥

// string to array with spread
// const string = 'test'
// const array = [...string]
// console.log(array)

// spread for merging arrays
// const a1 = [1,2,3]
// const a2 = [4,5,6]
// const mergea = [...a1,...a2]
// console.log(mergea) // nice flattened array

// cloning array using spread
// const original = ['zero','one']
// const newArray = original
// console.log(original)
// console.log(newArray)

// get min and max value from an array in js
// var nums = [1,2,3]
// console.log('Minimum',Math.min(...nums))
// console.log('Maximum',Math.max(...nums))

// set to array
// const set = new Set([1,2,3,3,4,5,6])
// console.log(set)
// const array1 = [...set]
// console.log(array1)

// nodelist to array
// const divs = document.querySelectorAll('div');
// const divsArr = [...divs]

// looping over arrays 
// const ns = [1,2,3,4,5,6]
// const result = ns.forEach((item) => {
//     console.log(item)
// })

// conditional statements
// const user = {
//     age:45
// }
// console.log(user.age > 55 ? 'pass' : 'fail')

// working with objects
// const person = {
//     name:'nitesh',
//     age:35,
//     location:'mumbai'
// }
// const {name,age} = person 
// console.log(`${name} -  ${age}`)

// array manipulation 
// const numberwise =[1,2,3]
// const doubledNumbers = numberwise.map((val) => val * 2)
// console.log(doubledNumbers)
// Creating an array
// let fruits = ['apple', 'banana', 'orange', 'grape'];
// accessing elements
// console.log(fruits[1]);
// modifying elements
// console.log(fruits[1] = 'watermelon')
// adding elements to the end of the array 
// const pusharrayfruit = fruits.push('cherry')
// console.log(pusharrayfruit)
// removing the last element 
// const poparrayfruit = fruits.pop()
// console.log(poparrayfruit)
// adding elements to the beginning of the array 
// const beginngingarrayfruit = fruits.unshift('blueberry')
// console.log(beginngingarrayfruit)
// removing the first element 
// const beginningarrayfruit = fruits.shift()
// console.log(beginningarrayfruit)
// map
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map((val) => val * 2)
// console.log(squaredNumbers)
// filter
// console.log(numbers.filter((val) => val !== 3))
// const person = [
//     {id:1,name:'nitesh'},
//     {id:2,name:'sameet'},
//     {id:3,name:'sachin'},
//     {id:4,name:'rahul'},
//     {id:5,name:'nitesh'},
// ]
// const fileredPerson = person.filter((val) => val.name === 'nitesh')
// console.log(fileredPerson)

// handling null or undefined 
// const person = [
//     {id:1,name:'nitesh'},
//     {id:2,name:'sameet'},
//     {id:3,name:'sachin'},
//     {id:4,name:'rahul'},
//     {id:5,name:'nitesh'},
// ]
// console.log(person.map((val) => val))

// default function parameters and template literals
// const createGreeting = (message,name='testing',bodyeee) => `${message} ${name} ${bodyeee}`
// console.log(createGreeting('hi','sameet','how are you'));

// asynchronous code
// const getData = ()=> new Promise(resolve => setTimeout(() => resolve('data 1'),1000));
// const getData2 = () => new Promise(resolve => setTimeout(() => resolve('data 2'),1100));
// const getData3 = () => new Promise(resolve => setTimeout(() => resolve('data 3'),1200));
// const getData4 = () => new Promise(resolve => setTimeout(() => resolve('data4'),1250));
// const getData5 =() => new Promise(resolve => setTimeout(() => resolve('data 5'),1300));
// const getData6 =() => new Promise(resolve => setTimeout(() => resolve('data 6'),1301));
// getData().then((data) => console.log(data));
// getData2().then((response) => console.log(response));
// getData3().then((response)=> console.log(response));
// getData4().then((response) => console.log(response));
// getData5().then((response) => console.log(response));
// getData6().then((response) => console.log(response));
// console.log('hi nitesh')

// const nums = [1,2,3,4,5,6,6,7,7]
// console.log([...new Set(nums)])

// const user = [
//     {id:1,name:'test1',score:55},
//     {id:2,name:'test2',score:75},
//     {id:3,name:'test3',score:85},
//     {id:3,name:'test4',score:8115},
//     {id:3,name:'test1',score:68},
// ]
// const filteruser = user.filter((val) => val.score >= 1000 || val.name === 'test1')
// console.log(filteruser)


