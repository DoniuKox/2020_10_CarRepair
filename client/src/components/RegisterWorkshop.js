import React, {Component} from 'react'
import {registerWorkshop} from './UserFunctions'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


class RegisterWorkshop extends Component {
    constructor(){
     super()
     this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phonenumber: '',
        addressline1: '',
        addressline2: '',
        city: '',
        country: '',
        postcode: '',
        name: '',
        fiscalid: ''
     }  
     this.onChange = this.onChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this) 
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const workshop = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            phonenumber: this.state.phonenumber,
            addressline1: this.state.addressline1,
            addressline2: this.state.addressline2,
            city: this.state.city,
            country: this.state.country,
            postcode: this.state.postcode,
            name: this.state.name,
            fiscalid: this.state.fiscalid
        }

        registerWorkshop(workshop).then(res => {
            this.props.history.push('/login')
        })
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
                            <ButtonGroup variant="contained" color="primary" size="large"> 
                            <Button href="/register"color="default"> Jestem kierowcą</Button>
                            <Button>Jestem mechanikiem</Button>
                            </ButtonGroup>
                    </div>
                    <p></p>
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Zarejestruj warsztat samochodowy!</h1>
                        <div className="row">
                        <div className="col-sm">
                        <div className="form-group">
                                <label htmlFor="phonenumber">Nazwa Warsztatu</label>
                                <input type="text"
                                className="form-control"
                                name="name"
                                placeholder="Wpisz Nazwę Warsztatu"
                                defaultValue={this.state.name}
                                onChange={this.onChange}
                                />
                            </div>
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
                        </div>
                        <div className="col-sm">
                        <div className="form-group">
                                <label htmlFor="fiscalid">NIP</label>
                                <input type="text"
                                className="form-control"
                                name="fiscalid"
                                placeholder="Wpisz nr NIP"
                                defaultValue={this.state.fiscalid}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Adres - lina 1</label>
                                <input type="text"
                                className="form-control"
                                name="addressline1"
                                placeholder="Wpisz Adres cz.1"
                                defaultValue={this.state.addressline1}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Adres - linia 2</label>
                                <input type="text"
                                className="form-control"
                                name="addressline2"
                                placeholder="Wpisz Adres cz.2"
                                defaultValue={this.state.addressline2}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">Miasto</label>
                                <input type="text"
                                className="form-control"
                                name="city"
                                placeholder="Wpisz Miasto"
                                defaultValue={this.state.city}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Kraj</label>
                                <select type="text"
                                className="form-control"
                                name="country"
                                placeholder="Wybierz Kraj"
                                defaultValue={this.state.country}
                                onChange={this.onChange}>
                                    <option value="Austria">Austria</option>
                                    <option value="Belgia">Belgia</option>
                                    <option value="Bułgaria">Bułgaria</option>
                                    <option value="Chorwacja">Chorwacja</option>
                                    <option value="Cypr">Cypr</option>
                                    <option value="Czechy">Czechy</option>
                                    <option value="Dania">Dania</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Finlandia">Finlandia</option>
                                    <option value="Francja">Francja</option>
                                    <option value="Grecja">Grecja</option>
                                    <option value="Hiszpania">Hiszpania</option>
                                    <option value="Holandia">Holandia</option>
                                    <option value="Irlandia">Irlandia</option>
                                    <option value="Litwa">Litwa</option>
                                    <option value="Łotwa">Łotwa</option>
                                    <option value="Luksemburg">Luksemburg</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Niemcy">Niemcy</option>
                                    <option value="Polska">Polska</option>
                                    <option value="Portugalia">Portugalia</option>
                                    <option value="Rumunia">Rumunia</option>
                                    <option value="Słowacja">Słowacja</option>
                                    <option value="Słowenia">Słowenia</option>
                                    <option value="Szwecja">Szwecja</option>
                                    <option value="Węgry">Węgry</option>
                                    <option value="Włochy">Włochy</option>
                                </select>
                            </div>                        
                            <div className="form-group">
                                <label htmlFor="zipcode">Kod Pocztowy</label>
                                <input type="text"
                                className="form-control"
                                name="postcode"
                                placeholder="Wpisz Kod Pocztowy"
                                defaultValue={this.state.postcode}
                                onChange={this.onChange}
                                />
                            </div>
                        </div>
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

export default RegisterWorkshop