//Single, earns less than $9,875 is in the 10% bracket
//Single, earns between $9,875 and $40,125 owes 12% 
//Single, earns between $40,126-$85,525 owes 22% 
//Single, earns between $85,526-$163,300 owes 24% 
//Single, earns between $163,301-$207,350 owes 32% 
//Single, earns between $207,351-$518,400 owes 35% 
//Single, earns over $518,401 owes  37% 

function taxes() {
    
    const feeSingle1   = 0.01;
    const feeSingle2   = 0.012;
    const feeSingle3   = 0.022;
    const feeSingle4   = 0.024;
    const feeSingle5   = 0.032;
    const feeSingle6   = 0.035;
    const feeSingle7   = 0.037;

    const incomeCeil1  = 9875;
    const incomeCeil2  = 40125;
    const incomeCeil3  = 85525;
    const incomeCeil4  = 163300;
    const incomeCeil5  = 207350;
    const incomeFloor6 = 518400;


    let income = parseFloat(document.getElementById("income").value);    //Getting the value
    console.log(income);

    if (income <= incomeCeil1){                  

        let tax = income * feeSingle1;
        console.log(tax);
        let result = document.getElementById("output");
        result.innerHTML = tax;


    } else if ((income > incomeCeil1) && (income <= incomeCeil2)) {
        
        let previousTax = income * feeSingle1;
        let difference = income - incomeCeil1;
        let change = difference * feeSingle2;
        let tax = previousTax + change;
        console.log(tax);
        let result = document.getElementById("output");
        result.innerHTML = tax;

    } else if ((income > incomeCeil2) && (income <= incomeCeil3)) {

        let previousTax = income * feeSingle1;
        let difference = income - incomeCeil1;
        let change = difference * feeSingle2;
        let tax = previousTax + change;
        let difference1 = income - incomeCeil2;
        let change1 = difference1 * feeSingle3;
        let tax1 = tax + change1;
        console.log(tax1);
        let result = document.getElementById("output");
        result.innerHTML = tax1;
        
    } else if ((income > incomeCeil3) &&  (income <= incomeCeil4)) {

        let previousTax = income * feeSingle1;
        let difference = income - incomeCeil1;
        let change = difference * feeSingle2;
        let tax = previousTax + change;
        let difference1 = income - incomeCeil2;
        let change1 = difference1 * feeSingle3;
        let tax1 = tax + change1;
        let difference2 = income - incomeCeil3;
        let change2 = difference2 * feeSingle4;
        let tax2 = tax1 + change2;
        console.log(tax2);
        let result = document.getElementById("output");
        result.innerHTML = tax2;

    } else if ((income > incomeCeil4) && (income <= incomeCeil5)) {

        let previousTax = income * feeSingle1;
        let difference = income - incomeCeil1;
        let change = difference * feeSingle2;
        let tax = previousTax + change;
        let difference1 = income - incomeCeil2;
        let change1 = difference1 * feeSingle3;
        let tax1 = tax + change1;
        let difference2 = income - incomeCeil3;
        let change2 = difference2 * feeSingle4;
        let tax2 = tax1 + change2;
        let difference3 = income - incomeCeil4;
        let change3 = difference3 * feeSingle5;
        let tax3 = tax2 + change3;
        console.log(tax3);
        let result = document.getElementById("output");
        result.innerHTML = tax3;

    } else if ((income > incomeCeil5) && (income <= incomeFloor6)) {

        let previousTax = income * feeSingle1;
        let difference = income - incomeCeil1;
        let change = difference * feeSingle2;
        let tax = previousTax + change;
        let difference1 = income - incomeCeil2;
        let change1 = difference1 * feeSingle3;
        let tax1 = tax + change1;
        let difference2 = income - incomeCeil3;
        let change2 = difference2 * feeSingle4;
        let tax2 = tax1 + change2;
        let difference3 = income - incomeCeil4;
        let change3 = difference3 * feeSingle5;
        let tax3 = tax2 + change3;
        let difference4 = income - incomeCeil5;
        let change4 = difference4 * feeSingle6;
        let tax4 = tax3 + change4;
        console.log(tax4);
        let result = document.getElementById("output");
        result.innerHTML = tax4;

    } else {

        let previousTax = income * feeSingle1;
        let difference = income - incomeCeil1;
        let change = difference * feeSingle2;
        let tax = previousTax + change;
        let difference1 = income - incomeCeil2;
        let change1 = difference1 * feeSingle3;
        let tax1 = tax + change1;
        let difference2 = income - incomeCeil3;
        let change2 = difference2 * feeSingle4;
        let tax2 = tax1 + change2;
        let difference3 = income - incomeCeil4;
        let change3 = difference3 * feeSingle5;
        let tax3 = tax2 + change3;
        let difference4 = income - incomeCeil5;
        let change4 = difference4 * feeSingle6;
        let tax4 = tax3 + change4;
        let difference5 = income - incomeFloor6;
        let change5 = difference5 * feeSingle7;
        let tax5 = tax4 + change5;
        console.log(tax5);
        let result = document.getElementById("output");
        result.innerHTML = tax5;

    }

}