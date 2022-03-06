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
var tupleOfArray;
var peopleInfo;
tupleOfArray = [1, 2, 3];
peopleInfo = {
    name: "ben",
    salary: 1000,
    assets: {
        car: "ferrari",
        gold: 200
    },
    nationality: null
};
// update object
peopleInfo = __assign(__assign({}, peopleInfo), { assets: __assign(__assign({}, peopleInfo.assets), { car: "sigra", gold: 5 }) });
console.log(peopleInfo);
