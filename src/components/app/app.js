import React, {Component} from 'react';
import Header from '../header/header.js';
import Preview from '../preview/preview.js'
import ItemsDisplay from '../items__display/items__display.js'
import Tuning from '../tuning/tuning.js'
import './app.css';


export default class App extends Component {

    render() {
      return (
      <div className="container">
        <Header/>
        <Preview/>
        <div className="main__flexbox">
          <ItemsDisplay/>
          <Tuning/>
        </div>

      </div>
      );
    }
}