const accountId = 14435
let accountEmail = "anku@google.com"
var accountPassword = "12345"
accountCity = "Pune"

// accountId = 2    //not allowed her
console.log("accountId");
accountEmail = "an@an.com"
accountPassword = "23432"
accountCity = "Mumbai";
let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/* 
Prefer not to use var bcoz of issue in block scope
 and functional scope
*/