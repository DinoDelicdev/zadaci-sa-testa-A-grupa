let matrica4x5 = [];
let neparniBrojeviUMatrici = [];

for (i = 0; i < 4; i++) {
    let redMatrice = [];
    for (j = 0; j < 5; j++) {
        let brojUMatrici = Math.floor(11 + Math.random() * (21 - 11));
        redMatrice.push(brojUMatrici);
        if (brojUMatrici % 2 === 1) {
            neparniBrojeviUMatrici.push(brojUMatrici);
        }
    }
    matrica4x5.push(redMatrice);
}

console.log(matrica4x5);
console.log(neparniBrojeviUMatrici);