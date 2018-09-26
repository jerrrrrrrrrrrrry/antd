import React, {Component} from 'react'
import {Row, Col} from 'antd';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {NavLink} from 'react-router-dom';


export default class Nav_2 extends Component {
/*
    construction(props){
        this.state={
            hover: false,
        }
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter(){
        this.setState({
            hover: true,
        });
    }

    onMouseLeave(){
        this.setState({
            hover: false,
        })
    }*/

    render() {
        return (
            <div className="nav_2">
                <NavLink
                    exact to="/id=1"
                    activeStyle={{
                        backgroundcolor: '#81ed80',
                        color: '#ed001b'}}><span>公司介绍</span></NavLink>
                <NavLink exact to="/id=5"
                         activeStyle={{
                             background: '#81ed80',
                             color: '#ed001b'}}><span>企业新闻</span></NavLink>
                <NavLink exact to="/id=1"><span>公司介绍</span></NavLink>
                <NavLink exact to="/id=1"><span>公司介绍</span></NavLink>
            </div>

        );
    }
}