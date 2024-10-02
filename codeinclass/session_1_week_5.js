// returning functions
 function summation(){
     var num_5 = 40;
     var num_6 = 4;
     var sum_3 = num_5+num_6;
     return sum_3;
 }

summation();
console.log("sum :", summation())

// returning with parameters
function sum(num_5,num_6){
    var sum_1 = num_5 + num_6;
    return sum_1;
}
sum(5,8)
console.log(sum_1)


let name = "Tracy"
function greeting(name){
    console.log("Bonjour", name)
}
greeting("Tracy")
