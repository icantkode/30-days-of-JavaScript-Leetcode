/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {

    let retObj= {};
    for (let i = 0; i < this.length; i++) {
        let temp = fn(this[i])
        if (!retObj.hasOwnProperty(temp + "")) retObj[temp + ""] = new Array()
        retObj[temp + ""].push(this[i])
    }
    return retObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
