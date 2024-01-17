/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    let retObj = (obj instanceof Array) ? [] : {};
    console.log('called on obj: ', obj, ', retObj: ', retObj)
    for (let item in obj) {
        if (obj[item] instanceof Object) {
            console.log('calling on obj', obj[item])
            let result = compactObject(obj[item])
            if (result !== null || result !== undefined){
                if(obj instanceof Array) retObj.push(result)
                else retObj[item] = result
            }
        }
        else if (obj[item]) {
            if (obj instanceof Array) retObj.push(obj[item])
            else retObj[item] = obj[item]
        }
    }
    console.log('returning: ',retObj)
    return retObj;
};