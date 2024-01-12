var TimeLimitedCache = function () {
    this.prototype = { cache: new Map() }
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let isExpired = this.prototype.cache.get(key)
    let doesExist = this.prototype.cache.has(key)

    if (doesExist) clearTimeout(this.prototype.cache.get(key).timeout)

    let timerID = setTimeout(() => { this.prototype.cache.get(key).isExpired = true }, duration)

    this.prototype.cache.set(key, { val: value, isExpired: false, timeout: timerID });

    if (doesExist && isExpired && !isExpired.isExpired) return true
    return false

};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.prototype.cache.has(key) && !this.prototype.cache.get(key).isExpired)
        return this.prototype.cache.get(key).val
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let count = 0;
    let valArr = Array.from(this.prototype.cache.values())
    for (let i = 0; i < valArr.length; i++) {
        if (!valArr[i].isExpired) count++;
    }
    console.log(valArr)
    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */