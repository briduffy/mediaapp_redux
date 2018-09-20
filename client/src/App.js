import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import PostView from './components/PostView'
import NoMatch from './components/NoMatch'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/posts" component={Posts} />
    <Route exact path="/posts/:post" component={PostView} />
    <Route component={NoMatch} />
  </Switch>
)


export default App