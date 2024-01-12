/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => {
        let rA = fn(a)
        let rB = fn(b)
        let max = Math.max(rA, rB)
        if(rA === max && rB === max) return 0
        else if (rA === max) return 1
        return -1
    })
};