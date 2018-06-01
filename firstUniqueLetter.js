function firstUniqueLetter(str) {
    let dict = {}
    for(let idx = 0; idx < str.length; idx++){
        if(dict[str[idx]] === " ") // spaces don't count, skip them.
        {
            continue;
        }

        if(!dict[str[idx]]){
            dict[str[idx]] = [1, idx]; // if we haven't found that character, add it, and its position
        }
        else {
            dict[str[idx]][0]++; // if we have found it, increment it's total so we know it isn't unique
        }
    }
    console.log(dict);
    let minIdx = false;
    for(let key in dict) { // loop through all dict and check for single occurrence characters
        if(dict[key][0] == 1){
            if(!minIdx){
                minIdx = dict[key][1];
            }
            else {
                if(minIdx > dict[key][1]){ // if this character occurred before whichever one we've found previously, save it
                    minIdx = dict[key][1];
                }
            }
        }
    }
    return minIdx;
}
let str = "hello my name is lawyer and I am writing an obnoxiously large string to test this algorithm."
console.log(firstUniqueLetter(str));