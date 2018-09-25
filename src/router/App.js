import React, {Component} from 'react'
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom'



import SiteIndex from '@/page/site/index'
import SiteDetails from '@/page/site/details'
import SiteTest from '@/page/site/test'
import SiteProfile from '@/page/site/profile'
import SiteNews from '@/page/site/news'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div>
                    <Switch>
                        <Route exact path='/' component={SiteIndex}/>
                        <Route exact path='/details/:id' component={SiteDetails}/>
                        <Route exact path='/test' component={SiteTest}/>
                        <Route exact path='/id=1' component={SiteProfile}/>
                        <Route exact path='/id=5' component={SiteNews}/>
                        <Route exact path='/id=6' component={SiteNews}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}