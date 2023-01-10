import { Container, HeadingText, Icon, Para, SubHeading, Switch } from 'components';
import { useColors } from 'customHooks/ColorsHook';
import React, { useState } from 'react';
import { BiLockOpenAlt, BiUser } from 'react-icons/bi';
import 'styles/login.css'

const Login = () => {
    const [formValues, setFormValues] = useState({});
    const { colors } = useColors()
    // ___ASSETS____
    const formAssets = [
        { label: "User Name", icon: BiUser, name: 'user_name' },
        { label: "Password", icon: BiLockOpenAlt, name: "password" }
    ]

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <Container padding={0} className={'login-container'}>
            <img src="https://images.pexels.com/photos/3685271/pexels-photo-3685271.jpeg" className='login-bg' />
            <form onSubmit={e => handleSubmit(e)} className='login-form dajc form-control '>
                <div className='inside-login-form dajc fc ' style={{ borderColor: colors?.textSecondary }}>
                    <div className='login-heading dajc'>
                        <div className='login-heading-relative' style={{ backgroundColor: colors?.iconColor }}>
                            <HeadingText style={{ color: "white" }}>Login Form</HeadingText>
                        </div>
                    </div>

                    {
                        formAssets?.map(res => <div key={res.name} className="dajc mt-3 login-form-sep-row" style={{ borderColor: colors?.textSecondary }}>
                            <Icon src={res.icon} />
                            <input className='login-input' name={res.name} onChange={e => handleChange(e)} />
                        </div>)
                    }
                    <button className='btn btn-success btn-sm fw-bold mt-3'>Submit</button>
                </div>
            </form>
        </Container >
    );
}

export default Login;
