import { HeadingText } from "components";
import { useEffect } from "react";
import { LoginStore } from "store/login/loginStore";
import { getCity, getState } from "./apicalls";

export default function Index() {
    const { userData, roles } = LoginStore.useState()
    const admin = roles?.filter(res => res?.id === userData?.role_id)?.[0];

    useEffect(() => {
        getCity()
        getState()
    }, [])
    return (
        <div>
            <HeadingText>Profile</HeadingText>
        </div>
    )
}