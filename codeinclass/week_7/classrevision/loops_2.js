 // Infinite loops rerun over and over on the same lines of code and occur when there hasn't been a break to the loop 
 for (let x = 1;  x <= 6; ) { 
     console.log(x);
 }
 // the above code is an inifinite loop that prints x as 1 and is stopped by including the operation/increment 
 for (let x = 1;  x <= 6; x++) { 
     console.log(x);
}

let data = [
    {district: "Kampala", rainfall: 120},
    {district: "Gulu", rainfall: 80},
    {district: "Mbarara", rainfall: 95}
];


// console.log(data[0].district, data[0].rainfall);

for (let z = 0; z < 3; z++){
    console.log(data[z].district, ":", data[z].rainfall);
}
