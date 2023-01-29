import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from 'views/login/Login';
import { getRole, LoginStore } from './store/login/loginStore';
import Dashboard from 'views/dashboard'
import AxiosInstance from 'service/AxiosInstance';
import useToast from 'customHooks/useToast';
import { Container, Header, Sidebar } from 'components';
import Profile from 'views/profile'
import Chat from "views/chat";
import Posts from "views/posts";

const App = () => {
  const { isLogin } = LoginStore.useState();
  const showToast = useToast();

  const isVerify = (token) => {
    AxiosInstance.get("/is-verify", {
      headers: {
        token: token,
      },
    })
      .then((res) => {
        AxiosInstance.defaults.headers["token"] = token;
        LoginStore.update((s) => {
          s.isLogin = true;
          s.userData = res;
        });
      })
      .catch((err) => {
        LoginStore.update((s) => {
          s.isLogin = false;
        });
        showToast(err);
        removeTokens();
      });
  };

  // ___REMOVE___TOKEN___
  const removeTokens = async () => {
    await localStorage.removeItem("token");
  };

  useLayoutEffect(() => {
    async function getInitialData() {
      let token = await localStorage.getItem("token");
      if (token !== null) {
        isVerify(token);
      }
    }
    getInitialData();
  }, []);

  useEffect(() => {
    getRole();
  }, []);
  return (
    <Container>
      <BrowserRouter>
        {isLogin ? (
          <>
            <Header />
            <Sidebar>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/posts" element={<Posts />} />
              </Routes>
            </Sidebar>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </Container>
  );
};

export default App;
