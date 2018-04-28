import * as React from 'react';

import {Breadcrumb, Layout} from 'antd';
import Icon from 'antd/es/icon';
import SubMenu from 'antd/es/menu/SubMenu';
import Menu from 'antd/lib/menu';
import {connect, Dispatch} from 'react-redux';
import {replace} from 'react-router-redux';
import {Container} from 'reactstrap';
import {AppState} from '../../../redux/AppState';
import {store} from '../../../redux/Store';
import {NavigationActions} from './LayoutActionReducer';

const {Header, Footer, Sider, Content} = Layout;

export interface Props {
    component: React.ComponentType<any>;
    collapsed: boolean;
    current: string;
    updateCollapsed: () => any;
    updateCurrentPageIndex: (index: string) => any;
}

const QuizLayout: React.SFC<Props> = (props) => {
    const {
        collapsed,
        component,
        updateCollapsed,
        updateCurrentPageIndex,
        current,
    } = props;

    function getComponent() {
        const GetComponent = component;
        return <GetComponent/>;
    }

    function goTo(key: string) {
        updateCurrentPageIndex(key);
        switch (key) {
            case'1':
                store.dispatch(replace('/home'));
                break;
        }
    }

    return <>
        <Layout style={{minHeight: '100vh'}}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={updateCollapsed}
            >
                <div className='logo'/>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode='inline'
                    theme='dark'
                    onClick={(e) => goTo(e.key)}
                    selectedKeys={[current]}
                >
                    <Menu.Item key='1'>
                        <Icon type='home'/>
                        <span>Home</span>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Icon type='desktop'/>
                        <span>Create Account</span>
                    </Menu.Item>
                    <Menu.Item key='4'>
                        <Icon type='inbox'/>
                        <span>View Houses</span>
                    </Menu.Item>
                    <SubMenu key='sub1' title={<span><Icon type='mail'/><span>Navigation One</span></span>}>
                        <Menu.Item key='5'>Option 5</Menu.Item>
                        <Menu.Item key='6'>Option 6</Menu.Item>
                        <Menu.Item key='7'>Option 7</Menu.Item>
                        <Menu.Item key='8'>Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub2' title={<span><Icon type='appstore'/><span>Navigation Two</span></span>}>
                        <Menu.Item key='9'>Option 9</Menu.Item>
                        <Menu.Item key='10'>Option 10</Menu.Item>
                        <SubMenu key='sub3' title='Submenu'>
                            <Menu.Item key='11'>Option 11</Menu.Item>
                            <Menu.Item key='12'>Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header>
                    <h1 className='nav-text'><i>rentr</i></h1>
                </Header>
                <Content style={{margin: '0 90px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Quiz</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='layout-container'>
                        <Container>
                            {getComponent()}
                        </Container>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    BullHack 2018 - Nik and Sam
                </Footer>
            </Layout>
        </Layout>
    </>
        ;
};

function mapStateToProps(state: AppState) {
    return {
        collapsed: state.navData.collapsed,
        current: state.navData.currentPageIndex,
    };
}

function mapDispatchToProps(dispatch: Dispatch<AppState>) {
    return {
        updateCollapsed: () => dispatch(NavigationActions.updateCollapsed()),
        updateCurrentPageIndex: (value: string) => dispatch(NavigationActions.updateCurrentPageIndex(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizLayout);
