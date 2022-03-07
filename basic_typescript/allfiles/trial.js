function AdditionTest(n1, n2) {
    console.log(n1 + n2);
}
// combineValues passing AdditionTest and become like AdditionTest that accept n1, n2 params
var combineValues;
combineValues = AdditionTest(10, 30);
// DEFINE FUNCTION WITH RETURN NUMBER FOR SP ECIFIC, and accept n1, n2 params
function TestAdd(a, b) {
    return a + b;
}
// define function type
var GetDataCombineValue_1;
var GetDataCombineValue_2;
// assign with function with exact same type
GetDataCombineValue_1 = function (n1, n2) { return n1 + n2; };
GetDataCombineValue_2 = TestAdd;
console.log(GetDataCombineValue_1(10, 10));
console.log(GetDataCombineValue_2(100, 100));
