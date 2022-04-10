let proizvoljanString = 'Carpe Diem';
let stringKaoNiz = [];

for (i = 0; i < proizvoljanString.length; i++) {
    if (proizvoljanString.charAt(i) === 'a' || proizvoljanString.charAt(i) === 'e' || proizvoljanString.charAt(i) === 'i' || proizvoljanString.charAt(i) === 'o' || proizvoljanString.charAt(i) === 'u') {
        stringKaoNiz.push('-');
        stringKaoNiz.push(proizvoljanString.charAt(i));
        stringKaoNiz.push('-');
    } else {
        stringKaoNiz.push(proizvoljanString.charAt(i));
    }

}
//U slucaju da treba izbjegavati blank-space uncomment kod ispod

/*for (i = 0; i < stringKaoNiz.length; i++) {
    if (stringKaoNiz[i] === ' ') {
        stringKaoNiz.splice(i, 1);
    }
}*/


//console.log(stringKaoNiz);
let stringSaCrticama = stringKaoNiz.join('');
console.log(stringSaCrticama);