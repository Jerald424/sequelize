import { Button, Container, HeadingText, Icon, Loader, Para, SubHeading, Switch } from 'components';
import { useColors } from 'customHooks/ColorsHook';
import React, { useEffect, useRef, useState } from 'react';
import { BiLockOpenAlt, BiUser } from 'react-icons/bi';
import 'styles/login.css';
import SimpleValidator from 'simple-react-validator';
import AxiosInstance from 'service/AxiosInstance';
import useToast from 'customHooks/useToast';
import { LoginStore } from 'store/login/loginStore';

const Login = () => {
    const simpleValidator = useRef(new SimpleValidator());
    const [, forceUpdate] = useState()
    const { colors } = useColors();
    const showToast = useToast();

    const [formValues, setFormValues] = useState({});
    const [login, setLogin] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [roles, setRoles] = useState([]);
    const { isLogin, loader, userData } = LoginStore.useState()
    console.log(roles)
    // ___ASSETS____
    const formAssets = [
        { label: "User Name", icon: BiUser, name: 'user_name', validation: "required|min:2|max:20", placholder: "Enter user name" },
        { label: "Password", icon: BiLockOpenAlt, name: "password", validation: "required|min:2|max:20", placholder: "Enter password" }
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
            LoginStore.update(s => {
                s.loader = true
            })
            let data = formValues;
            roles?.filter(res => {
                if (admin && res?.name === 'admin') {
                    data['role_id'] = res.id
                } else if (!admin && res?.name === 'user') {
                    data['role_id'] = res?.id
                }
            })
            let url = login ? "sign-in" : "sign-up";
            AxiosInstance.post(`http://localhost:5000/api/${url}`, data)
                .then(res => {
                    showToast(res.message, 'success');
                    localStorage.setItem('token', res?.token)
                })
                .catch(err => showToast(err))
                .finally(_ => LoginStore.update(s => {
                    s.loader = false
                }))
        }

    };

    useEffect(() => {
        AxiosInstance.get("http://localhost:5000/api/role")
            .then(res => setRoles(res?.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container padding={0} className={'login-container'}>
            <img src="https://images.pexels.com/photos/3685271/pexels-photo-3685271.jpeg" className='login-bg' />
            <form onSubmit={e => handleSubmit(e)} className='login-form dajc form-control '>
                <div className='inside-login-form  fc' style={{ borderColor: colors?.textSecondary }}>
                    <div className='login-heading dajc'>
                        <div className='login-heading-relative' style={{ backgroundColor: colors?.iconColor }}>
                            <HeadingText style={{ color: "white" }}>{login ? "Login Form" : "Signup Form"}</HeadingText>
                        </div>
                    </div>
                    {
                        formAssets?.map(res => <> <div key={res.name} className="dajc mt-3 login-form-sep-row" style={{ borderColor: colors?.textSecondary }}>
                            <Icon src={res.icon} />
                            <input placeholder={res?.placholder} className='login-input' name={res.name} onChange={e => handleChange(e)} />
                        </div>
                            <span className='login-error'>{simpleValidator.current.message(res?.name, formValues[res?.name], res?.validation)}</span>
                        </>)
                    }
                    <div className='daj mt-3 '>
                        <div className='dajc'>
                            <input id='admin' value={admin} onChange={() => setAdmin(!admin)} type='checkbox' className='me-2 form-check-input' />
                            <label htmlFor='admin'>
                                <Para>Admin?</Para>
                            </label>
                        </div>
                        {/* <button type='submit' className='btn btn-success btn-sm fw-bold'>{login ? "Login" : "SignUp"}</button> */}
                        <Button style={{ minWidth: "60px", minHeight: "30px" }} showText={!loader} btnLoading={loader} type="submit">{login ? "Login" : "SignUp"}</Button>
                    </div>
                    <Para onClick={() => setLogin(!login)} className="sign-in-button mt-4">{login ? "No Account Signup" : "Already Account Log in ?"}</Para>
                </div>
            </form>
        </Container >
    );
}

export default Login;
