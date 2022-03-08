// never is another type for return function

//  this function WILL NOT AND NEVER GIVE RETURN ANYTHING
function generateError(message: string, code: number): never {
    throw { message: message, errroCode: code };
}

generateError('error', 500); 
// Technically this will be shown in console log browser as ERROR WARNING


// CANNOT USE CONSOLE.LOG( ) for that function 