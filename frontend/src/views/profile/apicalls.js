import AxiosInstance from "service/AxiosInstance"

export const getCity = () => new Promise(function (response, reject) {
    AxiosInstance.get('city')
        .then(res => console.log('res', res))
        .catch(err => console.log('err', err))
})

export const getState = () => new Promise(function (response, reject) {
    AxiosInstance.get('state')
        .then(res => console.log('res', res))
        .catch(err => console.log('err', err))
})