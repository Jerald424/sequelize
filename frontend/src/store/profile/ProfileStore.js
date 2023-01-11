import { Store } from "pullstate";

export const initialProfileStore = {
    data: {}
}

export const ProfileStore = new Store({
    ...initialProfileStore
})