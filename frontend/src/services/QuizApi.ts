//
// export function getQuizData(): Promise<QuizData> {
//     return fetch('/quiz', {
//         credentials: 'include',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//     })
//         .then((r) => r.json());
// }
//
// const xhr = new XMLHttpRequest();
//
// export function createAccount(username: string, email: string, password: string) {
//     const data: string = 'name=' + username + '&email=' + email + '&password=' + password;
//     xhr.open('POST', 'http://localhost:8080/add', true);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhr.send(data);
// }
//
// export function login(username: string, password: string) {
//     // login
// }
//
// export function submitQuiz(createQuizData: HomeData) {
//     xhr.open('POST', 'http://localhost:8080/add-quiz', true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.send(createQuizData);
// }
