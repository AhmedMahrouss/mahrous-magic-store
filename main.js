let title = document.getElementById("title");
let price = document.getElementById("price");
let fees = document.getElementById("fees");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let btnMood = document.getElementById("btnMood");
let search = document.getElementById("search");
let searchTitle =document.getElementById("searchTitle");
let searchCategory =document.getElementById("searchCategory");
let delAllPro = document.getElementById("delete");
let totalMoney = document.querySelector("#totalMoney button");

let Mood = "create";
let searchMood = "title"
let temp;

function clearInputs(){
title.value = "";;
category.value = "";
}

let data = [];
if(localStorage.product != "" && localStorage.product != null){
data = JSON.parse(localStorage.product);
}else{
data = [];
}

btnMood.onclick = ()=>{
let pro = {
title: title.value,
category:category.value,
}
if(Mood === "create"){
data.push(pro);
}
else{
data[temp] = pro;
Mood = "create"
btnMood.innerHTML = "Create"
count.style.display = "block"
}
localStorage.product = JSON.stringify(data);
clearInputs();
showData();
}

function showData(){
let table = "";
for(var i = 0; i<data.length; i++){
table += 
`<tr>
<td>${i+1}</td>
<td>${data[i].title.toLowerCase()}</td>
<td>${data[i].category.toLowerCase()}</td>
<td><button id="update" onclick="update(${i})">update</button></td>
<td><button id="del" onclick="delPro(${i})">Delete</button></td>
</tr>
`
}
document.getElementById("tbody").innerHTML = table;
totalMoney.innerHTML = `${+price.value}`
if(data.length >0){
delAllPro.style.display = "block";
delAllPro.innerHTML = `Delete All ( ${i} )`
}else{
delAllPro.style.display = "none"
}
}showData();

delAllPro.onclick = ()=>{
data.splice(0);
localStorage.product = JSON.stringify(data);
showData();
}
function delPro(n){
data.splice(n,1);
localStorage.product = JSON.stringify(data);
showData();
Mood = "create"
}   

function update(n){
count.style.display = "none"
btnMood.innerHTML = "Update"
title.value = data[n].title;
price.value = data[n].price;
fees.value = data[n].fees;
ads.value = data[n].ads;
discount.value = data[n].discount;
total.innerHTML = data[n].total;
category.value = data[n].category;
Mood = "update"
temp = n;
}

searchTitle.onclick = ()=>{
search.placeholder = "Search By Title"
searchMood = "title"

}
searchCategory.onclick = ()=>{
search.placeholder = "Search By Category"
searchMood = "category"
}

function searchPro(value){
if(searchMood === "title"){
    let table = "";
    for(var i = 0; i<data.length; i++){
 if(data[i].title.includes(value.toLowerCase())){
    table += 
    `<tr>
    <td>${i}</td>
    <td>${data[i].title}</td>
    <td>${data[i].price}</td>
    <td>${data[i].fees}</td>
    <td>${data[i].ads}</td>
    <td>${data[i].discount}</td>
    <td>${data[i].category}</td>
    <td><button id="update" onclick="update(${i})">update</button></td>
    <td><button id="del" onclick="delPro(${i})">Delete</button></td>
    </tr>
    `
 }
    }
    document.getElementById("tbody").innerHTML = table;
}else{
    let table = "";
    for(var i = 0; i<data.length; i++){
 if(data[i].category.includes(value.toLowerCase())){
    table += 
    `<tr>
    <td>${i}</td>
    <td>${data[i].title}</td>
    <td>${data[i].price}</td>
    <td>${data[i].fees}</td>
    <td>${data[i].ads}</td>
    <td>${data[i].discount}</td>
    <td>${data[i].category}</td>
    <td><button id="update" onclick="update(${i})">update</button></td>
    <td><button id="del" onclick="delPro(${i})">Delete</button></td>
    </tr>
    `
 }
    }
    document.getElementById("tbody").innerHTML = table;
}
}
