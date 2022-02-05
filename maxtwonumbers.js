// using if-else

const minister=200;
const bussiness=500;
const army=6000;


if(bussiness>minister){
    console.log("Bussiness pola boro");
}
else{
    console.log("minister pola boro");
}

if(bussiness>minister&& bussiness>army){
    console.log("bussiness pola boro");
}
else if(minister>bussiness&& minister>army){
    console.log("minister pola boro");
}
else{
    console.log("army pola boro");
}


// usinh Math.max library
var max=Math.max(bussiness,army,minister);
console.log("Largest is", max);


// using function
function findLargest(first,second){
    if(first>second){
        return first;
    }
    else{
        return second;
    }
}

const largest=findLargest(900,1000);
console.log("largest is", largest);