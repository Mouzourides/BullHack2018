"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQuizData() {
    return fetch('/quiz', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(function (r) { return r.json(); });
}
exports.getQuizData = getQuizData;
var xhr = new XMLHttpRequest();
function createAccount(username, email, password) {
    var data = 'name=' + username + '&email=' + email + '&password=' + password;
    xhr.open('POST', 'http://localhost:8080/add', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}
exports.createAccount = createAccount;
function login(username, password) {
    // login
}
exports.login = login;
function submitQuiz(createQuizData) {
    xhr.open('POST', 'http://localhost:8080/add-quiz', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(createQuizData);
}
exports.submitQuiz = submitQuiz;
