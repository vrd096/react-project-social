import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route } from 'react-router-dom'
import { initializeApp } from './redux/app-reducer'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader'
import { withSuspence } from './hoc/withSuspence'

const DialogsContainer = React.lazy(() =>
    import('./components/Dialogs/DialogsContainer')
)
const ProfileContainer = React.lazy(() =>
    import('./components/Profile/ProfileContainer')
)

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route
                        path="/dialogs"
                        render={withSuspence(DialogsContainer)}
                    />
                    <Route
                        path="/profile/:userId?"
                        render={withSuspence(ProfileContainer)}
                    />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <LoginPage />} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(connect(mapStateToProps, { initializeApp }))(App)
