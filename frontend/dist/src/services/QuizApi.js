export function getQuizData() {
    return fetch('/quiz', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(function (r) { return r.json(); });
}
var xhr = new XMLHttpRequest();
export function createAccount(username, email, password) {
    var data = 'name=' + username + '&email=' + email + '&password=' + password;
    xhr.open('POST', 'http://localhost:8080/add', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}
export function login(username, password) {
    // login
}
export function submitQuiz(createQuizData) {
    xhr.open('POST', 'http://localhost:8080/add-quiz', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(createQuizData);
}
//# sourceMappingURL=QuizApi.js.map