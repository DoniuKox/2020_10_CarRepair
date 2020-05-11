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
                    <div className="row">
                       <div className="col-md-6 mt-5 mx-auto">
                        <h1 className="text-center">Harmonogram pracy warsztatu samochodowego</h1>
                        <h1 className="text-center">{jwt_decode(localStorage.userToken).name}</h1>
                        
                            <div style={{'margin-top': '200px', display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
                                <ButtonGroup variant="contained" color="primary" size="large"> 
                                    <Button>Edytuj harmonogram</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>

        
    }

}

export default Timetable