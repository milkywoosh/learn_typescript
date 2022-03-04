var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var data_obj = {
    name: 'john',
    age: 10,
    assets: {
        car: 'ferrari',
        gold: 100
    },
    nationality: ['ind', 'eng']
};
var emptyObj;
function edit_nationality(obj) {
    if (!obj) {
        return false;
    }
    return obj;
}
data_obj = __assign(__assign({}, data_obj), { age: 12, assets: __assign(__assign({}, data_obj.assets), { car: 'lambo', gold: 500 }) });
// console.log(data_obj);
var result = edit_nationality(emptyObj);
var result1 = edit_nationality(data_obj);
console.log(result);
console.log(result1);
