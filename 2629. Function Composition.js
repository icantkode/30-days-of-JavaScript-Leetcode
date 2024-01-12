/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (fns) {
    return function (x) {
        if (fns.length === 0) return x;

        let temp = fns[fns.length - 1](x);

        for (let i = fns.length - 2; i >= 0; i--) {
            temp = fns[i](temp);
        }
        return temp;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */