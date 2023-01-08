import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from 'views/login/Login';
import { LoginStore } from './store/login/loginStore';

const App = () => {
    const { isLogin } = LoginStore.useState();
    console.log('isLogin: ', isLogin);
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
