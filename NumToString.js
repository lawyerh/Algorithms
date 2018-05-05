const ones = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine"
}
const tens = {
    1 : {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    },
    2 : "twenty",
    3 : "thirty",
    4 : "fourty",
    5 : "fifty",
    6 : "sixty",
    7 : "seventy",
    8 : "eighty",
    9 : "ninety"
}

function NumToText(num)
{
    if(Math.floor(num).toString().length > 9)
    {
        return "Invalid Number"
    }
    else
    {
        let newStr = ""
        if(num < 0)
        {
            newStr += "negative ";
            num = Math.abs(num);
        }
        if (num == 0)
        {
            return "zero"
        }
        else
        {
            while(num > 0)
            {
                let str = num.toString();
                if(str.length > 6)
                {
                    // let window = PrintDigitToPlace(Math.floor(num/1000000))
                    newStr += PrintDigitToPlace(Math.floor(num/1000000)) + " million "
                    num %= 1000000
                }
                else if(str.length < 7 && str.length > 3)
                {
                   
                    newStr += PrintDigitToPlace(Math.floor(num/1000)) + " thousand "
                    
                    num %= 1000;
                }
                else
                {
                    newStr += PrintDigitToPlace(num)
                    num = 0;
                }
            }
            return newStr
        }
    }
}

function PrintDigitToPlace(num)
{
    console.log(num)
    let printedDigit = "";
    while(num > 0)
    {
        let places = num.toString().length;
        if(places == 3)
        {
            printedDigit += ones[Math.floor(num/100)] + " hundred "
            num %= 100;
            if(num < 10 && num > 0)
            {
                printedDigit += " and "
            }
        }
        if(places == 2)
        {
            if(num < 20 && num > 9)
            {
                printedDigit += tens[1][num]
                num = 0;
            }
            else
            {
                printedDigit += tens[Math.floor(num/10)] + "-"
                num %= 10;
            }
        }
        if(places == 1)
        {
            printedDigit += ones[num]
            num = 0;
        }
    }
    return printedDigit;
}

// console.log(NumToText(5))
// console.log(NumToText(40))
// console.log(NumToText(177))
// console.log(NumToText(11))
console.log(NumToText(0))