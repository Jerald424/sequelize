import { Container, HeadingText, Para, SubHeading, Switch } from 'components';
import { useColors } from 'customHooks/ColorsHook';
import React from 'react';

const Login = () => {
    const { toggleTheme } = useColors()
    const handleChange = (value) => {
        toggleTheme(value)
    }
    return (
        <Container>
            <Switch handleChange={handleChange} />
        </Container>
    );
}

export default Login;
