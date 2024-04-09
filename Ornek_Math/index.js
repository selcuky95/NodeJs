const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('Birinci sayıyı giriniz:',(num1)=>{
    reader.question('İkinci sayıyı giriniz:',(num2)=>{
        const math = require('./math');

        const sonuc = math.add(parseInt(num1),parseInt(num2));
        console.log(`Toplam: ${sonuc}`);
        reader.close();
    });
});