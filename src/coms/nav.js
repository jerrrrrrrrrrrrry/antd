import React, {Component} from 'react'
import {Row, Col} from 'antd';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {NavLink} from 'react-router-dom';
import logo from '@/image/logo.png';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

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
                    <Col span={5}>
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                    </Col>
                    <Col span={14}>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            style={{lineHeight: '60px'}}
                            subMenuCloseDelay={0.1}
                            className="navmenu"
                        >
                            <Item className="gutter-box" key="setting:0">
                                <NavLink exact activeClassNmae="selected" to="/"><span>网站首页</span></NavLink>
                            </Item>
                            <SubMenu title={<span>关于我们</span>} className="gutter-box">
                                <Menu.Item key="setting:1"><NavLink exact activeClassNmae="selected" to="/test">公司简介</NavLink></Menu.Item>
                                <Menu.Item key="setting:2"><NavLink exact activeClassNmae="selected" to="/id=2">组织机构</NavLink></Menu.Item>
                                <Menu.Item key="setting:3"><NavLink exact activeClassNmae="selected" to="/id=3">市场地位</NavLink></Menu.Item>
                                <Menu.Item key="setting:4"><NavLink exact activeClassNmae="selected" to="/id=4">合作伙伴</NavLink></Menu.Item>
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
                                <Menu.Item key="setting:10">服务功能</Menu.Item>
                                <Menu.Item key="setting:11">解决方案</Menu.Item>
                                <Menu.Item key="setting:12">信息技术</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span>营销中心</span>} className="gutter-box">
                                <Menu.Item key="setting:13">物流基地</Menu.Item>
                                <Menu.Item key="setting:14">服务网络</Menu.Item>
                                <Menu.Item key="setting:15">托盘共用</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span>联系方式</span>} className="gutter-box">
                                <Menu.Item key="setting:16">联系方式</Menu.Item>
                                <Menu.Item key="setting:17">客户留言</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={3}>
                        <div className="phone">
                            <a href="#">上海</a>
                            |
                            <a href="#">021-60909966</a>
                        </div></Col>
                    <Col span={1}></Col>
                </Row>
            </div>

        );
    }
}