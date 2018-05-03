function Censor (str, arr){
    let newStr = "";
    for (let char = 0; char<str.length; char++)
    {
        let match = false;
        for(let i=0; i<arr.length;i++)
        {
            if(str[char] == arr[i][0])
            {
                for(let check = 0; check< arr[i].length; check++)
                {
                    if(str[char+check] != arr[i][check])
                    {
                        break;
                    }
                    else if( check == arr[i].length-1){
                        let exes = "";
                        match = true;
                        for(let x = 0; x<arr[i].length; x++)
                        {
                            exes += "X"
                            char++;
                        }
                        newStr += exes
                    }
                }
            }
        }
        if(!match){
            newStr += str[char]
        }
    }
    return newStr;
}

console.log(Censor("snap, crackle, nincompoop", ["poop", "crackle"]));