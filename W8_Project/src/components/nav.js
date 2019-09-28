import React from 'react'
import {Route, BrowserRouter, Link } from "react-router-dom";
import Info from './Info'
import Tariff from './Tariff'


class Nav extends React.Component{
    render(){
    return (

        <BrowserRouter>
        <React.Fragment>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/Info">Book a BIKE</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/Tariff">Tariff<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Features</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Pricing</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle navbar-brand" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Location
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="#">HSR Layout</Link>
          <Link className="dropdown-item" to="#">Koramangala</Link>
          <Link className="dropdown-item" to="#">Indiranagar</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>


<Route path="/Info" exact component={Info}></Route>
 <Route path="/Tariff" exact component={Tariff}></Route>
 {/* <Route path="/" exact component={Info}></Route>
 <Route path="/" exact component={Info}></Route> */}

        </div>
   
    </React.Fragment>
    </BrowserRouter>
    )

    }
}



export default Nav