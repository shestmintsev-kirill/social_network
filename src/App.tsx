import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Users from './components/Users/Users';
import { initializeApp } from './redux/app-reducer';
import { AppStateType } from './redux/redux-store';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const App: React.FC = () => {
    const initialized = useSelector((state: AppStateType) => state.app.initialized);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!initialized) {
        return <Preloader />;
    }

    return (
        <Layout>
            <Header />
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>
                        <Link to="/profile">Home</Link>
                    </Breadcrumb.Item>
                    {history.location.pathname !== '/profile' && (
                        <Breadcrumb.Item>{history.location.pathname.replace('/', '')}</Breadcrumb.Item>
                    )}
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
                                <Menu.Item key="1">
                                    <Link to="/profile">Profile</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/dialogs">Messages</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                                <Menu.Item key="5">
                                    <Link to="/developers">Developers</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Suspense fallback={<Preloader />}>
                            <Switch>
                                <Route exact path="/">
                                    <Redirect from="/" to="/profile" />
                                </Route>
                                <Route path="/dialogs">
                                    <DialogsContainer />
                                </Route>
                                <Route path="/profile/:userId?">
                                    <ProfileContainer />
                                </Route>
                                <Route path="/developers">
                                    <Users />
                                </Route>
                                <Route path="/login">
                                    <Login />
                                </Route>
                                <Route path="*">
                                    <div>404 not found</div>
                                </Route>
                            </Switch>
                        </Suspense>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Sosial network 2022</Footer>
        </Layout>
    );
};

export default App;
