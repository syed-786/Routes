import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='/about' component={About} />
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Title = () => (
  <h1>Hello from Title Component</h1>
)

const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)

const NamedComponents = (props) => (
	<div>
    {props.title}<br />
    {props.subTitle}
	</div>
)

const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/address'>Address</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Home = () => <h1>Hello from Home!</h1>

const Address = (props) => <div>
  <br />
  <Link to='/address'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'>Instagram Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

const About = () => <h3>Welcome to the About Page</h3>

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App



// const Nav = () => (
//   <div>
//     <IndexLink activeStyle={{color:'#53acff'}} to='/'>Home</IndexLink>&nbsp;
//     <IndexLink activeStyle={{color:'#53acff'}} to='/address'>Address</IndexLink>&nbsp;
//     <IndexLink activeStyle={{color:'#53acff'}} to='/about'>About</IndexLink>
//   </div>
// )



{/* <Route path='query' component={Query} /> */}
// const Query = (props) => (
//   <h2>{props.location.query.message}</h2>
// )

{/* <IndexLink activeClassName='active' to={{ pathname: '/address/query', query: { message: 'Hello from Route Query' } }}>Route Query</IndexLink> */}