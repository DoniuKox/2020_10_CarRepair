import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import jwt_decode from 'jwt-decode'


class Timetable extends Component {
    constructor(){
     super()
     this.state = {
        //TODO
     }  
    }

    render() {
        return <div className="container">
                    <div className="jumbotron mt-5">
                       <div className="col-sm-8 mx-auto">
                            <h1 className="text-center">Moje pojazdy</h1>
                            <p></p>
                            <table className="table col-md-6 mx-auto">
                            <tbody>
                                <tr>
                                    <td>Nazwa</td>
                                    <td>Marka</td>
                                    <td>Model</td>
                                    <td>Nr rejestracji</td>
                                    <td>Nr VIN</td>
                                </tr>
                                <tr>
                                    <td>Czerwona strzała</td>
                                    <td>Opel</td>
                                    <td>Astra</td>
                                    <td>DW 225TR</td>
                                    <td>KEH73HD7104BFUY483</td>
                                </tr>
                            </tbody>
                            </table>
                            <div style={{'margin-top': '200px', display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
                                <ButtonGroup variant="contained" color="primary" size="large"> 
                                    <Button>Dodaj pojazd</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>

        
    }

}

export default Timetable