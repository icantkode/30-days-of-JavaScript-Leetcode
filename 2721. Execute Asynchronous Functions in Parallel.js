/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((res, rej) => {
        let retVal = new Array(functions.length); //

        for (let i = 0; i < functions.length; i++) {
            functions[i]().then(result => {
                let isRetValFull = true;
                retVal[i] = result
                for (let j = 0; j < functions.length; j++) { //
                    if (retVal[j] === null || retVal[j] === undefined) isRetValFull = false //
                }
                if (isRetValFull && retVal.length === functions.length) res(retVal) //
            }).catch(err => { rej(err) })
        }

    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */