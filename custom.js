
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

    const object = {
        name:'nitesh',
        youtube:'vlogs',
        language:'js'
    }
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

let dailyActivities = ['eat', 'sleep'];
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


let studentsData = [['Jack', 24], ['Sara', 23],];
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

const obj = {
    name:'nitesh',
    age:43
}
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
const classOf2018 = {
    students: 38,
    year: 2018
  }

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
const array = [
    {name:'nitesh',age:34},
    {name:'sameet',age:41},
    {name:'urvashi',age:65},
    {name:'arvind',age:68},
    {name:'nitesh',age:34},
]
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

const people = ['vishal','abhijeet','simchal','vishal','abhisar']
// const result = people.sort(function(a,b) {
//     if(a<b){
//         return -1
//     }
//     else{
//         return 1
//     }
// })
// console.log(result)

const wordnumber = ['nitesh','khatri',1,2,null,undefined]
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

const mindset = ['vijay','vishal','pranay','vishal']
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

let numbers = [4, 6, 14, 16]
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