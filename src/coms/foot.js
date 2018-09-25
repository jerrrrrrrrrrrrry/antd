import React, {Component} from 'react'
import {Row, Col} from 'antd';
import {Menu} from "antd/lib/menu";
import {NavLink} from "react-router-dom";
import phone from '@/image/phone.png';
import {Breadcrumb} from 'antd';

export default class Foot extends Component {
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
            <div className="foot">
                <Row>
                    <Col span={10} offset={2}>
                        <div className="foot_nav">
                            <div className="tele">
                                <img src={phone} width="20px" height="auto"/>&emsp;
                                <span>招商热线：021-60909966</span>
                            </div>
                            <div>
                                <Breadcrumb>
                                    <Breadcrumb.Item><a href="">关于我们</a></Breadcrumb.Item>
                                    <Breadcrumb.Item><a href="">新闻资讯</a></Breadcrumb.Item>
                                    <Breadcrumb.Item><a href="">企业文化</a></Breadcrumb.Item>
                                    <Breadcrumb.Item><a href="">服务与技术</a></Breadcrumb.Item>
                                    <Breadcrumb.Item><a href="">营销中心</a></Breadcrumb.Item>
                                    <Breadcrumb.Item><a href="">联系方式</a></Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <span>地址：上海市徐汇区虹漕路448号现代物流大厦10楼</span>
                            <br/>
                            <span>邮箱：xxx@m56.com.cn</span>
                        </div>
                    </Col>
                    <Col span={10} offset={1}>
                        <div className="friendly_link">友情链接</div>
                    </Col>
                </Row>

            </div>

        );
    }


}