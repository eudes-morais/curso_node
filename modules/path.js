const path = require('path');

// Basename
console.log(path.basename(__filename));

// Dirname
console.log(path.dirname(__filename));

// EXtensão de arquivo
console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.join(__dirname,'teste','teste.html'));