"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var antd_1 = require("antd");
var icon_1 = require("antd/es/icon");
var SubMenu_1 = require("antd/es/menu/SubMenu");
var menu_1 = require("antd/lib/menu");
var react_redux_1 = require("react-redux");
var react_router_redux_1 = require("react-router-redux");
var reactstrap_1 = require("reactstrap");
var Store_1 = require("../../../redux/Store");
var QuizLayoutActionReducer_1 = require("./LayoutActionReducer");
var Header = antd_1.Layout.Header, Footer = antd_1.Layout.Footer, Sider = antd_1.Layout.Sider, Content = antd_1.Layout.Content;
var QuizLayout = function (props) {
    var collapsed = props.collapsed, quizComponent = props.component, updateCollapsed = props.updateCollapsed, updateCurrentPageIndex = props.updateCurrentPageIndex, current = props.current;
    function getComponent() {
        var QuizComponent = quizComponent;
        return <QuizComponent />;
    }
    function goTo(key) {
        updateCurrentPageIndex(key);
        switch (key) {
            case '1':
                Store_1.store.dispatch(react_router_redux_1.replace('/login'));
                break;
            case '2':
                Store_1.store.dispatch(react_router_redux_1.replace('/create-account'));
                break;
            case '3':
                Store_1.store.dispatch(react_router_redux_1.replace('/create-quiz'));
                break;
            case '4':
                Store_1.store.dispatch(react_router_redux_1.replace('/quiz'));
                break;
        }
    }
    return <>
        <antd_1.Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={updateCollapsed}>
                <div className='logo'/>
                <menu_1.default defaultSelectedKeys={['1']} mode='inline' theme='dark' onClick={function (e) { return goTo(e.key); }} selectedKeys={[current]}>
                    <menu_1.default.Item key='1'>
                        <icon_1.default type='home'/>
                        <span>Login</span>
                    </menu_1.default.Item>
                    <menu_1.default.Item key='2'>
                        <icon_1.default type='desktop'/>
                        <span>Create Account</span>
                    </menu_1.default.Item>
                    <menu_1.default.Item key='3'>
                        <icon_1.default type='inbox'/>
                        <span>Create Quiz</span>
                    </menu_1.default.Item>
                    <menu_1.default.Item key='4'>
                        <icon_1.default type='inbox'/>
                        <span>Quiz</span>
                    </menu_1.default.Item>
                    <SubMenu_1.default key='sub1' title={<span><icon_1.default type='mail'/><span>Navigation One</span></span>}>
                        <menu_1.default.Item key='5'>Option 5</menu_1.default.Item>
                        <menu_1.default.Item key='6'>Option 6</menu_1.default.Item>
                        <menu_1.default.Item key='7'>Option 7</menu_1.default.Item>
                        <menu_1.default.Item key='8'>Option 8</menu_1.default.Item>
                    </SubMenu_1.default>
                    <SubMenu_1.default key='sub2' title={<span><icon_1.default type='appstore'/><span>Navigation Two</span></span>}>
                        <menu_1.default.Item key='9'>Option 9</menu_1.default.Item>
                        <menu_1.default.Item key='10'>Option 10</menu_1.default.Item>
                        <SubMenu_1.default key='sub3' title='Submenu'>
                            <menu_1.default.Item key='11'>Option 11</menu_1.default.Item>
                            <menu_1.default.Item key='12'>Option 12</menu_1.default.Item>
                        </SubMenu_1.default>
                    </SubMenu_1.default>
                </menu_1.default>
            </Sider>
            <antd_1.Layout>
                <Header>
                    <h1 className='nav-text'><i>uquiz</i></h1>
                </Header>
                <Content style={{ margin: '0 90px' }}>
                    <antd_1.Breadcrumb style={{ margin: '16px 0' }}>
                        <antd_1.Breadcrumb.Item>Home</antd_1.Breadcrumb.Item>
                        <antd_1.Breadcrumb.Item>Quiz</antd_1.Breadcrumb.Item>
                    </antd_1.Breadcrumb>
                    <div className='layout-container'>
                        <reactstrap_1.Container>
                            {getComponent()}
                        </reactstrap_1.Container>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Created by Nik Mouzourides 2018
                </Footer>
            </antd_1.Layout>
        </antd_1.Layout>
    </>;
};
function mapStateToProps(state) {
    return {
        collapsed: state.navData.collapsed,
        current: state.navData.currentPageIndex,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        updateCollapsed: function () { return dispatch(QuizLayoutActionReducer_1.NavigationActions.updateCollapsed()); },
        updateCurrentPageIndex: function (value) { return dispatch(QuizLayoutActionReducer_1.NavigationActions.updateCurrentPageIndex(value)); },
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(QuizLayout);
