/*
//anonymous
const fact=function(x){
    let mul=1
    for(let i =1;i<=x;i++){
        mul*=i
    }
    return mul
}
console.log(fact(10));

//arrow function
const printData=()=>{
    return "Hello World!" 
}
console.log(printData());


const prime=(x)=>{
    let flag=0
    for(let i=1;i<=x;i++){
        if(x%i===0){
            flag++
            console.log(i);
        }
    }
    console.log("*********************");
    if(flag===2){
        console.log(`${x} is prime`);
    }else{
        console.log(`${x} is not prime`);
    }
}
prime(11)

//implicit
const returnX=x=>console.log(x);
returnX(100)

const returnX=x=>x


//array

let x=["alireza",220.25,true,null,false,19]
console.log(x);
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
console.log(x[3]);
console.log(x[4]);
console.log(x[5]);
console.log(x[6]);
console.log(typeof x);//prototype object=>1)property 2)methods

let x=[]

    //new class => object
let x=new Array()
*/
//associative array
let x=[]
x["firstName"]="alireza"
x["lastName"]="moon"
x["age"]=25
console.log(x);

//array
let data=["alireza","moon",true,false,100]
console.log(data);
console.log(typeof data);
console.log(data.length);
console.log(data[data.length-1]);
console.log(`my name is ${data[0]} and my last name is ${data[1]}`);
data.push("karim",2022)
console.log(data);
console.log(data.pop());
console.log(data);
data.reverse()
console.log(data);
data.reverse()
data.shift()
console.log(data);
data.unshift("aliraezaa")
console.log(data);

data.splice(data.length-1,1,"false")
console.log(data);
console.log(Array.isArray(data));

let result=[1,2,3,4,5,6]
let data1=data.concat(result)
console.log(data1);
console.log(data1.slice(0,3));
data1.sort()
console.log(data1);

let test=data.toString()
console.log(test);
console.log(typeof test);

test=data.join("*")
console.log(test);

delete data[0]
console.log(data);