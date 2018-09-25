import React, {Component} from 'react'
import {Row, Col} from 'antd';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {NavLink} from 'react-router-dom';
import logo from '@/image/logo.png';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

export default class Nav_2 extends Component {

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
            <div className="nav_2">
                <a href="http://www.alog.com/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=13"
                   className="hover">公司介绍</a><a
                href="http://www.alog.com/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=25">新闻动态</a><a
                href="http://www.alog.com/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=15">人才招聘</a><a
                href="http://www.alog.com/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=16">联系我们</a>
            </div>

        );
    }
}