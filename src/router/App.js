import React, {Component} from 'react'
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom'


import SiteIndex from '@/page/site/index'
import SiteDetails from '@/page/site/details'
import SiteTest from '@/page/site/test'
import SiteProfile from '@/page/site/profile'
import SiteNews from '@/page/site/news'
import SiteNav_2 from '@/page/site/nav_2'
import Nav from '@/coms/nav.js'
import Api from '@/tool/api.js'
import Partners from '@/coms/partners.js'
import Bussness from '@/coms/bussness.js'
import Banner from "@/coms/banner";
import Foot from "@/coms/foot";
import Nav_2 from '@/coms/nav_2.js'
import MyProfile from "@/coms/profile.js";
import News from '@/coms/news.js'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="outer home">
                    <Nav>
                        <Banner>
                            <Switch>
                                <Route exact path='/' component={SiteIndex}/>
                                <Route path="/nav_2" render={() =>
                                    <Nav_2>
                                        <Switch>
                                            <Route path="/nav_2/Profile" component={MyProfile}/>
                                            <Route path="/nav_2/News" component={News}/>
                                        </Switch>
                                    </Nav_2>
                                }>
                                </Route>
                            </Switch>
                        </Banner>
                    </Nav>
                    <Foot/>
                </div>
            </BrowserRouter>
        )
    }
}