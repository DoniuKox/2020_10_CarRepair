import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Register from './components/Register'
import RegisterWorkshop from './components/RegisterWorkshop'
import Login from './components/Login'
import Profile from './components/Profile'
import Timetable from './components/Timetable'
import UserCar from './components/UserCar'
import AddCar from './components/AddCar'
import WorkshopPage from './components/WorkshopPage';



class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
             <Navbar/>
             <Route exact path="/" component={Landing} />
               <div className="container">
                 <Route exact path="/register" component={Register} />
                 <Route exact path="/registerWorkshop" component={RegisterWorkshop} />
                 <Route exact path="/login" component={Login} />
                 <Route exact path="/profile" component={Profile} />
                 <Route exact path="/timetable" component={Timetable} />
                 <Route exact path="/usercar" component={UserCar} />
                 <Route exact path="/addcar" component={AddCar} />
                 <Route exact path="/workshoppage" component={WorkshopPage} />


               </div>
           </div>
       </Router>
    );
  }
}

export default App;
