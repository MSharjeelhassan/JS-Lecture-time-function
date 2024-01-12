var a = new Date();
a.setDate((new Date()).getDate()+10);
// is bar hm na yeh kiya  hy ka current date main 10 day barha diye hain
// howa aise hy ka new Date() sa hmain date object mila jo current date day raha hy ab us current date sa hm na get Date kiya yani us date object sa date nikali r phr +10 ka matlab yeh hy ka hm na us main 10 days add kardiye.

// var t = new Date().getDate()+10;
console.log(a);
// var y =setDate(16);
// console.log(y);
// console.log(a);


// Chapter 35 Functions

function abc() {
    console.log("ABC");
}

abc()

// in this example we are taking parameters in function meaning this value will be given to the fuction.yani amount = a -200 main a jo hy wo function ko daynge hm.
function xyz(a){
    var amount = a- 200;
    console.log(amount); 
}
xyz(500);
xyz(1000);
xyz(600);
xyz(700);

// IN another example hm ab a r b dono li value laynge jaise nechay dakhae hy.
function xyzz(a, b){
    var amount = a-b;
    console.log(amount); 
}
xyzz(500, 100);
xyzz(1000, 200);
xyzz(600, 50);
xyzz();
// In line number 39 i have call the function empty, so there will be no calculation because no value of a and b is given to the function.