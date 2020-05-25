import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import {addcar} from './UserFunctions'

class AddCar extends Component {
    constructor(){
     super()
     this.state = {
        name: '',
        mark: '',
        model: '',
        plate: '',
        numbervin: '',
        iduser: ''
     }  
     this.onChange = this.onChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this) 
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        let decodedUser = jwt_decode(localStorage.userToken)

        if(this.state.name !== '' & this.state.mark !== '' & this.state.model !== '' & this.state.plate !== '' & this.state.numbervin !== ''){
        const car = {
            name: this.state.name,
            mark: this.state.mark,
            model: this.state.model,
            plate: this.state.plate,
            numbervin: this.state.numbervin,
            iduser: decodedUser.iduser
        }

        addcar(car).then(res => {
            if(res){
                this.props.history.push('/usercar')
            }
        })
    }
    }

    

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Nowy samochód</h1>
                        <div className="form-group">
                            <label htmlFor="name">Nazwa</label>
                            <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Wpisz Nazwę"
                            defaultValue={this.state.name}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mark">Marka</label>
                            <input type="text"
                            className="form-control"
                            name="mark"
                            placeholder="Wpisz Markę"
                            defaultValue={this.state.mark}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="model">Model</label>
                            <input type="text"
                            className="form-control"
                            name="model"
                            placeholder="Wpisz Model"
                            defaultValue={this.state.model}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="plate">Nr Tablicy Rejestracyjnej</label>
                            <input type="text"
                            className="form-control"
                            name="plate"
                            placeholder="Wpisz nr Tablicy Rejestracyjnej"
                            defaultValue={this.state.plate}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phonenumber">Numer VIN</label>
                            <input type="text"
                            className="form-control"
                            name="numbervin"
                            placeholder="Wpisz nr VIN"
                            defaultValue={this.state.numbervin}
                            onChange={this.onChange}
                            />
                        </div>
                        <button type="submit"
                        className="btn btn-lg btn-primary btn-block">
                            Dodaj
                        </button>
                        <button className="btn btn-lg btn-primary btn-block" href="/usercar">Anuluj</button>
                    </form>
                </div>
            </div>
        </div>
        
    }

}

export default AddCar