import React from 'react'
import ReactDOM from 'react-dom'
import '@/style/style.scss'
import '@/style/index.scss'
import App from './router/App'
import registerServiceWorker from './registerServiceWorker'

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('fetch-ie8');
require('babel-polyfill');

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()