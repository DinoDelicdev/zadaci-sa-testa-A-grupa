let broj = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
let zbirCifara = 0;

let brojKaoString = broj.toString();

for (i = 0; i < brojKaoString.length; i++) {
    zbirCifara += Number(brojKaoString.charAt(i));
}

console.log(`Zbir cifara broja ${broj} je ${zbirCifara}.`);