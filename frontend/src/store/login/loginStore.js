import { Store } from 'pullstate'
import AxiosInstance from 'service/AxiosInstance'

export const initialLoginStore = {
    isLogin: false,
    loader: false,
    userData: {},
    roles: []
}

export const LoginStore = new Store({
    ...initialLoginStore
})

export const getRole = () => {
    AxiosInstance.get('role')
        .then(res => LoginStore.update(s => {
            s.roles = res
        }))
        .catch(err => Promise.reject(err))
}