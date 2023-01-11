import { Container, SubHeading } from 'components';
import useToast from 'customHooks/useToast';
import React, { useEffect } from 'react';
import AxiosInstance from 'service/AxiosInstance';
import { LoginStore } from 'store/login/loginStore';
import { ProfileStore } from 'store/profile/ProfileStore';
import _ from 'lodash';

const Index = () => {
    const { userData } = LoginStore.useState();
    const { data } = ProfileStore.useState();

    const showToast = useToast();
    useEffect(() => {
        _.isEmpty(data) && AxiosInstance.get('/profile')
            .then(res => ProfileStore.update(s => {
                s.data = res
            }))
            .catch(err => showToast(err, 'warn'))
    }, [])
    return (
        <Container>
            <SubHeading>Dashboard</SubHeading>
        </Container>
    );
}

export default Index;
