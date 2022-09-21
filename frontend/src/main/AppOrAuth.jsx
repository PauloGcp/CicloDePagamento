import '../common/template/dependencies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from './App'
import Auth from '../auth/Auth'
import { validateToken } from '../auth/authActions'

class AuthOrApp extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }
    render() {
        const { user, validToken } = this.props.auth
        //tenho um token valido que veio do back
        if (user && validToken) {
            //aplica-se o token ao header. Antes msm de renderizar a aplicação, garantimos que o campo de autorizção será enviado em todas as requisiçoes do axios
            axios.defaults.headers.common['authorization'] = user.token
            return <App>{this.props.children}</App>
        } else if (!user && !validToken) {
            return <Auth />
        } else {
            //nao renderiza nada. Fica num estado de loading esperando a validação do token
            return false
        }
    }
}
const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)

/* import '../common/template/dependencies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from './App'
import Auth from '../auth/Auth'
import { validateToken } from '../auth/authActions'
class AuthOrApp extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }
    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token
            return <App>{this.props.children}</App>
        } else if (!user && !validToken) {
            return <Auth />
        } else {
            return false
        }
    }
}
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },
    dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp) */