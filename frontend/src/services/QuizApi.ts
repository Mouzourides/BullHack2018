import {House} from '../components/RentSwiper/RentSwiperActionReducer';

export function getHouseData(): Promise<House[]> {
    return fetch('/bullhack2018/house/all', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((r) => r.json());
}

// const xhr = new XMLHttpRequest();
//
// export function getHouses() {
//     xhr.open('GET', 'http://localhost:8080/add', true);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhr.send(data);
// }

// export function login(username: string, password: string) {
//     // login
// }
//
// export function submitQuiz(createQuizData: RentData) {
//     xhr.open('POST', 'http://localhost:8080/add-quiz', true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.send(createQuizData);
// }
