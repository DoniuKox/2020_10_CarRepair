import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phonenumber: '',
            workshop: '',
            addressline1: '',
            addressline2: '',
            city: '',
            country: '',
            postcode: '',
            name: '',
            fiscalid: ''
        }
    }

    componentDidMount(){
        let decoded = jwt_decode(localStorage.userToken)
        this.setState({
            email: decoded.email,
            firstname: decoded.firstname,
            lastname: decoded.lastname,
            phonenumber: decoded.phonenumber,
            workshop: decoded.workshop
        })
    }

    render() {
        const userProfil = (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">Profil kierowcy</h1>
                </div>
                <table className="table col-md-6 mx-auto">
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td>Imię</td>
                            <td>{this.state.firstname}</td>
                        </tr>
                        <tr>
                            <td>Nazwisko</td>
                            <td>{this.state.lastname}</td>
                        </tr>
                        <tr>
                            <td>Nr Telefonu</td>
                            <td>{this.state.phonenumber}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )

        const workshopProfil = (
            <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">Profil warsztatu - </h1>
                </div>
                <table className="table col-md-6 mx-auto">
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td>Imię</td>
                            <td>{this.state.firstname}</td>
                        </tr>
                        <tr>
                            <td>Nazwisko</td>
                            <td>{this.state.lastname}</td>
                        </tr>
                        <tr>
                            <td>Nr Telefonu</td>
                            <td>{this.state.phonenumber}</td>
                        </tr>
                        <tr>
                            <td>Adres cz.1</td>
                            <td>{this.state.addressline1}</td>
                        </tr>
                        <tr>
                            <td>Adres cz.2</td>
                            <td>{this.state.addressline2}</td>
                        </tr>
                        <tr>
                            <td>Miasto</td>
                            <td>{this.state.city}</td>
                        </tr>
                        <tr>
                            <td>Kraj</td>
                            <td>{this.state.country}</td>
                        </tr>
                        <tr>
                            <td>kod pocztowy</td>
                            <td>{this.state.postcode}</td>
                        </tr>
                        <tr>
                            <td>Nazwa</td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td>NIP</td>
                            <td>{this.state.fiscalid}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )
        return (
            <div>
            {this.state.workshop ? workshopProfil : userProfil}
            </div>
        )}
}

export default Profile