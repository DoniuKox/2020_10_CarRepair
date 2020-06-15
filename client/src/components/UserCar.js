import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import jwt_decode from 'jwt-decode'
import {getcars} from './UserFunctions'


class UserCar extends Component {
    constructor(){
     super()
     this.state = {
        carsData: []
    }
       
}

componentDidMount(){
    let decodedUser = jwt_decode(localStorage.userToken)
    getcars(decodedUser.iduser).then(res => {
        this.setState({
            carsData: res
        })})}

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
                                {this.state.carsData.map(car => (
                                    <tr>
                                    <td>{car.name}</td>
                                    <td>{car.mark}</td>
                                    <td>{car.model}</td>
                                    <td>{car.plate}</td>
                                    <td>{car.numbervin}</td>
                                    <td><button  className="btn btn-primary btn-block">Sprawdź</button></td>
                                </tr>
                                ))}
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
                            {this.state.carsData.length>0 ? haveCars : dontHaveCars}
                            <div style={{'margin-top': '50px', display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
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