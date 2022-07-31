
let inputanArray = [1,2,3,4,5];
let a = inputanArray[0];
let b = inputanArray[1];
let c = inputanArray[2];
let d = inputanArray[3];
let e = inputanArray[4];

for (i = 0; i < inputanArray.length; i++) {
    if (i == a) {
        sum1 = b + c + d + e;
        console.log("Jumlah kan semua bilangan kecuali " + a + " = " + sum1); 
    } else if (i == b) {
        sum2 = a + c + d + e;
        console.log("Jumlah kan semua bilangan kecuali " + b + " = " + sum2); 
    } else if (i == c) {
        sum3 = a + b + d + e;
        console.log("Jumlah kan semua bilangan kecuali " + c + " = " + sum3); 
    } else if (i == d) {
        sum4 = a + b + c + e;
        console.log("Jumlah kan semua bilangan kecuali " + d + " = " + sum4);
    } else {
        sum5 = a + b + c + d;
        console.log("Jumlah kan semua bilangan kecuali " + e + " = " + sum5);
    }
}

let resultArray = [sum1,sum2,sum3,sum4,sum5];
let min, max;
for(let j = 0; j < resultArray.length; j++) {
    let tempNumber = resultArray[j];
    if( j == 0 ) {
        min = tempNumber;
        max = tempNumber;
    } else {
        if(tempNumber < min) min = tempNumber;
        if(tempNumber > max) max = tempNumber;
    }
}

console.log("Nilai Maksimal : " + min);
console.log("Nilai Minimal : " + max);
