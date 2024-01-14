/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let retArr = [...arr1]
    console.log(retArr)
    for (let itr = 0; itr < arr2.length; itr++) {
        let findObj = retArr.find(x => x.id === arr2[itr].id)
        if (findObj !== undefined) {
            let index = retArr.indexOf(findObj)
            let merged = {}
            for (key in findObj) {
                merged[key] = findObj[key]
            }
            for (key in arr2[itr]) {
                merged[key] = arr2[itr][key]
            }
            retArr[index] = merged
        } else {
            retArr.push(arr2[itr])
        }
    }

    sortBy(retArr, elem => { return elem.id })
    return retArr
};

function sortBy(arr, fn) {
    return arr.sort((a, b) => {
        let rA = fn(a)
        let rB = fn(b)
        let max = Math.max(rA, rB)
        if (rA === max && rB === max) return 0
        else if (rA === max) return 1
        return -1
    })
};