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
        .then((r) => r.json());
}
exports.getQuizData = getQuizData;
//# sourceMappingURL=QuizApi.js.map