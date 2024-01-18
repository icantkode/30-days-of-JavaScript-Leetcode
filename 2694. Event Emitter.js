class EventEmitter {
    constructor() {
        this.strg = new Map();
    }
    subscribe(eventName, callback) {
        let getArray = this.strg.get(eventName)
        if (getArray !== undefined) {
            getArray.push(callback)
            this.strg.set(eventName, getArray)
        } else {
            this.strg.set(eventName, [callback])
        }

        return {
            unsubscribe: () => {
                let callBackArray = this.strg.get(eventName)
                let idx = callBackArray.indexOf(callback)
                callBackArray.splice(idx, 1)
                this.strg.set(eventName, callBackArray)
            }
        };
    }
    emit(eventName, args = []) {
        let callBackArray = this.strg.get(eventName)
        let resultArray = [];
        if (callBackArray === null || callBackArray === undefined) return resultArray
        else callBackArray.forEach(fn => resultArray.push(fn(...args)))
        return resultArray
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */