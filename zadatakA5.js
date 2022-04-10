let broj = 19;
let sekvenca = [broj];

while (broj !== 1) {

    if (broj % 2 === 1) {
        broj = 3 * broj + 1;
        sekvenca.push(broj);
    } 
    if (broj % 2 === 0) {
        broj /= 2;
        sekvenca.push(broj);
    }
}
console.log(`Hailstone sekvenca za broj ${sekvenca[0]} je ${sekvenca.join(' ')}`);
