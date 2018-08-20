import React, {Component} from 'react'
import {Row, Col} from 'antd';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

const {Header, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


export default class Nav extends Component {

    state = {
        current: '',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (

            <div className="nav">
                <Row gutter={16} type="flex" justify="center">
                    <Col span={1}></Col>
                    <Col span={4}>
                        <div className="logo"/>
                    </Col>
                    <Col span={14}>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            style={{lineHeight: '80px'}}
                            subMenuCloseDelay={0.1}
                            className="navmenu"
                        >
                            <Menu.Item key="index">
                                网站首页
                            </Menu.Item>
                            <SubMenu title={<span>关于我们</span>} className="gutter-box">
                                <Menu.Item key="setting:1">公司简介</Menu.Item>
                                <Menu.Item key="setting:2">组织机构</Menu.Item>
                                <Menu.Item key="setting:3">市场地位</Menu.Item>
                                <Menu.Item key="setting:4">合作伙伴</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span>新闻资讯</span>} className="gutter-box">
                                <Menu.Item key="setting:5">企业新闻</Menu.Item>
                                <Menu.Item key="setting:6">经营动态</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span>企业文化</span>} className="gutter-box">
                                <Menu.Item key="setting:7">企业荣誉</Menu.Item>
                                <Menu.Item key="setting:8">发展前景</Menu.Item>
                                <Menu.Item key="setting:9">团队荣誉</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span>服务与技术</span>} className="gutter-box">
                                <Menu.Item key="setting:7">服务功能</Menu.Item>
                                <Menu.Item key="setting:8">解决方案</Menu.Item>
                                <Menu.Item key="setting:9">信息技术</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span>营销中心</span>} className="gutter-box">
                                <Menu.Item key="setting:7">物流基地</Menu.Item>
                                <Menu.Item key="setting:8">服务网络</Menu.Item>
                                <Menu.Item key="setting:9">托盘共用</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span>联系方式</span>} className="gutter-box">
                                <Menu.Item key="setting:5">联系方式</Menu.Item>
                                <Menu.Item key="setting:6">客户留言</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={1}></Col>
                </Row>
            </div>


        );
    }
}