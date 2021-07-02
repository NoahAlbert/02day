//create a variable to hold the subtotal
const subtotal = 145.64
const taxRate = 0.07
//create a function to calculate taxTotal from subtotal
function calcTaxTotal (taxRate, subtotal) {
    const taxTotal = taxRate * subtotal
    return taxTotal
}
//call the salestax function with subtotal and save taxTotal
const myTaxTotal = calcTaxTotal (taxRate, subtotal)
//calculate the total = subtotal + taxtotal
const myTotal = subtotal + myTaxTotal
//display it all
console.log ('Subtotal     ', subtotal.toFixed(2))
console.log ('Tax           ', myTaxTotal.toFixed(2))
console.log ('--------------------')
console.log ('Total        ', myTotal.toFixed(2))