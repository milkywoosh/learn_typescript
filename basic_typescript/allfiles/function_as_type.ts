

function AdditionTest(n1: number, n2: number): void {
    console.log(n1 + n2)
}
// combineValues passing AdditionTest and become like AdditionTest that accept n1, n2 params
let combineValues;
combineValues = AdditionTest(10, 30)


// DEFINE FUNCTION WITH RETURN NUMBER FOR SP ECIFIC, and accept n1, n2 params


function TestAdd(a: number, b: number): number {
    return a + b;
}

// define function type
let GetDataCombineValue_1: (n1: number, n2: number) => number;
let GetDataCombineValue_2: (n1: number, n2: number) => number;
// assign with function with exact same type
GetDataCombineValue_1 = (n1, n2) => { return n1 + n2 };
GetDataCombineValue_2 = TestAdd;

console.log(GetDataCombineValue_1(10, 10))
console.log(GetDataCombineValue_2(100, 110))





