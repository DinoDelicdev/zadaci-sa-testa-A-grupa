let niz = [4, 3, 1, 5, 6, 8, 4, 2, 1, 4, 3, 5, 6, 1];
let nizUnikatnihBrojeva = [];

for (i = 0; i < niz.length; i++) {
    if (niz.indexOf(niz[i]) === i) {
        nizUnikatnihBrojeva.push(niz[i]);
    }
}

console.log(nizUnikatnihBrojeva);