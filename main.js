//Single, earns less than $9,875 is in the 10% bracket
//Single, earns between $9,875 and $40,125 owes 12% 
//Single, earns between $40,126-$85,525 owes 22% 
//Single, earns between $85,526-$163,300 owes 24% 
//Single, earns between $163,301-$207,350 owes 32% 
//Single, earns between $207,351-$518,400 owes 35% 
//Single, earns over $518,401 owes  37% 

function taxes() {
    
    const feeSingle1   = 0.1;                                               //Brakets tax rates
    const feeSingle2   = 0.12;
    const feeSingle3   = 0.22;
    const feeSingle4   = 0.24;
    const feeSingle5   = 0.32;
    const feeSingle6   = 0.35;
    const feeSingle7   = 0.37;

    const incomeCeil1  = 9875;                                              //Brakets Gradation
    const incomeCeil2  = 40125;
    const incomeCeil3  = 85525;
    const incomeCeil4  = 163300;
    const incomeCeil5  = 207350;
    const incomeFloor6 = 518400;
    
    const deduction =  12400;

    let income = parseFloat(document.getElementById("income").value);       //Getting the value
    console.log(income);
    var outDeduction = income - deduction;

    if (income <= deduction) {                                              //Term, for poor

        let result = document.getElementById("output");
        result.innerHTML = "You are so poor, too pay a tax ((";

    } else if (outDeduction <= incomeCeil1){                                //Term < 9875$

        let tax = outDeduction * feeSingle1;
        console.log(tax);
        let result = document.getElementById("output");
        result.innerHTML = tax + "$";


    } else if ((outDeduction > incomeCeil1) && (outDeduction <= incomeCeil2)) {   //Term < 40125$
        

        let previousTax = incomeCeil1 * feeSingle1;
        let difference = outDeduction - incomeCeil1;
        let change = difference * feeSingle2;
        let tax = previousTax + change;
        console.log(tax);
        let result = document.getElementById("output");
        result.innerHTML = tax + "$";

    } else if ((outDeduction > incomeCeil2) && (outDeduction <= incomeCeil3)) {   // Term < 85525$

        
        let previousTax = incomeCeil1 * feeSingle1;
        let previousTax2 = incomeCeil2 * feeSingle2;
        let remain = outDeduction - incomeCeil1 - incomeCeil2;
        let change = remain * feeSingle3;
        let tax = previousTax + previousTax2 + change;
        console.log(tax);
        let result = document.getElementById("output");
        result.innerHTML = tax + "$";
        
    } else if ((outDeduction > incomeCeil3) &&  (outDeduction <= incomeCeil4)) {  //Term < 163300$

        
        let previousTax = incomeCeil1 * feeSingle1;
        let previousTax2 = incomeCeil2 * feeSingle2;
        let previousTax3 = incomeCeil3 * feeSingle3;
        let remain = outDeduction - incomeCeil1 - incomeCeil2 - incomeCeil3;
        let change = remain * feeSingle4;
        let tax = previousTax + previousTax2 + previousTax3 + change;
        console.log(tax);
        let result = document.getElementById("output");
        result.innerHTML = tax + "$";

    } else if ((outDeduction > incomeCeil4) && (outDeduction <= incomeCeil5)) {  //Term < 207350$

        
        let previousTax = incomeCeil1 * feeSingle1;
        let previousTax2 = incomeCeil2 * feeSingle2;
        let previousTax3 = incomeCeil3 * feeSingle3;
        let previousTax4 = incomeCeil4 * feeSingle4;
        let remain = outDeduction - incomeCeil1 - incomeCeil2 - incomeCeil3 - incomeCeil4;
        let change = remain * feeSingle5;
        let tax = previousTax + previousTax2 + previousTax3 + previousTax4 + change;
        console.log(tax);
        let result = document.getElementById("output");
        result.innerHTML = tax + "$";

    } else if ((outDeduction > incomeCeil5) && (outDeduction <= incomeFloor6)) {  //Term < 518400$

        let previousTax = incomeCeil1 * feeSingle1;
        let previousTax2 = incomeCeil2 * feeSingle2;
        let previousTax3 = incomeCeil3 * feeSingle3;
        let previousTax4 = incomeCeil4 * feeSingle4;
        let previousTax5 = incomeCeil5 * feeSingle5;
        let remain = outDeduction - incomeCeil1 - incomeCeil2 - incomeCeil3 - incomeCeil4 - incomeCeil5;
        let change = remain * feeSingle6;
        let tax = previousTax + previousTax2 + previousTax3 + previousTax4 + previousTax5 + change;
        console.log(tax);
        let result = document.getElementById("output");
        result.innerHTML = tax + "$";

    } else {                                                                //Term > 518400$

        let previousTax = incomeCeil1 * feeSingle1;
        let previousTax2 = incomeCeil2 * feeSingle2;
        let previousTax3 = incomeCeil3 * feeSingle3;
        let previousTax4 = incomeCeil4 * feeSingle4;
        let previousTax5 = incomeCeil5 * feeSingle5;
        let previousTax6 = incomeFloor6 * feeSingle6;
        let remain = outDeduction - incomeCeil1 - incomeCeil2 - incomeCeil3 - incomeCeil4 - incomeCeil5 - incomeFloor6;
        let change = remain * feeSingle7;
        let tax = previousTax + previousTax2 + previousTax3 + previousTax4 + previousTax5 + previousTax6 + change;
        console.log(tax);
        let result = document.getElementById("output");
        result.innerHTML = tax + "$";

    }

}
