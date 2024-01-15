/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
function flat(arr, n) {
    if (n === 0) return arr
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            let befArr = arr.slice(0, i)
            let mergedArr = befArr.concat(arr[i])
            let befLen = arr.length;
            arr = mergedArr.concat(arr.slice(i+1, arr.length))
            let aftLen = arr.length;
            i += (aftLen - befLen)
        }
    }
    return flat(arr, n-1)
};