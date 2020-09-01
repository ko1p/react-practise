import React, {Component} from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import QuizList from './containers/QuizeList/QuizeList'
import {connect} from "react-redux";
import Logout from "./components/Logout/Logout";



class App extends Component {

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {

        let routes = (
            <Switch>
                <Route path='/auth' component={Auth} />
                <Route path='/quiz/:id' component={Quiz} />
                <Route path='/' component={QuizList} />
                <Redirect to="/" />
            </Switch>
        )

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path='/quiz-creator' component={QuizCreator} />
                    <Route path='/quiz/:id' component={Quiz} />
                    <Route path='/' component={QuizList} />
                    <Route path='/logout' component={Logout} />
                    <Redirect to="/" />
                </Switch>
            )
        }

        return (
          <Layout>
              { routes }
          </Layout>
        )
      }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps)(App))
