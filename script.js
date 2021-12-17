
// Callback - 1
var person = {
    "name": "Piotr",
    "lastname": "Jeka",
    "age": 22,
    "details": {
        "phonenumber": 123123123,
        "address": {
            "Town": "Gdynia",
            "Street": "Tuwima",
            "HouseNumber": 6,
        }
    }
}

// Callback Task 1
function callBackTask1(callback) {
    var wiek = person.age;
    var numerdomu = person.details.address.HouseNumber;
    callback(wiek, numerdomu);
}

function dodawanie(num1, num2) {
    console.log("Wynik dodawania: " + (num1 + num2));
}

callBackTask1(dodawanie);
// End of Callback Task 1

// Callback Task 2
function callBackTask2(callback) {
    var name = person.name;
    var nameStreet = person.details.address.Street;
    callback(name, nameStreet);
}

function laczenieString(num1, num2) {
    const text = `${num1} ${num2}`
    console.log(text);
}

callBackTask2(laczenieString);
// End of Callback Task 2
// End of Callback - 1

// Promise - 2
// Promise Task 1
fetch('https://jsonplaceholder.typicode.com/todos/4')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        var mypromise = new Promise((resolve, reject) => {
            if (myJson.completed) {
                resolve("Todo completed");
            } else {
                reject("Todo still going");
            }
        });

        mypromise.then((message) => {
            console.log(message + "! userId + id = " + (myJson.userId + myJson.id));
        }).catch((message) => {
            console.log(message);
        }).finally(() => console.log("Zad 2.1 - Fully Done"));

    })
// End of Promise Task 1

// Promise Task 2
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        var mypromise = new Promise((resolve, reject) => {
            if (myJson.address.city == "Gwenborough") {
                resolve("From Gwenborough");
            } else {
                reject("From somewhere else");
            }
        });

        mypromise.then((message) => {
            console.log(message + "!");
            const person = {
                name: myJson.name,
                website: myJson.website
            };
            console.log(person);
        }).catch((message) => {
            console.log(message);
        }).finally(() => console.log("Zad 2.2 - Fully Done"));
    })
// End of Promise Task 2
// End of Promise - 2

// async/await - 3
//  Async/await Task 1
function dodawanieAsync(num1, num2) {
    console.log("Wynik dodawania await: " + (num1 + num2));
}

async function asyncAwait(link) {
    let response = await fetch(link);
    if (response.ok) {
        JsonObject = await response.json();
        userId = JsonObject.userId;
        id = JsonObject.id;
        dodawanieAsync(userId, id);
    }
}
asyncAwait('https://jsonplaceholder.typicode.com/todos/4');
// end of Async/await Task 1

//  Async/await Task 2
function objectAsync(n, w) {
    const person = {
        name: n,
        website: w
    };
    console.log("Obiekt await: ")
    console.log(person);
}

async function asyncAwait2(link) {
    let response = await fetch(link);
    if (response.ok) {
        JsonObject = await response.json();
        nameJ = JsonObject.name;
        website = JsonObject.website;
        objectAsync(nameJ, website);
    }
}
asyncAwait2('https://jsonplaceholder.typicode.com/users/1');
// end of Async/await Task 2
// end of async/await - 3

// Ajax - 4
// Ajax Task 1
function dodawanieAjax(num1, num2) {
    console.log("Wynik dodawania ajax: " + (num1 + num2));
}
let xmlRequest = new XMLHttpRequest();
xmlRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/4');
xmlRequest.responseType = 'json';
xmlRequest.send();

xmlRequest.onload = function () {
    let response = xmlRequest.response;
    id = response.id;
    userId = response.userId;
    dodawanieAjax(id, userId);
};
xmlRequest.onerror = function () {
    console.log("Zad 4.1 - Error occured");
}
// end of Ajax Task 1

// Ajax Task 2
function objectAjax(n, w) {
    const person = {
        name: n,
        website: w
    };
    console.log("Obiekt ajax: ")
    console.log(person);
}
let xmlRequest2 = new XMLHttpRequest();
xmlRequest2.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
xmlRequest2.responseType = 'json';
xmlRequest2.send();

xmlRequest2.onload = function () {
    let response = xmlRequest2.response;
    nameJ = response.name;
    website = response.website;
    objectAjax(nameJ, website);
};
xmlRequest2.onerror = function () {
    console.log("Zad 4.2 - Error occured");
}
// end of Ajax Task 2

// end of Ajax - 4

// fetch - 5

// fetch Task 1
function dodawaniefetch(num1, num2) {
    console.log("Wynik dodawania fetch: " + (num1 + num2));
}

fetch('https://jsonplaceholder.typicode.com/todos/4')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        dodawaniefetch(myJson.id, myJson.userId);
    })
// end of fetch Task 1

// fetch Task 2
function objectFetch(n, w) {
    const person = {
        name: n,
        website: w
    };
    console.log("Obiekt fetch: ")
    console.log(person);
}
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        objectFetch(myJson.name, myJson.website);
    })
// end of fetch Task 2
// end of fetch - 5

// axios - 5

// axios Task 1
function dodawanieAxios(num1, num2) {
    console.log("Wynik dodawania Axios: " + (num1 + num2));
}

axios.get('https://jsonplaceholder.typicode.com/todos/4')
    .then((myJson) => {
        dodawanieAxios(myJson.data.id, myJson.data.userId);
    })
// end of axios Task 1

// axios Task 1
function obiektAxios(n, w) {
    const person = {
        name: n,
        website: w
    };
    console.log("Obiekt axios: ")
    console.log(person);
}
axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then((myJson) => {
        obiektAxios(myJson.data.name, myJson.data.website);
    })
// end of axios Task 1
// end of axios - 5


