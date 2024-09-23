const accountId = 144553;
let accountName = "Anjali";
var emailId = "anjali@google.com";
accountCity = "Ludhiana";

// accountId = 521352;

/*
    Prefer not to use Var Keyword
    because of issue in block scope and functional scope.
*/ 

emailId = "gagneja@123.com";
accountCity = "New York";
accountName = "Anjali Gagneja";

console.table([accountId, emailId, accountName, accountCity]);