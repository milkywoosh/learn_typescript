"use strict";
var MarkingGoods;
(function (MarkingGoods) {
    MarkingGoods[MarkingGoods["SOLD"] = 0] = "SOLD";
    MarkingGoods[MarkingGoods["BOOKED"] = 1] = "BOOKED";
    MarkingGoods[MarkingGoods["ONSALE"] = 2] = "ONSALE";
})(MarkingGoods || (MarkingGoods = {}));
;
const data = {
    name: 'car',
    weight: 100,
    explosive: true,
    mark: MarkingGoods.SOLD,
};
if (data.mark === MarkingGoods.SOLD) {
    console.log(data);
}
