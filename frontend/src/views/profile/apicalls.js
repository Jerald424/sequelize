import AxiosInstance from "service/AxiosInstance"
import { ProfileSupportStore } from "store/profile/ProfileStore"

export const getCity = () => new Promise(function (response, reject) {
    AxiosInstance.get('city')
        .then(res => ProfileSupportStore.update(s => {
            s.city = res?.rows
        }))
        .catch(err => reject('City ' + err))
})

export const getState = () => new Promise(function (response, reject) {
    AxiosInstance.get('state')
        .then(res => ProfileSupportStore.update(s => {
            s.state = res?.rows
        }))
        .catch(err => reject('State ' + err))
})