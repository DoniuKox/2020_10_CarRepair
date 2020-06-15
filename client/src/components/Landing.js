import React, {Component} from 'react'
import {getWorkshops} from './WorkshopFunctions'
import {getOneWorkshop} from './WorkshopFunctions'
import { Link } from 'react-router-dom'


class Landing extends Component {
  constructor(){
    super()
    this.state = {
      workshops: [],
      search: ''
    }
}

onClick(e){

  const idWork = e.target.name

  getOneWorkshop(idWork)
}


  updateSearch(event){
    this.setState({search: event.target.value.substr(0,50)})
  }

  componentDidMount(){
    
    getWorkshops().then(res => {
      this.setState({
        workshops: res
    })})}


    render() {
      let filteredWorkshops = this.state.workshops
      var conditions = this.state.search.split(',')
      conditions = conditions.map(condition => condition.trim())

      conditions.forEach(con => {
        filteredWorkshops = filteredWorkshops.filter(
          (work) => {
  
            var resultSearch = 
            (work.name.toLowerCase().indexOf(con.toLowerCase()) !== -1) || 
            (work.fiscalid.toLowerCase().indexOf(con.toLowerCase()) !== -1) || 
            (work.city.toLowerCase().indexOf(con.toLowerCase()) !== -1) || 
            (work.country.toLowerCase().indexOf(con.toLowerCase()) !== -1)
            return resultSearch
          }
        )
      })
      

      const workshopProfil = (
        <div className="container">
                <h2 className="text">Warsztaty samochodowe</h2>

            {filteredWorkshops.map(workshop => (
        <div className="jumbotron mt-5">
                <h4 className="text">Warsztat {workshop.name}</h4>

              <table className="table col-md-6 mx-auto">
              <tbody>
                  <tr>
                      <td>Adres</td>
                      <td>{workshop.addressline1+" "+workshop.addressline2}, {workshop.city}, {workshop.postcode} | {workshop.country}</td>
                  </tr>
                  <tr>
                      <td>Kontakt</td>
                      <td>Telefon: {workshop.phonenumber} | Email: {workshop.email}</td>
                  </tr>
                  <tr>
                      <td>NIP</td>
                      <td>{workshop.fiscalid}</td>
                  </tr>
              </tbody>
              </table>
              <Link to="/workshoppage">
            <button  className="btn btn-primary center" name={workshop.idworkshop} onClick={this.onClick}>Umów wizytę!</button>
              </Link>
              </div>
            ))}
 
    </div>
    )
        return (
          
          <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
                <h1 className="text-center">Car Repair</h1>
              </div>
            </div>
            <div className="form-group">
              <label>Wyszukaj warsztat</label>
              <input type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
              className="form-control"
              placeholder="Wpisz nazwę warsztatu, miasto, kraj lub NIP"
              />
            </div>
            {filteredWorkshops.length>0 ? workshopProfil : <div className="text-center">Brak warsztatów do wyświetlenia o podanych kryteriach</div>}
          </div>

        )
    }
}

export default Landing