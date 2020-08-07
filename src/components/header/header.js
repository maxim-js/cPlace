import React, {Component} from 'react';
import './header.css';


export default class Header extends Component {

    render() {
      return (
      <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" >cPlace</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse navbar-group end">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" >About<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Support</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              City
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" >Иркутск</a>
              <a className="dropdown-item" >Москва</a>
              <a className="dropdown-item" >Калининград</a>
            </div>
          </li>
          <li className="nav-item dropdown language">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Language
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" >Русский</a>
              <a className="dropdown-item" >English</a>
            </div>
          </li>
          <li className="nav-item ">
            <div className="btn-group btn-group-style" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-light">Sign in</button>
              <button type="button" className="btn btn-link">Sign up</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>);
    }
}