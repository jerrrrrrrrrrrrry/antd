import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Nav from '@/coms/nav.js'
import Api from '@/tool/api.js'
import Nav_2 from '@/coms/nav_2.js'


import Header from '@/coms/header'
import Banner from "@/coms/banner";
import Foot from "@/coms/foot";
import MyProfile from "@/coms/profile.js";

export default class Nava_2 extends Component {
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
        return (
            <div className="outer home">

                <Banner/>
                <Nav_2/>

            </div>
        )
    }
}