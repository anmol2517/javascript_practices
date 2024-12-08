const accountId = 2468
let accountEmail = "anmol@gmail.com"
var accountPassword = "2510"
accountCity = "Siwan"  //  -->> Variable Declearion

//  accountId = 2222  -->> Not Allowed - error

console.log([accountId, accountEmail, accountPassword, accountCity]);

accountEmail = "aum@gmail.com"
accountPassword = "1710"
accountCity = "Pune"

let accountState;   //  -->>   Underfined show

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
        Prefer not to use 'var'
        because of issue in block scope and functional scope
*/
