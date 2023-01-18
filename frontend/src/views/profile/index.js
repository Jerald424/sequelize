import { HeadingText } from "components";
import { useEffect } from "react";
import { LoginStore } from "store/login/loginStore";
import { getCity, getState } from "./apicalls";
import CityState from "./CityState";
import "styles/profile.css";

export default function Index() {
    const { userData, roles } = LoginStore.useState();
    const role = roles?.filter(res => res?.id === userData?.role_id)?.[0];
    console.log('___________', role)

    useEffect(() => {
        getCity()
        getState()
    }, [])
    return (
        <div>
            {
                role?.name === 'admin' && <CityState />
            }
            <HeadingText>Profile</HeadingText>
        </div>
    )
}