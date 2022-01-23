import 'antd/dist/antd.css';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Users from './components/Users/Users';
import { initializeApp } from './redux/app-reducer';
import { AppStateType } from './redux/redux-store';
import { Layout, Skeleton } from 'antd';
import { Navbar } from './components/Navbar/Navbar';
import { BreadCrumb } from './components/Breadcrumb/BreadCrumb';

const { Content, Footer } = Layout;

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const Profile = React.lazy(() => import('./pages/Profile'));
const ChatPage = React.lazy(() => import('./pages/ChatPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));

const App: React.FC = () => {
    const initialized = useSelector((state: AppStateType) => state.app.initialized);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    const transitions = useTransition(location, {
        keys: (location) => location.pathname,
        from: { display: 'none', transform: 'scale(0.9)', opacity: 0 },
        enter: { display: 'block', transform: 'scale(1)', opacity: 1 },
        leave: { display: 'none' }
    });

    if (!initialized) {
        return <Preloader />;
    }

    return (
        <Layout style={{ height: '100vh', overflowX: 'hidden' }}>
            <Header />
            <Content style={{ height: '100%' }}>
                <Layout className="site-layout-background" style={{ minHeight: '100%' }}>
                    <Navbar />
                    <Content style={{ padding: '0 24px', minHeight: '100%' }}>
                        <BreadCrumb />
                        {transitions((props, item) => (
                            <animated.div style={props}>
                                <Suspense fallback={<Skeleton active paragraph={{ rows: 6 }} />}>
                                    <Switch location={item}>
                                        <Route exact path="/">
                                            <Redirect from="/" to="/profile" />
                                        </Route>
                                        <Route path="/dialogs">
                                            <Dialogs />
                                        </Route>
                                        <Route path="/profile/:userId?">
                                            <Profile />
                                        </Route>
                                        <Route path="/developers">
                                            <Users />
                                        </Route>
                                        <Route path="/login">
                                            <Login />
                                        </Route>
                                        <Route path="/chat">
                                            <ChatPage />
                                        </Route>
                                        <Route path="*">
                                            <ErrorPage />
                                        </Route>
                                    </Switch>
                                </Suspense>
                            </animated.div>
                        ))}
                        <Footer style={{ textAlign: 'center' }}>Sosial network 2022</Footer>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    );
};

export default App;
