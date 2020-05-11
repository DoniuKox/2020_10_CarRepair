import React, {Component} from 'react'



class Landing extends Component {
    render() {
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
              className="form-control"
              placeholder="Wyszukaj"
              />
            </div>
          </div>
          
        )
    }
}

export default Landing