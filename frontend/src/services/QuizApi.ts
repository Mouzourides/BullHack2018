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

export function getSwiperData(): Promise<House[]> {
    return fetch('/bullhack2018/swiper/all', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((r) => r.json());
}

export function sendSwiper(userId: number, houseId: number, match: boolean) {
    const xhr = new XMLHttpRequest();
    const data: string = 'userId=' + userId + '&houseId=' + houseId + '&match=' + match;
    xhr.open('POST', '/bullhack2018/swiper/add', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}

export function sendHouse(address: string, photo: string, description: string,
                          latitude: number, longitude: number, price: number) {
    const xhr = new XMLHttpRequest();
    const data: string = 'address=' + address + '&photo=' + photo + '&description=' + description
    + '&latitude=' + latitude + '&longitude=' + longitude + '&price=' + price;
    xhr.open('POST', '/bullhack2018/house/add', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}
