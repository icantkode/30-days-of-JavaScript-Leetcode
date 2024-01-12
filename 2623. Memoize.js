/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memo = new Map();
    return function (...args) {
        let input = args;
        if (memo.has(input.toString())) {
            return memo.get(input.toString())
        }
        let resultToStore = fn(...args)
        memo.set(input.toString(), resultToStore);
        return resultToStore
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */