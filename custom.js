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
//     {name: "John", salary: 90000, hireDate: "July 1, 2010"},
//     {name: "David", salary: 75000, hireDate: "August 15, 2009"},
//     {name: "Ana", salary: 80000, hireDate: "December 12, 2011"},
// ];

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