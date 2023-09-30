const accountId = 14456;
let accountEmail = "kevinasangasd@gmail.com"
var accountPassword = "123456"
accountCity = "Surat"

/* 
Prefer not to use var bcz of block scope and functional scope
*/

// accountId = 2 // not allowed
console.log(accountId)


accountEmail = "k@gmail.com"
accountPassword = "124423"
accountCity = "bangluru"

console.table([accountId, accountEmail, accountPassword, accountCity]) 