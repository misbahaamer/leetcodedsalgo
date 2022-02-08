/*
273. Integer to English Words
Hard

1934

4708

Add to List

Share
Convert a non-negative integer num to its English words representation.

 

Example 1:

Input: num = 123
Output: "One Hundred Twenty Three"
Example 2:

Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/
/**
 * @param {number} num
 * @return {string}
 */
 const getTensWord = tens => ['','Ten','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'][tens];
 const getUnderTwentyWord = num => ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'][num];
 //O(T), O(1)
 var numberToWords = function(num) {
     if (num < 20) return getUnderTwentyWord(num);
     
     let billions = Math.floor(num / Math.pow(10,9));
     let millions = Math.floor((num - billions * Math.pow(10,9)) / Math.pow(10,6));
     let thousands = Math.floor((num - billions * Math.pow(10,9) - millions * Math.pow(10,6)) / 1000);
     let hundreds = Math.floor((num - billions * Math.pow(10,9) - millions * Math.pow(10,6) - thousands * 1000)/ 100);
     let tens = Math.floor((num - billions * Math.pow(10,9) - millions * Math.pow(10,6) - thousands * 1000 - hundreds * 100) / 10);
     let ones = num - (billions * Math.pow(10,9) + millions * Math.pow(10,6) + thousands * 1000 + hundreds * 100 + tens * 10);
     
     // Change to a '-teen' word
     if (tens === 1 && ones > 0) {
         tens = 0;
         ones += 10;
     }
     
     const str = `${billions  ? numberToWords(billions).concat(' Billion ') : ''}${millions  ? numberToWords(millions).concat(' Million ') : ''}${thousands ? numberToWords(thousands).concat(' Thousand ') : ''}${hundreds  ? numberToWords(hundreds).concat(' Hundred ') : ''}${tens  ? getTensWord(tens).concat(' ') : ''}${ones ? numberToWords(ones) : ''}`.trim();
     
     return str;
 };


 const map = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',        
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
}

// Get the prefixes
const getHundreds = (num: number) => {
    let res = [];
    
    if (num >= 100) {
        const hundreds = Math.floor(num / 100);
        res.push(`${map[hundreds]} Hundred`);
        num = num % 100;
    }
    
    if (num < 20 && num > 10) {
        res.push(`${map[num]}`);
    } else {
        if (num >= 10) {
            const tens = Math.floor(num / 10);
            res.push(`${map[tens * 10]}`);
            num = num % 10;
        }
    
        if (num) {
            res.push(`${map[num]}`);
        }
    }
    
    return res.join(" ");
}

function numberToWords(num: number): string {
    // Create map to capture numbers from 100 and below - we'll use this later for our prefixes    
    if (!num) {
        return map[0];
    }
    
    // Use an array to store values since string concatenation is expensive
    // Also helps us deal with spaces better
    let res: string[] = [];
    
    // Get billions, millions, thousands and hundreds since these can be prefixed by a number from 0 < n < 1000
    const billions = Math.floor(num / Math.pow(10, 9));
    const millions = Math.floor((num % Math.pow(10,9)) / Math.pow(10,6));
    const thousands = Math.floor(((num % Math.pow(10,9)) % Math.pow(10,6)) / 1000);
    const digits = Math.floor((((num % Math.pow(10,9)) % Math.pow(10,6)) % 1000));
    
    if (billions) {
        res.push(`${getHundreds(billions)} ${'Billion'}`);
    }

    if (millions) {
        res.push(`${getHundreds(millions)} ${'Million'}`);
    }
    
    if (thousands) {
        res.push(`${getHundreds(thousands)} ${'Thousand'}`);
    }
    
    digits && res.push(`${getHundreds(digits)}`)
 
    return res.join(" ");
};
