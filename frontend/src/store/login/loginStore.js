import { Store } from 'pullstate'

export const initialLoginStore = {
    isLogin: false,
    loader: false,
    userData: {}
}

export const LoginStore = new Store({
    ...initialLoginStore
})