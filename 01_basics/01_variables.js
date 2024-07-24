const accountId = 337755
let accountEmail = "ninad@gmail.com"
var accountPassword = "12345"
accountCity = "Amravati"

// accountId = 2  Not Allowed

accountEmail = "hc@jc.com"
accountPassword = "245584"
accountCity = "Pune"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/




console.table([accountId, accountEmail, accountPassword, accountCity, accountState])