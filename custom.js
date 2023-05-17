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

var target = document.querySelector('#box');
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

target.addEventListener('click',function(e){
    console.clear();
    var k;
    switch(true){
        case e.metaKey: k = 'Meta key';
        break;
        case e.ctrlKey: k = 'Ctrl key';
        break;
        case e.altKey: k = 'Alternate key';
        break;
        case e.shiftKey: k = 'Shift key';
        break;
        default: k ='other key pressed';
        break;
    }
    console.log(k);
})



