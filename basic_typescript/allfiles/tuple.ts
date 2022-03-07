// define type with specific element type and amount element in array
type asTuple = [number, number, number]

let tupleOfArray: asTuple;
tupleOfArray = [1, 2, 3]


let arr_multi_types: [number, string];

arr_multi_types = [1, 'one'];

for (const data of arr_multi_types) {
    console.log(data);
}