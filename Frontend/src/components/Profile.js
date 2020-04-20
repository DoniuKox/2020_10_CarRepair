import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            phonenumber: ''
        }
    }

    componentDidMount(){
        const token = localStorage.customerToken
        const decoded = jwt_decode(token)
        this.setState({
            email: decoded.email,
            firstname: decoded.firstname,
            lastname: decoded.lastname,
            phonenumber: decoded.phonenumber
        })
    }

    render() {
        return (

        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">Profil</h1>
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
        )}
}

export default Profile