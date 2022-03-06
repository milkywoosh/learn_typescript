function AdditionTest(n1: number, n2: number): void {
    console.log(n1+n2)
}
// combineValues passing AdditionTest and become like AdditionTest that accept n1, n2 params
let combineValues;
combineValues = AdditionTest(10, 30)


// DEFINE FUNCTION WITH RETURN NUMBER FOR SPECIFIC, and accept n1, n2 params
let FuncWithReturnNumber : (n1: number, n2: number) => number = ()=> {
    return 10
}

console.log(FuncWithReturnNumber(300, 300))


