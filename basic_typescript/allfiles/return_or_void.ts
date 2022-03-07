
// RETURN SOMETHING
function addNumber(n1: number, n2: number): number {
    return n1 + n2;
}

// NO RETURN or VOID
function printResult(num: number): void {
    console.log("resturn: ", num);
}

printResult(10)


function getArray(arr1: number[], n:number):number[] {
    let modArr:number[] = [];
    for (let i=0; i<arr1.length; i++) {
        modArr.push(arr1[i]*n)
    }
    return modArr;
}

console.log(getArray([1,2,3], 2))