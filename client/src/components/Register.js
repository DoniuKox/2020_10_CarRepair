import React, {Component} from 'react'
import {register} from './UserFunctions'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Register extends Component {
    constructor(){
     super()
     this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phonenumber: ''
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
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            phonenumber: this.state.phonenumber,
        }

        register(user).then(res => {
            if(res){
                this.props.history.push('/login')
            }
        })
    }

    

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
                        <ButtonGroup variant="contained" color="primary" size="large"> 
                        <Button> Jestem kierowcą</Button>
                        <Button href="/registerWorkshop"color="default">Jestem mechanikiem</Button>
                    </ButtonGroup>
                </div>
                <p></p>
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Zarejestruj się!</h1>
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
                            <label htmlFor="firstname">Imię</label>
                            <input type="text"
                            className="form-control"
                            name="firstname"
                            placeholder="Wpisz Imię"
                            defaultValue={this.state.firstname}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Nazwisko</label>
                            <input type="text"
                            className="form-control"
                            name="lastname"
                            placeholder="Wpisz Nazwisko"
                            defaultValue={this.state.lastname}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Hasło</label>
                            <input type="password"
                            className="form-control"
                            name="password"
                            placeholder="Wpisz Hasło"
                            defaultValue={this.state.password}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phonenumber">Numer Telefonu</label>
                            <input type="text"
                            className="form-control"
                            name="phonenumber"
                            placeholder="Wpisz nr Telefonu"
                            defaultValue={this.state.phonenumber}
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

export default Register