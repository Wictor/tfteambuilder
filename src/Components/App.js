import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import { Nav } from './Nav-components/Nav'

class App extends React.Component {

    render () {
        return (
            <Router>
                <Nav />
                <Route exact path="/" component={ Home } />
            </Router>
        )
    }
}

export default App
