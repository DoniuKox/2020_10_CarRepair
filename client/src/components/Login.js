import React, {Component} from 'react'
import {login} from './UserFunctions'

class Login extends Component {
    constructor(){
     super()
     this.state = {
         email: '',
         password: ''
     }  
     this.onChange = this.onChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this) 
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(res) {
                this.props.history.push('/profile')
            }
        })
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Zaloguj się!</h1>
                        <div className="form-group">
                            <label htmlFor="email">Adres Email</label>
                            <input type="email"
                            className="form-control"
                            name="email"
                            placeholder="Wpisz Email"
                            defaultValue={this.state.email}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Hasło</label>
                            <input type="password"
                            className="form-control"
                            name="password"
                            placeholder="Wpisz Hasło"
                            defaultValue={this.state.password}
                            onChange={this.onChange}
                            />
                        </div>
                        <button type="submit"
                        className="btn btn-lg btn-primary btn-block">
                            Potwierdź
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    }

}

export default Login