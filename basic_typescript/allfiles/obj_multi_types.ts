type definedType = {
    name: string;
    age: number;
    assets: {
        car: string,
        gold: number
    };
    nationality: string[];
}


let data_obj: definedType = {
    name: 'john',
    age: 10,
    assets: {
        car: 'ferrari',
        gold: 100
    },
    nationality: ['ind', 'eng'],
}

let emptyObj: definedType;


function edit_nationality(obj: (definedType | boolean)) {
    if (!obj) {
        return false
    }
    return obj
}


data_obj = {
    ...data_obj, age: 12, assets: {
        ...data_obj.assets,
        car: 'lambo',
        gold: 500,
    }
}
// console.log(data_obj);

let result: any = edit_nationality(emptyObj);
let result1: any = edit_nationality(data_obj);
console.log(result)
console.log(result1)