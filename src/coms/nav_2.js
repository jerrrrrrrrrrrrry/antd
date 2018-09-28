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
            <div>
                <div className="nav_2">
                    <span>
                        <NavLink
                            exact to="/nav_2/Profile"
                            style={{
                                width: '250px',
                                decoration: 'none',
                                color: '#595757'
                            }}
                            activeStyle={{
                                textDecorationLine: 'none',
                                float: 'left',
                                display: 'block',
                                align: 'center',
                                width: '250px',
                                background: '#ed001b',
                                color: '#fff'
                            }}><div className="nav_2_1">公司介绍</div></NavLink>
                        </span>
                    <span>
                        <NavLink
                            exact to="/nav_2/News"
                            style={{
                                width: '250px',
                                decoration: 'none',
                                color: '#595757'
                            }}
                            activeStyle={{
                                textDecorationLine: 'none',
                                float: 'left',
                                display: 'block',
                                textalign: 'center',
                                width: '250px',
                                background: '#ed001b',
                                color: '#fff'
                            }}><div className="nav_2_1">企业新闻</div></NavLink>
                        </span>
                    <span>
                        <NavLink
                            exact to="/id=1"
                            style={{
                                width: '250px',
                                decoration: 'none',
                                color: '#595757'
                            }}
                            activeStyle={{
                                textDecorationLine: 'none',
                                float: 'left',
                                display: 'block',
                                textalign: 'center',
                                width: '250px',
                                background: '#ed001b',
                                color: '#fff'
                            }}><div className="nav_2_1">企业新闻</div></NavLink>
                        </span>
                    <span>
                        <NavLink
                            exact to="/id=1"
                            style={{
                                width: '250px',
                                decoration: 'none',
                                color: '#595757'
                            }}
                            activeStyle={{
                                textDecorationLine: 'none',
                                float: 'left',
                                display: 'block',
                                textalign: 'center',
                                width: '25%',
                                background: '#ed001b',
                                color: '#fff'
                            }}><div className="nav_2_1">企业新闻</div></NavLink>
                        </span>
                </div>
                {this.props.children}
            </div>


        );
    }
}