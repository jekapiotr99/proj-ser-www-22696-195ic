/* Zad 1 */
console.log("Zadanie 1");
function countWord(text) {
    return text.trim().split(/\s+/).length;
}
var person = prompt("Napisz zdanie:", "");
if (person.length < 1) {
    console.log("nie mam co liczyć")
} else {
    console.log("Tekst '" + person + "' składa się z " + countWord(person) + " słów.");
}

/* Zad 2 */
console.log("\nZadanie 2");
function fixName(imie) {
    firstLetter = imie.substring(0, 1);
    return firstLetter.toUpperCase() + imie.substring(1).toLowerCase();
}
var imie = prompt("Podaj imię:", "");
if (imie.length < 1) {
    console.log("nic nie wpisano")
} else {
    console.log("Imię " + fixName(imie) + " rozpoczyna się od litery " + fixName(imie)[0]);
}

/* Zadanie 3 */
console.log("\nZadanie 3");
function fileInfo(file) {
    fileArray = file.split(".");
    if (fileArray.length == 1) {
        return false;
    }
    var Plik = {
        name: fileArray[0],
        extension: fileArray[1]
    }
    return Plik;
}
var file = prompt("Podaj pełną nazwę pliku:", "");
var Plik = fileInfo(file);
console.log(Plik);

/* Zadanie 4 */
console.log("\nZadanie 4");
function generateID() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 20; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
console.log(generateID());

/* Zadanie 5 */
console.log("\nZadanie 5");
function printNumbers(num) {
    var result = '';
    for (var i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}
var number = prompt("Podaj liczbę:", "");
console.log(printNumbers(number));

/* Zadanie 6 */
console.log("\nZadanie 6");
function months(imie, miesiac) {
    miesiac = miesiac.toLowerCase();
    switch (miesiac) {
        case "grudzien":
        case "styczen":
        case "luty":
            var result = fixName(imie) + " jezdzi na sankach";
            break;
        case "marzec":
        case "kwiecien":
        case "maj":
            var result = fixName(imie) + " chodzi po kaluzach";
            break;
        case "czerwiec":
        case "lipiec":
        case "sierpien":
            var result = fixName(imie) + " sie opala";
            break;
        case "wrzesień":
        case "pazdziernik":
        case "listopad":
            var result = fixName(imie) + " zbiera liscie";
            break;
        default:
            var result = fixName(imie) + " uczy się JS";
            break;
    }
    console.log(result);
}
var imie2 = prompt("Podaj imie:", "");
var miesiac = prompt("Podaj miesiac:", "");
months(imie2, miesiac)

/* Zadanie 7 */
console.log("\nZadanie 7");
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let array = [];
var amountOfNumbers = 10;
for (var i = 0; i < amountOfNumbers; i++) {
    array[i] = generateRandom(1, 20);
}
console.log(array);
var count = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] > 10) {
        count += 1;
    }
}
if (count >= Math.floor(amountOfNumbers / 2)) {
    console.log("Udało się");
} else {
    console.log("Niestety nie");
}
/* Zadanie 8 */
console.log("\nZadanie 8");
function generateRandomTable(min, max, count) {
    let array = [];
    for (var i = 0; i < count; i++) {
        array[i] = generateRandom(min, max);
    }
    return array;
}
let array2 = generateRandomTable(10, 100000, amountOfNumbers);
for (var i = 0; i < amountOfNumbers; i++) {
    console.log(array2[i].toString().padStart(10, '_'));
}

/* Zadanie 9 */
console.log("\nZadanie 9");
var str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
function separateAndReorder(str, char) {
    strArray = str.split(char);
    strArray.sort();
    return strArray.join(char);
}
console.log(separateAndReorder(str, "|"));