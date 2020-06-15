import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Geocode from "react-geocode";


import { getOneWorkshop} from './WorkshopFunctions'

class WorkshopPage extends Component {
  constructor(){
    super()
    this.state = {
        email: '',
        firstname: '',
        lastname: '',
        phonenumber: '',
        workshop: '',
        addressline1: '',
        addressline2: '',
        city: '',
        country: '',
        postcode: '',
        name: '',
        fiscalid: '',
        lat1: 51.088762,
        lng1: 17.044807
    }
}

componentDidMount(){

  let decoded = jwt_decode(localStorage.oneWorkshop)
     this.setState({
         email: decoded.email,
         firstname: decoded.firstname,
         lastname: decoded.lastname,
         phonenumber: decoded.phonenumber,
         workshop: decoded.workshop,
         addressline1: decoded.addressline1,
         addressline2: decoded.addressline2,
         city: decoded.city,
         country: decoded.country,
         postcode: decoded.postcode,
         name: decoded.name,
         fiscalid: decoded.fiscalid
     })
  
     Geocode.setApiKey("AIzaSyA_abQ6TICXxU8y7EFsxgs9wuR1NAsz_c0");
     Geocode.setLanguage("pl");
     Geocode.setRegion("pl");
     Geocode.fromAddress(this.state.addressline1+" "+this.state.city).then(
       response => {
         const { lat, lng } = response.results[0].geometry.location;
         this.setState({
           lat1: lat,
           lng1: lng
         })
         console.log(lat, lng);
       },
       error => {
         console.error(error);
       }
     );
}


render() {
  const mapStyles = {
    width: '59%',
    height: '80%',
  };
    const workshopProfil = (
        <div className="container">
        <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
                <h1 className="text-center">Warsztat {this.state.name}</h1>
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
                        <td>Adres</td>
                        <td>{this.state.addressline1+" "+this.state.addressline2}</td>
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
                        <td>Kod pocztowy</td>
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
        {workshopProfil}
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: this.state.lat1, lng: this.state.lng1}}
        >
          <Marker
            position={{
              lat: this.state.lat1,
              lng: this.state.lng1
            }}

            name={this.state.name}
          />
          </Map>
        </div>
        
    )}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA_abQ6TICXxU8y7EFsxgs9wuR1NAsz_c0'
})(WorkshopPage);