import React, {Component} from 'react'
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom'

import SiteIndex from '@/page/site/index'
import SiteDetails from '@/page/site/details'
import SiteTest from '@/page/site/test'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div>
                    <Switch>
                        <Route exact path='/' component={SiteIndex}/>
                        <Route exact path='/details/:id' component={SiteDetails}/>
                        <Route exact path='/test' component={SiteTest}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}