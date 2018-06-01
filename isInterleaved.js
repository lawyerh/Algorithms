function isInterleaved (str1, str2, str3){
    let charDict = {};
    let temp = str1.concat(str2);
    for(let idx=0; idx < temp.length; idx++){
        if(!charDict[temp[idx]]){
            charDict[temp[idx]] = 1;
        }
        else {
            charDict[temp[idx]];
        }
    }
    for(let idx = 0; idx < str3.length; idx++) {
        if(!charDict[str3[idx]]){
            return false;
        }
        else {
            charDict[str3[idx]]--;
            if(charDict[str3[idx]] == 0)
            {
                delete charDict[str3[idx]];
            }
        }
    }
    return true;
}

console.log(isInterleaved("dne", "ail", "daniell"));