function handleClick(){
    console.log(this)// window
}
const btn = document.querySelector("#btn");
//btn.onclick = handleClick;

btn.addEventListener('click', handleClick);

function fullName(home_state, age){
    console.log(`${this.firstname} ${this.lastname}`);
    console.log(`From ${home_state}`);
    console.log(`Aged ${age}`);
}
const president = {
    firstname: "Joseph",
    lastname: "Biden",
}
const printPresidentDetail = fullName.bind(president,'Delaware', 78);
console.log(printPresidentDetail)// prints the function 
printPresidentDetail();// 
/*
Joseph Biden
From Delaware
Aged 78
*/


// fullName.apply(president, ['Delaware', 78]);
/*
Joseph Biden
From Delaware
Aged 78
*/
const ex_president = {
    firstname: "Donald",
    lastname: "Trump",
} 
fullName.apply(ex_president, ['Florida', 74]); 
/*
Donald Trump
From Florida
Aged 74
*/

let arr = [1,2,3];
const obj = {multiplier: 10};

let new_arr = arr.map(function(val){
    return val * this.multiplier;
},obj);


function Product(title){
 this.title = title;
 console.log(this);
}

const p = new Product('Tooth Brush');
