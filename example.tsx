import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,  NavLink} from 'react-router-dom';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example'
import LayoutExample from './lib/layout/layout.example'
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import './example.scss';
// import logo from './logo.png'
import IconDemo from './lib/icon/icon.demo';
import {Icon} from "./lib";
import FormExample from "./lib/form/form.example";
import ScrollExample from "./lib/scroll/scroll.example";
import TreeExample from "./lib/tree/tree.example";


// const logo = require('./logo.png');
ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    {/*<img src={require('./logo.png').default} width="45" height="45" alt=""/>*/}
                    <Icon name="xue"/>
                    <span> RUI </span>
                </div>

            </Header>
            <Layout>
                <Aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">
                                Icon
                            </NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <NavLink to="/button">*/}
                        {/*        Button*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        <li>
                            <NavLink to="/dialog">
                                对话框
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">
                                布局
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">
                                表单
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/scroll">
                                滚动条
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/tree">
                                树型组件
                            </NavLink>
                        </li>

                    </ul>
                </Aside>
                <Content className="site-main">
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                    <Route path="/form" component={FormExample}/>
                    <Route path="/scroll" component={ScrollExample}/>
                    <Route path="/tree" component={TreeExample}/>

                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; Richard Hu
            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root'));