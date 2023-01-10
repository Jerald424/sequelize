import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from 'views/login/Login';
import { LoginStore } from './store/login/loginStore';

const App = () => {
    const { isLogin } = LoginStore.useState();

    useLayoutEffect(() => {
        async function getInitialData() {
            let token = await localStorage.getItem('token')
            if (token !== null) {
                LoginStore.update(s => {
                    s.isLogin = true
                })
            }
        }
        getInitialData()
    }, [])
    return (
        <BrowserRouter>
            {
                isLogin ?
                    <Routes>
                    </Routes> :
                    <Routes>
                        <Route path='/' element={<Login />} />
                    </Routes>
            }
        </BrowserRouter>
    );
}

export default App;
