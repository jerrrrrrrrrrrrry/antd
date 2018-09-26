import React, {Component} from 'react'
import {Row, Col} from 'antd';
import {Menu} from "antd/lib/menu";
import {NavLink} from "react-router-dom";
import phone from '@/image/phone.png';
import {Breadcrumb} from 'antd';
import profileimg from '@/image/profile.png';

export default class MyProfile extends Component {
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
            <div className="profile">
                <Row>
                    <Col offset={2}>
                        <img src={profileimg}/>
                    </Col>
                </Row>


            </div>

        );
    }


}