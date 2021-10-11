// ES-6
     // 1. Arrow Function:-
     let a= ()=>{console.log("Hello World");}

    //2.Default parameters
    function b(a1=2){console.log(a);}
    b();  // Print 2
    b(3); // print 3

    //3. let 
    let c=2;
    if(c){
    let c=4;
    console.log(c); // print 4
    }
    console.log(c);//print 2

    // 4. const
    //same as let as scoping and never change it's value;

    // 5. Multiline String 
    console.log(`this
    is my
    birthday`);

    // 6. Template Strings
    const d="hello ";
   const e= `&{d} world`;
    console.log(e); // print hello world

    //7. Exponent operatore
    let f=2**3;
    // same as : math.pow(2,3);

    //11. String function
    include();
    startWith();
    repeat();

    //8. Spread operator
    let a01=[1,2,3];
    let a02=[4,5,6];
    let a03=[...a01,...a02];
    console.log(a03);// 1 2 3 4 5 6


    //8.2 Object spread operator
    let a33 ={
    fn: "firstname",
    ln:"Lastname1"
    }
    let b33={
    ...a33,
    lastname:"lastname33",
    age:10
    }
    console.log(a33);// here print whole a obj
    console.log(b33);// here print the firstname of a and others of b

    //9. Destructing array
    let [b1, b2]=[1,2];
    console.log(b1);// 1 
    console.log(b2);// 2
 
    //10. Destructing objects
    let obj={
    a:10,
    b:20
    };
    let {a8,b8}=obj;
    console.log(a8);// 10
    console.log(b8);// 20



    //12. Object Property assignment:- 
    const a9=2;
    const b9=5;
    const obj2={a9,b9}
    // before es6 --> obj={a:a9 , b:b9};
    // after es6--> obj={a: 2, b:5}

    //13. Object.assign():-
    let obja={a:5};
    let objb={b:7};
    let objc=Object.assign({},obja,objb);
    console.log(objc);//a:5, b:7


   //14. Nested Object
    let objx={
    a: 10,
    objy={
      c:22
    },
    b:25
    }
    console.log(objx);// we need to reasearch aboot it ,more


      //15. object function assignment
    let b77={
    a:10,
     b44(){
      console.log("HEY");
    }
    }
    b77.b44();//HEY




   //ES7
  //includes:
  let arr=[1,2,3,4,5];
   console.log(arr.includes(8));
  //its check element wheather it is there or not and return true false

  //Exponential:(**)
  console.log(2**2); //2 to the power 2






    //ES8
    //1. String-Prototype Padstart/padend(total length,textToAdd)
    let a=" a";
    console.log(a.padStart(10,"hi"));// first index theke suru hobe 10 ghor cholbe
    console.log(a.padEnd(10,"hi"));// same as padstart but last theke hobe
    // here length means , the total string length.toFixed.call. until its feel it repeat and store letters

    //2.object.value()

    let obj35={
    fs:"firstname",
    ls:"lastname",
    age:24,
    country:"India"
    }
    let a111=Object.value(obj35);
    console.log(a111);
  //its return a array of [values] like this

   //Output:-
   //["firstname","lastname",24,"India"]

  //  3.object.entries()
    let obj5={
    fs:"firstname",
    ls:"lastname",
    age:24,
    country:"India"
    }
const entr=Object.entries(obj5);
console.log(entr);
//its return a array of [key,value] like this
//print the inside of whole obj
//Output:-
// ["fs","firstname"],
// ['ls','lastname'],
// ['age',24],
// ['country' , 'India']



//4.async function (i am not great with it...)


//5.Trailingcommas:-
let a7=[1,2,3, ,];
console.log(a7);
console.log(a7.length);


//ES9
//1. RegEx changes




//2.Rest and spread operator

var maxval = Math.max(1,2,3,4,5,9);
console.log(maxval);

//* Rest Parameters in ES6 
//* ...this is called rest parameter
function sum(...inputs){
    console.log(...inputs);
    sumis=0;
    for(var i of inputs)
        sumis+=i;
    console.log(sumis);
}
sum(1,2,3,4,5,6);

//spread
let arr3=[1,4,7,2];
function sum(x,y,z,w){
    return x+y+w+z;
}
let arr2=sum(...arr3);
console.log(arr2);

// we can also use spread in array
var a=[1,2,3,4];
console.log(...a);


//Same as rest but use for array
let arr=[1 , 2 , 3];
function sam(a,b,c){
    console.log(a+b+c);
}
sam(...arr);


//3.Asynchronous iteration
