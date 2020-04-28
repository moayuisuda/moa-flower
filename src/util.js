function isObj(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

function isComplecated(obj) {
    return obj instanceof Object;
}

function randomIn(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

function randomInDouble(min, max) {
    return function() {
        return (Math.random() * (max - min + 1) + min);
    }
}

export {randomIn, randomInDouble}