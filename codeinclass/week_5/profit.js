
function calculateProfit(selling_price,cost_price,units_sold){
    var sold = selling_price*units_sold;
    var bought = cost_price*units_sold;
    profit = sold-bought;
    return profit
}

calculateProfit(5000,2500,5)
console.log("The profit got from selling maize flour is",profit)