type Combinable = number;
type ConversionDescriptor = "DANGER" | "FIERCE"

let customData: string | Combinable = 10
console.log(customData)

function GetType(arg: ConversionDescriptor, arg1: string): boolean | string {
    if (arg === "DANGER") {
        return arg1 + " okay"
    } else {
        return false
    }
}

console.log(GetType("DANGER", "ben"))