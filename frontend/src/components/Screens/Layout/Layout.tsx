import * as React from 'react';

import {Breadcrumb, Layout} from 'antd';
import Icon from 'antd/es/icon';
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
                store.dispatch(replace('/view-houses'));
                break;
            case'2':
                store.dispatch(replace('/add-house'));
                break;
            case'3':
                store.dispatch(replace('/view-matches'));
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
                <Menu
                    defaultSelectedKeys={['1']}
                    mode='inline'
                    theme='dark'
                    onClick={(e) => goTo(e.key)}
                    selectedKeys={[current]}
                >
                    <Menu.Item key='1'>
                        <Icon type='home'/>
                        <span>View Houses</span>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Icon type='desktop'/>
                        <span>Add House</span>
                    </Menu.Item>
                    <Menu.Item key='3'>
                        <Icon type='inbox'/>
                        <span>View Matches</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header>
                    <h1 className='nav-text'><i>rentr</i></h1>
                </Header>
                <Content style={{margin: '0 90px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Rent</Breadcrumb.Item>
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
