import { Store } from "pullstate";

export const initialProfileStore = {
    data: {}
}

export const initialProfileSupport = {
    state: [],
    city: []
}

export const ProfileStore = new Store({
    ...initialProfileStore
})

export const ProfileSupportStore = new Store({
    ...initialProfileSupport
})