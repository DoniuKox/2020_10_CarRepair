import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import jwt_decode from 'jwt-decode'
import {getcars} from './UserFunctions'


class UserCar extends Component {
    constructor(){
     super()
     this.state = {
        carsData: [],
        name: '',
        mark: '',
        model: '',
        plate: '',
        numbervin: '' 
    }
       
}

componentDidMount(){
    let decodedUser = jwt_decode(localStorage.userToken)
    getcars(decodedUser.iduser)
    if(localStorage.carsToken){
    let decoded = jwt_decode(localStorage.carsToken)
    this.setState({
        carsData: decoded,
        name: decoded.name,
        mark: decoded.mark,
        model: decoded.model,
        plate: decoded.plate,
        numbervin: decoded.numbervin 
    });
    }


            
}

    render() {

        const haveCars = (
                        <table className="table col-md-6 mx-auto">
                            <tbody>
                                <tr>
                                    <td>Nazwa</td>
                                    <td>Marka</td>
                                    <td>Model</td>
                                    <td>Nr rejestracji</td>
                                    <td>Nr VIN</td>
                                    <td>Historia napraw</td>
                                </tr>
                                <tr>
                                    <td>{this.state.name}</td>
                                    <td>{this.state.mark}</td>
                                    <td>{this.state.model}</td>
                                    <td>{this.state.plate}</td>
                                    <td>{this.state.numbervin}</td>
                                    <td><button  className="btn btn-primary btn-block">Sprawdź</button></td>
                                </tr>
                            </tbody>
                        </table>
        )

        const dontHaveCars = (
            <div>
                <p>Nie posiadasz jeszcze żadnych pojazdów.</p>
                <p>Dodaj teraz!</p>
            </div>
        )

        return <div className="container">
                    <div className="jumbotron mt-5">
                       <div className="col-sm-10 mx-auto">
                            <h1 className="text-center">Moje pojazdy</h1>
                            <p></p>
                            {localStorage.carsToken ? haveCars : dontHaveCars}
                            <div style={{'margin-top': '200px', display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
                                <ButtonGroup variant="contained" color="primary" size="large"> 
                                    <Button href="/addcar">Dodaj pojazd</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>

        
    }

}

export default UserCar