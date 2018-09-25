import React, {Component} from 'react';
import {Carousel, Col, Row} from 'antd';
import cainiao from '@/image/cainiao.png';
import today from '@/image/today.png';

export default class Partners extends Component {


    render() {
        return (
            <div className="partners">
                <Row>
                    <Col span={2}></Col>
                    <h3>合作伙伴</h3>
                </Row>
                <Carousel autoplay className="car_par">
                    <div>
                        <div className="partners_first">
                            <Row>
                                <Col span={2}></Col>
                                <div>
                                    <img src={cainiao} alt="cainiao"/>
                                </div>
                                <Col span={1}></Col>
                            </Row>
                        </div>
                        <div className="partners_first">
                            <Row>
                                <Col span={2}></Col>
                                <div>
                                    <img src={today} alt="today"/>
                                </div>
                                <Col span={1}></Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <div className="partners_first">
                            <Row>
                                <Col span={2}></Col>
                                <div>
                                    <img src={cainiao} alt="cainiao"/>
                                </div>
                                <Col span={1}></Col>
                            </Row>
                        </div>
                        <div className="partners_first">
                            <Row>
                                <Col span={2}></Col>
                                <div>
                                    <img src={today} alt="today"/>
                                </div>
                                <Col span={1}></Col>
                            </Row>
                        </div>
                    </div>
                </Carousel>
            </div>
        );

    }
}