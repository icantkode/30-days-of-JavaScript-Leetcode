/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let prevCallReach;
    let oldTID;
    return function (...args) { //debounced version
        if ((prevCallReach !== undefined && oldTID !== undefined) && new Date() < prevCallReach) {
            clearTimeout(oldTID)
        }
        prevCallReach = new Date()
        prevCallReach.setSeconds(prevCallReach.getSeconds() + t)
        oldTID = setTimeout(() => { fn(...args) }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */