"use strict";
let customData = 10;
console.log(customData);
function GetType(arg, arg1) {
    if (arg === "DANGER") {
        return arg1 + " okay";
    }
    else {
        return false;
    }
}
console.log(GetType("DANGER", "ben"));
