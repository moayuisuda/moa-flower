function isObj(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

function isComplete(obj) {
    return obj instanceof Object;
}