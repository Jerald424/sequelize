import { Container, HeadingText, Icon, Para, SubHeading, Switch } from 'components';
import { useColors } from 'customHooks/ColorsHook';
import React, { useEffect, useRef, useState } from 'react';
import { BiLockOpenAlt, BiUser } from 'react-icons/bi';
import 'styles/login.css';
import SimpleValidator from 'simple-react-validator';
import AxiosInstance from 'service/AxiosInstance';

const Login = () => {
    const simpleValidator = useRef(new SimpleValidator());
    const [, forceUpdate] = useState()
    const [formValues, setFormValues] = useState({});
    const { colors } = useColors();
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('user')

    const [login, setLogin] = useState(true)
    // ___ASSETS____
    const formAssets = [
        { label: "User Name", icon: BiUser, name: 'user_name', validation: "required|min:2|max:20" },
        { label: "Password", icon: BiLockOpenAlt, name: "password", validation: "required|min:2|max:20" }
    ]

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formValid = simpleValidator.current.allValid();
        if (!formValid) {
            simpleValidator.current.showMessages();
            forceUpdate(1)
        } else {
            let url = login ? "sign-in" : "sign-up";
            AxiosInstance.post(`http://localhost:5000/api/${url}`, formValues)
                .then(res => console.log('res', res))
                .catch(err => console.log('err', err))
        }

    }

    useEffect(() => {
        AxiosInstance.get('http://localhost:5000/api/role')
            .then(res => {
                setRoles(res?.data)
            })
            .catch(err => console.log('err', err))
    }, []);
    return (
        <Container padding={0} className={'login-container'}>
            <img src="https://images.pexels.com/photos/3685271/pexels-photo-3685271.jpeg" className='login-bg' />
            <form onSubmit={e => handleSubmit(e)} className='login-form dajc form-control '>
                <div className='inside-login-form dajc fc ' style={{ borderColor: colors?.textSecondary }}>
                    <div className='login-heading dajc'>
                        <div className='login-heading-relative' style={{ backgroundColor: colors?.iconColor }}>
                            <HeadingText style={{ color: "white" }}>{login ? "Login Form" : "Signup Form"}</HeadingText>
                        </div>
                    </div>
                    {
                        formAssets?.map(res => <> <div key={res.name} className="dajc mt-3 login-form-sep-row" style={{ borderColor: colors?.textSecondary }}>
                            <Icon src={res.icon} />
                            <input className='login-input' name={res.name} onChange={e => handleChange(e)} />
                        </div>
                            <span className='login-error'>{simpleValidator.current.message(res?.name, formValues[res?.name], res?.validation)}</span>
                        </>)
                    }
                    <div className='dajc'>

                    </div>
                    <button type='submit' className='btn btn-success btn-sm fw-bold mt-3'>{login ? "Login" : "SignUp"}</button>
                    <Para onClick={() => setLogin(!login)} className="sign-in-button mt-4">{login ? "No Account Signup" : "Already Account Log in ?"}</Para>
                </div>
            </form>
        </Container >
    );
}

export default Login;
