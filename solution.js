function spotSwaps(source, target) {
    // TODO: implement
    let result= -1;
    let found = false
    let foundStr =[]
    for(let i=0;i<source.length; i++) {
        if(source[i] === target[i]) {
            
        } else if(found==true && source[i] !== target[i] &&foundStr[1] !== source[i]) {
            result=-1
        } else if(result==-1) {
            if(source[i] ===target[i+1]&&source[i+1] ===target[i]) {
                result=i
                found=true
                foundStr[0]=source[i]
                foundStr[1]=target[i]  
            }
                i++
        }
    }
    return result
}

module.exports = { solution: spotSwaps };
