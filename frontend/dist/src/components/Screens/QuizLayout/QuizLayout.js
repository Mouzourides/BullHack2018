import * as React from 'react';
import { Breadcrumb, Layout } from 'antd';
import Icon from 'antd/es/icon';
import SubMenu from 'antd/es/menu/SubMenu';
import Menu from 'antd/lib/menu';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { Container } from 'reactstrap';
import { store } from '../../../redux/Store';
import { NavigationActions } from './QuizLayoutActionReducer';
var Header = Layout.Header, Footer = Layout.Footer, Sider = Layout.Sider, Content = Layout.Content;
var QuizLayout = function (props) {
    var collapsed = props.collapsed, quizComponent = props.component, updateCollapsed = props.updateCollapsed, updateCurrentPageIndex = props.updateCurrentPageIndex, current = props.current;
    function getComponent() {
        var QuizComponent = quizComponent;
        return React.createElement(QuizComponent, null);
    }
    function goTo(key) {
        updateCurrentPageIndex(key);
        switch (key) {
            case '1':
                store.dispatch(replace('/login'));
                break;
            case '2':
                store.dispatch(replace('/create-account'));
                break;
            case '3':
                store.dispatch(replace('/create-quiz'));
                break;
            case '4':
                store.dispatch(replace('/quiz'));
                break;
        }
    }
    return React.createElement(React.Fragment, null,
        React.createElement(Layout, { style: { minHeight: '100vh' } },
            React.createElement(Sider, { collapsible: true, collapsed: collapsed, onCollapse: updateCollapsed },
                React.createElement("div", { className: 'logo' }),
                React.createElement(Menu, { defaultSelectedKeys: ['1'], mode: 'inline', theme: 'dark', onClick: function (e) { return goTo(e.key); }, selectedKeys: [current] },
                    React.createElement(Menu.Item, { key: '1' },
                        React.createElement(Icon, { type: 'home' }),
                        React.createElement("span", null, "Login")),
                    React.createElement(Menu.Item, { key: '2' },
                        React.createElement(Icon, { type: 'desktop' }),
                        React.createElement("span", null, "Create Account")),
                    React.createElement(Menu.Item, { key: '3' },
                        React.createElement(Icon, { type: 'inbox' }),
                        React.createElement("span", null, "Create Quiz")),
                    React.createElement(Menu.Item, { key: '4' },
                        React.createElement(Icon, { type: 'inbox' }),
                        React.createElement("span", null, "Quiz")),
                    React.createElement(SubMenu, { key: 'sub1', title: React.createElement("span", null,
                            React.createElement(Icon, { type: 'mail' }),
                            React.createElement("span", null, "Navigation One")) },
                        React.createElement(Menu.Item, { key: '5' }, "Option 5"),
                        React.createElement(Menu.Item, { key: '6' }, "Option 6"),
                        React.createElement(Menu.Item, { key: '7' }, "Option 7"),
                        React.createElement(Menu.Item, { key: '8' }, "Option 8")),
                    React.createElement(SubMenu, { key: 'sub2', title: React.createElement("span", null,
                            React.createElement(Icon, { type: 'appstore' }),
                            React.createElement("span", null, "Navigation Two")) },
                        React.createElement(Menu.Item, { key: '9' }, "Option 9"),
                        React.createElement(Menu.Item, { key: '10' }, "Option 10"),
                        React.createElement(SubMenu, { key: 'sub3', title: 'Submenu' },
                            React.createElement(Menu.Item, { key: '11' }, "Option 11"),
                            React.createElement(Menu.Item, { key: '12' }, "Option 12"))))),
            React.createElement(Layout, null,
                React.createElement(Header, null,
                    React.createElement("h1", { className: 'nav-text' },
                        React.createElement("i", null, "uquiz"))),
                React.createElement(Content, { style: { margin: '0 90px' } },
                    React.createElement(Breadcrumb, { style: { margin: '16px 0' } },
                        React.createElement(Breadcrumb.Item, null, "Home"),
                        React.createElement(Breadcrumb.Item, null, "Quiz")),
                    React.createElement("div", { className: 'layout-container' },
                        React.createElement(Container, null, getComponent()))),
                React.createElement(Footer, { style: { textAlign: 'center' } }, "Created by Nik Mouzourides 2018"))));
};
function mapStateToProps(state) {
    return {
        collapsed: state.navData.collapsed,
        current: state.navData.currentPageIndex,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        updateCollapsed: function () { return dispatch(NavigationActions.updateCollapsed()); },
        updateCurrentPageIndex: function (value) { return dispatch(NavigationActions.updateCurrentPageIndex(value)); },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizLayout);
//# sourceMappingURL=QuizLayout.js.map