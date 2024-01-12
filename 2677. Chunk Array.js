/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let resArr = [];
    for (let i = 0; i < arr.length;){
        resArr.push(arr.slice(i, i+size))
        i+=size;
    }
    return resArr
};
