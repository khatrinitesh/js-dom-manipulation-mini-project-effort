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

const arr = [1,2,3,4,5]
function double(x){
    return x * 2;
}
function triple(x){
    return x * 3;
}
function binary(x){
    return x.toString(2);
}

function isOdd(x){
    return x % 2
}
function isEven(x){
    return x % 2 === 0
}
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
