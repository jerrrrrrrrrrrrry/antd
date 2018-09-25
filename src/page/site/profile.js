import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Nav from '@/coms/nav.js'
import Api from '@/tool/api.js'
import Nav_2 from '@/coms/nav_2.js'


import Header from '@/coms/header'
import Banner from "@/coms/banner";
import Foot from "../../coms/foot";

export default class Profile extends Component {
    constructor (props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount () {
        this.getData()
    }

    getData () {
        Api.get('topics', null, r => {
            this.setState({list: r.data})
        })
    }

    render () {
        let { list } = this.state
        let dom = null
        if (list.length !== 0) {
            let listDom = list.map((i, k) => {
                return (
                    <li key={k}><Link to={`/details/${i.id}`}>{i.title}</Link></li>
                )
            })
            dom = (
                <div className='tipics_list'>
                    <ul>{listDom}</ul>
                </div>
            )
        }
        return (
            <div className="outer home">
                {/* 我们像用 html 标签一样，使用我们的自定义组件，并通过标签的方式，传值 */}
                <Nav></Nav>
                <Banner/>
                <Nav_2></Nav_2>

                <Foot/>

                {/*<Header title='网站首页'></Header>
                {dom}*/}
            </div>
        )
    }
}